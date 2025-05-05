import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-github-example';
  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: event.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
