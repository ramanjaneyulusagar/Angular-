import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hello')
  }
  activeUsers: string[] =
    [
      "ravi", "ram", "gopi", "madhav", "ramesh"
    ];

  inActiveUsers =
    [
      "madhavi", "surendhra", "sampath", "chari"
    ];
  public activeUser: string[] = [];
  public inActiveUser: string[] = [];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log("droped event", "greater then", `${event.item.data}`, 'into', `${event.container.id}`,);
      this.activeUser = event.item.data, event.container.id;
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    else {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      this.inActiveUser= event.item.data, event.container.id;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.pre = `
  activeCustomers:
  ${JSON.stringify(this.activeUsers, null, ' ')}

  inactiveCustomers:
    ${JSON.stringify(this.inActiveUsers, null, ' ')}`;
  }
  
  pre = `
  activeCustomers:
  ${JSON.stringify(this.activeUsers, null, ' ')}

  inactiveCustomers:
    ${JSON.stringify(this.inActiveUsers, null, ' ')}`;
    
}
