const express = require('express')
const path = require('path')

const app = express()
app.use('/404', express.static('./static'))

const port = 8080
console.log('listening on ' + port)
app.listen(port)

const _404_page = path.resolve('./static/404.html')

process.on('SIGINT', function() {
  console.log('')
  console.log('closing...')
  process.exit()
})

app.get('/', async (req, res) => {
  res.redirect('/search')

}).get('/404', async (req, res) => {
  res.sendFile(_404_page)
  
})

app.use(function(req, res, next) {
  res.redirect('/404/')

})
