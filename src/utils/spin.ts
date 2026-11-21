import * as moment from 'moment';

export function goalWagerAmountUsdForSpin(vip_level: number) {
  return 200 * (Number(vip_level) + 1);
}

export function dailySpinTimes() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);

  startTime.set({ hour: 3, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ hour: 3, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime <= startTime.unix()) {
    startTime.subtract(1, 'days');
  }

  if (unixCurrentTime >= endTime.unix()) {
    endTime.add(1, 'days');
  }

  return {
    startTime: startTime.unix(),
    currentTime: currentTime.unix(),
    endTime: endTime.unix(),
  };
}
