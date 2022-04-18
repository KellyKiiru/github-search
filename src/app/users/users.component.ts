import { Component, OnInit, HostListener } from '@angular/core';
import { GetApiService } from '../get-api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {

  username = 'KellyKiiru'
  
  user!:any;
  repo!:any;

  constructor(private getApiService:GetApiService){
  }

  getData(newUsername:any):void{
    this.username = newUsername;
    this.getRepoData=(newUsername)
    this.getUserData =(newUsername)

  } 

  getRepoData(username:string):void{
    this.getApiService.getUserRepo(username).subscribe((repo)=>{
      this.repo = repo
      console.log(repo)
    })
  }

  getUserData(username:string):void{
    this.getApiService.searchUsers(username).then((user) =>(this.user = user))
    console.log(username)
  }


  ngOnInit(): void {

    this.getRepoData(this.username)

    this.getUserData(this.username)
  }

}
