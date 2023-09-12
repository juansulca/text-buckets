import { Redis } from "https://deno.land/x/upstash_redis/mod.ts";

const EntryTTL = 3600;

class DataBase {
  private readonly redis: Redis;

  constructor() {
    const upstash_url = Deno.env.get('UPSTASH_URL') ?? ''; 
    const upstash_token = Deno.env.get('UPSTASH_TOKEN') ?? '';

    this.redis = new Redis({
      url: upstash_url,
      token: upstash_token,
    });
  }

  async insertEntry(id: string, content: string) {
    const entry = {
      id,
      content
    };

    await this.redis.set(id, entry, { ex: EntryTTL });

    return id;
  }

  async getEntry(id: string) {
    const result = await this.redis.get(id);

    return result;
  }
}

export const db = new DataBase();

