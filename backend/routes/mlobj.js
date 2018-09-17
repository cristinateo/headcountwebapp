const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/mlobj')

router.post('/', Ctrl.create)
router.delete('/:id', Ctrl.destroy)

module.exports = router.routes()