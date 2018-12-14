import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  appTitle = 'LOGISTIC';

  public show: boolean = false;

  addForm: FormGroup;

  quantities = [];

  typeOf = [];

  dests = [];

  constructor() {

    this.quantities = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    this.typeOf = [ "Freight Services", "Courier Services", "Warehousing Services" ];
    this.dests = [ "Arkansas", "Michigan", "Atlanta", "California", "Arizona", "Colorado", "Illinois", "Minnesota" ];

   }

  ngOnInit() {

    this.addForm = new FormGroup( {

      'name': new FormControl(null),
      'email': new FormControl(null),
      'phone': new FormControl(null),
      'type': new FormControl(null),
      'quantity': new FormControl(null),
      'destination': new FormControl(null),
      'comments': new FormControl(null),


    });
  }

  showAdd() {

    this.show = !this.show;

  }

  onSubmit() {

    console.log(this.addForm);

  }

  

}
