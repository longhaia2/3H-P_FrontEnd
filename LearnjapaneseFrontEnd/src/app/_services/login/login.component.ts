import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ToastrService, AuthService]
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private toastrService: ToastrService) { }
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
        console.log(this.tokenStorage.getUser());
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        if (data.error === '403 FORBIDDEN'){
          alert(data.message);
          this.tokenStorage.signOut();
          window.location.reload();
          return this.router.navigate(['login']);
          this.toastrService.success('Đăng nhập thành công');
        }

        if (data.role === 'ROLE_ADMIN'){
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
