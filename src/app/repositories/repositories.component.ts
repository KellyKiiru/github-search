import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  profile: any;
  repos: any;
  username: string | undefined ;
  error: Boolean = false;
  loading = false;
  usersList: any;
  open = false;
  
  constructor(private userService:GetApiService) { }

  ngOnInit(): void {
   
  }

}
