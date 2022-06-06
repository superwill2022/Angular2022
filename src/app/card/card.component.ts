import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image2:String ="https://photoshop-kopona.com/uploads/posts/2021-06/1623447718_nature-frame.jpg" ;
  public titulo:String ="Curos de angular con interpolacion";
  public cabecera: String = "cabecera A"

  constructor() { }

  ngOnInit(): void {
  }

}
