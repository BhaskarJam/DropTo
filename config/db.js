requir('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Connection Sucessful');
    }).catch(err => {
        console.log('Connection Failed');
    });
}

// EAzQRKqQKr0j4nEb

module.exports = connectDB;