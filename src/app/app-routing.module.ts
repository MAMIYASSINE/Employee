import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { DeletemployeeComponent } from './employee/deletemployee/deletemployee.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
const routes: Routes = [
  {path:'',component:ListemployeeComponent},
  {path:'add',component:AddemployeeComponent},
  {path:'edit/:id',component:EditemployeeComponent},
  {path:'delete/:id',component:DeletemployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
