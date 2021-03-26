import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PslistComponent } from './components/pslist/pslist.component';
import { ProformComponent } from './components/proform/proform.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import * as $ from 'jquery';
import { CardComponent } from './components/card/card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CubitoComponent } from './cubito/cubito.component';

@NgModule({
  declarations: [
    AppComponent,
    PslistComponent,
    ProformComponent,
    NavigationComponent,
    LoginComponent,
    CardComponent,
    CubitoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js',{enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
