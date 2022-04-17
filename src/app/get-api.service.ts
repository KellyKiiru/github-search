import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInterface } from './api-interface';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  BASE_URL:any  ='https://api.github.com';

  REPOS_URL:any = "https://api.github.com/users/mojombo/repos"

  constructor(private http:HttpClient) {

   }

   getUsers():Observable<any>{
     return this.http.get<any>(this.BASE_URL + '/users/KellyKiiru')

   }

   getRepos():Observable<any>{
    return this.http.get<any>(this.BASE_URL+'/users/KellyKiiru/repos')

  }

  //  getRepos():Observable<ApiInterface>{
  //    return this.http.get<any>(this.REPOS_URL )
  //  }
}

