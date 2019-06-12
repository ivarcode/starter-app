import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

interface IEmployeeFromAPI {
  employee_age: string;
  employee_name: string;
  employee_salary: string;
  id: string;
  profile_image: any;
}

export interface IEmployee {
  employeeAge: number;
  employeeName: string;
  employeeSalary: number;
  id: number;
  profileImage: any;
}

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  private employees: IEmployee[];

  constructor(private http: HttpClient) {}

  getEmployeeData(): Observable<IEmployee[]> {
    if (this.employees) {
      return of(this.employees);
    }
    return this.http
      .get<IEmployeeFromAPI[]>(
        'http://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map(data => {
          return data.map(emp => {
            return {
              employeeAge: parseInt(emp.employee_age),
              employeeName: emp.employee_name,
              employeeSalary: parseInt(emp.employee_salary),
              id: parseInt(emp.id),
              profileImage: emp.profile_image
            };
          });
        }),
        tap(data => (this.employees = data))
      );
  }
}
