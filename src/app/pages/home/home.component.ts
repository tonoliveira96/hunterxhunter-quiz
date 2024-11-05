import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private route = inject(Router);

  onStart() {
    this.route.navigate(['/survey']);
  }

  ngOnInit(): void {
    localStorage.clear();
  }
}
