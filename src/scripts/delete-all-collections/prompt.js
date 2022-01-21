const { NumberPrompt } = require('enquirer')
const getRandomNumber = require('../../utils/getRandomNumber');

(async () => {
  const number1 = getRandomNumber(0, 50)
  const number2 = getRandomNumber(0, 50)
  const operation = getRandomNumber(0, 1) ? '+' : '-'

  const equation = `${number1} ${operation} ${number2} =`
  const correctAnswer = operation === '+'
    ? number1 + number2
    : number1 - number2


  const prompt = new NumberPrompt({
    name: 'number',
    message: `Deleting all collections is an irreversible action. Please confirm by solving: ${equation}`,
    validate: (answer) => {
      if (answer !== correctAnswer) {
        console.log()
        console.error(new RangeError('Invalid answer'))
        process.exit(1)
      }

      require('./script')

      return true
    },
  })

  await prompt.run()
})()
