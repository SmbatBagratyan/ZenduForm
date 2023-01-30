import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
    imports: [
        ComponentsModule
    ],
    declarations: [HomePageComponent],
    providers: [],
    exports: [HomePageComponent]
})

export class PagesModule { }
