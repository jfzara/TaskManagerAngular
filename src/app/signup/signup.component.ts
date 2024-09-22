import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isMobile: boolean = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.checkIfMobile();
   
  }

  @HostListener('window:resize', ['$event'])
  checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  onSignUp(): void {
    if (this.signupForm.valid) {
      const { name, email, password } = this.signupForm.value;
      this.userService.signup(email, password, name).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}