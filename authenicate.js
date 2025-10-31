const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing ❌' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Bearer token missing ❌' });
  }

  const VALID_TOKEN = 'mysecrettoken123';

  if (token !== VALID_TOKEN) {
    return res.status(403).json({ error: 'Invalid token ❌' });
  }

  req.user = { id: 1, username: 'Simpreet', role: 'admin' };
  next();
};

module.exports = authenticate;
