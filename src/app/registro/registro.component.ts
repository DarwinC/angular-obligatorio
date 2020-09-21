import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm;
  errMsg;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
    private router: Router,
  ) 
  {
    this.registerForm = this.formBuilder.group({
      usuario: '',
      password: ''
    });
  }

  ngOnInit() {
  }


  onSubmit(registerData) {
    this.errMsg = undefined;
    // Process checkout data here
    this.registerForm.reset();

    console.warn('Login information', registerData);

    const { usuario, password } = registerData;

    this.userService.register(usuario, password).subscribe(user => {
      this.userService.setUser(user);
      console.log(user);
      this.router.navigate(['/login']);
    },
    err => {
      if(err.status === 409){
        this.errMsg = 'Error.';
      }
    });
  }

}