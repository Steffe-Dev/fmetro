import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class NavService {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate([''])
  }

  goToMetronome(): void {
    this.router.navigate(['metronome'])
  }
}
