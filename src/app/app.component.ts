/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './home/home.component';

@Component({
  // standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //public environment = ['sit', 'prod', 'dev', 'ft'];
  public flag: boolean = true;
  public marks = [10, 20, 30, 40];
  public _counter = 0;
  @ViewChild('ch', { static: false }) data!: HomeComponent;
  @Output() closeSideNav = new EventEmitter();
  hide = false;
  title = 'angularthird';
  faCoffee = faCoffee;
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('hello');
  }
  change() {
    this.data.viewChild = 'welcome to Kanerika';
  }
  onToggleClose() {
    this.closeSideNav.emit();
  }
  changeColor(data: any) {
    if (data <= 20) return 'primary';
    if (data > 20) return 'secondary';
    return;
  }
}
