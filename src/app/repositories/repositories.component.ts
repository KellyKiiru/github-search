import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { ApiInterface } from '../api-interface';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  users:ApiInterface[]=[]

  constructor(private userService:GetApiService) { }

  ngOnInit(): void {
    this.userService.getRepos().subscribe(
       data => console.log(data)
    )
  }

}
