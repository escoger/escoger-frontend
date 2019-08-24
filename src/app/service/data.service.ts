import { Injectable } from '@angular/core';
import { Mobile } from '../model/mobile';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption=[]
  public postsData: Mobile[]
  postUrl : string = 'http://localhost:8089/mobiles/All'; 

  constructor(
    private http: HttpClient
  ) { }


  getPosts(): Observable<Mobile[]>{
    return this.http.get<Mobile[]>(this.postUrl);
    
  }

  filteredListOptions() {
    let posts = this.postsData;
        let filteredPostsList = [];
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.brand === post.brand) {
                  filteredPostsList.push(post);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }
}
