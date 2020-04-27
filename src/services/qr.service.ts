import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class QRService {
    constructor(public http : HttpClient){}

    pdf(id : string){
        return this.http.get(`${API_CONFIG.baseUrl}/barcode?id=${id}`);
    }
    
}