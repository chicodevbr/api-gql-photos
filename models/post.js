const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  post: String,
});

module.exports = mongoose.model('Post', PostSchema);
