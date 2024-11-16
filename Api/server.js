const express = require('express');


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sncbnb Backend is Running!');
});

const PORT = 7800;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});