module.exports = {
  friendlyName: "View",

  description: "View blog.",

  inputs: {},

  exits: {
    success: {
      statusCode: 201,
      description: "All blogs are fetched from DB",
    },
  },

  fn: async function (_, exits) {
    try {
      const blogs = await Blog.find({});
      return exits.success({
        all_blogs: blogs,
      });
    } catch (error) {
      console.log(error);
      return exits.error({
        message: "Something went wrong",
      });
    }
  },
};
