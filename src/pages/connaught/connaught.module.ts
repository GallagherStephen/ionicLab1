import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnaughtPage } from './connaught';
import {ConnaughtCountiesPage} from '../connaught-counties/connaught-counties'; //added when adding/refrencing a second page 
@NgModule({
  declarations: [
    ConnaughtPage,
    ConnaughtCountiesPage //added when adding/refrencing a second page 
  ],
  imports: [
    IonicPageModule.forChild(ConnaughtPage),
  ],
})
export class ConnaughtPageModule {}
