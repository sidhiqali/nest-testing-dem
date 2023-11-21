import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [TweetModule, PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
