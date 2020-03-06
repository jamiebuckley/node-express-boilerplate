const path = require('path')
const express = require('express')
const logger = require('./logging')
const app = express()
const port = process.env.PORT || 8080

/* Configure templating */
const mustacheExpress = require('mustache-express')
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

/* Configure routing */
const router = express.Router()
router.use('/v1', require('./api/v1'))
app.use('/api', router)
app.get('/', (req, res) => {
  res.render('index')
})

/* Start application */
app.listen(port, () => logger.info(`Application started on port ${port}`))
