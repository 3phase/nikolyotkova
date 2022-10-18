import { Component } from '@angular/core';
import { LANG, ProjectService } from '../project/project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(
    private _projectService: ProjectService
  ) { }

  public get showVideo(): boolean {
    return this._projectService.currentLang === "bg" ? true : false;
  }


}
