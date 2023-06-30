const express = require('express');
const PORT = process.env.PORT || 5001;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'First Idea',
    tag: 'technology',
    username: 'John Doe',
    date: '01-01-2020',
  },
];

app.get('/', (req, res) => {
  res.send('Hello Express World!');
});

app.get('/api/ideas', (req, res) => {});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
