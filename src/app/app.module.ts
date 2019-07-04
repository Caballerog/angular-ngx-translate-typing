import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Translations } from './services/translations';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

// Core.module
export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return from(import(`../assets/i18n/${lang}.ts`)).pipe(pluck('default'));
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    })
  ],
  providers: [Translations],
  bootstrap: [AppComponent]
})
export class AppModule {}
