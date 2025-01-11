import express, {Express, Request, Response} from 'express';
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})