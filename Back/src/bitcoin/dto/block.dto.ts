import {
  IsString,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
} from 'class-validator';

@ValidatorConstraint({ name: 'blockIdentifier', async: false })
export class BlockIdentifierValidator implements ValidatorConstraintInterface {
  public static readonly blockHashRegex = /^[a-fA-F0-9]{64}$/;
  public static readonly blockHeightRegex = /^[0-9]+$/;

  validate(blockIdentifier: string) {
    return (
      BlockIdentifierValidator.blockHashRegex.test(blockIdentifier) ||
      BlockIdentifierValidator.blockHeightRegex.test(blockIdentifier)
    );
  }
}

export class BlockDTO {
  @Validate(BlockIdentifierValidator, {
    message: 'INVALID_INPUT',
  })
  @IsString()
  block: string;

  get blockType(): 'blockHash' | 'blockHeight' {
    if (BlockIdentifierValidator.blockHashRegex.test(this.block)) {
      return 'blockHash';
    } else if (BlockIdentifierValidator.blockHeightRegex.test(this.block)) {
      return 'blockHeight';
    } else {
      return null;
    }
  }
}
