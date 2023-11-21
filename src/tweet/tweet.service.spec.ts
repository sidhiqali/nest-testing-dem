import { Test, TestingModule } from '@nestjs/testing';
import { TweetService } from './tweet.service';

describe('TweetService', () => {
  let service: TweetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetService],
    }).compile();

    service = module.get<TweetService>(TweetService);
  });

  describe('create tweet', () => {
    it('should create tweet', () => {
      service.tweets = [];
      const payload = 'This is my tweet';
      const tweet = service.createTweet(payload);
      expect(tweet).toBe(payload);
      expect(service.tweets).toHaveLength(1);
    });

    it('should prevent tweet from being too long', () => {
      service.tweets = [];
      const payload = 'This is my tweet'.repeat(10);
      expect(() => service.createTweet(payload)).toThrowError();
      expect(service.tweets).toHaveLength(0);
    });
  });
});
