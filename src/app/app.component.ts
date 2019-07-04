import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param = { value: 'https://carloscaballero.io' };

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('eng');
  }
  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
