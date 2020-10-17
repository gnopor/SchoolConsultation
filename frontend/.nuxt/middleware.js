const middleware = {}

middleware['fetchClasses'] = require('../middleware/fetchClasses.js')
middleware['fetchClasses'] = middleware['fetchClasses'].default || middleware['fetchClasses']

middleware['fetchEcoles'] = require('../middleware/fetchEcoles.js')
middleware['fetchEcoles'] = middleware['fetchEcoles'].default || middleware['fetchEcoles']

middleware['fetchEleves'] = require('../middleware/fetchEleves.js')
middleware['fetchEleves'] = middleware['fetchEleves'].default || middleware['fetchEleves']

export default middleware
