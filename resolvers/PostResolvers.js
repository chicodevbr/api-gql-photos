const { Post } = require('../models');

const postResolver = {
  Query: {
    async posts() {
      return await Post.find({});
    },
    async post(_, { id }) {
      return await Post.findById(id);
    },
  },
  Mutation: {
    createPost(_, { post }) {
      const newPost = new Post(post);
      return newPost.save();
    },
    async updatePost(_, { id, post }) {
      return await Post.findByIdAndUpdate(id, post, {
        new: true,
      });
    },
    async deletePost(_, { id }) {
      return await Post.findByIdAndRemove(id);
    },
  },
};

module.exports = postResolver;
