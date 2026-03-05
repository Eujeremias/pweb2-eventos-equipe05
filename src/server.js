import express from "express";

import { EventosDatabase } from "./database/eventosDataBase.js";
const db = new EventosDatabase()
const app = express();
const PORT = 3000;
const eventos = db.listarTodos()

function verificaListaVazia(array){
   return array.length == 0;
}


// let dado1 = {titulo: "Festa na ARSAL", descricao: "leve seu prato", vagas: 5, vagasDisponiveis: 3, modalidade: "Presencial", cargaHoraria: 5, ativo: true}

console.log(db.listarTodos());

// Lista todos os eventos
app.get("/",(req, res)=>{
    verificaListaVazia(eventos) ? res.send("Lista sem conteúdo") : res.jso(eventos)
})

// Lista evento especifico
app.get("/:id",(req,res)=>{
    
    res.send(verificaListaVazia())
})

app.listen(PORT,()=>{
    console.log(`Servidor ligado na porta ${PORT}`);
})