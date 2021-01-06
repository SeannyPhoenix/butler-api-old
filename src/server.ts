import dotenv from 'dotenv';
import express from 'express';

// run this asynchronously so we can dynamically import
// graphqlServer, because we need dotenv to do it's thing first
const server = async () => {
  dotenv.config();

  const PORT = process.env.PORT || 2000;
  const app = express();

  // all requests to the api go through our graphql server middleware
  const {graphqlServer} = await import('./graphql/index.js');
  app.use('/api/v1', graphqlServer);

  // we really don't want people accessing this site through a browser
  // so redirect all other paths to my portfolio for now
  app.get('/*', (req, res) => {
    res.redirect('https://seannyphoenix.com');
  });

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

server();
