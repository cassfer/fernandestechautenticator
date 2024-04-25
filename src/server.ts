import express from 'express';
import routes from './routes';

const expressServer = express();

expressServer.use(express.urlencoded({ extended: true }));

expressServer.use(express.json());

expressServer.use('/api/v1', routes);



expressServer.set('port', process.env.PORT || 3000);

export default expressServer;