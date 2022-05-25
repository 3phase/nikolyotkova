import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProjectService } from './project.service';

export interface IProject {
  id: number;
  title: string;
  description: string;
  heroImg?: string;
  logosDescImg?: string;
  logoDesc?: string;
  colorPalette?: string[];
  font?: string;
  projectDate?: string;
  usedPrograms?: string[];
  gallery?: string[];
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project$!: Observable<IProject>;

  constructor(
    private _route: ActivatedRoute,
    private _projectsService: ProjectService
  ) { }

  ngOnInit(): void {
    (this.project$ as any) = this._route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._projectsService.getProject(params.get('id')!))
    );
  }

}
