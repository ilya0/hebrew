import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdCardModule, MdButtonModule, MdListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutes } from './widgets.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetsRoutes),
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    ChartsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({apiKey: 'YOURAPIKEY'})
  ],
  declarations: [WidgetsComponent]
})

export class WidgetsModule {}
