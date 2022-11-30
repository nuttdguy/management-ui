import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @Input() isActive = false;
  @Input() isLoggedOut = false;

  showMenu() {
    this.isActive = !this.isActive;
  }

  loggingOut(isLoggedOut: boolean) {
    this.isActive = !isLoggedOut;
    console.log('event emitted ', !isLoggedOut);
  }
}
