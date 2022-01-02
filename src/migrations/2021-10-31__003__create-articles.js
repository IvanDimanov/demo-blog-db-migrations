const articles = require('../seed-data/articles')

module.exports = {
  async up(db, client) {
    const session = client.startSession()
    try {
      await session.withTransaction(async () => {
        const collection = await db.createCollection('article')
        collection.insertMany(articles.data)
      })
    } finally {
      await session.endSession()
    }
  },


  async down(db, client) {
    const session = client.startSession()
    try {
      await session.withTransaction(async () => {
        const collections = await db.listCollections().toArray()

        if (collections.find(({ name }) => name === 'article')) {
          await db.collection('article').drop()
        }
      })
    } finally {
      await session.endSession()
    }
  },
}
