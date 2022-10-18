import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { IProject } from './project.component';
import { PROJECTS_BG } from './projects-bg';
import { PROJECTS_EN } from './projects-en';

export enum LANG {
  BG,
  EN
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _lang: BehaviorSubject<LANG> = new BehaviorSubject(this._getCulture);

  constructor(
    public translateService: TranslateService
  ) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === 'bg') {
        this._lang.next(LANG.BG);
        localStorage.setItem('culture', 'bg');
      } else {
        this._lang.next(LANG.EN);
        localStorage.setItem('culture', 'en');
      }
    });
  }

  ngOnDestroy() {
    this.translateService.onLangChange.unsubscribe();
  }

  public getProjects(): Observable<IProject[]> {
    return this._lang
      .pipe(
        map((lang: LANG) => {
          if (lang === LANG.BG) {
            return PROJECTS_BG;
          }
          return PROJECTS_EN;
        })
      );
  }

  public getProject(id: string | number) {
    if (!id) { id = 1; }
    return this.getProjects().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: IProject[]) => heroes.find(hero => hero.id === +id)!)
    );
  }

  public get currentLang(): string {
    return this.translateService.currentLang;
  }

  private get _getCulture(): LANG {
    return this.translateService.defaultLang === 'bg' ? LANG.BG : LANG.EN;
  }

}
