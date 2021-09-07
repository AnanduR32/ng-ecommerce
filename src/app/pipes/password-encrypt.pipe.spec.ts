import { PasswordEncryptPipe } from './password-encrypt.pipe';

describe('PasswordEncryptPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordEncryptPipe();
    expect(pipe).toBeTruthy();
  });
});
