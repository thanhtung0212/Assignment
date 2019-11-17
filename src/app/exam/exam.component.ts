import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { User } from '../core/user.model';
import { Route } from '@angular/router';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzResultModule } from 'ng-zorro-antd/result';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  user: User = new User();
  isSubmitted = false
  isEdit;
  h = 1;
  m = 30;
  s = 0;
  timeout = null
  subjectName
  config: any;
  list: any;
  result = {
    mark: 0,
    trueAnswer: 0,
    answered: 0
  }

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private http: HttpClient,
    private router: ActivatedRoute, ) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
    }
  }

  showModal(): void {
    this.isSubmitted = true;
  }

  onRedirect(): void {
    console.log('Button ok clicked!');
    window.location.href = '/index'
  }

  start() {
    if (this.s === -1) {
      this.m -= 1;
      this.s = 59;
    }
    if (this.m === -1) {
      this.h -= 1;
      this.m = 59;
    }
    if (this.h == -1) {
      clearTimeout(this.timeout);
      alert('Het gio');
      return false;
    }
    document.getElementById('h').innerText = this.h.toString();
    document.getElementById('m').innerText = this.m.toString();
    document.getElementById('s').innerText = this.s.toString();

    this.timeout = setTimeout(() => {
      this.s--;
      this.start();
    }, 1000);

    this.isEdit = true

  }
  stop() {
    clearTimeout(this.timeout)
    this.isEdit = false
    console.log('Stop');

  }
  ngOnInit() {

    this.router.data.subscribe(async routerData => {
      let data = routerData['data']
      if (data) {
        this.user = await this.userService.getUserProfile(data.uid)
      } else {
        console.log('=======errr');
      }
    })


    this.isEdit = false;
    this.router.paramMap.subscribe(params => {
      const id = params.get('subjectId')
      this.subjectName = id
    });

    this.getQuestions(this.subjectName).subscribe(data => {
      this.list = data
    })

    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  getQuestions = (subjectName) => {
    return this.http.get(`../../assets/${subjectName}.json`)
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  onChoose(answerId, questionId) {
    console.log('-----===-=-=-=-==', answerId);
    const current = this.list.find(question => question.Id === questionId)
    if (!current._answerId) {
      this.result.answered += 1
    }
    current._answerId = answerId
  }

  submit() {
    this.list.map(question => {
      if (question._answerId) {
        if (question._answerId === question.AnswerId) {
          this.result.mark += question.Marks
          this.result.trueAnswer += 1
        }
      }
    })
    this.showModal()
  }

}
