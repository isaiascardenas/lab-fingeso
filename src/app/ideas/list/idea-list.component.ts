import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Idea } from '../idea';
import { IdeaService } from '../idea.service';
import { Reto } from '../../retos/reto';
import { RetoService } from '../../retos/reto.service';

@Component({
  templateUrl: './idea-list.component.html'
  // styleUrls: ['./idea.component.css']
})

export class IdeasListComponent implements OnInit {
  ideas: Idea[];
  retos: Reto[];

  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeaService,
    private retoService: RetoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getIdeas();
    this.getRetos();
  }

  getIdeas(): void {
    this.ideaService.index()
     .subscribe(ideas => this.ideas = ideas);
  }

  getRetos(): void {
      this.retoService.index()
       .subscribe(retos => this.retos = retos);
  }
}
