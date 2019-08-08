const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const stores = require('./stores')
const views = require('./views')
const fp = require('lodash/fp')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))

const taskList = (req, res) => {
  stores.tasks.all().then(tasks => res.send(
    views.render([
      views.taskform(),
      views.tasks(fp.map(t => t.task, tasks))
    ]))
  )
}

app.get('/', taskList)

app.post('/', function (req, res) {
  const task = { task: req.body.task }

  stores.tasks.save(task).then(() => taskList(req, res))
})

exports.start = port => {
  console.log(`Server listening on port ${port}...`)
  app.listen(port)
}
