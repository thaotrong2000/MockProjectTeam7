import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFavoritesComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
