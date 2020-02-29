import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompDigimonComponent } from './componente/comp-digimon/comp-digimon.component';


const routes: Routes = [
  {path: 'digimons', component:CompDigimonComponent},
  {path: '**', pathMatch: 'full', redirectTo:'digimons'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
