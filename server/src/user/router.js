import UserController from './controller.js';
import Router from 'express';

const router = Router();

router.get('/profile', (req, res)=>{
    res.send(req.user);
})

router.post('/profile', UserController.updateProfile)

export default router;