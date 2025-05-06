import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';


@NgModule({
  providers:[AuthService],
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
