import * as moment from 'moment';

export function getGoalAmountUsdForJustWagerOn(vip_level: number) {
  return 100 * (Number(vip_level) + 1);
  // return 5;
}

export function getBonusAmountForJustWagerOn(vip_level: number) {
  return 0.1 * (Number(vip_level) + 1);
}

export function getGoalAmountUsdForWagerWeek(vip_level: number) {
  return 700 * (Number(vip_level) + 1);
  // return 10;
}

export function getBonusAmountForWagerWeek(vip_level: number) {
  return Number(vip_level) + 1;
}

export function getGoalAmountUsdForBigWin(vip_level: number) {
  return 0.4 * (Number(vip_level) + 1);
  // return 0.4;
}

export function getGoalMultiplierForBigWin(vip_level: number) {
  return 50;
  // return 2;
}

export function getBonusAmountForBigWin(vip_level: number) {
  return 0.1 * (Number(vip_level) + 1);
}

export function getGoalAmountUsdForSlotsMaster(vip_level: number) {
  return 100 * (Number(vip_level) + 1);
  // return 5;
}

export function getBonusAmountForSlotsMaster(vip_level: number) {
  return 0.1 * (Number(vip_level) + 1);
}

//  unixCurrentTime = 13:00:00 at everyday
export function guessDailyQuestTime(unixCurrentTime: number) {
  const startTime = moment.unix(unixCurrentTime).utcOffset(0);
  const endTime = moment.unix(unixCurrentTime).utcOffset(0);

  startTime.set({ hour: 8, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ hour: 8, minute: 0, second: 0, millisecond: 0 });

  if (unixCurrentTime > startTime.unix()) {
    startTime.add(1, 'days');
    endTime.add(2, 'days');
  } else {
    endTime.add(1, 'days');
  }

  return {
    startTime: startTime.unix(),
    endTime: endTime.unix(),
  };
}

//  unixCurrentTime = 13:00:00 at Sunday
export function guessWeeklyQuestTime(unixCurrentTime: number) {
  const startTime = moment.unix(unixCurrentTime).utcOffset(0);
  const endTime = moment.unix(unixCurrentTime).utcOffset(0);

  startTime.set({ day: 0, hour: 8, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ day: 0, hour: 8, minute: 0, second: 0, millisecond: 0 });

  if (unixCurrentTime > startTime.unix()) {
    startTime.add(1, 'days');
    endTime.add(8, 'days');
  } else {
    endTime.add(7, 'days');
  }

  return {
    startTime: startTime.unix(),
    endTime: endTime.unix(),
  };
}

export function dailyQuestTime() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);

  // Set the time to 02:00:00
  startTime.set({ hour: 8, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ hour: 8, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime < startTime.unix()) {
    startTime.subtract(1, 'days');
  } else {
    endTime.add(1, 'days');
  }

  return {
    startTime: startTime.unix(),
    currentTime: unixCurrentTime,
    endTime: endTime.unix(),
  };
}

export function weeklyQuestTime() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);

  startTime.set({ day: 1, hour: 8, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ day: 1, hour: 8, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime < startTime.unix()) {
    startTime.subtract(7, 'days');
  } else {
    endTime.add(7, 'days');
  }

  return {
    startTime: startTime.unix(),
    currentTime: unixCurrentTime,
    endTime: endTime.unix(),
  };
}

export function pastTwoWeeksQuestTime() {
  const startTime = moment();
  const currentTime = moment();
  const endTime = moment();
  const middleTime = moment();

  startTime.set({ day: 1, hour: 8, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ day: 1, hour: 8, minute: 0, second: 0, millisecond: 0 });
  middleTime.set({ day: 1, hour: 8, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime >= endTime.unix()) {
    endTime.add(7, 'days');
    startTime.subtract(7, 'days');
  } else {
    startTime.subtract(14, 'days');
    middleTime.subtract(7, 'days');
  }

  return {
    startTime: startTime.unix(),
    middleTime: middleTime.unix(),
    endTime: endTime.unix(),
  };
}

export function getDailyQuestGenerateTime(start_time: number) {
  const startTime = moment.unix(start_time);

  startTime.set({ hour: 13, minute: 0, second: 0, millisecond: 0 });

  return startTime.unix();
}

export function getWeeklyQuestGenerateTime(end_time: number) {
  const endTime = moment.unix(end_time);

  endTime.subtract(1, 'days');
  endTime.set({ hour: 13, minute: 0, second: 0, millisecond: 0 });

  return endTime.unix();
}
