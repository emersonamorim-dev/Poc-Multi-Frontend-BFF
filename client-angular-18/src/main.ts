import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';  
import { appRoutes } from './app/app.routes';
import { appReducers } from './app/store/app.state';
import { AppContainerComponent } from './app/containers/app-container.component';
import { provideStoreDevtools } from '@ngrx/store-devtools';

bootstrapApplication(AppContainerComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(appRoutes),
      StoreModule.forRoot(appReducers),
      HttpClientModule  
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ]
}).catch(err => console.error(err));

