// import express from 'express';
// import data from './data/data.json';
// const app = express();
// const PORT = 3000;

// //without path
// app.use(express.static('images'));
// //with path
// app.use('/images', express.static('images'));

// app.get('/', (req, res) => 
// res.send(data)
// );


// app.post('/newitem', (req, res) => 
// res.send(`a post request with /newItem route on port ${PORT}`)
// );

// app.put('/item', (req, res) => 
// res.send(`a put request with /item route on port ${PORT}`)
// );

// app.delete('/item', (req, res) => 
// res.send(`a delete request with /item route on port ${PORT}`)
// );

import express from 'express';
import path from 'path';
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});
app.get('/index\*', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, './static/service.html'));
});
app.get('/project\*', (req, res) => {
    res.sendFile(path.join(__dirname, './static/projects.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './static/aboutme.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './static/contact.html'));
});

app.listen(PORT, () => {
    //console.log(`Your server is running on port ${PORT}`);
    console.log(`Server is running in http://localhost:${PORT}`);
    //console.log(data);
});