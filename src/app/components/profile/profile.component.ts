import { Component, OnInit } from '@angular/core';
import { Http, Headers } from'@angular/http';
import {GithubService} from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = [];
  repos = [];
  username:string;
  constructor(
    private  _githubService:GithubService
  ) {
    this.user = null;
  }

  ngOnInit() {
  }

  searchUser(){
    // console.log('search works');
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      // console.log('repos');
      // console.log(repos);
      this.repos = repos;
    });
  }


}
