import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foko-chat';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.authState.subscribe(async (state) => {
      if (state) {
        this.router.navigate(['chat']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
