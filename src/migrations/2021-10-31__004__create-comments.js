const comments = require('../seed-data/comments')

module.exports = {
  async up(db, client) {
    const session = client.startSession()
    try {
      await session.withTransaction(async () => {
        const collection = await db.createCollection('comment')
        collection.insertMany(comments.data)
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

        if (collections.find(({ name }) => name === 'comment')) {
          await db.collection('comment').drop()
        }
      })
    } finally {
      await session.endSession()
    }
  },
}
