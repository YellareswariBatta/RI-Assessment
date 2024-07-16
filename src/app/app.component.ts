import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent, EmployeeListComponent]
})
// app.component.ts
export class AppComponent {
  selectedEmployee: any = {};
  isEditMode: boolean = false;
  isFormVisible: boolean = false;
  employees: any[] = [];

  constructor(private snackBar: MatSnackBar) {}

  onAddClick() {
    this.selectedEmployee = {}; // Reset employee data
    this.isEditMode = false; // Set to add mode
    this.isFormVisible = true; // Show the form
  }

  onEdit(employee: any) {
    this.selectedEmployee = employee;
    this.isEditMode = true;
    this.isFormVisible = true;
  }

  onDelete(employee: any) {
    this.employees = this.employees.filter(emp => emp !== employee);
    this.splitEmployees();
    this.showSnackbar('Employee data has been deleted');
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Undo', {
      duration: 3000,
    }).onAction().subscribe(() => {
      // Implement undo functionality here if needed
    });
  }

  onFormSubmit(employee: any) {
    if (this.isEditMode) {
      // Update logic here
      const index = this.employees.findIndex(emp => emp === this.selectedEmployee);
      if (index !== -1) {
        this.employees[index] = employee;
      }
    } else {
      // Add logic here
      this.employees.push(employee);
    }
    this.isFormVisible = false; // Hide the form
    this.selectedEmployee = {}; // Reset employee
    this.isEditMode = false; // Reset edit mode
    this.splitEmployees();
    if(!this.isEditMode){
      this.showSnackbar('Employee data has been updated');
    }
    else{
      this.showSnackbar('Employee data Added Successfully');
    }
  }

  currentEmployees: any[] = [];
  previousEmployees: any[] = [];

  splitEmployees() {
    if (this.employees.length > 3) {
      this.currentEmployees = this.employees.slice(0, 3);
      this.previousEmployees = this.employees.slice(3);
    } else {
      this.currentEmployees = this.employees;
      this.previousEmployees = [];
    }
  }

  onFormCancel() {
    this.isFormVisible = false; // Hide the form
    this.selectedEmployee = {}; // Reset employee
    this.isEditMode = false; // Reset edit mode
    this.splitEmployees()
  }
}
