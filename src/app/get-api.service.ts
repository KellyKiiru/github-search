import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  
  username = 'KellyKiiru';

  base_url = 'https://api.github.com';

  async searchUsers(username: string) {
    const search = this.http.get<any>(`${this.base_url}/users/${username}`);
    return await lastValueFrom(search).then((response) => response);
  }

  getUserRepo(username: string): Observable<any> {
    return this.http.get<any>(`${this.base_url}/users/${username}/repos`);
  }

  constructor(private http: HttpClient) {}
}






// searchUsers(name: string) {
//   return this.http.get<any>('https://api.github.com/search/users?q=' + name, {
//     observe: 'response',
//   });
// }

// getProfile(name: string) {
//   return this.http.get<any>('https://api.github.com/users/' + name, {
//     observe: 'response',
//   });
// }

// getUserRepos(name: string) {
//   return this.http.get<any>(
//     'https://api.github.com/users/' + name + '/repos?per_page=150',
//     { observe: 'response' }
//   );
// }

// getContributors(name: string, repo: string) {
//   return this.http.get<any>(
//     'https://api.github.com/repos/' + name + '/' + repo + '/contributors',
//     { observe: 'response' }
//   );
// }
