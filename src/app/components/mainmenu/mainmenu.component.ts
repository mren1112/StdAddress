import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(
    private router: Router,
    private routes:ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  gotoShowAdrress(): void {
    this.router.navigate(['srcstd']);
  }
}
