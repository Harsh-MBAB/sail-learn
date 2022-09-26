module.exports = {
  friendlyName: "Delete",

  description: "Delete blog.",

  inputs: {
    author: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "Content updated successfully",
    },
  },

  fn: async function (inputs, exits) {
    try {
      const deleted = await Blog.destroyOne({ author: inputs.author });
      console.log(deleted);
      if (deleted) {
        return exits.success({
          message: "Blog deleted successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
