import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from 'src/components/tabs/tabs.component';
import { PageBaseComponent } from 'src/pages/page-base/page-base.component';


const routes: Routes = [
  { path: '', component: PageBaseComponent },
  { path: 'tabs', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


