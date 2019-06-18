import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DummyService, IEmployee } from './dummy.service';
import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
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
  allCookies: {};
  addCookieForm = new FormGroup({
    cookieName: new FormControl('', [Validators.required]),
    cookieContent: new FormControl('', [Validators.required])
  });
  filterText = '';
  showForm = false;
  searchControl = new FormControl('');
  get filteredEmployees(): IEmployee[] {
    if (!this.filterText) {
      return this.employees;
    }
    return this.employees.filter(item => {
      if (
        /* does the employee name contain the filterText within it */
        item.employeeName.toLowerCase().includes(this.filterText.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  }
  colorValue: string;
  individualIndex = 0;
  allEmployees: IEmployee[];
  get employees(): IEmployee[] {
    if (!this.allEmployees) {
      return [];
    }
    return this.allEmployees;
    // return this.allEmployees.slice(this.currentIndex, this.currentIndex + 10);
  }
  currentIndex = 0;
  profileForm: FormGroup;

  constructor(
    private dummyService: DummyService,
    private cookieService: CookieService,
    private fb: FormBuilder
  ) {}

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

    // added to GET from database automatically w/o button
    this.getEmployeeData();
    // anytime the value of the searchControl form changes... but delay 500ms
    // we do not want this to fire every keystroke, for example every half second pause
    this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.filterText = value;
      console.log(this.filterText);
    });
    this.getCookies();
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

  getCookies(): void {
    this.allCookies = this.cookieService.getAll();
  }

  createCookie(): void {
    this.cookieService.set(
      this.addCookieForm.value.cookieName,
      this.addCookieForm.value.cookieContent
    );
    this.getCookies();
  }

  deleteSpecificCookie(): void {
    this.cookieService.delete(this.addCookieForm.value.cookieName);
    this.getCookies();
  }

  deleteAllCookies(): void {
    this.cookieService.deleteAll();
    this.getCookies();
  }
}
