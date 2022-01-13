const Mongoose = require('mongoose');
const connectDB = () => {
    Mongoose.connect(
        process.env.DB_URI+
        process.env.DB_USER+ ':' +
        process.env.DB_PASS+ '@' +
        process.env.DB_HOST+ '/' +
        process.env.DB_NAME+
        process.env.DB_CRED,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Connected");
    }).catch(err => console.log(err));
}

module.exports = {
    connectDB
}