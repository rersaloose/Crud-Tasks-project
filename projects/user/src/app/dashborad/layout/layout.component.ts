import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  // lang: any = "en"
  // constructor(private trnslat: TranslateService) {
  //   this.lang = this.trnslat.currentLang
  // }
  // changeLang() {
  //   if (this.lang == 'en') {
  //     localStorage.setItem('lang', 'ar')
  //   } else {
  //     localStorage.setItem('lang', 'en')
  //   }
  //   window.location.reload()
  // }
  // ngOnInit(): void {

  // }




  logout(){
    localStorage.removeItem('token')
  }
}
