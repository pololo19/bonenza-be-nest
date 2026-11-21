import { ErrorType } from './type';

export const exceedTotalPageNumberError: ErrorType = {
  code: 400,
  error: 'exceedTotalPageNumber',
  description: 'The current page exceeds the total number of pages',
};
