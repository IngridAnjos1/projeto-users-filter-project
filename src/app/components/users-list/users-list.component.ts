import { Component, EventEmitter, Output } from '@angular/core';
import { UsersList } from 'src/app/data/user-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  usersList: IUser[] = UsersList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    console.log('user', user);

    this.userSelectedEmitt.emit(user);
  }
}
