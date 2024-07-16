import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EmployeeFormComponent {
  @Input() employee: any = {};
  @Input() isEditMode = false;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  onSubmit() {
    this.formSubmit.emit(this.employee);
  }

  onCancel() {
    this.formCancel.emit();
  }
}
