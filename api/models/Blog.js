/**
 * Blog.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "all_blogs",
  attributes: {
    author: {
      type: "string",
      required: true,
      columnName: "author",
    },
    content: {
      type: "string",
      required: true,
      columnName: "content",
    },
    description: {
      type: "string",
      required: true,
      columnName: "description",
    },
  },
};
