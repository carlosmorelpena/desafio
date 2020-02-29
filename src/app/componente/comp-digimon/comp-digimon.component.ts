import { Component, OnInit } from '@angular/core';
import { ServDigimonService } from 'src/app/servicios/serv-digimon.service';
import { digimon } from '../interface/interDigimon';

@Component({
  selector: 'app-comp-digimon',
  templateUrl: './comp-digimon.component.html',
  styles: []
})
export class CompDigimonComponent implements OnInit {
  datos : any;
  buscar: string;
  constructor(
    private service: ServDigimonService
  ) { }

  ngOnInit() {
    this.service.getListaDigi().subscribe((response: digimon) => {
      this.datos = response;
    })
  }
  
  busqueda(){
    this.datos = [];
    
    if (this.buscar.length == 0){
      this.service.getListaDigi().subscribe((response: digimon) => {
        this.datos = response;
      })
    }else{
      this.service.getListaDigiLevel(this.buscar).subscribe((response: digimon) => {
        this.datos = response;
      })

      this.service.getListaDigiId(this.buscar).subscribe((response: digimon) => {
        this.datos = response;
      })
  
      this.service.getListaDigiNombre(this.buscar).subscribe((response: digimon) => {
        this.datos = response;
      })
    }
  }

}
