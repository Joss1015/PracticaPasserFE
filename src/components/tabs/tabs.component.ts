import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, OnChanges {

  @Input() list: any;
  @Input() changeCurrentTab: any;
  @Output() onChangeLink = new EventEmitter<any>();

  currentTab = '';

  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.currentTab = this.list[0].action;
    console.log("data:",this.list)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['changeCurrentTab']?.currentValue) {
      this.currentTab = this.changeCurrentTab;
    }
  }

  changeLink(action: string): void{
    this.router.navigate([action]);
   /* if(action !== this.currentTab){
      this.currentTab = action;
      this.onChangeLink.emit({action, component: this});
    }*/
  }
}
