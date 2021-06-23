const express = require('express');
const app = express();

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({
    defaultlayout: 'main',
    extname: 'hbs'
}))
app.set('view engine', 'hbs')




const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}

const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "f9fi89paEsabatad",
    database: "postgres"
})

app.get('/', (req, res) => {
    return res.redirect('/customer');
});

app.get('/customer', (req, res) => {
    client.connect();
    client.query('Select * from friends', (err, data) => {
        if(!err){
            console.log(data.rows);
            return res.render("index", {"data": data.rows})
        }
        else{
            console.log(err.message);
            res.write('<h1>Hi World</h1>')
        }
        client.end;
    })
})
