import { Test, TestingModule } from '@nestjs/testing';
import { BitcoinService } from './bitcoin.service';
import { HttpModule, HttpService } from '@nestjs/axios';

describe('BitcoinService', () => {
    let bitcoinService: BitcoinService;

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            providers: [BitcoinService],
            imports: [HttpModule],
        }).compile();

        bitcoinService = moduleRef.get<BitcoinService>(BitcoinService);
    });

    it('should be defined', () => {
        expect(bitcoinService).toBeDefined();
    });

});
