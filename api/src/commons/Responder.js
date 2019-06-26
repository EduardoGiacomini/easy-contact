class Responder {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    success(data) {
        this.res.send(data)
    }

    error(err) {
        this.res.status(400).send(err)
    }

    next() {
        this.next()
    }

    notFound(err) {
        err.status = 404
        this.next(err)
    }

    unauthorized(err) {
        err.status = 401
        this.next(err)
    }
}

module.exports = Responder
