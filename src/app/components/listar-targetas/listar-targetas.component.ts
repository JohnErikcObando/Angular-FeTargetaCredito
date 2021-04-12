import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-targetas',
  templateUrl: './listar-targetas.component.html',
  styleUrls: ['./listar-targetas.component.css']
})
export class ListarTargetasComponent implements OnInit {

  listTargetas: any[]=[
    {
       titular: 'John Erikc',
      numTargeta: '1234567890',
      fechaVen: '11/24',
      cvv: '123' 
    },
    {
     titular: 'Fabian Stiben',
     numTargeta: '1234567890',
     fechaVen: '15/22',
     cvv: '321' 
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
