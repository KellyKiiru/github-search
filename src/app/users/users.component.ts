import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  profile: any;
  repos: any;
  username: string = 'KellyKiiru';
  error: Boolean = false;
  loading = false;
  usersList: any;
  open = false;
  
  constructor(private userService: GetApiService) {
    
  }

  ngOnInit(): void {
  }
}
