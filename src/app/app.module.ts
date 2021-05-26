import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ShadowDirective } from './directives/shadow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillComponent } from './components/about-me/skill/skill.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ApplicationItemComponent } from './components/portfolio/application-item/application-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './services/navbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphicItemComponent } from './components/portfolio/graphic-item/graphic-item.component';
import { RouterModule, Routes } from '@angular/router';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ShadowDirective,
    AboutMeComponent,
    SkillComponent,
    PortfolioComponent,
    ApplicationItemComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    GraphicItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: AppComponent,
      },
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
