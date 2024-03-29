import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {  
  constructor(private getApiService: GetApiService){
  }

  username = 'kellykiiru'
  
  user!:any;
  repo!:any;

  getData(newUsername:any):void{
    this.username = newUsername;
    this.getRepoData=(newUsername)
    this.getUserData =(newUsername)
    this.getApiService.getUserRepo(this.username).subscribe((repo)=>{
      this.repo = repo
      console.log(repo)
    })
    this.getApiService.searchUsers(this.username).then((user) =>(this.user = user))
    console.log(this.username)
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
