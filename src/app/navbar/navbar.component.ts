import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public translationService: TranslateService
  ) { }

  ngOnInit(): void {
  }

  public changeLang(): void {
    if (this.translationService.currentLang === 'en') {
      this.translationService.use('de');
    } else {
      this.translationService.use('en');
    }
  }

}
