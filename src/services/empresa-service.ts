import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Empresa } from "../models/empresa";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class EmpresaService {
    constructor(public http : HttpClient){}

    create(empresa : Empresa){
        return this.http.post(`${API_CONFIG.baseUrl}/next/service`,empresa);
    }
    
}