import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../token-storage.service';
import {ToastrService} from 'ngx-toastr';
import {UserServiceService} from '../../Manh/servicem/user-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService, ToastrService]
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user_name: string;
  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService, private toastrService: ToastrService) {
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(this.tokenStorage.getUser());
        console.log(data);
        this.isSignUpFailed = false;
        this.isSuccessful = true;
        if (data.error == null) {
          this.toastrService.success('Đăng ký thành công');
          const authLogin = {
            username: this.form.username,
            password: this.form.password
          };
          this.authService.login(authLogin).subscribe(
            data => {
              this.tokenStorage.saveToken(data.accessToken);
              this.tokenStorage.saveUser(data);
              if (data.error === '403 FORBIDDEN'){
                this.errorMessage = data.message;
                this.tokenStorage.signOut();
                window.location.reload();
                return this.router.navigate(['login']);
              }
              return this.router.navigate(['page-home']);
            },
            err => {
              this.errorMessage = err.error.message;
            }
          );
        } else {
          this.isSignUpFailed = true;
          this.isSuccessful = false;
          this.errorMessage = data.message;
        }
      },
      err => {
        this.isSignUpFailed = true;
        this.isSuccessful = false;
      }
    );
  }
}
