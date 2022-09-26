module.exports = {
  friendlyName: "Update content",

  description: "",

  inputs: {
    author: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "Content updated successfully",
    },
    error: {
      statusCode: 500,
      description: "Content failed to update",
    },
  },

  fn: async function (inputs, exits) {
    const updated = await Blog.updateOne({ author: inputs.author }).set({
      content: inputs.content,
    });
    if (updated) {
      return exits.success({
        message: "content updated",
      });
    } else {
      return exits.error({
        message: "No blogs with that author",
      });
    }
  },
};
