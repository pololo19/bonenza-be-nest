import { ErrorType } from './type';

export const restrictWithdrawError: ErrorType = {
  code: 403,
  error: 'restrictWithdraw',
  description: 'Your withdraw is restricted for 24 hours',
};

export const notCompleteRollOverToWithdrawError: ErrorType = {
  code: 400,
  error: 'notCompleteRollOverToWithdraw',
  description: 'Please complete rollover to withdraw funds',
};

export const exceedAvailableWithdrawalAmountError: ErrorType = {
  code: 400,
  error: 'exceedAvailableWithdrawalAmount',
  description: 'The available withdrawal amount has been exceeded',
};

export const exceedAvailableBalanceToWithdrawError: ErrorType = {
  code: 400,
  error: 'exceedAvailableBalanceToWithdraw',
  description: 'The withdrawal amount exceeds the available balance',
};

export const notReachedMinAmountForTipError: ErrorType = {
  code: 400,
  error: 'notReachedMinAmountForTip',
  description: 'The amount is below the minimum amount',
};

export const exceedAmountForTipError: ErrorType = {
  code: 400,
  error: 'exceedAmountForTip',
  description: 'The amount exceeds the max amount',
};

export const notZeroAmountForTipError: ErrorType = {
  code: 400,
  error: 'notZeroAmountForTip',
  description: 'The amount must be over 0',
};

export const notMinimumVipLevelForTipError: ErrorType = {
  code: 400,
  error: 'notMinimumVipLevelForTip',
  description: 'The VIP level is below the minimum level',
};

export const isGreaterThanWithdrawFeeError: ErrorType = {
  code: 400,
  error: 'isGreaterThanWithdrawFee',
  description: 'The amount must be greater than the withdrawal fee',
};

export const failedWithdrawError: ErrorType = {
  code: 400,
  error: 'failedWithdraw',
  description: 'Withdraw failed',
};

export const disabledWithdrawError: ErrorType = {
  code: 400,
  error: 'disabledWithdraw',
  description: 'Your withdraw is disabled, Please contact Admin.',
};
