import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MemoryService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async get(key: string) {
    try {
      const value = JSON.parse(await this.cacheManager.get(key));
      return value;
    } catch (error) {
      return null;
    }
  }

  // ttl is seoncds
  async set(key: string, value: any, ttl: number) {
    return await this.cacheManager.set(key, JSON.stringify(value), ttl * 1000);
  }
}
