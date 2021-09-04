$(function () {
  const embed = document.getElementById('timeline-embed')
  embed.style.height = getComputedStyle(document.body).height - 56

  const list = [
    '1wu4xec9k7F5-c6hY1IfWDW8OtBnYY24pkWQIfDDHzE8',
  ]

  const load = (url) => {
    function ready (fn) {
      if (document.readyState != 'loading') {
        fn()
      } else {
        document.addEventListener('DOMContentLoaded', fn)
      }
    }

    ready(function () {
      console.log(url)
      window.timeline = new TL.Timeline('timeline-embed', url)

      window.addEventListener('resize', function () {
        const embed = document.getElementById('timeline-embed')
        embed.style.height = getComputedStyle(document.body).height - 56
        timeline.updateDisplay()
      })
    })
  }

  const open = () => {
    load(list[0])
  }

  $('.dropdown-item').click(function () {
    const hash = $(this).attr('href')
    open(hash)
  })

  open(location.hash)
})
