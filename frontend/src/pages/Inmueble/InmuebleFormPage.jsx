import { useState } from "react";
import { createInmueble } from "../../api/inmuebles"; // Asegúrate de que esta función esté correctamente definida
import toast from "react-hot-toast";

const tiposInmueble = [
  { id: 1, nombre: "Casa" },
  { id: 2, nombre: "Departamento" },
  { id: 3, nombre: "Hotel" },
  // ... otros tipos de inmuebles
];
const CrearInmuebleForm = () => {
  const [direccion, setDireccion] = useState("");
  const [numeroHabitaciones, setNumeroHabitaciones] = useState("");
  const [tipoId, setTipoId] = useState(""); // Cambia 'tipo' por 'tipoId'
  const [costoMensual, setCostoMensual] = useState("");

  const resetForm = () => {
    setDireccion("");
    setNumeroHabitaciones("");
    setTipoId(""); // Cambia 'setTipo' por 'setTipoId'
    setCostoMensual("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inmuebleData = {
      direccion,
      numero_habitaciones: numeroHabitaciones,
      tipo: tipoId, // Cambia 'tipo' por 'tipo' para que coincida con tu backend
      costo_mensual: costoMensual,
    };

    try {
      await createInmueble(inmuebleData);
      toast.success("Inmueble creado con éxito");
      resetForm(); // Limpiar formulario después de la creación exitosa
    } catch (error) {
      console.error("Error al crear el inmueble:", error);
      toast.error("Hubo un problema al crear el inmueble");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 rounded-lg col overflow-hidde"
      >
        <div className="p-8">
          <h1 className="block w-full text-center text-grey-darkest mb-6 text-2xl font-bold">
            Crear Inmueble
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
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                required
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
                type="number"
                id="numeroHabitaciones"
                value={numeroHabitaciones}
                onChange={(e) => setNumeroHabitaciones(e.target.value)}
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="tipo"
              >
                Tipo
              </label>
              <div className="relative">
                <select
                  id="tipo"
                  value={tipoId}
                  onChange={(e) => setTipoId(e.target.value)}
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  required
                >
                  <option value="">Seleccione un tipo de inmueble</option>
                  {tiposInmueble.map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="costoMensual"
              >
                Costo Mensual
              </label>
              <input
                type="text"
                id="costoMensual"
                value={costoMensual}
                onChange={(e) => setCostoMensual(e.target.value)}
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3 text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Crear Inmueble
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrearInmuebleForm;
