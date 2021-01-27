import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PslistComponent} from './components/pslist/pslist.component';
import { ProformComponent } from  './components/proform/proform.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'pslist',
    pathMatch: 'full'
  },
  {
    path: 'pslist',
    component: PslistComponent
  },
  {
    path: 'proform',
    component: ProformComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
