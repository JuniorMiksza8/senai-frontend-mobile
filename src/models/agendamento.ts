export interface agendamento {  
        id_locacao? : String,
        id_func  : String,
        id_veiculo : String,
        origem : String,
        destino : String,
        dataHora_saida? : String,
        dataHora_chegada? : String,
        km_saida : number,
        km_chegada? : number       
} 