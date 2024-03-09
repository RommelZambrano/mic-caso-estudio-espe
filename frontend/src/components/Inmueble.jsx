import CrearInmuebleForm from "../pages/Inmueble/InmuebleFormPage"; //
import InmueblesTable from "../pages/Inmueble/InmuebleListPage"; // 
import { useState } from "react";

const InmueblesDashboard = () => {
  const [inmuebles, setInmuebles] = useState([]);

  const handleCreateInmueble = (nuevoInmueble) => {
    setInmuebles([...inmuebles, nuevoInmueble]);
  };
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
 
        <CrearInmuebleForm onCreateInmueble={handleCreateInmueble} />
      </div>
      <div className="flex flex-wrap -mx-3">
        <InmueblesTable inmuebles={inmuebles} />
      </div>
    </div>
  );
};

export default InmueblesDashboard;
