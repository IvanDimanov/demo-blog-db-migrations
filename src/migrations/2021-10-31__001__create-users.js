const users = require('../seed-data/users')

module.exports = {
  async up(db, client) {
    const session = client.startSession()
    try {
      await session.withTransaction(async () => {
        const userCollection = await db.createCollection('user')
        userCollection.insertMany(users.data)
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

        if (collections.find(({ name }) => name === 'user')) {
          await db.collection('user').drop()
        }
      })
    } finally {
      await session.endSession()
    }
  },
}
