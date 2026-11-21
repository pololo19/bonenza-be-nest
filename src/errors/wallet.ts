import { ErrorType } from './type';

export const canClaimWithMinAmountOnRakebackError: ErrorType = {
  code: 400,
  error: 'canClaimWithMinimumAmount',
  description: 'The claimed amount must be equal to or greater than 5 USDT',
};

export const canClaimOnRakebackError: ErrorType = {
  code: 400,
  error: 'canClaimOnRakeback',
  description: 'The locked amount must be greater than 0',
};

export const disableSwap: ErrorType = {
  code: 400,
  error: 'disableSwap',
  description:
    'The token you are trying to swap is currently disabled and cannot be used for swapping.',
};
