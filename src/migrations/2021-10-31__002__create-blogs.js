const blogs = require('../seed-data/blogs')

module.exports = {
  async up(db, client) {
    const session = client.startSession()
    try {
      await session.withTransaction(async () => {
        const collection = await db.createCollection('blog')
        collection.insertMany(blogs.data)
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

        if (collections.find(({ name }) => name === 'blog')) {
          await db.collection('blog').drop()
        }
      })
    } finally {
      await session.endSession()
    }
  },
}
