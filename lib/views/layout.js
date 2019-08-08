const Html = require('html-creator')

module.exports = elems => {
  const doc = new Html([
    {
      type: 'head',
      content: [
        {
          type: 'title',
          content: 'Tasks'
        },
        {
          type: 'link',
          attributes: {
            href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
            rel: 'stylesheet',
            crossorigin: 'anonymous'
          }
        },
        {
          type: 'script',
          attributes: {
            src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
            crossorigin: 'anonymous'
          },
          content: '/* blah */'
        }
      ]
    },
    {
      type: 'body',
      content: [
        {
          type: 'div',
          attributes: { class: 'container' },
          content: [ ...elems ]
        }
      ]
    }
  ])

  return doc.renderHTML()
}
