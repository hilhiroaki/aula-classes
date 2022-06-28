import crypto from 'crypto'
const getToken = () => crypto.randomBytes(8).toString('hex');
export default getToken