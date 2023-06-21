import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-repository';

  private observer!: IntersectionObserver;
  private flexibleObserver!: IntersectionObserver;
  public helloInView = false;
  public experienceInView = false;
  public projectsInView = false;
  public contactInView = false;


  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.id === 'hello-section') {
          this.helloInView = entry.isIntersecting;
        } else if (entry.target.id === 'experience-section') {
          this.experienceInView = entry.isIntersecting;
        } else if (entry.target.id === 'projects-section') {
          this.projectsInView = entry.isIntersecting;
        } else if (entry.target.id === 'contact-section') {
          this.contactInView = entry.isIntersecting;
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.45
    });

    this.flexibleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.id === 'experience-section') {
          this.experienceInView = entry.isIntersecting;
        } else if (entry.target.id === 'projects-section') {
          this.projectsInView = entry.isIntersecting;
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
  }

  ngAfterViewInit() {
    const helloComponent = document.querySelector('#hello-section')!;
    const experienceComponent = document.querySelector('#experience-section')!;
    const projectsComponent = document.querySelector('#projects-section')!;
    const contactComponent = document.querySelector('#contact-section')!;

    this.observer.observe(helloComponent);
    this.observer.observe(experienceComponent);
    this.observer.observe(contactComponent);

    // The reason why we're not observing projects with default observer,
    // but observe experience with both default and flexible observers,
    // is that projects section gets too long in mobile and default observer
    // breaks both observers.
    // this.observer.observe(projectsComponent);

    this.flexibleObserver.observe(experienceComponent);
    this.flexibleObserver.observe(projectsComponent);
  }


}
