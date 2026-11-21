import { ErrorType } from './type';

export const isNotExistUserError: ErrorType = {
  code: 404,
  error: 'isNotExistUser',
  description: 'User is not exist',
};

export const isNotExistMailError: ErrorType = {
  code: 404,
  error: 'isNotExistMail',
  description: 'Email does not exist',
};

export const isNotExistPhoneError: ErrorType = {
  code: 404,
  error: 'isNotExistPhone',
  description: 'Phone does not exist',
};

export const isNotExistMailOrPhoneError: ErrorType = {
  code: 404,
  error: 'isNotExistMailOrPhone',
  description: 'Email or Phone does not exist',
};

export const isNotMatchConfirmationPasswordError: ErrorType = {
  code: 400,
  error: 'isNotMatchConfirmationPassword',
  description: 'Confirmation Password does not match',
};

export const disabledAccountError: ErrorType = {
  code: 401,
  error: 'disabledAccount',
  description: 'Your account is disabled',
};

export const isNotValidTokenError: ErrorType = {
  code: 401,
  error: 'isNotValidToken',
  description: 'Token is not valid',
};

export const isExpiredTokenError: ErrorType = {
  code: 401,
  error: 'isExpiredToken',
  description: 'Token is expired',
};

export const isRequiredMailError: ErrorType = {
  code: 400,
  error: 'isRequiredMail',
  description: 'Please verify your email to activate this feature',
};

export const isExistMailError: ErrorType = {
  code: 409,
  error: 'isExistMail',
  description: 'This mail already exist',
};

export const isNotValidReferralError: ErrorType = {
  code: 400,
  error: 'isValidReferral',
  description: 'The referral code is not valid',
};

export const isExistPhoneError: ErrorType = {
  code: 409,
  error: 'isExistPhone',
  description: 'This phone already exist',
};

export const isNotAllowedUerError: ErrorType = {
  code: 401,
  error: 'isNotAllowedUser',
  description: 'This user is not allowed',
};

export const isNotPhoneVerifiedError: ErrorType = {
  code: 406,
  error: 'isNotPhoneVerified',
  description: 'This Phone is not verified',
};

export const isNotMailVerifiedError: ErrorType = {
  code: 406,
  error: 'isNotMailVerified',
  description: 'This Mail is not verified',
};

export const isNotMatchedCredentialError: ErrorType = {
  code: 400,
  error: 'isNotMatchededCredential',
  description: 'Invalid Email or Password!',
};

export const isNotMatchedPasswordError: ErrorType = {
  code: 400,
  error: 'isNotMatchedPassword',
  description: 'Invalid Password',
};

export const isNotMatchedEmailError: ErrorType = {
  code: 400,
  error: 'isNotMatchedEmail',
  description: 'Invalid Email',
};

export const isNotExistPasswordError: ErrorType = {
  code: 400,
  error: 'isNotExistPassword',
  description: 'Password is not set',
};

export const isNotMatched2FAError: ErrorType = {
  code: 400,
  error: 'isNotMatched2FA',
  description: 'Invalid two factor authenticate',
};

export const isNotMatchedCurrentPasswordError: ErrorType = {
  code: 400,
  error: 'isNotMatchedCurrentPassword',
  description: 'Current Password is not matched',
};

export const sendGridError: ErrorType = {
  code: 409,
  error: 'sendGridError',
  description: 'There is some problem in sending mail',
};

export const twiloError: ErrorType = {
  code: 409,
  error: 'twiloError',
  description: 'There is some problem in sending sms',
};

export const isNotMatchedVerificationCodeError: ErrorType = {
  code: 400,
  error: 'isNotMatchedVerificationCode',
  description: 'Verification Code is not matched',
};

export const isExpiredVerificationCodeError: ErrorType = {
  code: 400,
  error: 'isExpiredVerificationCode',
  description: 'Verification Code is expired',
};

export const isNotValidTgInfoError: ErrorType = {
  code: 400,
  error: 'isNotValidTgInfo',
  description: 'Your Telegram info is not valid',
};

export const isNotValidSelfExlusionTimeError: ErrorType = {
  code: 400,
  error: 'isNotValidSelfExlusionTime',
  description: 'Exlusion Time is not valid',
};

export const internalServerError: ErrorType = {
  code: 500,
  error: 'internalServerError',
  description: 'Internal Error',
};

export const isBadRequestError: ErrorType = {
  code: 400,
  error: 'badRequest',
  description: 'Your request is bad',
};

export const isNotAllowedActionError: ErrorType = {
  code: 404,
  error: 'isNotAllowedAction',
  description: 'This action is not allowed',
};

export const isNotMatchOTPError: ErrorType = {
  code: 400,
  error: 'isNotMatchOTPError',
  description: 'OTP is not valid',
};

export const isMatchReferralCodeError: ErrorType = {
  code: 400,
  error: 'isMatchReferralCodeError',
  description: 'The code is not valid',
};
