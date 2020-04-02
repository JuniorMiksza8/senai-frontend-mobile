import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veiculo } from "../models/veiculo";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class CarroService {
    constructor(public http : HttpClient){}

    create(obj : Veiculo){
        return this.http.post(`${API_CONFIG.baseUrl}/next/service`,obj,{
            observe  : 'response',
            responseType : 'text'
        });
    }
    
}