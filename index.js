const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const chatRoute = require('./routes/chatRoute');
const messageRoute = require('./routes/messageRoute');
require('dotenv').config();
const connectDB = require('./config/db');


app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

const port = process.env.PORT || 5000;

app.listen(port, ( req, res ) => {
    console.log(`running ok on port ${port}`)
    connectDB();
})