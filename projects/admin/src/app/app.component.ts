import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

lang:any;
  constructor(private translate: TranslateService) {
    if('lang'in localStorage){
      this.lang=localStorage.getItem("lang")
      this.translate.use(this.lang);
    }else{
      this.translate.use(this.translate.defaultLang);
    }

  }
  title="admin"
}
