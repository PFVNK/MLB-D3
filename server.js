const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const path = require('path')

const app = express()

app.use(cors())
app.use(morgan('tiny'))

function getResults(body) {
  const $ = cheerio.load(body)
  const table = $('table#team_batting tr')
  const data = []

  table.each((index, element) => {
    const player = $(element)
    const name = player.find('td.left[data-stat=player] a').text()
    const position = player.find('td.left[data-stat=pos]').text()
    const hits = player.find('td.right[data-stat=H]').text()
    const homeRun = player.find('td.right[data-stat=HR]').text()
    const battingAVG = player.find('td.right[data-stat=batting_avg]').text()
    const color = "#F4911E"

    data.push({
      index,
      name,
      color,
      position,
      hits,
      homeRun,
      battingAVG
    })
  })

  return data
}

app.get('/graph/:location', (req, res) => {
  const { location } = req.params

  const url = `https://www.baseball-reference.com/teams/${location}/2019.shtml`

  console.log(url)

  fetch(url)
    .then(res => res.text())
    .then(body => {
      const data = getResults(body)
      res.json({ data })
    })
    .catch(err => console.log(err))
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));