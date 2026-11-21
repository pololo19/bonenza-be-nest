import { enc, HmacSHA256 } from 'crypto-js';
import { User } from 'entities';
import * as moment from 'moment';
import { authenticator } from 'otplib';

export const randomString = (length: number) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};

// expired time 5mins
export const getExpiredTime = () => {
  return new Date(new Date(new Date().toUTCString()).getTime() + 300000);
};

export const generateOTPAuthUrl = (email: string, secretKey: string) => {
  const res = authenticator.keyuri(email, 'Bonenza', secretKey);
  return res;
};

export const convertDataUrlToBase64 = (val: any) => {
  if (typeof val != 'string') return '';
  const base64String = val.substring(val.indexOf(',') + 1);
  return base64String;
};

export const generateReferralCode = (key: number) => {
  const now = moment();
  const milisecond = now.milliseconds(); // xxx
  const second = now.seconds(); // xx

  // expected key value is less than 100000000
  const formatedKey = key.toString();
  let resKey = formatedKey;
  for (let i = 0; i < 9 - formatedKey.length; i++) {
    resKey = '0' + resKey;
  }

  const timeStamp = `${
    milisecond > 100 ? milisecond : 100 + milisecond
  }${second}${resKey}`;
  const result = decimalToBase60(Number(timeStamp));
  return result;
};

export function decimalToBase60(decimal: number) {
  // console.log(decimal, '-----56');
  let base60 = '';
  const symbols =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  while (decimal > 0) {
    const remainder = decimal % 60;
    base60 = symbols[remainder] + base60;
    decimal = Math.floor(decimal / 60);
  }

  return base60;
}

export function getSignature(body: string, auth_token: string) {
  return enc.Hex.stringify(HmacSHA256(body, auth_token));
}

export function fromSubunit(value: number, decimals: number | string) {
  return value / Math.pow(10, Number(decimals));
}

export function toSubunit(value: number, decimals: number | string) {
  return Math.floor(value * Math.pow(10, Number(decimals)));
}

export function getISODate(date) {
  const originalDate = new Date(date);
  return originalDate.toISOString();
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getThemeName(theme: string) {
  return capitalizeFirstLetter(theme.split('_').join(' '));
}

export function getThemeIdentifier(theme: string) {
  return theme.split(' ').join('_').toLowerCase();
}

export function timestampForHourNow() {
  const currentDate = moment().utcOffset(0);

  currentDate.set({ minute: 0, second: 0, millisecond: 0 });

  return currentDate.unix();
}

export function enumToKeyValue(obj: any): any {
  return Object.keys(obj)
    .filter((k) => typeof obj[k as any] === 'number')
    .reduce((acc, key) => {
      acc[obj[key]] = key;
      return acc;
    }, {});
}

export function fixedNumber(num: number, decimals: number = 2) {
  return Math.floor(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export function removeIPv6Prefix(ipAddress) {
  if (ipAddress.startsWith('::ffff:')) {
    return ipAddress.slice(7);
  } else {
    return ipAddress;
  }
}

export function _convertUser(user: User) {
  return {
    allowed: user.allowed,
    avatar: user.avatar,
    country: user.country,
    created_at: user.created_at,
    disabled_to: user.disabled_to,
    email: user.email,
    email_verified: user.email_verified,
    id: user.id,
    kyc: user.kyc,
    name: user.name,
    phone: user.phone,
    phone_verified: user.phone_verified,
    referral_code: user.referral_code,
    restricted_to: user.restricted_to,
    disabled_withdraw: user.disabled_withdraw,
    rollover_at: user.rollover_at,
    setting_fiat_currency: user.setting_fiat_currency,
    setting_hide_gaming_data: user.setting_hide_gaming_data,
    setting_hide_user_name: user.setting_hide_user_name,
    setting_language: user.setting_language,
    setting_receive_market_promotion: user.setting_receive_market_promotion,
    setting_refuse_tip_from_strangers: user.setting_refuse_tip_from_strangers,
    setting_show_full_name_crypto: user.setting_show_full_name_crypto,
    setting_view_in_fiat: user.setting_view_in_fiat,
    telegram_user_name: user.telegram_user_name,
    tfa: user.tfa,
    total_spin_count: user.total_spin_count,
    vip_level: user.vip_level,
    wallet_address: user.wallet_address,
    role: user.role,
  };
}

export * from './bot';
export * from './cashback';
export * from './contest';
export * from './emailHtml';
export * from './quest';
export * from './spin';
