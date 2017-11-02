export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports __________ or else returns thinq4yourself
    const _______Data = require('../Fixtures/_______.json')
    const thinq4yourselfData = require('../Fixtures/thinq4yourself.json')
    return {
      ok: true,
      data: username.toLowerCase() === '_______' ? _______Data : thinq4yourselfData
    }
  }
}
