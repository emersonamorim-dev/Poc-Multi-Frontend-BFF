import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppState } from '../../store/app.state';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; 
import { CommonModule } from '@angular/common';
import { selectUserToken, selectError, selectIsAuthenticated } from '../../store/selectors/user.selectors';
import { loginFailure, loginSuccess } from '../../store/actions/user.actions';
import { selectLoginError } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  error$: Observable<string | null>;
  token$: Observable<string | null>;
  success$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private userService: UserService  
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });

    this.token$ = this.store.select(selectUserToken);
    this.error$ = this.store.select(selectError);
    this.error$ = this.store.select(selectLoginError);

    // Ouvindo o token
    this.token$.subscribe(token => {
      if (token) {
        localStorage.setItem('token', token);
        this.success$.next(true);
    
        window.location.href = '/dashboard';  
      }
    });
  }

  ngOnInit() {
    this.store.select(selectIsAuthenticated).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/dashboard']);
      }
    });
  }


  private passwordValidator(control: any) {
    const value = control.value;
    if (!value) {
      return { required: true };
    }
    if (value.length < 6) {
      return { minLength: true };
    }
    if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
      return { complexity: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.userService.login(email, password).subscribe({
        next: (response) => {
          this.store.dispatch(loginSuccess({ payload: { token: response.token, user: response.user } }));
          this.router.navigate(['/dashboard']); 
        },
        error: (error) => {
          console.error('Erro ao realizar login:', error);

          if (error.status === 400) {
            this.store.dispatch(loginFailure({ error: 'E-mail ou senha incorretos. Tente novamente.' }));
          } else if (error.status === 401) {
            this.store.dispatch(loginFailure({ error: 'Acesso não autorizado. Verifique suas credenciais.' }));
          } else {
            this.store.dispatch(loginFailure({ error: 'Erro desconhecido. Tente novamente mais tarde.' }));
          }
        }
      });
    } else {
      this.store.dispatch(loginFailure({ error: 'Por favor, preencha todos os campos corretamente.' }));
    }
  }


  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    if (control?.hasError('email')) {
      return 'Formato de email inválido';
    }
    return '';
  }
}
