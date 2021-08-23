import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoriesMaterielsService } from 'src/app/services/categories-materiels.service';

@Component({
  selector: 'app-list-categories-materiels',
  templateUrl: './list-categories-materiels.component.html',
  styleUrls: ['./list-categories-materiels.component.css']
})
export class ListCategoriesMaterielsComponent implements OnInit {
  listCategMat: any[] = [];

  constructor(private categMateService: CategoriesMaterielsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCategoriesMateriels();
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
      console.log(this.listCategMat);
    })
  }

  deleteCategorrieMateriel(id: string){
    this.categMateService.deleteCategorrieMateriel(id).then(() =>{
      this.toastr.success('supprimé', 'Categorie materiel');
      console.log('cate mat exist');
    }).catch(error =>{
      console.log(error);
    })
  }

}
