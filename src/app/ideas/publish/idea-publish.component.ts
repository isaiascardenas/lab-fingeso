import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Idea } from '../idea';
import { IdeaService } from '../idea.service';
import { Reto } from '../../retos/reto';
import { RetoService } from '../../retos/reto.service';

@Component({
  templateUrl: './idea-publish.component.html'
})

export class IdeasPublishComponent implements OnInit{
  idea = new Idea();
  retos: Reto[];

  constructor(
    private ideaService: IdeaService,
    private retoService: RetoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getRetos();
  }

  getRetos(): void {
        this.retoService.index()
         .subscribe(retos => this.retos = retos);
  }

  publish(): void {
    // this.idea.setReto(reto);
    console.log(this.idea);
    // validate
    // if () {
    //   // code...
    // }
    // submit
    this.ideaService.store(this.idea);

    this.location.go("/ideas/"+this.idea.id);
       // .subscribe(() => this.goBack());
    
    // redirect to /ideas/:id
  }
}
