import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { IntroPage } from './intro.page';

const routes: Routes = [
    {
        path: '',
        component: IntroPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IntroPage]
})
export class IntroPageModule {}
