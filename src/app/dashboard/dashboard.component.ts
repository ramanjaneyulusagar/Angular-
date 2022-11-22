import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cors();
  }
  d: any
  cors() {
    return this.http.
    get("https://91c2-115-117-172-107.in.ngrok.io/app/search")
    .subscribe((data: any) => {
      this.d = data
      console.log(data);
    })
  }
}
