import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiLoginService } from 'src/app/services/ApiLoginComponent.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUser: string = "";
  mPassword: string = "";
  msgUser: boolean = false;
  msgPass: boolean = false;
  todoLogin = [];

  constructor(private rotes: ActivatedRoute,
    private router: Router,
    private apiLogin: ApiLoginService
  ) {


  }

  ngOnInit(): void {

  }

  profieinput = new FormGroup ({
    user: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required]),
  })

  onSubmit(){
   // this.router.navigate(['stdregis'])

    //alert("Form validated and submitted successfully!");
  }


  checkLogin() {

    if (this.mUser == "" && this.mPassword == "") {
      alert("Usernam, password invalid")
      //  this.msgUser =true
    } else {
      // this. getApiLogin(this.mUser,this.mPassword);
      this.apiLogin.getJSON(this.mUser, this.mPassword).subscribe((res) => {
        this.todoLogin = res;
        console.log(JSON.stringify(this.todoLogin));
        if (res.status == '1') {
          sessionStorage.setItem('user',this.mUser)
          this.router.navigate(['main'])
        } else {
          //alert('wtf2')

          alert('wtf')
        }

      });

      //   this.router.navigate(['home']);

    }
  }

  getApiLogin(user: string, password: string) {

  }
}
