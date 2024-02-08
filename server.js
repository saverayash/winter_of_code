const express = require('express');
const path = require('chatting.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/redirect', (req, res) => {
    // Perform any server-side logic if needed before redirecting
    res.redirect('/chatting.js'); // Redirect to another route or page
  });
app.get('/newpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'newpage.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
