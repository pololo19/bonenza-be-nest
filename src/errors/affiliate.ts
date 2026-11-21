import { ErrorType } from './type';

export const isEmptyAvailableCommissionRewardsError: ErrorType = {
  code: 400,
  error: 'isEmptyAvailableCommissionRewards',
  description: 'No available commission rewards',
};

export const isEmptyAvailableReferralRewardsError: ErrorType = {
  code: 400,
  error: 'isEmptyAvailableReferralRewards',
  description: 'No available referral rewards',
};

export const isEmptyAvailableAffiliateRewardsError: ErrorType = {
  code: 400,
  error: 'isEmptyAvailableAffiliateRewards',
  description: 'No available affiliate rewards',
};
