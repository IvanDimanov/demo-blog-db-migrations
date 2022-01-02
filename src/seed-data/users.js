const getRegulatedSeedDate = require('../utils/getRegulatedSeedDate')


const data = [
  {
    _id: 'user-id_john-smith',
    firstName: 'John',
    lastName: 'Smith',
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'user-id_jane-smith',
    firstName: 'Jane',
    lastName: 'Smith',
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'user-id_adam-stone',
    firstName: 'Adam',
    lastName: 'Stone',
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'user-id_eva-stone',
    firstName: 'Eva',
    lastName: 'Stone',
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'user-id_lena-stone',
    firstName: 'Lena',
    lastName: 'Stone',
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
