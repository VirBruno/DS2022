import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm= new FormGroup({
    nombre: new FormControl(null,[Validators.required]),
    apellido: new FormControl(null,[Validators.required]),
    fechaNacimiento: new FormControl(null,[Validators.required]),
    tipoDocumento: new FormControl(null,[Validators.required]),
    numeroDocumento: new FormControl(null,[Validators.required]),
    telefono: new FormControl(null,[Validators.required]),
    pais: new FormControl(null,[Validators.required]),
    region: new FormControl(null,[Validators.required]),
    domicilio: new FormControl(null,[Validators.required]),
    numeroDomicilio: new FormControl(null,[Validators.required]),
    ciudad: new FormControl(null,[Validators.required]),
    codPostal: new FormControl(null,[Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
