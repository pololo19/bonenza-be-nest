import * as moment from 'moment';

export function cashbackPastWeeklyTimes() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);

  startTime.set({ day: 5, hour: 12, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ day: 5, hour: 12, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime < startTime.unix()) {
    startTime.subtract(2, 'weeks');
    endTime.subtract(1, 'weeks');
  } else {
    startTime.subtract(1, 'weeks');
  }

  return {
    startTime: startTime.unix(),
    endTime: endTime.unix(),
  };
}

export function cashbackWeeklyTimes() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);

  startTime.set({ day: 5, hour: 12, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ day: 5, hour: 12, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime < startTime.unix()) {
    startTime.subtract(1, 'weeks');
  } else {
    endTime.add(1, 'weeks');
  }

  return {
    startTime: startTime.unix(),
    currentTime: currentTime.unix(),
    endTime: endTime.unix(),
  };
}

export function cashbackPastMonthlyTimes() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);

  startTime.set({ date: 15, hour: 12, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ date: 15, hour: 12, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime < startTime.unix()) {
    startTime.subtract(2, 'months');
    endTime.subtract(1, 'months');
  } else {
    startTime.subtract(1, 'months');
  }

  return {
    startTime: startTime.unix(),
    endTime: endTime.unix(),
  };
}

export function cashbackMonthlyTimes() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);

  startTime.set({ date: 15, hour: 12, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ date: 15, hour: 12, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime < startTime.unix()) {
    startTime.subtract(1, 'months');
  } else {
    endTime.add(1, 'months');
  }

  return {
    startTime: startTime.unix(),
    currentTime: currentTime.unix(),
    endTime: endTime.unix(),
  };
}
