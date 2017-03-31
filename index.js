var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/dmartines-1234', function(request, response) {
  response.send('Hello World!')
})

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/cat', function(request, response) {
  response.send('Cats!')
})

app.get('/bcg', function(request, response) {
  response.send('Hey BCG!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
