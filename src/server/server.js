const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const PORT = process.env.PORT || 3000;
const bcrypt = require('bcrypt');
app.use(bodyparser.json());
app.use(cors());

// Connecting Database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'websitefashion-pretyshop',
    port: 3306
});




// Rout

app.get( "/user" , async(req , res)=>{
  try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
    
})


// Register
app.post("/users" , async(req , res) =>{
    try {

        const { Fullname, Email, Username ,Password } = req.body;

        const [result] = await pool.query(
            `INSERT INTO users (Fullname, Email, Username , Password)
             VALUES (?, ?, ? , ?)`,
            [Fullname, Email, Username , Password]
        );

        res.json({
            message: "User created",
            id: result.insertId
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Insert failed" });
    }

})


// Login
app.post('/login', async (req, res) => {

    try {

        const { Username, Password } = req.body;

        const [users] = await pool.query(
            'SELECT * FROM users WHERE Username = ?',
            [Username]
        );

        if (users.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = users[0];

        if (user.Password !== Password) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        res.json({ message: 'Login success' });

    } catch (err) {

        console.log(err);

        res.status(500).json({ message: 'Server error' });
    }

});






// running
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}  `)
})
