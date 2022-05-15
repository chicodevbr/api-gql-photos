const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  post: String,
  imageUrl: String,
  isHighlight: Boolean,
  created_at: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Post', PostSchema);
