const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.use(express.json({ extended: false }));

app.use('/api/skateboard_tricks', require('./src/api/skateboard_tricks'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});
