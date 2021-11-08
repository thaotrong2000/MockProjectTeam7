import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/core/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, NgbModule, ReactiveFormsModule],
  exports: [NavbarComponent, NgbModule, ReactiveFormsModule],
})
export class SharedModule {}
