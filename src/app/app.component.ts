/*import { Component, OnInit } from '@angular/core';*/
import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo:string;
  nro?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiPrimerApp';
  subtitulo = "este es mi otro subtitulo";
  public ArregloTarjetas: Tarjeta[] = [];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'video 1',subtitulo: 'subtitulo video 1'},
      {titulo:'Video 2',subtitulo: 'subtitulo video 2'},
      {titulo:'Video 3',subtitulo: 'subtitulo video 3'}
    ]
    
  }
}
