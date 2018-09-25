const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/todos')

router.post('/', (ctx)=>{
})

router.post('/getml', Ctrl.ml)
router.delete('/:id', Ctrl.destroy)

module.exports = router.routes()