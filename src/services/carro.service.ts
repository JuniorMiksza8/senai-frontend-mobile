import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veiculo } from "../models/veiculo";
import { API_CONFIG } from "../config/api.config";
import { Observable } from "rxjs/Observable";
import { StorageService } from "./storage.service";

@Injectable()
export class CarroService {
    constructor(public http : HttpClient,public storage :StorageService){}

    create(obj : Veiculo){
        return this.http.post(`${API_CONFIG.baseUrl}/veiculo?empresa=${this.storage.getEmpresa()}`,obj,{
            observe  : 'response',
            responseType : 'text'
        });
    }

    list(id : string) : Observable<Veiculo[]>{
        return this.http.get<Veiculo[]>(`${API_CONFIG.baseUrl}/veiculo?categoria=${id}&empresa=${this.storage.getEmpresa()}`);
    }

    read(id : string) : Observable<Veiculo>{
        return this.http.get<Veiculo>(`${API_CONFIG.baseUrl}/veiculo?veiculo=${id}&empresa=${this.storage.getEmpresa()}`);
    }

    delete(id : string){
        return this.http.delete(`${API_CONFIG.baseUrl}/veiculo`,{
            observe : 'response',
            responseType : 'text'
        });
    }

    edit(obj : Veiculo){
        return this.http.put(`${API_CONFIG.baseUrl}/veiculo`,obj,{
            observe  : 'response',
            responseType : 'text'
        });
    }
    
}