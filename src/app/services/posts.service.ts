import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Post } from '../interfaces/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPostsByUserId(id: string): Observable<Post[]>  {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${id}`);
  }
}
