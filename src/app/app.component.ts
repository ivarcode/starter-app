import { Component, OnInit } from '@angular/core';
import { DummyService, IEmployee } from './dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starter-app (needs a better name)';
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
}
