import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchInmuebleById, updateInmueble } from "../../api/inmuebles";
import toast from "react-hot-toast";

const tiposInmueble = [
  { id: 1, nombre: "Departamento" },
  { id: 2, nombre: "Casa" },
  { id: 3, nombre: "Hotel" },
  // ... otros tipos de inmuebles
];

const InmuebleUpdateForm = () => {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const [direccion, setDireccion] = useState("");
  const [numeroHabitaciones, setNumeroHabitaciones] = useState("");
  const [tipoId, setTipoId] = useState("");
  const [costoMensual, setCostoMensual] = useState("");

  useEffect(() => {
    const loadInmuebleData = async () => {
      try {
        const data = await fetchInmuebleById(id);
        setDireccion(data.direccion);
        setNumeroHabitaciones(data.numero_habitaciones);
        setTipoId(data.tipo);
        setCostoMensual(data.costo_mensual);
      } catch (error) {
        console.error("Error al cargar los datos del inmueble:", error);
        toast.error("Error al cargar los datos del inmueble");
      }
    };

    loadInmuebleData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inmuebleData = {
      direccion,
      numero_habitaciones: numeroHabitaciones,
      tipo: tipoId, // Asegúrate de que el ID sea un string
      costo_mensual: costoMensual,
    };

    console.log(inmuebleData);

    try {
      await updateInmueble(id, inmuebleData);
      toast.success("Inmueble actualizado con éxito");
      // Aquí podrías redirigir al usuario a otra página o realizar alguna otra acción
    } catch (error) {
      console.error("Error al actualizar el inmueble:", error);
      toast.error("Hubo un problema al actualizar el inmueble");
    }
  };

//   const handleTipoChange = (e) => {
//     setTipoId(e.target.value); // Actualiza el estado con el valor seleccionado
//   };

  // El formulario es muy similar al de CrearInmuebleForm, pero asegúrate de que los inputs estén
  // rellenados con los valores actuales del inmueble para que el usuario pueda editarlos.
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 rounded-lg col overflow-hidde"
      >
        <div className="p-8">
          <h1 className="block w-full text-center text-grey-darkest mb-6 text-2xl font-bold">
            Actualizar Inmueble
          </h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="direccion"
              >
                Dirección
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="direccion"
                type="text"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="numeroHabitaciones"
              >
                Número de Habitaciones
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="numeroHabitaciones"
                type="number"
                placeholder="Número de Habitaciones"
                value={numeroHabitaciones}
                onChange={(e) => setNumeroHabitaciones(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="tipo"
              >
                Tipo de Inmueble
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="tipo"
                  value={tipoId}
                  onChange={(e) => setTipoId(e.target.value)}
                >
                  <option value="">Selecciona un tipo de inmueble</option>
                  {tiposInmueble.map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.nombre}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-darker">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.243 8.757l-6 6-1.414-1.414 6-6 1.414 1.414z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="costoMensual"
              >
                Costo Mensual
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="costoMensual"
                type="number"
                placeholder="Costo Mensual"
                value={costoMensual}
                onChange={(e) => setCostoMensual(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Actualizar Inmueble
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InmuebleUpdateForm;
