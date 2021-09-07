import { Pipe, PipeTransform } from '@angular/core';
import * as CryptoJS from 'crypto-js';  

@Pipe({
  name: 'passwordEncrypt'
})
export class PasswordEncryptPipe implements PipeTransform {

  transform(password: string): string {
    let secretKey = 'ng-ecommerce'
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(password), secretKey).toString();
    } catch (e) {
      console.log(e);
    }
    return password;
  }

}
