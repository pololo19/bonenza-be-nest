import { AES, enc } from 'crypto-js';

export const encryptPrivateKey = (privateKey: string, passPhrase: string) => {
  return AES.encrypt(privateKey, passPhrase).toString();
};

export const decryptPrivateKey = (
  encryptedPrivateKey: string,
  passPhrase: string,
) => {
  return AES.decrypt(encryptedPrivateKey, passPhrase).toString(enc.Utf8);
};
