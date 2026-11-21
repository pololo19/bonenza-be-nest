import { ErrorType } from './type';

export const isNotEnoughBonusPoolError: ErrorType = {
  code: 400,
  error: 'isNotEnoughBonusPool',
  description: 'Your bonus pool is not enough, please charge by deposit',
};

export const isExistBonusError: ErrorType = {
  code: 404,
  error: 'isExistLevelUpBonus',
  description: 'The bonus does not exist',
};

export const isClaimBonusError: ErrorType = {
  code: 400,
  error: 'isClaimBonus',
  description: 'The bonus is already claimed',
};

export const isExistBonusTypeError: ErrorType = {
  code: 404,
  error: 'isExistBonusType',
  description: 'The bonus type does not exist',
};

//  Quest
export const isFinishedQuestToClaimError: ErrorType = {
  code: 400,
  error: 'isFinishedQuestToClaim',
  description: 'The quest must be finished to claim',
};

//  Spin
export const isEmptyAvailableSpinError: ErrorType = {
  code: 400,
  error: 'isEmptyAvailableSpin',
  description: 'You have no available spin',
};

export const isVIP22ForSuperSpinError: ErrorType = {
  code: 403,
  error: 'isVIP22ForSuperSpin',
  description: 'Your VIP must be at least 22',
};

export const isVIP70ForMegaSpinError: ErrorType = {
  code: 403,
  error: 'isVIP70ForMegaSpin',
  description: 'Your VIP must be at least 70',
};

export const isExistAirdropCodeError: ErrorType = {
  code: 404,
  error: 'isExistAirdropCode',
  description: 'The airdrop code does not exist or has expired',
};

export const exceedAirdropTimesError: ErrorType = {
  code: 400,
  error: 'exceedAirdropTimes',
  description: 'You have exceeded the airdrop times',
};

export const redeemedAirdropBonusError: ErrorType = {
  code: 400,
  error: 'redeemedAirdropBonus',
  description: 'The airdrop bonus is already redeemed',
};
