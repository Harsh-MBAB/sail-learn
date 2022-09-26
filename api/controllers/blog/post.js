module.exports = {
  friendlyName: "Post",

  description: "Post blog.",

  inputs: {
    author: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "A new blog has been posted successfully",
    },
    Error: {
      statusCode: 400,
      description: "Something went wrong",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let newBlog = await Blog.create({
        author: inputs.author,
        content: inputs.content,
        description: inputs.description,
      }).fetch();

      if (newBlog) {
        return exits.success({
          message: "Your blog has been posted successfully",
        });
      } else {
        return exits.Error({
          message: "Couldn't post the blog",
        });
      }
    } catch (error) {
      console.log(error);
      if (error.code === "E_MISSING_OR_INVALID_PARAMS") {
        return exits.Error({
          message: "All fields are required",
        });
      }
      return exits.Error({
        message: "Something went wrong. Couldn't Post your blog ",
      });
    }
  },
};
