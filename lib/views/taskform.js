const Html = require('html-creator')

module.exports = () => ({
  type: 'div',
  attributes: { class: 'row mt-3' },
  content: [{
    type: 'div',
    attributes: { class: 'col' },
    content: [{
      type: 'form',
      attributes: {
        class: 'form-inline',
        method: 'post',
        action: ''
      },
      content: [
        {
          type: 'label',
          attributes: {
            for: 'task',
            class: 'sr-only'
          },
          content: 'Task: '
        },
        {
          type: 'input',
          attributes: {
            type: 'text',
            name: 'task',
            id: 'task',
            placeholder: 'Task...',
            class: 'form-control'
          }
        },
        {
          type: 'input',
          attributes: {
            type: 'submit',
            value: 'Add',
            class: 'btn btn-primary'
          }
        }
      ]
    }]
  }]
})
