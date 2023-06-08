import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-module',
  templateUrl: './experience-module.component.html',
  styleUrls: ['./experience-module.component.scss']
})
export class ExperienceModuleComponent {
  @Input() public stickRight: boolean = false;
  @Input() public logoPath: string = "/assets/img/ck-logo.png";
  @Input() public title: string = "Change Title";
  @Input() public dateStart: string = "1970, 12, 1";
  @Input() public dateEnd: string = "1970, 12, 2";
  @Input() public companyName: string = "Change Company";
  @Input() public location: string = "Change Location";
  @Input() public description: string[] =
  [
    "Change description",
    "It takes in an array of string",
  ];
}
