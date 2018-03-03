import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import {ScrollPanelModule} from 'primeng/components/scrollpanel/scrollpanel';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel-component/left-panel.component';
import { RightPanelComponent } from './right-panel-component/right-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    SidebarModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
