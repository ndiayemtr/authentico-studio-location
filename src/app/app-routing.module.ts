import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoriesMaterielsComponent } from './components/create-categories-materiels/create-categories-materiels.component';
import { ListCategoriesMaterielsComponent } from './components/list-categories-materiels/list-categories-materiels.component';


const routes: Routes = [
  {path: '', redirectTo: 'create-categories-materiels', pathMatch: 'full'},
  {path: 'list-categories', component: ListCategoriesMaterielsComponent},
  {path: 'create-categories-materiels', component:CreateCategoriesMaterielsComponent},
  {path: 'edit-categories-materiels/:id', component:CreateCategoriesMaterielsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
