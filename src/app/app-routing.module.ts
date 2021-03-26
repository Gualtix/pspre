import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PslistComponent} from './components/pslist/pslist.component';
import { ProformComponent } from  './components/proform/proform.component';
import { LoginComponent } from  './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { CubitoComponent } from './cubito/cubito.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'cubito',
    pathMatch: 'full'
  },
  {
    path: 'pslist',
    component: PslistComponent
  },
  {
    path: 'proform',
    component: ProformComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'cubito',
    component: CubitoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
