
function hello (ctx) {
  let user = ctx.request.query.user
  ctx.ok({ user })
}

function create (ctx) {
  ctx.status = 200,
  ctx.body = err
}

module.exports = {
  hello,
  create
}
