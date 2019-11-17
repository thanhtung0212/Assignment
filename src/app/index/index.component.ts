import { Component, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { NgxPaginationModule } from 'ngx-pagination';
import * as data from '../../assets/Subjects.json';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { User } from '../core/user.model';
import { FormBuilder } from '@angular/forms';
import * as firebase from 'firebase/app';
import * as moment from 'moment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  list: any;
  subjectName: String;
  config;
  total;
  lists = data
  subject: any = (data as any).default;
  user: User = new User()

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private http: HttpClient,
    private router: ActivatedRoute,
  ) {

  }

  ngOnInit() {

    this.router.data.subscribe(async routeData => {
      let data = routeData['data']
      if (data) {
        this.user = await this.userService.getUserProfile(data.uid)
      } else {
        console.log('---errrr');
      }
    })

    function back() {
      window.scrollTo(500, 0);
    }
    this.getData().subscribe(data => {
      this.list = data;
    })

    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.list
    }
  }

  checkTime(start_time, end_time) {
    const from = moment(start_time, 'DD/MM/YYYY HH:mm').unix()
    const to = moment(end_time, 'DD/MM/YYYY HH:mm').unix()
    const current = moment().unix()
    if (current >= from && current <= to) {
      return true
    }
    return false
  }

  getData() {
    return this.http.get('../../assets/Subjects.json')

  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

}


