import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BackendHttpService } from './backend-http.service';
import { BackendService } from './backend.service';
import { DialogService } from './dialog.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    { provide: 'API_URL', useValue: 'http://localhost:4200/api' },
    { provide: BackendService, useClass: BackendHttpService},
    UserService,
    DialogService,
    CanDeactivateGuard,
  ]
})
export class CoreModule { }
