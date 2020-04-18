import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { Credenciais } from "../models/auth.credentials";
import { StorageService } from "./storage.service";
import { Usuario } from "../models/usuario";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    constructor(public http : HttpClient,public storageService : StorageService){}

    login(obj : Credenciais) : Observable<Usuario>{
        return this.http.post<Usuario>(`${API_CONFIG.baseUrl}/auth`,obj);
    }

    logout(){
        this.storageService.setLocalUser(null);
    }
    
}