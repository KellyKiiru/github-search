import { Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'github-search';

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
    } else {
      this.open = false;
    }
  }

  constructor(public getApiService: GetApiService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchUsers() {
    this.getApiService.searchUsers(this.username.split(' ').join('')).subscribe(
      (res) => {
        console.log(res);

        this.usersList = res.body.items;
      },
      (error) => {
        this.error = true;
      }
    );
  }

  getUser() {
    this.loading = true;

    this.getApiService.getProfile(this.username.split(' ').join('')).subscribe(
      (res) => {
        this.profile = res.body;
        this.getRepos();

        this.loading = false;
        this.error = false;
      },
      (error) => {
        this.error = true;
      }
    );
  }

  getRepos(): void {
    
  }
}
