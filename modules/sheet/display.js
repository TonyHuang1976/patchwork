var h = require('mutant/h')
var nest = require('depnest')

exports.gives = nest('sheet.display')

exports.create = function () {
  return nest('sheet.display', function (handler) {
    var {content, footer, onMount} = handler(done)

    var container = h('div', {className: 'Sheet'}, [
      h('section', [content]),
      h('footer', [footer])
    ])

    document.body.appendChild(container)

    if (onMount) onMount()

    function done () {
      document.body.removeChild(container)
    }
  })
}
