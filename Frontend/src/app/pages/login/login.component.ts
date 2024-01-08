import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginObj: any = {
    "username": "",
    "password": ""
  }
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {
   }

  ngOnInit(): void {}


    onLogin() {
      const validUsername = 'admin';
      const validPassword = '123';

      if (this.loginObj.username === validUsername && this.loginObj.password === validPassword) {
        alert('Login bem-sucedido');
        this.errorMessage = '';
        // localStorage.setItem('loginToken', 'token_dummy'); // Substitua por seu token real
        this.router.navigateByUrl('/dashboard').then((success: boolean) => {
          if (success) {
            console.log('Redirecionamento para a dashboard bem-sucedido.');
          } else {
            console.error('Erro ao redirecionar para a dashboard.');

          }
        },
        (error) => {
          console.log('Erro:', error)
        }
        );
      } else {
        // alert('Login ou senha inválidos. Tente novamente.');
        this.errorMessage = 'Usuário ou senha incorretos. Por favor, tente novamente.';
        console.log('Erro: Login ou senha inválidos.');
      }
    }

}
