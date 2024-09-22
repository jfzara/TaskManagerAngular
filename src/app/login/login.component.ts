import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isMobile: boolean = false;  // Initialisation de isMobile

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.checkIfMobile();
    // Ajoute un écouteur d'événements pour mettre à jour la valeur lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => this.checkIfMobile());
  }

  checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768 || Capacitor.isNativePlatform();
    if (this.isMobile) {
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userService.login(email, password).subscribe(
        (res) => {
          console.log(res);
          this.authService.setToken(res.token, res.loggedUser);
          this.router.navigate(["/"]);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}