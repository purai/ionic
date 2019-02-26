import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EventsService } from '../services/events.service';
import { CitiesService } from '../services/cities.service';
import { DetailsPage } from '../details/details.page';

@Component({
    selector: 'app-city',
    templateUrl: 'city.page.html',
    styleUrls: ['city.page.scss']
})
export class CityPage implements OnInit {
  
    sliderConfig = {
        slidesPerView: 1.2
    };

    toolbarColor: string;
    cities: any = [];
    events: any = [];
    
    constructor(private iab: InAppBrowser, public actionSheetController: ActionSheetController, public modalController: ModalController, private citiesService: CitiesService, private eventsService: EventsService, public navController: NavController, public storage: Storage) {
        this.toolbarColor = 'primary';
    }

    ngOnInit() {
        this.citiesService
            .fetchFeed('cities')
            .subscribe(data => {
                this.cities = data;
            })

        this.eventsService
            .fetchFeed('events')
            .subscribe(data => {
                this.events = data;
            })
    }

    async showDetails(event: any) {
        const modal = await this.modalController.create({
            component: DetailsPage,
            componentProps: {
                event: event
            }
        });
        return await modal.present();
    }

    async settings_menu() {
        const actionSheet = await this.actionSheetController.create({
            buttons: [
                {
                    text: 'Sobre',
                    icon: 'help',
                    handler: () => {
                        const browser = this.iab.create('https://google.com');
                        browser.show();
                    }
                },{
                    text: 'Sair',
                    icon: 'log-out',
                    handler: () => {
                        this.storage.get('intro-done6').then(done => {
                            if (done) {
                                this.storage.set('intro-done6', true);
                                this.navController.navigateRoot('/intro');
                            }
                        });
                    }
                },{
                    text: 'Cancelar',
                    icon: 'close',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }
}
