import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoriesMaterielsService } from 'src/app/services/categories-materiels.service';
import { MaterielsStudioService } from 'src/app/services/materiels-studio.service';

@Component({
  selector: 'app-list-materiels-studios',
  templateUrl: './list-materiels-studios.component.html',
  styleUrls: ['./list-materiels-studios.component.css']
})
export class ListMaterielsStudiosComponent implements OnInit {

  listCategMat: any[] = [];
  listCategMateriel: any[] = [];

  constructor(private mateStudioService: MaterielsStudioService,
    private toastr: ToastrService,
    private cateMatService: CategoriesMaterielsService) { }

  ngOnInit(): void {
    this.getCategoriesMateriels2()
    this.getCategoriesMateriels();
  }

  getCategoriesMateriels(){
    this.mateStudioService.getCategorriesMateriels().subscribe(data =>{
      this.listCategMat = [];
      data.forEach(element => {
        this.listCategMat.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log('materiel studio',this.listCategMat);
    })
  }

  getCategoriesMateriels2(){
    this.cateMatService.getCategorriesMateriels().subscribe(data =>{
      this.listCategMateriel = [];
      data.forEach(element => {
        this.listCategMateriel.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log('categorie materiel',this.listCategMateriel);
    })
  }

  deleteCategorrieMateriel(id: string){
    this.mateStudioService.deleteCategorrieMateriel(id).then(() =>{
      this.toastr.success('supprimé', 'materiel studio');
      console.log('cate mat exist');
    }).catch(error =>{
      console.log(error);
    })
  }

}
