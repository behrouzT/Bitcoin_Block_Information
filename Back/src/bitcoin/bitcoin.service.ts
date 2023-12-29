import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BitcoinService {
  private readonly baseUrl = 'https://fabled-icy-sheet.btc.quiknode.pro/';

  constructor(private readonly httpService: HttpService) {}

  private async makeRequest(method: string, params: any[]) {
    const headers = { 'Content-Type': 'application/json' };
    const data = JSON.stringify({ method, params });

    try {
      const response = await firstValueFrom(
        this.httpService.post(this.baseUrl, data, { headers }).pipe(
          catchError((error) => {
            throw new HttpException(
              {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message || 'Internal Server Error',
              },
              HttpStatus.INTERNAL_SERVER_ERROR,
              {
                cause: 'INTERNAL_SERVER_ERROR',
              },
            );
          }),
        ),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message || 'Not Found',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: 'NOT_FOUND',
        },
      );
    }
  }

  private async getBlockHash(blockHeight: number) {
    return this.makeRequest('getblockhash', [blockHeight]);
  }

  private async getBlock(blockHash: string) {
    return this.makeRequest('getblock', [blockHash]);
  }

  async getBlockInfo(block: string, type: 'blockHash' | 'blockHeight') {
    if (type === 'blockHash') {
      return this.getBlock(block);
    } else {
      const retrievedBlockHash = await this.getBlockHash(+block);
      return this.getBlock(retrievedBlockHash['result']);
    }
  }
}
