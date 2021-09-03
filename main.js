$(async () => {
  let sheet = await gsheet('1hfjEs_Su32g6n-x_UoiUCx5Jic7rdjVF3c_bdfwPNBM', 'Sheet1')

  let gridItem = $('.grid-item')
  let grid = $('.grid')

  if (window.innerWidth <= 576) {
    let fmtSheet = []

    for (let data of sheet) {
      fmtSheet[parseInt(data.sort)] = data
    }

    sheet = fmtSheet
  }

  for (let data of sheet) {
    let item = $(gridItem).clone()

    item.addClass(`w${data.width}`)
    item.find('.grid-title').text(data.title)
    item.find('.grid-content').text(data.content)
    item.find('.grid-image').attr('src', `./img/${data.media}`)
    item.attr('link', data.link)
    item.find('.badge').addClass(`badge-${data.color}`).text(data.tag)

    item.find('.grid-link').click(function (e) {
      if ($(this).attr('href') === '#') {
        e.preventDefault()
      }
    })

    item.hover(function () {
      setTimeout(() => {
        $(this).find('.grid-link').attr('href', $(this).attr('link'))
      }, 100)
    }, function () {
      setTimeout(() => {
        $(this).find('.grid-link').attr('href', '#')
      }, 100)
    })


    $(grid).append(item)
  }

  gridItem.remove()


  // init Masonry
  $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    // gutter: 2.5,
    // fitWidth: true,
  }).on('layoutComplete', () => {
    $('.container-fluid').addClass('shown')
  })


  $grid.imagesLoaded(() => {
    $('.loading').addClass('hidden')
    $grid.masonry('layout')
  })
})
