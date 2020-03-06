const express = require('express')
const logger = require('./logging')
const app = express()
const port = process.env.PORT || 8080

/** Configure routing */
const router = express.Router()
router.use('/v1', require('./api/v1'))
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('hi')
})
app.listen(port, () => logger.info(`Application started on port ${port}`))
