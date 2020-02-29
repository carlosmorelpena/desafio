import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { digimon } from '../componente/interface/interDigimon';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServDigimonService {
  urlDigimon : any;
  urlId : any ;
  urlName : any;
  urlLevel : any;
  constructor(
      private web: HttpClient
  ) { 

    this.urlDigimon = "https://digimon-api.herokuapp.com/api/digimon";
    this.urlId = "https://digimon-api.herokuapp.com/api/digimon/id";
    this.urlName = "https://digimon-api.herokuapp.com/api/digimon/name";
    this.urlLevel = "https://digimon-api.herokuapp.com/api/digimon/level";
    
  }

  getListaDigi(): Observable<digimon>{
    return this.web.get<digimon>(`${this.urlDigimon}`).pipe(catchError(this._handError));
  }

  getListaDigiId(id): Observable<digimon>{
    return this.web.get<digimon>(`${this.urlId}/${id}`).pipe(catchError(this._handError));
  }

  getListaDigiNombre(nombre): Observable<digimon>{    
    return this.web.get<digimon>(`${this.urlName}/${nombre}`).pipe(catchError(this._handError));
  }

  getListaDigiLevel(nivel): Observable<digimon>{
    return this.web.get<digimon>(`${this.urlLevel}/${nivel}`).pipe(catchError(this._handError));
  }

  /*
  buscarAnimales(termino: string): Animal[] {
    let animalesArr: Animal[] = [];
    termino = termino.toLocaleLowerCase();

    for (let i = 0; i < this.animales.length; i++) {
      let animal = this.animales[i];
      let nombre = animal.nombre.toLocaleLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        animal.idx = i;
        animalesArr.push(animal)
      }
    }
    return animalesArr;
  }
  */ 

  private _handError(error : HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error: ' , error.error.message);
    }else{
      console.error(`Error general  ${error.error} `);
    }
    return throwError('Error');
  }

}
