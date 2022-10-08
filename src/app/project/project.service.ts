import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IProject } from './project.component';
import { PROJECTS_BG } from './projects-bg';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getProjects(): Observable<IProject[]> {
    return of(PROJECTS_BG);
  }

  public getProject(id: string | number) {
    if (!id) { id = 1; }
    return this.getProjects().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: IProject[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}
