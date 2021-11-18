import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';

export interface User {
  id?: string;
  nome?: string;
  password?:string;
  email?: string;
  cpf?: string;
  telefone?: string;
  criacao?: string;

  
}


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private ideas: Observable<User[]>;
  private ideaCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<User>('Usuários/')
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

  pegarDados(user: string): Observable<User[]>{
  
    var dados =  this.afs.collection<User>( "Usuários/", ref => ref.where('id', '==', user)).valueChanges()
      
     
        return dados ;
      }
      
      pegarDadosatualizar(id: string, nome: string, telefone: string, email: string){
        
       
       return this.afs.collection<User>("Usuários/").doc(id).update({nome: nome, telefone: telefone, email: email, cpf: id});
     
      }
}
