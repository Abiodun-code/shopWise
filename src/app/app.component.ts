import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopWise';

  navScroll:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    if (window.scrollY <= 100) {
      this.navScroll = true;
    } else {
      this.navScroll = false;
    }
  }
}
