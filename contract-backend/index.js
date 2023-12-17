const express = require('express');
const fetch = require('node-fetch');


// const cors = require('cors');

const app = express();

//middleware
// app.use(cors());
// app.use(express.json());


const mysql = require("mysql2/promise");

async function query(q) {
    const connection = await mysql.createConnection({
        host: 'db4free.net',
        user: 'snowtrace',
        password: 'rishit07',
        database: 'trsxn_detail',
        connectTimeout: 60000,
    }
    );
    let results = await connection.execute(q);
    console.log(results[0]);
}


//fetching transaction data using fetch api :
//https://api.routescan.io/v2/network/testnet/evm/43114/transactions/0xd494fb0387e934383e1ef652c24ee85f7c1171fd06b881328ab31e5dbb3eb648

const hash = "0x21a97dcffe30c82c5fb09df0a0b75446e2fcf4df1a2faff7e2741f49b6781c33";
const network = "testnet";
const chain_id = 43114;

const url = `https://api.routescan.io/v2/network/${network}/evm/${chain_id}/transactions/${hash}`;

const t_data = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);


        //convertin the timestamp in data object to suitable format for storing in mysql database:
        // Convert the timestamp to a JavaScript Date object
        const originalDate = new Date(data.timestamp);

        console.log(originalDate);
        // Format the date to be suitable for MySQL insertion
        const formattedDate = originalDate.toISOString().slice(0, 19).replace('T', ' ');

        // Now, `formattedDate` contains the date in the suitable MySQL format
        console.log(formattedDate); // Output: '2023-03-22 09:01:10'

        let q = `INSERT INTO transaction VALUES('${data.from}','${data.to}','${data.value}','${formattedDate}') `;

        query(q);

    }

    catch (error) {
        console.log(error);
    }


}



t_data(url);









// query();








app.listen(3000, () => {
    console.log("Server running on port 3000 !!");
})


// connection.getConnection((err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("connected successfully !!");
//     }
// })

// connection.

// exports.getConnection = function(callback)
// connection.getConnection(function (err, conn) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("established");
//     }
// });
// connection.connect((err) => {
//     if (err) {
//         console.log("error", err);
//     }
//     else {
//         console.log("Connected");
//     }
// })
// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: '85.10.205.173',
//     port: '3306',
//     user: 'snowtrace',
//     password: 'rishit07',
//     database: 'trsxn_detail'
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log('connected!');
// });