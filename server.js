const express = require('express')
const app = express()
const port = 3000
// Students, dont touch this part (yes it is js)
app.use(express.static('static'))
app.listen(port, () => {
  console.log(`Static running on ${port}`)
})