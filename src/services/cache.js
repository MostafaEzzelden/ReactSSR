import md5 from 'md5';
import util from 'util';
import redis from 'redis';
import mongoose from 'mongoose';

// Setup Redis Server to Cache Data
// look https://stackoverflow.com/questions/6476945/how-do-i-run-redis-on-windows/10525215#10525215
// to setup Redis for windows.
const redisURL = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisURL);
const originalQueryExec = mongoose.Query.prototype.exec;

client.hget = util.promisify(client.hget);

const generateKey = (query, collection) => {
    const key = JSON.stringify(Object.assign({}, query, {
        collection: collection
    }));
    return md5(key);
}

mongoose.Query.prototype.cache = function cache(options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');
    return this;
}

mongoose.Query.prototype.exec = async function exec() {
    if (this.useCache) {
        // if you need delete all cache redis you can use client.flushall()
        const key = generateKey(this.getQuery(), this.mongooseCollection.name);
        const redisValue = await client.hget(this.hashKey, key);
        if (redisValue) {
            console.log('%s is founded from redis', key)
            const doc = JSON.parse(redisValue);
            return Array.isArray(doc) ? doc.map(r => new this.model(r)) : new this.model(doc);
        }
        const originalValue = await originalQueryExec.apply(this, arguments);
        client.hset(this.hashKey, key, JSON.stringify(originalValue));
        return originalValue;
    } else {
        return originalQueryExec.apply(this, arguments);
    }
}

const clearCacheByKey = (hashKey) => {
    client.del(JSON.stringify(hashKey));
}

export {
    clearCacheByKey
}
