import { ErrorType } from './type';

export const isExistGameError: ErrorType = {
  code: 404,
  error: 'isExistGame',
  description: 'The game does not exist',
};

export const canDetectLocationError: ErrorType = {
  code: 400,
  error: 'canDetectLocation',
  description: "The location can't be detected",
};

export const isExistCurrencyError: ErrorType = {
  code: 404,
  error: 'isExistCurrency',
  description: 'The currency does not exist',
};

export const isExistCurrencyTypeError: ErrorType = {
  code: 404,
  error: 'isExistCurrencyType',
  description: 'The currency type does not exist',
};

export const isMatchedWithSignError: ErrorType = {
  code: 403,
  error: 'isMatchedWithSign',
  description: 'The request sign does not match',
};

export const isExistGameRatingError: ErrorType = {
  code: 400,
  error: 'isExistGameRating',
  description: 'You already gave rating to this game',
};

export const isExistGameReportError: ErrorType = {
  code: 400,
  error: 'isExistGameReport',
  description: 'You already reported this game',
};
