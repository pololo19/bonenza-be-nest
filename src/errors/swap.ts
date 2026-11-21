import { ErrorType } from './type';

export const isExistSourceCryptoError: ErrorType = {
  code: 404,
  error: 'isExistSourceCrypto',
  description: 'The source cryptocurrency does not exist',
};

export const isExistDestinationCryptoError: ErrorType = {
  code: 404,
  error: 'isExistDestinationCrypto',
  description: 'The destination cryptocurrency does not exist',
};

export const isEnoughBalanceForSwapError: ErrorType = {
  code: 404,
  error: 'isEnoughBalanceForSwap',
  description: 'The balance is not enough to swap',
};

export const isMiminimumBaseAmountUsdForSwapError: ErrorType = {
  code: 400,
  error: 'isMiminimumBaseAmountUsdForSwap',
  description: 'The minimum base amount for swap is 5 USD',
};
