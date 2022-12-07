import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @Input() isActive = false;
  @Input() isLoggedOut = false;

  // ngOnInit(): void {
  //   this.isLoggedOut = !this.isLoggedOut;
  // }

  // ngOnDestroy(): void {
  //   this.isLoggedOut = !this.isLoggedOut;
  // }

  ngAfterViewInit(): void {
    this.isLoggedOut = !this.isLoggedOut;
  }

  showMenu() {
    this.isActive = !this.isActive;
  }

  logOut(isLoggedOut: boolean) {
    this.isActive = !isLoggedOut;
  }
}
