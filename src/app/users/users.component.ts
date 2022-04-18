import { Component, OnInit, HostListener } from '@angular/core';
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

  @HostListener('document:click', ['$event']) onClick(event: any) {

    if (event.target.attributes.id) {
      if (event.target.attributes.id.nodeValue === 'found') {
        this.open = true;
      } else {
        this.open = false;
      }
    }else{
      this.open = false;
    }

  }

  constructor(private userService: GetApiService) {
    
  }

  ngOnInit(): void {
  }
}
