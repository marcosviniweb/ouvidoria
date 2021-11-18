import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../services/idea.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contracheque',
  templateUrl: './contracheque.page.html',
  styleUrls: ['./contracheque.page.scss'],
})
export class ContrachequePage implements OnInit {
  contracheque = [];
  url :any;
  html_string: any; 
  constructor( private ideaService: IdeaService, private sanitizer:DomSanitizer  ) { }

  ngOnInit() {
    this.ideaService.pegarcontracheque().subscribe(res => {
        
      this.contracheque = res;
      // puxando o url do contra-cheque
      for(let contra of res) {
        // injetando o url no html para o iframe poder ser dinamico 

        this.url =  this.sanitizer.bypassSecurityTrustHtml(`<iframe id="iframe1" src="${contra.url}" width="400px" height="800px"></iframe>`);
       

        console.log(this.url )
      
      }
    });
  }

}