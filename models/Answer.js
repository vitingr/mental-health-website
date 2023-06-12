import { Schema, model, models } from 'mongoose';

const AnswerSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  text: {
    type: String,
    required: [true, 'Digite algo.'],
  }
});

const Answer = models.Answer || model('Answer', AnswerSchema);
export default Answer;