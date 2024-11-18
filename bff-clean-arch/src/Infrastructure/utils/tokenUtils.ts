import jwt from 'jsonwebtoken';

const SECRET_KEY = '4ad098f072fb3dffb9b9e74b81e541cf08bca8aecbac28145bc86f3640986b0f'; 

export function generateToken(userId: string): string {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
}
