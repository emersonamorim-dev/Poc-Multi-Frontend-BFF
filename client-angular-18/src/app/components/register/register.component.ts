import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { registerFailure, registerSuccess } from '../../store/actions/user.actions';
import { AppState } from '../../store/app.state';
import { Observable, Subject } from 'rxjs';
import { selectRegisterSuccess, selectRegisterError, selectUserLoading } from '../../store/selectors/user.selectors';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { filter, take, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  error$: Observable<string | null>;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  success$: Observable<boolean>;
  loading$: Observable<boolean>;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.error$ = this.store.select(selectRegisterError);
    this.success$ = this.store.select(selectRegisterSuccess);
    this.loading$ = this.store.select(selectUserLoading);

    this.success$.pipe(
      filter(success => success === true), // Filtra o sucesso do registro
      take(1) // Pega o primeiro evento de sucesso
    ).subscribe(() => {
      this.userService.login(this.registerForm.value.email, this.registerForm.value.password).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);

          this.store.dispatch(registerSuccess({ payload: response }));

          window.location.href = '/dashboard';
        },
        error: (error) => {
          console.error('Erro no login após o registro:', error);
        }
      });
    });
  }

  ngOnInit() {
    this.store.select('auth')
      .pipe(takeUntil(this.destroy$)) 
      .subscribe(state => {
        this.errorMessage = state.error;
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;

      this.userService.register(name, email, password).subscribe({
        next: (response) => {
          // Dispara sucesso do registro
          this.store.dispatch(registerSuccess({ payload: response }));
          this.successMessage = 'Usuário criado com sucesso!';
          this.errorMessage = null;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Erro ao registrar:', error);
          this.successMessage = null;

          if (error.status === 400 && error.error && error.error.error === 'Usuário já existe') {
            this.store.dispatch(registerFailure({ error: 'Este e-mail já está em uso.' }));
          } else {
            this.store.dispatch(registerFailure({ error: 'Ocorreu um erro inesperado. Tente novamente mais tarde.' }));
          }
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(); 
    this.destroy$.complete(); 
  }
}
