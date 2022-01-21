require('../../utils/validateEnvVars')

const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGODB_URI);

(async () => {
  try {
    await client.connect()

    /* Get a list of all collections in the DB */
    const collections = await client.db().collections()
    console.log('Total collections found:', collections.length)

    /* Drop all collections in the DB */
    await Promise.all(collections.map((collection) => collection.drop()))
    console.log('All collections were dropped')
  } finally {
    await client.close()
  }
})()
