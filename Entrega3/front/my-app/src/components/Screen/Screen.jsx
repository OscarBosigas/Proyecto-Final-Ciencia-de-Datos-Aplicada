import React from "react";
import { useState, useEffect } from "react";
import SelectPanel from "../SelectPanel/SelectPanel";
import "./screen.scss";
import options from "../data/select_options.json";
import InputPanel from "../InputPanel/InputPanel";

const Screen = () => {

  const [ciclo_cultivo, setciclo_cultivo] = useState("");
  const [estado_produccion, setestado_produccion] = useState("");
  const [grupo_cultivo, setgrupo_cultivo] = useState("");
  const [departamento, setdepartamento] = useState("");
  const [municipio, setmunicipio] = useState("");
  const [period, setperiod] = useState("");
  const [year, setyear] = useState(0);
  const [area, setarea] = useState(0);

  const[prediction, setprediction] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = [{
      departamento,
      municipio,
      grupo_cultivo,
      year,
      period,
      area,
      estado_produccion,
      ciclo_cultivo,
    }];

    fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setprediction(data[0]);
      });
  };

  useEffect(() => {
    console.log(prediction);
  }, [prediction]);
  return (
    <div className="screen-container">
      <form className="selectForm">
        <SelectPanel
          options={options.cultive_cycle}
          title={"Ciclo de cultivo"}
          id="select-cultive-cycle"
          setSelectedOption={setciclo_cultivo}
        />
        <SelectPanel
          options={options.production_state}
          title={"Estado físico producción"}
          id="select-production-state"
          setSelectedOption={setestado_produccion}
        />
        <SelectPanel
          options={options.cultive_group}
          title={"Grupo de cultivo"}
          id="select-cultive-group"
          setSelectedOption={setgrupo_cultivo}
        />
        <SelectPanel
          options={options.department}
          title={"Departamento"}
          id="select-department"
          setSelectedOption={setdepartamento}
        />
        <SelectPanel
          options={options.municipe}
          title={"Municipio"}
          id="select-municipe"
          setSelectedOption={setmunicipio}
        />
        <SelectPanel
          options={options.period}
          title={"Periodo"}
          id="select-periodo"
          setSelectedOption={setperiod}
        />
        <InputPanel title={"Año"} id="input-year" setSelectedOption={setyear} />
        <InputPanel
          title={"Area"}
          id="input-area"
          setSelectedOption={setarea}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Predecir
        </button>
      </form>

      <div className="prediction">
        <h2>Resultado</h2>
        <p>El rendimiento estimado es de {prediction} toneladas</p>
      </div>
    </div>
  );
};

export default Screen;
