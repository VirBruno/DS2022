import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      email: ['',
        [Validators.required, Validators.email ]
      ],
      password: ['',
        [Validators.required, Validators.minLength(6)]
      ],
    })
  }

  iniciarSesion(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    console.log(email + password);
  }
}
