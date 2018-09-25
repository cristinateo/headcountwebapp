const Todo = require('../models/todo')
const axios = require('axios')

async function create(ctx) {
  // Create New Todo from payload sent and save to database
  const newTodo = new Todo(ctx.request.body)
  const savedTodo = await newTodo.save()
  ctx.body = savedTodo
}

async function destroy(ctx) {
  // Get id from url parameters and find Todo in database
  const id = ctx.params.id
  const todo = await Todo.findById(id)

  // Delete todo from database and return deleted object as reference
  const deletedTodo = await todo.remove()
  ctx.body = deletedTodo
}

async function ml(ctx) {
  // console.log(ctx.request.body)
  const auth = "Bearer ZLChoye2zn7S4oCgRM90pgXGMxekVFb/dEho12+msmaHCFTspQG0FwZpnKcAyROU4T8qlo6TVFmikrECc6e0ng=="
  const siteurl = "https://ussouthcentral.services.azureml.net/workspaces/b3c1c6d865b14529bf0d84b4698dcc3d/services/b2874694d8f440dd866c2dbc0c254194/execute?api-version=2.0&details=true";
  var res = ""

  try {
    let r = await axios(siteurl, {
      method: 'POST',
      headers: {
        'Authorization': auth,
        'Content-Type': "application/json"
      },
      data: ctx.request.body,
    })

    ctx.body = r.data

    //.Results.output1.value.Values[0][5]

    // console.log(ctx.body)
  }
  catch (e) {
    ctx.status = 500
    ctx.body = e
  }

  return res
}

module.exports = {
  create,
  destroy,
  ml
}