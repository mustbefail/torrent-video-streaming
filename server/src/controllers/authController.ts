import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
  res.send('Register user');
};

export const login = (req: Request, res: Response) => {
  res.send('Login user');
};
