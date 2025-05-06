import { Component } from '@angular/core';
import { GtmService } from './services/gtm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-github-example';
  constructor(
    private gtm: GtmService,
  ) {
    this.gtm.init('GTM-XXXXXXX');
  }
}
