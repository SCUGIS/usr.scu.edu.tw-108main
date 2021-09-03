const gsheet = async (sheetId, tabName) => {
  let sheetData = []
	let json = await $.get(`https://gis.scu.edu.tw/jsonapi?id=${sheetId}&sheet=${tabName}`)

  json.rows.map(data => {
    sheetData.push(data)
  })

  return sheetData
}

window.gsheet = gsheet
