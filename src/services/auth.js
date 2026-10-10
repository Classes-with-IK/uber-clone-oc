// src/services/auth.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { users } from '../db/schema.js';

function signToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
}
export async function signup({ name, email, password, role }) {
  const passwordHash = await bcrypt.hash(password, 10);
  const [user] = await db
    .insert(users)
    .values({ name, email, passwordHash, role })
    .returning({ id: users.id, name: users.name, email: users.email, role: users.role });
  const token = signToken(user);
  return { user, token };
}

export async function login({ email, password }) {
  const [user] = await db.select().from(users).where(eq(users.email, email));
  if (!user) return null;

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatches) return null;

  const token = signToken(user);
  return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
}