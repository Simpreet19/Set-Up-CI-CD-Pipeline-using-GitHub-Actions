const express = require('express');
const app = express();

// Import middlewares
const logger = require('./middlewares/logger');
const authenticate = require('./middlewares/authenticate');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Welcome to Middleware Demo 🚀');
});

app.get('/secure', authenticate, (req, res) => {
  res.json({
    message: 'Access granted to secure route ✅',
    user: req.user,
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
