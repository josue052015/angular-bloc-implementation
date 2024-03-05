import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UsersModule } from '../modules/users/users-module';
import { InvoicesModule } from '../modules/invoices/invoices-module';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Directive3Directive } from '../core/directives/directive3.directive';
import { Directive2Directive } from '../core/directives/directive2.directive';
import { Directive1Directive } from '../core/directives/directive1.directive';
import { Pipe3Pipe } from '../core/pipes/pipe3.pipe';
import { Pipe2Pipe } from '../core/pipes/pipe2.pipe';
import { Pipe1Pipe } from '../core/pipes/pipe1.pipe';
  
@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
    Test3Component,
    Pipe1Pipe,
    Pipe2Pipe,
    Pipe3Pipe,
    Directive1Directive,
    Directive2Directive,
    Directive3Directive
  ],
  imports: [
    CommonModule,
    UsersModule,
    InvoicesModule,
  ],
  exports: [
    Test1Component,
    Test2Component,
    Test3Component,
    Pipe1Pipe,
    Pipe2Pipe,
    Pipe3Pipe,
    Directive1Directive,
    Directive2Directive,
    Directive3Directive
  ]
})
export class SharedModule { }
