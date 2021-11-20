import { HomePage } from './../home/home.page';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Idea {
  id : '',
  bairro: '',
  descricao: '',
  categoria: '',
  endereco: '',
  referencia: '',
  nome?: '';
  password?:'';
  email?: '';
  cpf?: '';
  telefone?: '';
  img:'',
  disponivel:'',
  url:'',
}

 
@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('Solicitacoes/')
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
 
  pegarDetalhes(protocolo: string){
  
var ordenacao =  this.afs.collection<Idea>( "Solicitacoes", ref => ref.where('protocolo', '==', protocolo)).valueChanges()
   
 
    return ordenacao ;
  }
  pegarDadosatualizar(data: string): Observable<Idea[]> {

    // var ordenacao =  this.afs.collection<Idea>( "Solicitacoes", ref => ref.where('iddata', '==', data)).valueChanges()
   return ;
            
     }

    
     
  pegarDados(user: string): Observable<Idea[]> {
    
 let userid = user.toString();
    
  
  var ordenacao =  this.afs.collection<Idea>( "Solicitacoes", ref => ref.orderBy("data", "desc").where('id', '==', userid)).valueChanges()
  
 
    return ordenacao ;
  

    
  }
  
  
  addIdea(idea: Idea): Promise<DocumentReference> {
    
       return this.ideaCollection.add(idea);
      
  }
  pegargeral(tipo: string){
    var ordenacao =  this.afs.collection<Idea>( "Solicitacoes", ref => ref.orderBy("data", "desc").where('tipo', '==', tipo)).valueChanges()
    return ordenacao ;
 
  }

  pegaruser(user: string): Observable<Idea[]>{
    this.ideaCollection = this.afs.collection<Idea>('Usuários/')
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    let usuario = user.toString();
    var dadosuser =  this.afs.collection<Idea>( "Usuários", ref => ref.where('id', '==', usuario)).valueChanges()
  
 
    return dadosuser;
  }

  pegarAnuncios(): Observable<Idea[]>{
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
   
    var dados =  this.afs.collection<Idea>( "Anuncios",ref => ref.orderBy("data", "desc").limit(3)).valueChanges()
  
 
    return dados;
  }
  pegartodosanuncios(): Observable<Idea[]>{
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
   
    var dados =  this.afs.collection<Idea>( "Anuncios",ref => ref.orderBy("data", "desc")).valueChanges()
  
 
    return dados;
  }

  pegarcontracheque(): Observable<Idea[]>{
    this.ideaCollection = this.afs.collection<Idea>('Contra-Cheque/')
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   
    var dados = this.afs.collection<Idea>( "Contra-Cheque",ref => ref.orderBy("data", "desc").limit(1)).valueChanges()
  
 
    return dados;
  }


  pegarvideos(): Observable<Idea[]>{
    this.ideaCollection = this.afs.collection<Idea>('Videos/')
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   
    var dados =  this.afs.collection<Idea>( "Videos",ref => ref.orderBy("data", "desc").limit(1)).valueChanges()
  
 
    return dados;
  }


  popup(): Observable<Idea[]>{
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
   
    var dados =  this.afs.collection<Idea>( "Anuncios",ref => ref.orderBy("data", "desc").limit(1)).valueChanges()
  
 
    return dados;
  }
 // updateIdea(idea: Idea): Promise<void> {
  //  return this.ideaCollection.doc(idea.id).update({ dia: idea.dia, nome: idea.nome , assunto: idea.assunto});
 //}

  deleteIdea(data: string) {
    return this.afs.collection<Idea>("Solicitacoes/").doc(data).delete()
  //  return this.ideaCollection.doc(data).delete();
  }
}
