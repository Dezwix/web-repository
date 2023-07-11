import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root-sidenav',
  templateUrl: './root-sidenav.component.html',
  styleUrls: ['./root-sidenav.component.scss']
})
export class RootSidenavComponent {
  @Input() projectsInView = false;
  @Input() contactInView = false;
}
