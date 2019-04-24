import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { MeComponent } from '../components/dialogos/me/me.component';

const rutas: Routes = [
    {path: '', component: HomeComponent},
    {path: 'me', component: MeComponent}
];
// preloadingStrategy : precarga los módulos de carga diferida en segundo plano
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
