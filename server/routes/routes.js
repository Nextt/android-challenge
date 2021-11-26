const TransactionGenerator = require('../mock/transactions');

const readJson = (dataPath, fs) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(JSON.parse(data));
    });
  });
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401);

  next();
}

const appRoutes = (app, fs) => {
  // variables
  const userData = './data/user.json';
  const profileData = './data/full_profile.json';
  const ccData = './data/cc_data.json';
  const transactionGenerator = new TransactionGenerator();

  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      res.status(400).send({
        error: 'username and password are required'
      });
      return;
    }

    readJson(userData, fs).then((data) => {
      data.jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQ2xpZW50IiwiSXNzdWVyIjoiTXlCYW5rIiwiVXNlcm5hbWUiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJleHAiOjE3MDEwMjQwMzksImlhdCI6MTYzNzk1MjAzOX0.iR3EWT8fyTfKnurqH5Trmbit4JkKdKDwcntIh35NmdQ';
      res.send(data);
    });
  });

  app.get('/user', authenticateToken, (req, res) => {
    readJson(userData, fs).then((data) => {
      res.send(data);
    });
  });

  app.get('/profile', authenticateToken, (req, res) => {
    readJson(profileData, fs).then((data) => {
      res.send(data);
    });
  });

  app.get('/account', authenticateToken, (req, res) => {
    readJson(ccData, fs).then((data) => {
      res.send(data);
    });
  });

  app.get('/transactions', authenticateToken, (req, res) => {
    const limit = req.query.limit || 100;
    const months = Math.floor(limit / 20) || 1;
    const transactions = transactionGenerator.generateTransactions(limit, months);

    res.send(transactions);
  });
};

module.exports = appRoutes;
