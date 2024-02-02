const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your portfolio backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
