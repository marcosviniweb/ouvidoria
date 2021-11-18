import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface Idea {
 img: '',
 data:'',
 path: '',
  
}

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('Anuncios/')
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  slideget(){
    var ordenacao =  this.afs.collection<Idea>( "Anuncios", ref => ref.orderBy("data", "desc")).valueChanges()
  
 
    return ordenacao ;
  }

}
