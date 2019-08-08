const Html = require('html-creator')
const fp = require('lodash/fp')

const taskHtml = task => ({
  type: 'li',
  attributes: { class: 'list-group-item' },
  content: task
})

module.exports = tasks => ({
  type: 'div',
  attributes: { class: 'row mt-3' },
  content: [{
    type: 'div',
    attributes: { class: 'col' },
    content: [{
      type: 'ul',
      attributes: { class: 'list-group' },
      content: fp.map(taskHtml, tasks)
    }]
  }]
})
