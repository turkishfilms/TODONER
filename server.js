import express from './express'

const PORT = process.env.port || 3001;
const app = express();
const server = app.listen(PORT,() => console.log(`You Will Never Be Good Enough`,PORT));
app.use(express.static('public'));
