import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email já existente!'],
    required: [true, 'Email é obrigatório!'],
  },
  username: {
    type: String,
    required: [true, 'Username é obrigatório!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username inválido, ele deve conter 8-20 caracteres alfanuméricos e ser único!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);
export default User;