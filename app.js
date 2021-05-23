import express from 'express';
import config from 'config';
import routes from './Routes/routes.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT ?? config.get('PORT');
const app = express();
app.use(express.json());
app.use('/api', routes)
app.use(express.urlencoded);

mongoose.connect(config.get('DB_URL'), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongoose.connection.on('connected', () => console.log('ALREADY_CONNECTED_TO_DB'));

app.listen(PORT, console.log(`ToDo SERVER START WORKING AT PORT: ${PORT}`));