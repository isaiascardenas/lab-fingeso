import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Idea } from '../idea';
import { IdeaService } from '../idea.service';
import { Comentario } from '../../comentarios/comentario';
import { ComentarioService } from '../../comentarios/comentario.service';

@Component({
  templateUrl: './idea-detail.component.html'
})

export class IdeasDetailComponent implements OnInit {
  @Input() idea: Idea;

  // newComment: Comentario;

  // comments = [
  //   new Comentario(),
  //   new Comentario(),
  //   new Comentario(),
  //   new Comentario(),
  //   new Comentario(),
  //   new Comentario()
  // ];

  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getIdea();
  }

  getIdea(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ideaService.get(id)
     .subscribe(idea => this.idea = idea);
  }

  // comment(): void {
  //     console.log(this.newComment);

  //     // if (this.newComment.length > 0) {
  //     //   this.newComment.idea = idea;
  //     // }
  //   }

  goBack(): void {
    this.location.back();
  }
}
