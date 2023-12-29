import { Test, TestingModule } from '@nestjs/testing';
import { BitcoinController } from './bitcoin.controller';
import { BitcoinService } from './bitcoin.service';
import { BlockDTO } from './dto/block.dto';
import { HttpService, HttpModule } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

describe('BitcoinController', () => {
  let bitcoinController: BitcoinController;
  let bitcoinService: BitcoinService;

  beforeEach(async () => {
    const httpServiceMock = {
      post: jest.fn(() => of({ data: {} } as AxiosResponse)),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [BitcoinController],
      providers: [BitcoinService],
      imports: [HttpModule],
    })
      .overrideProvider(HttpService)
      .useValue(httpServiceMock)
      .compile();

    bitcoinService = moduleRef.get<BitcoinService>(BitcoinService);
    bitcoinController = moduleRef.get<BitcoinController>(BitcoinController);
  });

  describe('getBlockInfo', () => {
    it('should return block information when valid blockHash is provided', async () => {
      const blockHash = '0000000000000000000122c5509951551a077bc81a093fdc428466a7ccdca945';
      const blockDTO: BlockDTO = {
        block: blockHash,
        get blockType() {
          if (/^[a-fA-F0-9]{64}$/.test(this.block)) {
            return 'blockHash';
          } else if (/^[0-9]+$/.test(this.block)) {
            return 'blockHeight';
          } else {
            return null;
          }
        },
      };

      const expectedResult = {
        result: {
          hash: '0000000000000000000122c5509951551a077bc81a093fdc428466a7ccdca945',
          confirmations: 259,
          height: 823195,
          version: 772849664,
        },
      };

      jest
        .spyOn(bitcoinService, 'getBlockInfo')
        .mockImplementation(async () => expectedResult);

      const result = await bitcoinController.getBlockInfo(blockDTO);

      expect(result).toEqual(expectedResult);
      expect(bitcoinService.getBlockInfo).toHaveBeenCalledWith(
        blockDTO.block,
        blockDTO.blockType,
      );
    });

    it('should return block information when valid blockHeight is provided', async () => {
      const blockHeight = '823195';
      const blockDTO: BlockDTO = {
        block: blockHeight,
        get blockType() {
          if (/^[a-fA-F0-9]{64}$/.test(this.block)) {
            return 'blockHash';
          } else if (/^[0-9]+$/.test(this.block)) {
            return 'blockHeight';
          } else {
            return null;
          }
        },
      };

      const expectedResult = {
        result: {
          hash: '0000000000000000000122c5509951551a077bc81a093fdc428466a7ccdca945',
          confirmations: 259,
          height: 823195,
          version: 772849664,
        },
      };

      jest
        .spyOn(bitcoinService, 'getBlockInfo')
        .mockImplementation(async () => expectedResult);

      const result = await bitcoinController.getBlockInfo(blockDTO);

      expect(result).toEqual(expectedResult);
      expect(bitcoinService.getBlockInfo).toHaveBeenCalledWith(
        blockDTO.block,
        blockDTO.blockType,
      );
    });

  });
});
