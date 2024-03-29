import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { EventsByCategoryPage } from './events-by-category/events-by-category.page';
import { DetailsPage } from './details/details.page';

import { SiriShortcuts } from '@ionic-native/siri-shortcuts/ngx';
import { SiriShortcutsPage } from './siri-shortcuts/siri-shortcuts.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';

@NgModule({
    declarations: [
        AppComponent,
        DetailsPage,
        EventsByCategoryPage,
        SiriShortcutsPage
    ],
    entryComponents: [
        DetailsPage,
        EventsByCategoryPage,
        SiriShortcutsPage
    ],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(), 
        AppRoutingModule, 
        HttpClientModule,
        IonicStorageModule.forRoot()
    ],
    providers: [
        SocialSharing,
        StatusBar,
        SplashScreen,
        SiriShortcuts,
        CallNumber,
        Calendar,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
