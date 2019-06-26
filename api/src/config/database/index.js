const mongoose = require('mongoose')

mongoose.connect(
    `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
    { useNewUrlParser: true }
)
mongoose.Promise = global.Promise

module.exports = mongoose
