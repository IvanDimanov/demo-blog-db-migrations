const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .option('force', {
    alias: 'f',
    type: 'boolean',
    description: 'Delete all collections by force (no mathematical prompt)',
  })
  .parse()


if (argv.force) {
  console.warn('Warning: Flag --force detected; skipping prompt')
  require('./script')
} else {
  require('./prompt')
}
