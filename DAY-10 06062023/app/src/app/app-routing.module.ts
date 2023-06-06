import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path:'', component:ListComponent },
  { path:'add', component:AddComponent },
  { path:'update/:id', component:UpdateComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
