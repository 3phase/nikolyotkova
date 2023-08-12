import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nikolyotkova';
  constructor(
    public translateService: TranslateService
  ) {
    translateService.setDefaultLang('en');

    const culture = localStorage.getItem('culture');

    if (localStorage.getItem('culture') == null ||
      (culture !== 'en' && culture !== 'de') ||
      culture == 'en') {
      translateService.use('en');
      localStorage.setItem('culture', 'en');
    } else {
      if (culture === 'de') {
        translateService.use('de');
        localStorage.setItem('culture', 'de');
      }
    }
  }
}
