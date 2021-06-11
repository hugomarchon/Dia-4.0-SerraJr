import React from "react";
import "../index.css";

function Tarefas() {
  let item = document.getElementById("input").value;
  let lista = document.createElement("li");
  if (item !== "") {
    document.querySelector(".Lista").appendChild(lista).innerHTML =
      "Tarefa:" + item;
    document.getElementById("input").value = "";
  }
}

function teste() {
  return (
    <button onClick={() => Tarefas()} className="button">
      Adicionar
    </button>
  );
}

export default teste;
