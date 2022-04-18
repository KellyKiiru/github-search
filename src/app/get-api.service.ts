import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  private username: string | undefined;
  constructor(private http: HttpClient) {}

  searchUsers(name: string) {
    return this.http.get<any>('https://api.github.com/search/users?q=' + name, {
      observe: 'response',
    });
  }

  getProfile(name: string) {
    return this.http.get<any>('https://api.github.com/users/' + name, {
      observe: 'response',
    });
  }

  getUserRepos(name: string) {
    return this.http.get<any>(
      'https://api.github.com/users/' + name + '/repos?per_page=150',
      { observe: 'response' }
    );
  }

  getContributors(name: string, repo: string) {
    return this.http.get<any>(
      'https://api.github.com/repos/' + name + '/' + repo + '/contributors',
      { observe: 'response' }
    );
  }
}
