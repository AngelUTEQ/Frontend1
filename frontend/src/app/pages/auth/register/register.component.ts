import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // 👈 Importa Router
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  error = '';
  success = '';

  constructor(
    private authService: AuthService,
    private router: Router // 👈 Inyecta Router
  ) {}

  onSubmit() {
    // Validación extra antes de enviar
    if (!this.username || !this.password) {
      this.error = 'Por favor completa todos los campos';
      this.success = '';
      return;
    }

    this.authService.register(this.username, this.password).subscribe({
      next: (response) => {
        this.success = 'Registro exitoso';
        this.error = '';
      },
      error: (err) => {
        this.error = 'No se pudo registrar. Intenta con otro usuario.';
        this.success = '';
      }
    });
  }

  // 👈 Método para navegar al login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}