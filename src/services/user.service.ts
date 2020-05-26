import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { API_CONFIG } from "../config/api.config";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    constructor(public http : HttpClient){}

    create(obj : Usuario){
        return this.http.post(`${API_CONFIG.baseUrl}/user`,obj,{
            observe  : 'response',
            responseType : 'text'
        });
    }

    list() : Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/user`);
    }

    find(id : string) : Observable<Usuario>{
        return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/user?funcionario=${id}`);
    }

    delete(id : string){
        return this.http.delete(`${API_CONFIG.baseUrl}/user?id=${id}`);
    }
    
}