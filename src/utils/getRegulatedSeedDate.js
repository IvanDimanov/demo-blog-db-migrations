let diff = 0
const now = Date.now()

/**
 * Makes sure that when we seed data with mocked DB objects
 * every created object have a predictable timestamp
 *
 * @return {String} Common ISO Date string
 */
const getRegulatedSeedDate = () => {
  diff += 1000
  return new Date(now + diff).toISOString()
}

module.exports = getRegulatedSeedDate
