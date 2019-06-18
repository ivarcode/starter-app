import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-some-form',
  template: `
    <h2>Emp Form</h2>
    <hr />
    <form [formGroup]="empForm">
      <label>first name</label>
      <input type="text" formControlName="firstName" />
      <br />
      <label>last name</label>
      <input type="text" formControlName="lastName" />
      <br />
      <button type="submit" (click)="saveEmp()">Save</button>
    </form>
  `
})
export class SomeFormComponent implements OnInit, OnDestroy {
  ourSubscriptions = new Subscription();

  empForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ])
  });

  saveEmp(): void {
    // debuggers should never be committed, only for testing
    // remove after use or comment out
    // debugger;
    console.log(this.empForm);
  }

  ngOnInit(): void {
    // disable piece of form example
    // this.empForm.get('firstName').disable();
    // this.ourSubscriptions.add(
    //   this.empForm.valueChanges.subscribe(value => console.log(value))
    // );
    this.ourSubscriptions.add(
      interval(2000).subscribe(() => console.log('timer went off'))
    );
  }

  ngOnDestroy(): void {
    // unsubs from all subscriptions within the sub obj
    this.ourSubscriptions.unsubscribe();
  }
}
