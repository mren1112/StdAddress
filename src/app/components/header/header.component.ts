import { Component, OnInit,TemplateRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


 export interface user {
  username: string;
  tokenref: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //username = sessionStorage.getItem()


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {

    //this.dialog.open(DialogElement, { disableClose: true });
  }

  ngOnInit(): void {
  }

  loaduser(): void {

  }
  openDialog() {
    this.dialog.open(DialogElement);
  }

}

@Component({
  selector: 'dialog-elements',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./header.component.css']
})
export class DialogElement {

  constructor(
    private dialogRef: MatDialogRef<DialogElement>,
    private route: ActivatedRoute,
    private router: Router,){}

  logout(): void {
    sessionStorage.clear();
    this.dialogRef.close();
    this.router.navigate([''])
  }

  DailogClose(): void {
    this.dialogRef.close();
    //this.router.navigate([''])
  }
}
