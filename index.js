const express = require('express');
const app = express();
const port = 3002;


app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
  });
  
  app.get('/contact', (req, res) => {
    res.send('Contact Page');
  });

  app.get('/test', (req, res) => {
    res.send('New page after Continuos Integration and Deployment');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
