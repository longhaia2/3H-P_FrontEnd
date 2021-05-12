import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.css']
=======
  styleUrls: ['./login.component.css'],
  providers: [ToastrService, AuthService]
>>>>>>> e79f61a2552733605e325a5c4d9c03d87553851e
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
<<<<<<< HEAD
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }
=======
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private toastrService: ToastrService) { }
<<<<<<< HEAD
>>>>>>> e79f61a2552733605e325a5c4d9c03d87553851e
=======

>>>>>>> 4007530d7d7fce636a4487d04e38f902c0b9e711
  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
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
<<<<<<< HEAD
          alert(data.message);
          this.tokenStorage.signOut();
          window.location.reload();
          return this.router.navigate(['login']);
          this.toastrService.success('Đăng nhập thành công');
        }
<<<<<<< HEAD
        // alert('Đăng nhập thành công');
=======

>>>>>>> e79f61a2552733605e325a5c4d9c03d87553851e
        if (data.role === 'ROLE_ADMIN'){
          return this.router.navigate(['admin-home']);
=======
          // this.errorMessage = data.message;
          // this.tokenStorage.signOut();
          // window.location.reload();
          this.isLoginFailed = true;
          this.isLoggedIn = false;
          this.errorMessage = data.message;
          // return this.router.navigate(['login']);
        } else {
          if (data.role === 'ROLE_ADMIN'){
            return this.router.navigate(['admin-home']);
          }
          return this.router.navigate(['page-home']);
>>>>>>> 4007530d7d7fce636a4487d04e38f902c0b9e711
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isLoggedIn = false;
      }
    );
  }
  // reloadPage(): void {
  //   window.location.reload();
  // }
}
