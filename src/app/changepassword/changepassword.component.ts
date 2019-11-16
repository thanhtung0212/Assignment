import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { ActivatedRoute } from '@angular/router'
import { User } from 'core/user.model';

// import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {

  email: string;
  user: User = new User()
  // validateForm: FormGroup;

  change = new FormGroup({
    email: new FormControl()
  })



  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    public authService: AuthService,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.router.data.subscribe(async routeData => {
      let data = routeData['data']
      if (data) {
        this.user = await this.userService.getUserProfile(data.uid)
      } else {
        console.log('---errrr');
      }
    })



  }

  resetPassword(value, email: string) {
    this.email = value.email
    // email = this.user.email
    // email = value.email
    if (!this.email) {
      console.log('Không được để trống ');
      document.getElementById('result2').innerHTML = "Không được để trống nha! Cảm ơn"
    } else {
      console.log('email');
      this.authService.ResetPassword(this.email)
        .then(res => {
          document.getElementById('result').innerHTML = "Đổi thành công rồi nha."
          console.log('------changepass', this.user);

        }, err => {
          document.getElementById('result2').innerHTML = " Email không chính xác vui lòng kiểm tra lại"
          console.log('email không chính xác vui lòng kiểm tra lại', err);

        })
    }
    console.log("===================", this.email);




  }

}
