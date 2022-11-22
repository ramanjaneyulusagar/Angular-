import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { env } from 'process';
import { json } from 'stream/consumers';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { format } from 'path';
@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css'],
})
export class EnvironmentComponent implements OnInit {
  public dropdown = ['SELECT ENVIRONMENT', 'MOVE TO PROD'];
  public value = '';
  public isSubmitted = false;
  public Env = '';
  dialogRef!: MatDialogRef<any>;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.Env = 'sit';
  }
  openDialog() {
    this.dialogRef = this.openPopUp<DialogComponent>(
      DialogComponent,
      this.environment.value
    );
    this.isSubmitted = true;
  }
  openPopUp<T>(component: any, data: any) {
    return this.dialog.open(component, {
      width: '500px',
      data: data,
      disableClose: true,
    });
  }
  closePopup(dialogRef: MatDialogRef<any>) {
    dialogRef.close('closed forcefully');
  }

  environment = this.fb.group({
    environmentName: ['', [Validators.required]],
  });
  onSubmit() {
    if (!this.environment.valid) {
      this.value = 'select at least one field';
    } else {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: this.environment.value,
      });
    }
    this.environment.controls.environmentName.reset();
  }
  changeCity(event: any) {
    console.log(event);
  }
  get environmentName() {
    return this.environment.get('environmentName');
  }
}
