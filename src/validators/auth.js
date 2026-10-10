// src/validators/auth.js
export function validateSignup(body) {
  const errors = [];
  if (typeof body.name !== 'string' || body.name.trim() === '') errors.push('name is required');
  if (typeof body.email !== 'string' || !body.email.includes('@')) errors.push('a valid email is required');
  if (typeof body.password !== 'string' || body.password.length < 8) errors.push('password must be at least 8 characters');
  if (!['rider', 'driver'].includes(body.role)) errors.push("role must be 'rider' or 'driver'");
  return { valid: errors.length === 0, errors };
}

export function validateLogin(body) {
  const errors = [];
  if (typeof body.email !== 'string' || body.email.trim() === '') errors.push('email is required');
  if (typeof body.password !== 'string' || body.password.trim() === '') errors.push('password is required');
  return { valid: errors.length === 0, errors };
}