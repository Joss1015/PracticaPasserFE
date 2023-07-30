import { Component } from '@angular/core';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.scss']
})
export class PageBaseComponent {
  list: any = [
    {
      "name": "Ocupaciones",
      "action": "/ocupaciones" 
    },
    {
      "name": "Países",
      "action": "/paises" 
    },
    {
      "name": "Identificaciones",
      "action": "/identificaciones" 
    }
  ];
  
  currentTab: string=""
}
