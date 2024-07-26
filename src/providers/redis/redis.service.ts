import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { v1 as uuid } from 'uuid'


// Cache-Manager는 레디스 서비스가 아니다.
@Injectable()
export class RedisService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    async setCacheKey(key: string, value: string): Promise<void> {
        await this.cacheManager.set(key, value);
    }

    async getCacheValue(key: string): Promise<string> {
        return await this.cacheManager.get(key);
    }

    async delCacheValue(key: string) : Promise<boolean> {
        try{
            await this.cacheManager.del(key);
        }
        catch {
            return false;
        }
        return true;
    }
}