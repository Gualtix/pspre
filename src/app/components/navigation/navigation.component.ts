import { Component, OnInit, HostBinding, NgZone } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    
    private router: Router,
    public zone: NgZone) {
    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        //console.log('Start...');d
      }
      if (event instanceof NavigationEnd) {
        console.log('Ends...');
        (<any>$('#navbarToggle')).collapse('hide');
      }
    });

  

}  

  ngOnInit() {
  } 

}

