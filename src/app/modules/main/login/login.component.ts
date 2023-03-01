import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    correo: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
  });
  
  login(){
        let d:any={
          correo : this.loginForm.value.correo,
          password: this.loginForm.value.password,
      };  
      this.authService.login(d).subscribe({
        next: (data:any) => {
          localStorage.setItem('jwt', JSON.stringify({ token: data.authorisation}) );
          this.authService.loginExitoso();
          localStorage.setItem('rol',JSON.stringify({ user: data.user}));
          },
        err: (e:any)=> {
          console.log("error");
        },
        complete: ()=>{
          this.router.navigateByUrl('/vuelos');
        }
      });
    }
}
