import crypto from 'crypto';

export default function generateUniqueId() {
  return crypto.randomBytes(6).toString('HEX');
}
