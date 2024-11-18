import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';  
import { authReducer } from './store/reducers/auth.reducer';
import { AuthGuard } from './guards/auth.guard';
import { UserEffects } from './store/effects/user.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    StoreModule.forFeature('auth', authReducer), 
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }




