import { Component, OnInit } from '@angular/core';
import { Cafe } from 'src/app/models/cafe';
import { CafeService } from 'src/app/services/cafe.service';

@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css'],
  providers: [CafeService]

})
export class ListarCafeComponent implements OnInit {

  cafes: Cafe[] = [];
  origen: number = 0;
  blend: number = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.cafeService.obtenerCafe().subscribe((response) => {
      this.cafes = response;
      this.origen = response.filter(x=>x.tipo != "Blend").length;
      this.blend = response.filter(x=>x.tipo == "Blend").length
    })
  }
}
