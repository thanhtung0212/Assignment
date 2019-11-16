import { Component } from '@angular/core'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzBackTopComponent } from 'ng-zorro-antd/back-top'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notify(): void {
    console.log('notify');
  }
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}

