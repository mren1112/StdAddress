import { Component, OnInit,inject,Output,EventEmitter,TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiThaiTambonsComponentService } from 'src/app/services/ApiThaiTambonsComponent.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-stdregister',
  templateUrl: './stdregister.component.html',
  styleUrls: ['./stdregister.component.css']
})
export class StdregisterComponent implements OnInit {

  birthyear: string[] = [
    '1990', '1991', '1992',
  ];

  public stdcode = sessionStorage.getItem('stdcode')
  public todoThaiTambons = [];
  public startyear = 2500;
  public dateCurrent = new Date();
  public birthCurrentdate = "";
  public birthCurrentyear = "";
  public birthCurrentmonth = "";

  //check dropdown
  public checkprovince:boolean = false;
  public checkstate:boolean = false;
  public checkdistrict:boolean = false;
  public checkzipcode:boolean = false;
  public todolist: any = [];


  constructor(
    private apiThaiTambons: ApiThaiTambonsComponentService,
    private rotes: ActivatedRoute,
    private router: Router,

  ){ }

  detailinput = new FormGroup ({
     address: new FormControl('', [Validators.required]),
     street: new FormControl('', [Validators.required]),
     province: new FormControl('', [Validators.required]),
  /*  state: new FormControl('', [Validators.required]),
    distrinct: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    fname: new FormControl('', [Validators.required]),
    telnosub: new FormControl('', [Validators.required]),*/
  })




  ngOnInit(): void {

    //console.log(Number(this.dateCurrent.getFullYear())+543)
    //  this.calculatefullyear()
    this.checkstd()
  }

  checkstd() {

    var x=[];
    if (this.stdcode == null || this.stdcode == '') {
          alert('ข้อมูลไม่ถูกต้อง');
          this.router.navigate(['main'])
    } else {
          this.todolist = JSON.parse(sessionStorage.getItem('todolist') || '{}');
          console.log(this.todolist)
    }
  }

  calculatefullyear() {

    console.log(Number(this.dateCurrent.getFullYear()) + 543)
  }

  loadThaiTambons() {

    this.apiThaiTambons.getJSON().subscribe((res) => {
      this.todoThaiTambons = res;

    // console.log(JSON.stringify(this.todoThaiTambons));
    });
  }

  onSubmit(){
    this.router.navigate(['stdregis'])

    //alert("Form validated and submitted successfully!");
  }

  backhome() {
    sessionStorage.clear();
    this.router.navigate(['main']);
  }
}
