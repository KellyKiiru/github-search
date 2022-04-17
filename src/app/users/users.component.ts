import { ApiInterface } from './../api-interface';
import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:ApiInterface[]=[]
  constructor(private userService:GetApiService) {

   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => console.log(data)
    )
    
  }

}
