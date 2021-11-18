import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../services/idea.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})
export class AnunciosPage implements OnInit {
  anuncios = [];
  constructor( private ideaService: IdeaService,) { }

  ngOnInit() {
    this.ideaService.pegartodosanuncios().subscribe(res => {
        
      this.anuncios = res;
      
    });
  }

}
