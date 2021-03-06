import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { Usuario } from "../models/usuario";


@Injectable()
export class StorageService{


    getLocalUser() : Usuario {
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if(user == null){
            return null;
        }
        else{
            return JSON.parse(user);
        }
    }

    getEmpresa(){
        var obj = JSON.parse(localStorage.getItem(STORAGE_KEYS.localUser));
        return obj['id_empresa'];
         
    }

    setLocalUser(obj : Usuario){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj));
        }
    }
 

}