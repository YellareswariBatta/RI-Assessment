import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EmployeeListComponent {
  @Input() employees: any[] = [];
  @Input() more: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() add = new EventEmitter<void>();

  onAddClick() {
    this.add.emit();
  }

  onEdit(employee: any) {
    this.edit.emit(employee);
  }

  onDelete(employee: any) {
    this.delete.emit(employee);
  }
}
