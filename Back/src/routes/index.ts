import { Router } from 'express';

import UserController from '../app/controller/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Vitor Alves',
//     email: 'vitor.alves07750@outlook.com',
//     password_hash: '963789456123',
//   });
//   return res.json(user);
// });

export default routes;
