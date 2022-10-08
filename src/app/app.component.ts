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
      (culture !== 'en' && culture !== 'bg') ||
      culture == 'en') {
      translateService.use('en');
      localStorage.setItem('culture', 'en');
    } else {
      if (culture === 'bg') {
        translateService.use('bg');
        localStorage.setItem('culture', 'bg');
      }
    }
  }
}
