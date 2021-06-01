const express = require('express'),
app = express()

require('dotenv').config()

// app.get('/' ...);
// app.post(...);

// app.use(app.router, require('./controller/hello'))
// routes.initialize(app);
app.set('view engine', 'ejs')
app.use('/api/', require('./routes/hello'))

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> {
  console.log(`Listening on Port: ${PORT}`)
})
