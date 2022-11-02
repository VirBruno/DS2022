import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrarmeForm!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.registrarmeForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      nombre: ['',
        [Validators.required, Validators.email ]
      ],
      apellido: ['',
        [Validators.required, Validators.email ]
      ],
      email: ['',
        [Validators.required, Validators.email ]
      ],
      password: ['',
        [Validators.required, Validators.minLength(6)]
      ],
    })
  }

  registrarme(){
    let nombre = this.registrarmeForm.value.nombre;
    let apellido = this.registrarmeForm.value.apellido;
    let email = this.registrarmeForm.value.email;
    let password = this.registrarmeForm.value.password;

    console.log(email + password);
  }
}











