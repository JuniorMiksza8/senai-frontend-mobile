import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";
import { Observable } from "rxjs/Observable";
import { agendamento } from "../models/agendamento";

@Injectable()
export class AgendamentoService {
    constructor(public http : HttpClient,public storageService : StorageService){}


    create(agendamento : agendamento) {
        return this.http.post(`${API_CONFIG.baseUrl}/locacao?empresa=${this.storageService.getEmpresa()}`,agendamento,{
            observe  : 'response',
            responseType : 'text'
        });
    }

    list() : Observable<any[]>{
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/locacao?empresa=${this.storageService.getEmpresa()}`);
    }

    checkout(id : any,km : any){
        return this.http.put(`${API_CONFIG.baseUrl}/locacao?locacao=${id}`,{kmChegada : km})
    }
    
}