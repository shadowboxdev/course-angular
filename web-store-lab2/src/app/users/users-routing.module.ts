/*
 * Copyright (c) 2015-2018 IPT-Intellectual Products & Technologies (IPT).
 * All rights reserved.
 * 
 * This software provided by IPT-Intellectual Products & Technologies (IPT) is for 
 * non-commercial illustartive and evaluation purposes only. 
 * It is NOT SUITABLE FOR PRODUCTION purposes because it is not finished,
 * and contains security flаws and weaknesses (like sending the passwords and 
 * emails of users to the browser client, wich YOU SHOULD NEVER DO with real user
 * data). You should NEVER USE THIS SOFTWARE with real user data.
 * 
 * This file is licensed under terms of GNU GENERAL PUBLIC LICENSE Version 3
 * (GPL v3). The full text of GPL v3 license is providded in file named LICENSE,
 * residing in the root folder of this repository.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { AuthGuardService } from '../login/auth-guard.service';
import { CanDeactivateGuard } from '../core/can-deactivate-guard.service';
// import { AuthGuardService } from '../login/auth-guard.service';
// import { CanDeactivateGuard } from '../core/can-deactivate-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [AuthGuardService],
        component: UserListComponent
      },
      {
        path: 'new',
        canActivate: [AuthGuardService],
        canDeactivate: [CanDeactivateGuard],
        pathMatch: 'full',
        component: UserDetailComponent,
        data: {
          title: 'Add New User'
        }
      },
      {
        path: ':id',
        component: UserDetailComponent,
        canActivate: [AuthGuardService],
        canDeactivate: [CanDeactivateGuard],
        data: {
          title: 'Edit User'
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
