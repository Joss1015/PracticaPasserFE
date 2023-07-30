import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccupationComponent } from 'src/pages/page-base/occupation/occupation.component';
import { PageBaseComponent } from 'src/pages/page-base/page-base.component';


const routes: Routes = [
  { path: '', component: PageBaseComponent, children:[{ path: 'ocupaciones', component: OccupationComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


