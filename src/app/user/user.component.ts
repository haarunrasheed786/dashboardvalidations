import { Component,OnInit } from '@angular/core';
import { UsersService } from '../service/service/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  searchTerm: string = '';
  user:any;
  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.userservice.getusers().subscribe(contacts => {
      this.user = contacts;
    })
  }

}
