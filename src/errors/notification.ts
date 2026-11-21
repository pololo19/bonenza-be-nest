import { ErrorType } from './type';

export const isExistNotificationError: ErrorType = {
  code: 404,
  error: 'isExistNotification',
  description: 'The notification does not exist',
};
