import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TooltipModule } from 'ng2-bootstrap/components/tooltip';
import { TranslateModule } from 'ng2-translate';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { InteractiveFormComponent } from './interactive-form/interactive-form.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InteractiveFormGeneratorComponent } from './interactive-form/interactive-form-generator/interactive-form-generator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { Http } from '@angular/http';
import { TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { HomePageComponent } from './home-page/home-page.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        InteractiveFormComponent,
        NavbarComponent,
        InteractiveFormGeneratorComponent,
        LandingPageComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        TooltipModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    providers: [
        Title,
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
