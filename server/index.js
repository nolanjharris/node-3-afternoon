require('dotenv').config();
const express = require('express');
const massive = require('massive');
const pc = require('./controllers/products_controller');

const app = express();

app.use(express.json());
app.use(express.static('build'));

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected B-)');
}).catch(console.log)

app.get('/api/products', pc.getAll);
app.get('/api/products/:id', pc.getOne);
app.put('/api/products/:id', pc.update);
app.post('/api/products', pc.create);
app.delete('/api/products/:id', pc.deleteProduct);

app.listen(process.env.SERVER_PORT, () => console.log('Listening on port ' + process.env.SERVER_PORT))