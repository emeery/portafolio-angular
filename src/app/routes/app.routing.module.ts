import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { MeComponent } from '../components/me/me.component';



const rutas: Routes = [
    {path: '', component: HomeComponent},
    {path: 'me', component: MeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
