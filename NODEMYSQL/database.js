const {createPool} = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "f9fi89paEsabatad",
    connectionLimit: 10
})

pool.query('select * from postgres.friends', (err, res) => {
    return console.log(res)
})