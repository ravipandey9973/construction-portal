import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cons';
  selectedValue: string="";


  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  model = {
    planner: '',
    Description: '',
    priority: ''
  };
  loginform = new FormGroup({
    planner: new FormControl('', [Validators.required]),
    priority: new FormControl('',[Validators.required]),
  Description: new FormControl('',[Validators.required])
  });
  
  submit() {
  
    if
       (this.model.planner && this.model.Description ) {
        Swal.fire({
          title: "Good job!",
          text: "Submit Sucessfully!!",
          icon: "success"
        });
      
    } else
    {
      
      Swal.fire({
        title: "Missing?",
        text: "Fill All Field!!",
        icon: "question"
      });
    }

}
}
