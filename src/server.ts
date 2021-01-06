import express from 'express';
import {graphqlServer} from './graphql/index.js';

const PORT = process.env.PORT || 3030;
const app = express();

app.get('/', (req, res) => {
  res.send('Fuck');
});

app.use('/api/v1', graphqlServer);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
