import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';
  profile: any;
  repos: any;
  username: string | undefined ;
  error: Boolean = false;
  loading = false;
  usersList: any;
  open = false;

  constructor(public getApiService: GetApiService){

  }

  searchUsers(){
    
  }

  
}
