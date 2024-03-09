import { useEffect, useState } from "react";
import { fetchInmuebles, deleteInmueble } from "../../api/inmuebles"; // Asegúrate de que esta ruta de importación sea correcta
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Paso 1

const InmueblesList = () => {
  const [inmuebles, setInmuebles] = useState([]);
  const navigate = useNavigate(); // Paso 2

  useEffect(() => {
    const cargarInmuebles = async () => {
      try {
        const data = await fetchInmuebles();
        setInmuebles(data);
      } catch (error) {
        console.error("Error al obtener los inmuebles:", error);
        toast.error("Hubo un problema al obtener los inmuebles");
      }
    };

    cargarInmuebles();
  }, [setInmuebles]);

  const handleDelete = async (id) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este inmueble?")
    ) {
      try {
        await deleteInmueble(id);
        toast.success("Inmueble eliminado con éxito");
      } catch (error) {
        console.error("Error al eliminar el inmueble:", error);
        toast.error("Hubo un problema al eliminar el inmueble");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-inmueble/${id}`); // Paso 3: Cambia esta ruta según la configuración de tus rutas
  };

  return ( 
    <div className="flex justify-center items-center h-screen">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-slate-300">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Dirección
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Número de Habitaciones
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tipo
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Costo Mensual
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {inmuebles.map((inmueble) => (
              <tr
                key={inmueble.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {inmueble.direccion}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {inmueble.numero_habitaciones}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {inmueble.tipo ? inmueble.tipo.nombre : "No especificado"}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {inmueble.costo_mensual}
                </td>
                <td className="py-4 px-6 flex justify-around items-center">
                  <svg
                    onClick={() => handleEdit(inmueble.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer text-blue-600 hover:text-blue-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m6 0H3m6 0l4 4m0 0l4-4m-4 4V6"
                    />
                  </svg>
                  <svg
                    onClick={() => handleDelete(inmueble.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer text-red-600 hover:text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InmueblesList;
