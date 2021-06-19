import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public flatlogicEmail = 'admin@flatlogic.com';
  public flatlogicPassword = 'admin';

  username: string;
  password: string;

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.flatlogicEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.flatlogicPassword, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }

  // login() : void {
  //   alert('hi');
  //   if(this.username == 'admin' && this.password == 'admin'){
      
  //    this.router.navigate(["dashboard"]);
     
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }
  


}
