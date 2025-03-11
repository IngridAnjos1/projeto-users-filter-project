import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { PipesModule } from "../pipes/pipes.module";
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [  
    FilterComponent,
    UserDetailsComponent,
    UsersListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PipesModule,
    AngularMaterialModule,
  ],
  exports: [
    FormsModule,
    FilterComponent,
    UserDetailsComponent,
    UsersListComponent
  ],

})
export class ComponentsModule { }