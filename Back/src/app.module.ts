import { Module } from '@nestjs/common';
import { BitcoinModule } from './bitcoin/bitcoin.module';

@Module({
  imports: [BitcoinModule],
})
export class AppModule {}
