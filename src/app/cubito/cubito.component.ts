import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubito',
  templateUrl: './cubito.component.html',
  styleUrls: ['./cubito.component.css']
})
export class CubitoComponent implements OnInit {

  @Input() dims: string     = "3x4x12";
  @Input() rust: string     = "0";
  @Input() cepi: string     = "0";
  @Input() stock: string    = "0";
  @Input() bit_flag: string = "0";

  long: string = "";
  meds: string = "";

  constructor() 
  {
      var splitted = this.dims.split("x"); 
      let i = splitted.length;
      this.long = splitted[i-1];
      this.meds = splitted[i-3] + " x " + splitted[i-2];  
  }

  ngOnInit(): void 
  {
      var splitted = this.dims.split("x"); 
      let i = splitted.length;
      this.long = splitted[i-1];
      this.meds = splitted[i-3] + " x " + splitted[i-2];  
  }

}
