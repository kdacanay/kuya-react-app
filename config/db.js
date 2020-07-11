// connect to mongodb

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {

  // when using async/await, wrap in a try/catch block
  try {
    await mongoose.connect(db || "mongodb://ken12345:ken12345@ds149404.mlab.com:49404/heroku_0t7nq6cl", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('mongoDB connected');
  } catch (err) {
    console.error(err.message);
    // exit process w/failure 
    process.exit(1);
  }
};


module.exports = connectDB;