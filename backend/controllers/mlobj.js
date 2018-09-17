const MLobj = require('../models/mlobj')

    async function create (ctx) {
      // Create New MLobj from payload sent and save to database
      const newMLobj = new MLobj(ctx.request.body)
      const savedMLobj = await newMLobj.save()
      ctx.body = savedMLobj
    }

    async function destroy (ctx) {
      // Get id from url parameters and find MLobj in database
      const id = ctx.params.id
      const mlobj = await MLobj.findById(id)

      // Delete todo from database and return deleted object as reference
      const deletedMLobj = await mlobj.remove()
      ctx.body = deletedMLobj
    }

    module.exports = {
      create,
      destroy
    }