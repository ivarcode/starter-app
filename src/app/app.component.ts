import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DummyService, IEmployee } from './dummy.service';
import { NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starter-app (needs a better name)';
  colorValue: string;
  individualIndex = 0;
  get employees(): IEmployee[] {
    if (!this.allEmployees) {
      return [];
    }
    return this.allEmployees.slice(this.currentIndex, this.currentIndex + 10);
  }
  allEmployees: IEmployee[];
  currentIndex = 0;
  profileForm: FormGroup;

  constructor(private dummyService: DummyService, private fb: FormBuilder) {}

  ngOnInit() {
    // this.profileForm = new FormGroup({
    //   fName: new FormControl('default value'),
    //   lName: new FormControl('', Validators.required)
    // });
    this.profileForm = this.fb.group({
      fName: [''],
      lName: ['', Validators.required]
    });
    this.colorValue = 'blue';
  }

  getEmployeeData(): void {
    this.dummyService.getEmployeeData().subscribe(data => {
      this.allEmployees = data;
      // console.log(data);
    });
  }

  getNextTen(): void {
    this.currentIndex += 10;
    this.getEmployeeData();
  }

  getIndividual(): IEmployee {
    console.log(this.employees[this.individualIndex]);
    return this.employees[this.individualIndex];
  }

  handleChange(value: number) {
    this.individualIndex = value;
  }

  logForm(value) {
    console.log(value);
  }

  saveForm(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      alert('form not valid');
    }
  }

  changeColorToGreen() {
    this.colorValue = 'green';
  }

  updateFirstName(): void {
    this.profileForm.patchValue({ fName: 'John', lName: 'Graham' });
  }
}
