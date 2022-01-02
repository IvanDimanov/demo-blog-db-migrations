const getRegulatedSeedDate = require('../utils/getRegulatedSeedDate')

const blogs = require('../seed-data/blogs')
const users = require('../seed-data/users')


const data = [
  {
    _id: 'article-id_horiatiki-salata',
    blogId: blogs.data[0]._id,
    path: '/horiatiki-salata',
    title: 'Horiatiki Salata',
    // eslint-disable-next-line max-len
    text: 'Anyone who has eaten a real Horiatiki Salata knows that this is the absolute best and healthiest juice to dip your bread in. I could eat this salad twice a day everyday, and we did on this study tour. The salads got even tastier the farther out of the city and into the countryside we got. To me this is the best salad in the world. A summer meal without this salad just isn’t happening.',
    rating: 4.1,
    author: users.byId['user-id_john-smith'],
    reviewers: [
      users.byId['user-id_jane-smith'],
      users.byId['user-id_adam-stone'],
    ],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'article-id_black-eyed-peas',
    blogId: blogs.data[0]._id,
    path: '/black-eyed-peas',
    title: 'Black Eyed Peas',
    // eslint-disable-next-line max-len
    text: 'Black eyed peas with Fresh Dill, Olive Oil and Orange Slices is one of my all-time favorite Mediterranean Diet recipes. How can you go wrong with fresh dill, fresh parsley, green onions, orange slices, and 1 cup of extra virgin olive oil. As you prepare this amazing dish, I would highly recommend resisting the urge to cut back on the olive oil. As you simmer the ingredients, the oil cooks into the beans and herbs and what is left thickens to make a flavorful gravy.  This is a traditional vegan dish from the island of Crete and works great with a vegan salad.',
    rating: 3.7,
    author: users.byId['user-id_jane-smith'],
    reviewers: [
      users.byId['user-id_john-smith'],
    ],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'article-id_eggplant-lentils-peppers',
    blogId: blogs.data[0]._id,
    path: '/eggplant-lentils-peppers',
    title: 'Eggplant, Lentils, and Peppers',
    // eslint-disable-next-line max-len
    text: 'Aubergine is the king of vegetables in Turkey. Like a tomato, it is actually classified as a fruit because it has seeds. This is one of my favorite and scrumptious Turkish eggplant recipes.  Eggplant, Lentils and Peppers cooked in olive oil, also known as Mercimekli Mualla is from Antakya and has been cooked in the southern Turkish kitchens for generations.',
    rating: 4.6,
    author: users.byId['user-id_john-smith'],
    reviewers: [],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'article-id_emerald',
    blogId: blogs.data[1]._id,
    path: '/emerald',
    title: 'Emerald',
    // eslint-disable-next-line max-len
    text: 'Emerald has been synonymous with the color green since ancient times. A fine emerald is a truly breathtaking sight, and this member of the beryl family deserves its placement among the traditional "Big Four" gems along with diamond, ruby, and sapphire.',
    rating: 4.6,
    author: users.byId['user-id_jane-smith'],
    reviewers: [
      users.byId['user-id_john-smith'],
    ],
    createdAt: getRegulatedSeedDate(),
    updatedAt: getRegulatedSeedDate(),
  }, {
    _id: 'article-id_moonstone',
    blogId: blogs.data[1]._id,
    path: '/moonstone',
    title: 'Moonstone',
    // eslint-disable-next-line max-len
    text: 'Found all over the world, moonstone is prized for its blue to white adularescence — a billowy, moonlight-like sheen. Despite being somewhat fragile, this alternative June birthstone is a popular choice for jewelry.',
    rating: 4.2,
    author: users.byId['user-id_jane-smith'],
    reviewers: [],
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
