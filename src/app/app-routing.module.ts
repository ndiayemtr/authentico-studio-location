import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoriesMaterielsComponent } from './components/create-categories-materiels/create-categories-materiels.component';
import { CreateMaterielsStudiosComponent } from './components/create-materiels-studios/create-materiels-studios.component';
import { ListCategoriesMaterielsComponent } from './components/list-categories-materiels/list-categories-materiels.component';
import { ListMaterielsStudiosComponent } from './components/list-materiels-studios/list-materiels-studios.component';


const routes: Routes = [
  {path: '', redirectTo: 'create-categories-materiels', pathMatch: 'full'},
  {path: 'list-categories', component: ListCategoriesMaterielsComponent},
  {path: 'create-categories-materiels', component:CreateCategoriesMaterielsComponent},
  {path: 'edit-categories-materiels/:id', component:CreateCategoriesMaterielsComponent},

  {path: 'list-materiels-studio', component: ListMaterielsStudiosComponent},
  {path: 'create-materiels-studio', component: CreateMaterielsStudiosComponent},
  {path: 'create-materiels-studio/:id', component: CreateMaterielsStudiosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
