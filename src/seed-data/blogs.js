const getRegulatedSeedDate = require('../utils/getRegulatedSeedDate')

const users = require('../seed-data/users')


const data = [
  {
    _id: 'blog-id_mediterranean-cuisine',
    url: 'mediterranean-cuisine.com',
    title: 'Mediterranean cuisine',
    description: 'Dive into the secrets of most famous Mediterranean dishes',
    rating: 4.21,
    owner: users.byId['user-id_john-smith'],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'blog-id_gemstone',
    url: 'gemstone.com',
    title: 'Gemstones',
    description: 'List of favorite semi-precious stones',
    rating: 3.5,
    owner: users.byId['user-id_jane-smith'],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  },
]

const byId = data.reduce((map, item) => ({
  ...map,
  [item._id]: item,
}), {})

module.exports = {
  data,
  byId,
}
