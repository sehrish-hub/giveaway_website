const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// SQLite Database Setup
const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS entries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            dob TEXT NOT NULL,
            city TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )`, (err) => {
            if (err) {
                console.error('Error creating entries table:', err.message);
            } else {
                console.log('Entries table created or already exists.');
            }
        });
    }
});

// Route for submitting entries
app.post('/entries', (req, res) => {
    const { name, dob, city, email } = req.body;

    if (!name || !dob || !city || !email) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const stmt = db.prepare('INSERT INTO entries (name, dob, city, email) VALUES (?, ?, ?, ?)');
    stmt.run(name, dob, city, email, function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(409).json({ success: false, message: 'Email already registered. Each entry must be unique.' });
            }
            console.error('Error inserting entry:', err.message);
            return res.status(500).json({ success: false, message: 'Error submitting entry.' });
        }
        res.status(201).json({ success: true, message: 'Entry submitted successfully!', entryId: this.lastID });
    });
    stmt.finalize();
});

// Route for picking a winner
app.get('/winner', (req, res) => {
    db.all('SELECT name FROM entries', (err, rows) => {
        if (err) {
            console.error('Error fetching entries:', err.message);
            return res.status(500).json({ success: false, message: 'Error fetching entries.' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'No entries available to pick a winner.' });
        }

        const randomIndex = Math.floor(Math.random() * rows.length);
        const winner = rows[randomIndex].name;
        res.json({ success: true, winner: winner });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
