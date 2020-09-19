import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  errMsg;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
    private router: Router,
  ) 
  {
    this.loginForm = this.formBuilder.group({
      usuario: '',
      password: ''
    });
  }

  ngOnInit() {
  }


  onSubmit(loginData) {
    this.errMsg = undefined;
    // Process checkout data here
    this.loginForm.reset();

    console.warn('Login information', loginData);

    const { usuario, password } = loginData;

    this.userService.login(usuario, password).subscribe(user => {
      this.userService.setUser(user);
      console.log(user);
      this.router.navigate(['/gastos']);
    },
    err => {
      if(err.status === 409){
        this.errMsg = 'No existe un usuario con las credenciales ingresadas.';
      }
    });
  }

}