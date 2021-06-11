import React from "react";
import reactDOM from "react-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Rodape from "./Componentes/Rodape";
import Tarefas from "./Componentes/Tarefas";

reactDOM.render(
  <div>
    <Cabecalho></Cabecalho>
    <div className="InputDiv">
      <div className="Title">Lista</div>
      <div className="input-group">
        <input
          id="input"
          type="text"
          className="Input"
          placeholder="Nome: "
        ></input>
        <Tarefas></Tarefas>
      </div>
    </div>
    <div>
      <ol className="Lista"></ol>
    </div>
    <Rodape></Rodape>
  </div>,

  document.getElementById("root")
);
