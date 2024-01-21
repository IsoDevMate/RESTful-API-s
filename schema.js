const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  user: ObjectId,
  name: String,
  password: String,
});