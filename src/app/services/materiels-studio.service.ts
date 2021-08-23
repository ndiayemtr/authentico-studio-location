import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterielsStudioService {

  constructor(private matStudioService: AngularFirestore) { }

  ajoutCategorrieMateriel(data: any): Promise<any> {
    return this.matStudioService.collection('materielsStudio').add(data);
  }

  getCategorriesMateriels(): Observable<any>{
    return this.matStudioService.collection('materielsStudio').snapshotChanges();
  }

  getCategorrieMateriel(id:string): Observable<any>{
    return this.matStudioService.collection('materielsStudio').doc(id).snapshotChanges();
  }

  deleteCategorrieMateriel(id: string): Promise<any>{
    return this.matStudioService.collection('materielsStudio').doc(id).delete();
  }

  actualiserCategorrieMateriel(id: string, data:any): Promise<any>{
    return this.matStudioService.collection('materielsStudio').doc(id).update(data);
  }
}
