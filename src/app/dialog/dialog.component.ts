import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { EnvironmentComponent } from '../environment/environment.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}
  public dialogData: any;
  @ViewChildren(EnvironmentComponent) ev: any;
  ngOnInit(): void {
    console.log(this.data);
    this.dialogData = this.data;
  }
  onClose(response: any) {
    this.dialogRef.close(response);
    window.location.reload();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    alert('message send');
    this.dialogRef.close(this.data);
  }
}
