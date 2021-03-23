import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiRegisterComponentService } from 'src/app/services/ApiRegisterComponent.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mEmail: string = "";
  mCaptcha: string = "";
  mRandom: string = ""
  tmpEmail: string = "@ru.ac.th";
  mCheckDisable = true;
  msgerr = false;
  //ischeck = true;

  constructor(
    private rotes: ActivatedRoute,
    private router: Router,
    private apiRegister: ApiRegisterComponentService,
  ) { }

  ngOnInit(): void {
    this.randomCaptchar()

  }

  randomCaptchar() {

    for (let i = 0; i < 6; i++) {
      this.mRandom += String(Math.floor(Math.random() * 6) + 1)
    }
   // console.log(this.mRandom)
  }

   checkRegister() {
    console.log('data '+ this.mEmail)

    if (this.mEmail == '' || (this.mCaptcha != this.mRandom || this.mCaptcha == '')) {
       this.mCheckDisable = true;
       this.msgerr = true;
     //  console.log('if')
    } else {

    //  console.log('else')
      this.mCheckDisable = false;
      this.msgerr = false;
    }
  }

    register() {
    if (this.mEmail == '' || this.mCaptcha == '') {
       alert('ทำรายการไม่สมบูรณ์')
    } else {
      this.apiRegister.setJSON(this.mEmail).subscribe((res) => {
        if (res.success == '' ) {
            alert('wtf')
        } else {
          //alert('wtf2')
            this.router.navigate([''])

        }});

    }
  }

  reSetForm() {
    window.location.reload();
  }
}
