import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiCheckStudentCodeComponentService } from 'src/app/services/ApiCheckStudentCode.service';




@Component({
  selector: 'app-showaddress',
  templateUrl: './showaddress.component.html',
  styleUrls: ['./showaddress.component.css']
})
export class ShowaddressComponent implements OnInit {

  public stdcode = sessionStorage.getItem('stdcode');
  public todolist: any = [];
  public checkbutton = false;
  public todoOldAddress: any = [];
  // Old address detail
  /*/public oldmobileno ="";
  public oldprovinceno ="";
  public oldaddress ="";
  public olddistrict ="";
  public oldsoi ="";
  public oldpostcode ="";
  public oldroad ="";
  public oldprovincename ="";
  public oldbuildno ="";
  public oldarea ="";
  public oldmoono ="";
  public oldcuntryno ="";
  public oldemail ="";*/

//----------------------------

  //--------------------------------------------------
  constructor(
    private rotes: ActivatedRoute,
    private router: Router,
    private apicheckstudent : ApiCheckStudentCodeComponentService,
    private http: HttpClient,
    ) { }


  ngOnInit() {
    if (sessionStorage.getItem('showaddresastatus') == null) {
        location.reload ();
        sessionStorage.setItem('showaddresastatus','Y')
    }
    this.loading();
    this.checkstd();
    // console.log(this.stdcode)
  }


  onSubmit() {
    this.router.navigate(['stdregis']);

    //alert("Form validated and submitted successfully!");
  }



  checkstd() {
    //alert(JSON.stringify(JSON.parse(sessionStorage.getItem('todolist') || '{}')));
    if (this.stdcode == null || this.stdcode == '') {
      alert('ข้อมูลไม่ถูกต้อง');
      this.router.navigate(['main'])
    } else {
     // var todoarr ;
      if (sessionStorage.getItem('todolist') != null) {
        this.todolist = JSON.parse(sessionStorage.getItem('todolist') || '{}');
      //  todoarr = JSON.stringify(sessionStorage.getItem('oldAddress'));
        this.todoOldAddress = JSON.parse(sessionStorage.getItem('oldAddress') || '');
        //this.todoOldAddr.push(this.todoOldAddress);
        this.checkbutton = true;

        console.log('todoOldAddr = '+JSON.stringify(this.todoOldAddress));

       // alert('xxxsx');
      } else {

        this.checkbutton = false;

        //alert('wtf');
      }

    }
  }

  editaddress() {
    this.router.navigate(['editaddress']);
  }

  showSpinner = false;
  loading() {

      this.showSpinner =true;
          setTimeout(() => {
              this.showSpinner = false;
          }, 2000);

  }

  backhome() {
    sessionStorage.removeItem('stdcode');
    sessionStorage.removeItem('todolist');
    sessionStorage.removeItem('oldAddress');
    sessionStorage.removeItem('showaddresastatus');
    this.router.navigate(['srcstd']);
  }

}
