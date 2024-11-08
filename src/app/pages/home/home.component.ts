import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private route = inject(Router);

  onStart() {
    this.trackButtonClick()
    this.route.navigate(['/survey']);
  }

  trackButtonClick() {
    gtag('event', 'start_quiz', {});
  }
}
