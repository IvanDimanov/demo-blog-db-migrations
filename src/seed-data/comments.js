const getRegulatedSeedDate = require('../utils/getRegulatedSeedDate')

const articles = require('../seed-data/articles')
const users = require('../seed-data/users')


const data = [
  {
    articleId: articles.data[0]._id,
    title: 'Love it',
    text: 'Really like the way cheese was set.',
    rating: 4.1,
    author: users.byId['user-id_eva-stone'],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    articleId: articles.data[0]._id,
    title: 'Nice',
    text: 'Was impressed by the flavours.',
    rating: 3.6,
    author: users.byId['user-id_lena-stone'],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    articleId: articles.data[1]._id,
    title: 'Tasty',
    text: 'I like the way peas are melted in the holo amalgam.',
    rating: 2.3,
    author: users.byId['user-id_lena-stone'],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    articleId: articles.data[3]._id,
    title: 'Fascinating',
    text: 'Easiest the best of my favorite gem stores.',
    rating: 4.5,
    author: users.byId['user-id_john-smith'],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  },
]

module.exports = {
  data,
}
