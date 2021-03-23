import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { ApiLoginService } from './services/ApiLoginComponent.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatDialogModule } from '@angular/material/dialog';

//page components
import { ErrorComponent } from './components/error/error.component';
import { HomemenuComponent } from './components/homemenu/homemenu.component';
import { LoginComponent } from './components/login/login.component';
import { SuccesspageComponent } from './components/successpage/successpage.component';
import { RegisterComponent } from './components/register/register.component';
import { ApiRegisterComponentService } from './services/ApiRegisterComponent.service';
import { StdregisterComponent } from './components/stdregister/stdregister.component';
import { ApiThaiTambonsComponentService } from './services/ApiThaiTambonsComponent.service';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchstudentComponent } from './components/searchstudent/searchstudent.component';
import { ApiCheckStudentCodeComponentService } from './services/ApiCheckStudentCode.service';
import { ShowaddressComponent } from './components/showaddress/showaddress.component';
import { EditaddressComponent } from './components/editaddress/editaddress.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomemenuComponent },
  { path: "success", component: SuccesspageComponent },
  { path: "register", component: RegisterComponent },
  { path: "stdregis", component: StdregisterComponent },
  { path: "main", component: MainmenuComponent },
  { path: "srcstd", component: SearchstudentComponent },
  { path: "showaddress", component: ShowaddressComponent },
  { path: "editaddress", component: EditaddressComponent },
  //{path:"home/:id",component: HomeMenuCreateComponent},
  { path: "**", component: ErrorComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomemenuComponent,
    ErrorComponent,
    SuccesspageComponent,
    RegisterComponent,
    StdregisterComponent,
    MainmenuComponent,
    HeaderComponent,
    SearchstudentComponent,
    ShowaddressComponent,
    EditaddressComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    // AngularFontAwesomeModule,


    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    ApiLoginService,
    ApiRegisterComponentService,
    ApiThaiTambonsComponentService,
    ApiCheckStudentCodeComponentService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
