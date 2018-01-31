import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './src/schema';

const app = express();
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  context: { token: process.env.REDDIT_TOKEN }
})));

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`); // eslint-disable-line
});
