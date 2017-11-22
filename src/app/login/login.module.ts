import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [UserProfileComponent],
  exports: [ UserProfileComponent ],
  providers: [ AuthService ]
})
export class LoginModule { }
