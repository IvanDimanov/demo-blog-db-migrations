require('../utils/validateEnvVars')

module.exports = {
  mongodb: {
    url: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
    },
  },
  migrationsDir: './src/migrations',
  changelogCollectionName: 'migrations',
  useFileHash: false,
}
