const middleware = {}

middleware['fetchClasses'] = require('../middleware/fetchClasses.js')
middleware['fetchClasses'] = middleware['fetchClasses'].default || middleware['fetchClasses']

middleware['fetchEleves'] = require('../middleware/fetchEleves.js')
middleware['fetchEleves'] = middleware['fetchEleves'].default || middleware['fetchEleves']

export default middleware
