// create the first server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/echo', (req, res) => {
  res.json({
    name:"hello world",
  
  });
  
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
