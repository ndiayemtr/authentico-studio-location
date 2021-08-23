import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesMaterielsService } from 'src/app/services/categories-materiels.service';

@Component({
  selector: 'app-create-categories-materiels',
  templateUrl: './create-categories-materiels.component.html',
  styleUrls: ['./create-categories-materiels.component.css']
})
export class CreateCategoriesMaterielsComponent implements OnInit {
  categoriesMaterielsElt: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titleForm = 'Ajouter une categorie de materiel';

  constructor(private formBuilder: FormBuilder, 
              private categMatservice: CategoriesMaterielsService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) { 
    this.categoriesMaterielsElt= this.formBuilder.group({
      libelle: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.editValue();
  }

  ajoutEditCategoriesMateriels(){
    this.submitted = true;
    if (this.categoriesMaterielsElt.invalid) {
      return; 
    }

    if (this.id === null) {
      this.ajouCategoriesMateriels();
    }else{
      this.editCategoriesMateriels(this.id);
    }

  }

  editCategoriesMateriels(id:string){
    const categoriesMateriels: any = {
      libelle: this.categoriesMaterielsElt.value.libelle,
    }
    this.loading = true;
    this.categMatservice.actualiserCategorrieMateriel(id,categoriesMateriels).then(() =>{
      this.loading = false;
      this.toastr.info('Bien modifié', 'Categorie materiel');
      this.router.navigate(['/list-categories']);
      }).catch(error =>{
        console.log(error);
        this.loading = false;
      })

  }

  ajouCategoriesMateriels(){
    const categoriesMateriels: any = {
      libelle: this.categoriesMaterielsElt.value.libelle,
    }

    this.loading = true;

    this.categMatservice.ajoutCategorrieMateriel(categoriesMateriels).then(() =>{
      this.toastr.success('Bien enregistré', 'Categorie materiel');
      this.loading = false;
      this.router.navigate(['/list-categories']);
      }).catch(error =>{
        console.log(error);
        this.loading = false;
      })
  }

  

  editValue(){
    if (this.id != null) {
      this.loading = true;
      this.titleForm = 'Modifier une categorie de materiel';
      this.categMatservice.getCategorrieMateriel(this.id).subscribe(data  =>{
        this.loading = false;
        this.categoriesMaterielsElt.setValue({
          libelle: data.payload.data()['libelle'],
        });
      });      
    }
  }

}
