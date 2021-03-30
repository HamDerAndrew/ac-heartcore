const { Client } = require('@umbraco/headless-client')

const client = new Client({
  projectAlias: 'dev-ac-heartcore',
  apiKey: ''
})

export default client;