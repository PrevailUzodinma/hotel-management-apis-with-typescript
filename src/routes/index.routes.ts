import { Router } from 'express';
import roomRouter from '../routes/room.routes';
import roomtypeRouter from '../routes/roomtype.routes';
import userRouter from '../routes/user.routes';

const router: Router = Router();

router.use('/rooms', roomRouter);
router.use('/room-types', roomtypeRouter);
router.use('/users', userRouter);

export default router;