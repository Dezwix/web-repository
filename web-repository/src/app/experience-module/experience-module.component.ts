import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-module',
  templateUrl: './experience-module.component.html',
  styleUrls: ['./experience-module.component.scss']
})
export class ExperienceModuleComponent {
  public logoPath: string = "/assets/img/dezwixVector.png"
  public title: string = "title";
  public dateStart: Date = new Date(1970, 12, 1);
  public dateEnd: Date = new Date(1970, 12, 2);
  public companyName: string = "company";
  public location: string = "location";
  public description: string = "description";
}
