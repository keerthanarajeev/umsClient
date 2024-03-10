import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './UserPipe/filter.pipe';
import { SortPipe } from './UserPipe/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './UserPipe/search.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    AllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    FilterPipe,
    SortPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
