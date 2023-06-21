import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-module',
  templateUrl: './project-module.component.html',
  styleUrls: ['./project-module.component.scss']
})
export class ProjectModuleComponent {
  @Input() public tryIt: boolean = true;
  @Input() public thumbnailPath: string = "/assets/img/ck-logo.png";
  @Input() public thumbnailLink: string = "#";
  @Input() public linkTarget: string = "_blank";
  @Input() public title: string = "Change Title";
  @Input() public description: string = "Change description";

  public OpenLink(link: string, linkTarget: string): void {
    window.open(link, '_blank');
  }
}
