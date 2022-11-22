import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p>
      header works! hi
    </p>
    <h1>hello</h1>
    <nav class="navbar navbar-default">
     <div class="container-fluid">
       <div class="navbar-header">
           <a  class="navbar-brand">Recipe Book</a>
        </div>
        <div >
          
        </div>
     </div>
    </nav>
    

  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hello')
  }

}
