import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/services/auth-service.service';

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
    correo: new FormControl(null,[Validators.required, Validators.email ]),

  });

  constructor( private authService: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    
  }

  crearUsuario(): void{
      let d:any={
        nombre : this.registerForm.value.nombre,
        apellido: this.registerForm.value.apellido,
        nroCelular : this.registerForm.value.fechaNacimiento,
        email: this.registerForm.value.tipoDocumento,
        imagen: this.registerForm.value.numeroDocumento,
        experiencia : this.registerForm.value.telefono,
        servicios: this.registerForm.value.pais,
        rol:"usuario",
        correo: this.registerForm.value.correo
    };  
    this.authService.register(d).subscribe({
        next: (data:any) => {
          localStorage.setItem('jwt', JSON.stringify({ token: data.authorisation}) );
          this.authService.loginExitoso();
          localStorage.setItem('rol',JSON.stringify({ rol: data.user}));
        },
      err: (e:any)=> {
        console.log('error', e.message);
      },
      complete: ()=>{
        this.router.navigateByUrl('/vuelos');
      }
    })
  }
}

