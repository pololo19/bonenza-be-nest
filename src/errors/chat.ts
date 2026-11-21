import { ErrorType } from './type';

export const isExceedMessageCount: ErrorType = {
  code: 400,
  error: 'isExceedMessageCount',
  description: 'You can leave 5 messages as maximum per day!',
};
