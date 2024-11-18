import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    CommonModule,  
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  token: string | null = localStorage.getItem('token');
  activeTab: 'login' | 'register' = 'login';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveTabFromRoute();

    // Observa mudanças de rota para atualizar a aba ativa
    this.router.events.subscribe(() => {
      this.setActiveTabFromRoute();
    });
  }

  private setActiveTabFromRoute(): void {
    const path = this.router.url;
    if (path === '/login') {
      this.activeTab = 'login';
    } else if (path === '/register') {
      this.activeTab = 'register';
    }
  }

  handleLogout(): void {
    localStorage.removeItem('token');
    this.token = null;
    this.router.navigate(['/']);
  }

  showTab(tabName: 'login' | 'register'): void {
    this.activeTab = tabName;
    this.router.navigate([`/${tabName}`]);
  }
}
