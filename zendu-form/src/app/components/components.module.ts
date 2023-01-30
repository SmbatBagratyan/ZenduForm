import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

// components
import { HeaderComponent } from './header/header.component';
import { SubmissionContainerComponent } from './submission-container/submission-container/submission-container.component';
import { SelectComponent } from './select-button/select/select.component';
import { SearchComponent } from './search/search/search.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button/toggle-button.component';
import { WorkFlowComponent } from './work-flow/work-flow/work-flow.component';
import { StatusButtonComponent } from './status-button/status-button/status-button.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAUJ83WxbyrGi31XVI22FRSsgxFDOvjXrs'
        })
    ],
    declarations: [HeaderComponent,
        SubmissionContainerComponent,
        SelectComponent,
        SearchComponent,
        CalendarComponent,
        ToggleButtonComponent,
        WorkFlowComponent,
        StatusButtonComponent],
    providers: [],
    exports: [HeaderComponent, SubmissionContainerComponent],
})

export class ComponentsModule { }
