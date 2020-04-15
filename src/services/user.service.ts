import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class UserService {
    constructor(public http : HttpClient){}

    create(obj : Usuario){
        return this.http.post(`${API_CONFIG.baseUrl}/Voiture/user`,obj,{
            observe  : 'response',
            responseType : 'text'
        });
    }
    
}