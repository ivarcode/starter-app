import { Component, OnInit } from '@angular/core';
import { DummyService, IEmployee } from './dummy.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starter-app (needs a better name)';
  individualIndex = 0;
  get employees(): IEmployee[] {
    if (!this.allEmployees) {
      return [];
    }
    return this.allEmployees.slice(this.currentIndex, this.currentIndex + 10);
  }
  allEmployees: IEmployee[];
  currentIndex = 0;

  constructor(private dummyService: DummyService) {}

  ngOnInit() {}

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
}
