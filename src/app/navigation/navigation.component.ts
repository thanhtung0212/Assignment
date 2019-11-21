import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { ActivatedRoute } from '@angular/router'
import { User } from 'core/user.model';
import { Location } from "@angular/common"
import { error } from '@ant-design/icons-angular';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: User = new User()
  constructor(
    public authservice: AuthService,
    public userService: UserService,
    private router: ActivatedRoute,
    private location: Location,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.router.data.subscribe(async routerData => {
      let data = routerData['data']
      if (data) {
        this.user = await this.userService.getUserProfile(data.uid)
      } else {
        console.log('=======errr');
      }
    })

  }
  logout(newTitle: string) {
    this.authservice.doLogout()
      .then((res) => {
        this.titleService.setTitle(newTitle)
        window.location.href = '/login'
      }, (error) => {
        console.log("Logout error", error);
      });
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
    console.log(newTitle);

  }
}

