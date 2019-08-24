import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login'
import { AssetViewComponent, AssetListComponent } from './asset';
import { BlankComponent } from './_shared'


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent},
  { path: 'assets', component: AssetListComponent },
  { path: 'assets/:id', component: AssetViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
