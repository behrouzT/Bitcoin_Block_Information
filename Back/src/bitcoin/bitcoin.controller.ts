import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { BlockDTO } from './dto/block.dto';
import { BitcoinService } from './bitcoin.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('bitcoin')
@Controller('bitcoin')
export class BitcoinController {
  constructor(private readonly block: BitcoinService) {}

  @Get(':block')
  async getBlockInfo(@Param(new ValidationPipe()) params: BlockDTO) {
    return this.block.getBlockInfo(params.block, params.blockType);
  }
}
