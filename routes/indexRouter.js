import { Router } from 'express';
import { homepageGet, createMessageGet, createMessagePost, deleteMessagePost } from '../controllers/dbController.js';

const indexRouter = Router();

indexRouter.post('/delete', deleteMessagePost);

indexRouter.post('/new', createMessagePost);

indexRouter.get('/new', createMessageGet);

indexRouter.get('/', homepageGet);

indexRouter.use((err, req, res, next) => {
  console.error(err)
})

export default indexRouter;