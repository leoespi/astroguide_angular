import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';
import { Login } from '../../modelos/login.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  
  loginForm = this.fb.group({
    username: '',
    password: ''
  });

  respuesta:Login|null= null;


  constructor(private fb: FormBuilder, private loginService: LoginService, private _router: Router) {

  }

  login(): void {
    console.log(this.loginForm.get('username')?.value);
    console.log(this.loginForm.get('password')?.value);
    this.loginService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe(
      rs =>{
      this.respuesta = rs;
      console.log(this.respuesta);
      if(this.respuesta != null){
          localStorage.setItem ('access_token', this.respuesta.acccess_token);
          this._router.navigate(['/ficha/index'])
      }
    },err =>{
      console.log(err);
    });
  }

}
