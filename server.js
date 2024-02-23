const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3002; // Heroku tarafýndan saðlanan PORT veya yerelde 3002'yi kullan

const connection = mysql.createConnection({
    host: 'brflrxzq5tg82kflfbmv-mysql.services.clever-cloud.com',
    user: 'uqcw9bdlanbwc4sn',
    password: 'CP8ER0OfZj4xD01po2xJ',
    database: 'brflrxzq5tg82kflfbmv'
});

// CORS middleware
app.use(cors());

app.get('/api/menuler', (req, res) => {
    connection.query('SELECT * FROM menuler', (error, results, fields) => {
        if (error) {
            console.error('Error querying the database:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(results);
    });
});

// Heroku'da çalýþtýðýnýzda, aþaðýdaki kodu kullanarak dinamik olarak bir port seçin
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
