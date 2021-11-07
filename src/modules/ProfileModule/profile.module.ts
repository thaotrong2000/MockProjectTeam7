import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';
import { SharedModule } from '../SharedModule/shared.module';

@NgModule({
  declarations: [ProfileComponent, ProfileFavoritesComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
