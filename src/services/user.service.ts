import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { API_CONFIG } from "../config/api.config";
import { Observable } from "rxjs/Observable";
import { Empresa } from "../models/empresa";
import { StorageService } from "./storage.service";

@Injectable()
export class UserService {
    constructor(public http : HttpClient,public storageService : StorageService){}

    create(obj : any){
        let empresa = this.storageService.getEmpresa();
        return this.http.post(`${API_CONFIG.baseUrl}/user?empresa=${empresa}`,obj,{
            observe  : 'response',
            responseType : 'text'
        });
    }

    register(user : Usuario,empresa: Empresa){
        return this.http.post(`${API_CONFIG.baseUrl}/user?empresa=${empresa.idEmpresa}`,user,{
            observe  : 'response',
            responseType : 'text'
        });
    }

    list() : Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/user?empresa=${this.storageService.getEmpresa()}`);
    }

    find(id : string) : Observable<Usuario>{
        return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/user?id=${id}`);
    }

    delete(id : string){
        return this.http.delete(`${API_CONFIG.baseUrl}/user?id=${id}`);
    }
    
}