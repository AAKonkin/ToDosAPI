import Router from 'express';
import todoController from '../Controller/todoController.js';

const route = new Router();
route.post('/todo', todoController.addNew);
route.get('/todo', todoController.getAll);
route.get('/todo/:id', todoController.getOne);
route.put('/todo/:id', todoController.updateOne);
route.delete('/todo/:id', todoController.deleteOne);

export default route;