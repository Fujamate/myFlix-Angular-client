import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @description Component representing the navigation bar.
 * @selector 'app-navbar'
 * @templateUrl './navbar.component.html'
 * @styleUrls ['./navbar.component.scss']
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  /**
    * @constructor
    * @param {Router} router - Angular's Router service for navigation.
    */

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  public openMovieList(): void{
    this.router.navigate(['movies']);
  }
  

  public openProfile(): void {
    this.router.navigate(['profile']);
  }
  
  /**
 * This is the function responsible for logging out the user
 * @returns user and token removed from local storage
 * @returns user navigated to welcome page
 */

  public logoutUser(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    this.router.navigate(['welcome']);
  }


}