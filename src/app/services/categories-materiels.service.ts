import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesMaterielsService {

  constructor(private categMatservice: AngularFirestore) { }

  ajoutCategorrieMateriel(data: any): Promise<any> {
    return this.categMatservice.collection('categoriesMateriels').add(data);
  }

  getCategorriesMateriels(): Observable<any>{
    return this.categMatservice.collection('categoriesMateriels').snapshotChanges();
  }

  getCategorrieMateriel(id:string): Observable<any>{
    return this.categMatservice.collection('categoriesMateriels').doc(id).snapshotChanges();
  }

  deleteCategorrieMateriel(id: string): Promise<any>{
    return this.categMatservice.collection('categoriesMateriels').doc(id).delete();
  }

  actualiserCategorrieMateriel(id: string, data:any): Promise<any>{
    return this.categMatservice.collection('categoriesMateriels').doc(id).update(data);
  }
}
