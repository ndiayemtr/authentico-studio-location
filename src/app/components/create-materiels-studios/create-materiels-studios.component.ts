import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielsStudioService } from 'src/app/services/materiels-studio.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriesMaterielsService } from 'src/app/services/categories-materiels.service';
@Component({
  selector: 'app-create-materiels-studios',
  templateUrl: './create-materiels-studios.component.html',
  styleUrls: ['./create-materiels-studios.component.css']
})
export class CreateMaterielsStudiosComponent implements OnInit {
  materielsStudioElt: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titleForm = 'Ajouter un materiel studio';
  listCategMat: any[] = [];
  cateMatSelect : null;

  constructor(
    private formBuilder: FormBuilder,
    private matStudioService: MaterielsStudioService,
    private categMateService: CategoriesMaterielsService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
  ) {
    this.materielsStudioElt = this.formBuilder.group({
      libelle: ['', Validators.required],
      model: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      prixLocation: ['', Validators.required],
      qteDisponible: ['', Validators.required],
      categoriMateriel: ['', Validators.required],

    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
   }

   getCategoriesMateriels(){
    this.categMateService.getCategorriesMateriels().subscribe(data =>{
      this.listCategMat = [];
      data.forEach(element => {
        this.listCategMat.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

   ngOnInit(): void {
    this.getCategoriesMateriels();
    this.editValue();
  }

  ajoutEditCategoriesMateriels(){
    this.submitted = true;
    if (this.materielsStudioElt.invalid) {
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
      libelle: this.materielsStudioElt.value.libelle,
      model: this.materielsStudioElt.value.model,
      image: this.materielsStudioElt.value.image,
      description: this.materielsStudioElt.value.description,
      prixLocation: this.materielsStudioElt.value.prixLocation,
      qteDisponible: this.materielsStudioElt.value.qteDisponible,
      categoriMateriel: this.cateMatSelect,
    }

    this.loading = true;
    this.matStudioService.actualiserCategorrieMateriel(id,categoriesMateriels).then(() =>{
      this.loading = false;
      this.toastr.info('Bien modifié', 'Categorie materiel');
      this.router.navigate(['/list-materiels-studio']);
      }).catch(error =>{
        console.log(error);
        this.loading = false;
      })

  }


  ajouCategoriesMateriels(){
    
    const categoriesMateriels: any = {
      libelle: this.materielsStudioElt.value.libelle,
      model: this.materielsStudioElt.value.model,
      image: this.materielsStudioElt.value.image,
      description: this.materielsStudioElt.value.description,
      prixLocation: this.materielsStudioElt.value.prixLocation,
      qteDisponible: this.materielsStudioElt.value.qteDisponible,
      categoriMateriel: this.cateMatSelect,
    }
    
    this.loading = true;

    this.matStudioService.ajoutCategorrieMateriel(categoriesMateriels).then(() =>{
      this.toastr.success('Bien enregistré', 'materiel studio');
      this.loading = false;
      this.router.navigate(['/list-materiels-studio']);
      }).catch(error =>{
        console.log(error);
        this.loading = false;
      })
  }

  

  editValue(){
    if (this.id != null) {
      console.log('editValue');
      this.loading = true;
      this.titleForm = 'Modifier un materiel studio';
      this.matStudioService.getCategorrieMateriel(this.id).subscribe(data  =>{
        console.log(data);
        this.loading = false;
        this.materielsStudioElt.setValue({
          libelle: data.payload.data()['libelle'],
          model: data.payload.data()['model'],
          image: data.payload.data()['image'],
          description: data.payload.data()['description'],
          prixLocation: data.payload.data()['prixLocation'],
          qteDisponible: data.payload.data()['qteDisponible'],
          categoriMateriel: data.payload.data()['categoriMateriel'],
        });
      });      
    }
  }

}


