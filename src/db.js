const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

function insertLeadIntoDatabase(leadData) {
    const { lead } = leadData; // Assuming your lead data is structured appropriately
    const sql = `INSERT INTO leads (name, email, phone) VALUES (?, ?, ?)`;
    const values = [lead.name, lead.email, lead.phone];

    connection.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log('Lead data inserted into database:', result);
    });
}

module.exports = connection;
