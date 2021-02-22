import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/database', {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.once('open', async () => {
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  userSchema.methods.getName = function() {
    return this.name;
  };
  userSchema.methods.getAge = function() {
    return this.age;
  };
  userSchema.methods.setName = function(name) {
    this.name = name;
  };
  userSchema.methods.setAge = function(age) {
    this.age = age;
  };

  const User = mongoose.model('User', userSchema);

  const testUser = new User({ name: 'Test', age: 10 });

  console.log(testUser);

  console.log(testUser.getName());

  await testUser.save();
  console.log('Done');
});
