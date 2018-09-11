const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/users')

router.get('/', Ctrl.hello)
router.post('/v1/users', Ctrl.create)

module.exports = router.routes()
