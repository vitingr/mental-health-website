import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: String,
    required: [true, 'Digite algo.'],
  }
});

const Post = models.Post || model('Posts', PostSchema);
export default Post;