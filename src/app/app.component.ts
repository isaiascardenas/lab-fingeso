import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Idea } from './ideas/idea';
import { IdeaService } from './ideas/idea.service';
import { Reto } from './retos/reto';
import { RetoService } from './retos/reto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  opened: boolean = true;
  searchQuery: string = "";

  retos: Reto[];

  constructor(
    private route: ActivatedRoute,
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

  search(): void {
    
  }
}