const Task = require('./task')
const fp = require('lodash/fp')

const tasks = []

module.exports = {
  tasks: new Task(tasks),
  close: () => db.close()
}
