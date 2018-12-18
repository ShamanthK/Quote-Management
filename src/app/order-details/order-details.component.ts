import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  appTitle = 'LOGISTIC';

  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

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

      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'destination': new FormControl(null, Validators.required),
      'comments': new FormControl(null),


    });
  }

  showAdd() {

    this.show1 = !this.show1;

  }

  showAll() {

    this.show2 = !this.show2;

  }

  showByName() {

    this.show3 = !this.show3;

  }

  onSubmit() {

    console.log(this.addForm);

  }

  

}
