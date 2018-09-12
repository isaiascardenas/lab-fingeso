import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Reto } from '../reto';
import { RetoService } from '../reto.service';

@Component({
  templateUrl: './reto-list.component.html'
  // styleUrls: ['./idea.component.css']
})

export class RetosListComponent implements OnInit {
  retos: Reto[];

  constructor(
    private route: ActivatedRoute,
    private retoService: RetoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRetos();
  }

  getRetos(): void {
    this.retoService.index()
     .subscribe(retos => this.retos = retos);
  }
}
