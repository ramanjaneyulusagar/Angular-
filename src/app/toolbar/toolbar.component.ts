import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() SideNavToggle = new EventEmitter();  

  openSidenav() {
   this.SideNavToggle.emit();
}

  constructor() { }

  ngOnInit(): void {
    console.log('hello')
  }

}
