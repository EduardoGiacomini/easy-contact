const server = require('./Server')

server.listen(process.env.APP_PORT, () => {
    console.info(`Easy Contact API running on port ${process.env.APP_PORT}`)
})
