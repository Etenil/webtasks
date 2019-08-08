const mongo = require('then-mongo')
const Task = require('./task')
const fp = require('lodash/fp')

const dbHost = fp.getOr('localhost', 'MONGO_HOST', process.env)
const dbPort = fp.getOr(27017, 'MONGO_PORT', process.env)

const db = mongo(`mongodb://${dbHost}:${dbPort}`, ['tasks'])

// db.getCollectionNames().then(collections => {
//   if (collections.length === 0 || collections.indexOf('tasks') < 0) {
//     db.createCollection('tasks').then(() => console.log('Created tasks collection'))
//   }
// })

module.exports = {
  tasks: new Task(db),
  close: () => db.close()
}
