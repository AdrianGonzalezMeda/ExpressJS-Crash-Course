import express from 'express';

const app = express();

// Config EJS
app.set('view engine', 'ejs');
app.set('views', 'views'); // Our views folder

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My website',
        message: 'Hello from EJS',
        people: ['Jhon', 'Jane']
    })
});

app.listen(8000, () => console.log('Running on port 8000'));