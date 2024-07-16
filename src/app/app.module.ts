import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent
    // other components
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    EmployeeFormComponent,
    BsDatepickerModule.forRoot(),
    EmployeeListComponent,
    MatSnackBarModule,
    // other modules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
