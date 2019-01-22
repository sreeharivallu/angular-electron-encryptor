import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron-encyptor';
  encrypted_result = '';
  decrypted_result= '';
  iv='';

constructor(){
  this.iv = CryptoJS.enc.Utf8.parse('7061737323313233');
}
  
encrypt(secret:any, mystring:any){
  console.log('secret is', secret.value);
  var key = CryptoJS.enc.Utf8.parse(secret.value);
  
  this.encrypted_result = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(mystring.value), key,
  {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
}

decrypt(secret:any, encrypted:any){
  var key = CryptoJS.enc.Utf8.parse(secret.value);  
  var result = CryptoJS.AES.decrypt(encrypted.value, key, {
    keySize: 128 / 8,
    iv: this.iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  this.decrypted_result = result.toString(CryptoJS.enc.Utf8);
}
}


