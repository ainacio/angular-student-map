// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YourComponent } from './your-component.component';
import { StudentService } from './student.service';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    YourComponent,
    AppComponent // Include AppComponent in the declarations array
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent] // Bootstrap the root component
})
export class AppModule { }