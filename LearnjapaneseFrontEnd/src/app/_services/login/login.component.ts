import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(data.error);
        if (data.error === "403 FORBIDDEN"){
          alert(data.message);
          return this.router.navigate(['login']);
        }
        // alert('Đăng nhập thành công');
        this.roles = this.tokenStorage.getUser().roles;
        if(data.role === 'ROLE_ADMIN'){
          return this.router.navigate(['admin-home']);
        }
      return this.router.navigate(['page-home']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }

    );
  }

  // reloadPage(): void {
  //   window.location.reload();
  // }

}
