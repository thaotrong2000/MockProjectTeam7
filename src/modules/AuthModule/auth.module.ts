import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SettingsComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}