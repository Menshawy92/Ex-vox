import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { TestComponent } from './test/test.component';
import { SelectRequiredValidatorDirective } from './validators/select-required-validator.directive';
import { Comments } from '../app/models/comments.model';
import { ListPostesComponent } from './list-postes/list-postes.component';
import { CreateComponent } from './create/create.component'


@NgModule({
  declarations: [
    AppComponent,
    SelectRequiredValidatorDirective,
    ListPostesComponent,
    CreateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
