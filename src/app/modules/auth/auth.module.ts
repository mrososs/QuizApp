import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { SharedLayoutComponent } from './components/shared-layout/shared-layout.component';


@NgModule({
  providers:[AuthService],
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
