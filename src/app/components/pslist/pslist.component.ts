import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';
import { Stock } from '../../models/stock';


@Injectable()
export class PwaService {
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {

      //if (askUserToUpdate()) {
      //  window.location.reload();
      //}
    });
  }
}

@Component({
  selector: 'app-pslist',
  templateUrl: './pslist.component.html',
  styleUrls: ['./pslist.component.css']
})


export class PslistComponent implements OnInit {

  xanks:string = "2 x 3";
  stock_object:Stock = new Stock();
 
  seven_list:  Array<any> = [];
  eight_list:  Array<any> = [];
  nine_list:   Array<any> = [];
  ten_list:    Array<any> = [];
  twelve_list: Array<any> = [];


  constructor(){
    this.stock_object.prod_list.forEach( (element) => {
      element.prod;
      var splitted = element.prod.descrip.split(" "); 
      let i = splitted.length - 1;

      if(splitted[i] == "7"){
        element.prod.descrip = splitted[i-4] +"x"+ splitted[i-2] +"x"+ splitted[i];
        this.seven_list.push(element.prod);
      }

      if(splitted[i] == "8"){
        element.prod.descrip = splitted[i-4] +"x"+ splitted[i-2] +"x"+ splitted[i];
        this.eight_list.push(element.prod);
      }

      if(splitted[i] == "9"){
        element.prod.descrip = splitted[i-4] +"x"+ splitted[i-2] +"x"+ splitted[i];
        this.nine_list.push(element.prod);
      }

      if(splitted[i] == "10"){
        element.prod.descrip = splitted[i-4] +"x"+ splitted[i-2] +"x"+ splitted[i];
        this.ten_list.push(element.prod);
      }

      if(splitted[i] == "12"){
        element.prod.descrip = splitted[i-4] +"x"+ splitted[i-2] +"x"+ splitted[i];
        this.twelve_list.push(element.prod);
      }


    }); 
  }
  ngOnInit(): void 
  {
  }
  /*
  constructor() {
    let deferredPrompt:any;
    console.log(this.stock_object.prod_list[0].prod.descrip);

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    //deferredPrompt = e.prompt();
    deferredPrompt.prompt();
    // Update UI notify the user they can install the PWA

    //showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });
   }

  */
/*
  constructor(public Pwa: PwaService) {}
  installPwa(): void {
  this.Pwa.promptEvent.prompt();
  }
  */



  

}
