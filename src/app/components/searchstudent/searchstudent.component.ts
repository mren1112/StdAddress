import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiCheckStudentCodeComponentService } from 'src/app/services/ApiCheckStudentCode.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  mstdcode = "";
  warningmsg = "";

  constructor(
    private http: HttpClient,
    private rotes: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private apicheckstudent : ApiCheckStudentCodeComponentService)   {
  }



  stdinput = new FormGroup({
    stdcode: new FormControl('', [Validators.required]),
  })


  ngOnInit(): void {
    sessionStorage.removeItem('stdcode');
  }

  async clearStorage() {
    sessionStorage.removeItem('stdcode');
    this.router.navigate(['main']);
  }

  async selectedStdCode() { }

  async onSubmit() {
   // console.log('XSXSXSXSXSSXD')

    if (this.mstdcode == '' || this.mstdcode == null) {
      //alert('please input student id')
      this.warningmsg = 'กรุณากรอกรหัสนักศึกษารหัส '
    }else{
      //alert(this.mstdcode)
      var todolist;
      this.apicheckstudent.getCheckStd(this.mstdcode).subscribe((res) => {
          todolist = res;
        if (Number(todolist.status) == 0 ) {
           // alert('wtf')
           this.warningmsg = 'ไม่พบข้อมูลนักศึกษารหัส: ' + this.mstdcode;
        } else {
          this.warningmsg = '';
         // console.log('res = ' + JSON.stringify(todolist))
         let OldAddress;
         this.apicheckstudent.getJsonAddress(this.mstdcode).subscribe((data) => {
          OldAddress = data.oldaddr;
            // console.log('oldAddress = '+ JSON.stringify(OldAddress))


             sessionStorage.setItem('oldAddress', JSON.stringify(OldAddress))
        });
            sessionStorage.setItem('todolist', JSON.stringify(todolist))
            sessionStorage.setItem('stdcode', this.mstdcode);
           
            this.router.navigate(['/showaddress'])

        }});



       /* var todo;
        this.http.post<any>('http://sevkn.ru.ac.th/StdAddress/getProfile.jsp?stdcode=6106014225', { title: '' }).subscribe(res => {
          // this.postId = data.id;
          todo = res;
          console.log('todo = ' + JSON.stringify(todo))
       })*/
    }

  }

  c() {
  }



  backhome() {
    sessionStorage.clear();
    this.router.navigate(['main']);
  }
}
