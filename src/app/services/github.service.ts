import { Injectable } from '@angular/core';
import { Http, Headers } from'@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private clientId = '4eec196a3ce1d211f2b9';
  private clientSecret = '4a0b3f275f6735cdeb7c195a77b3de87a679c790'

  constructor(private _http:Http) { 
    console.log('github service ready....');
    this.username = 'bradtraversy';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientId+'&client_secret='+this.clientSecret).map(res => res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.clientId+'&client_secret='+this.clientSecret).map(res => res.json());
  }
  updateUser(username:string){
    this.username=username;
  }
}
