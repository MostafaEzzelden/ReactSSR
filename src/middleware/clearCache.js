import { clearCacheByKey } from '../services/cache';

export default async (req, res, next) => {
    await next();
    clearCacheByKey(req.user._id);
}
