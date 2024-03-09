import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto px-4 sm:px-8 flex justify-between">
        <div className="flex space-x-4">
          {/* Logo o título de la aplicación */}
          <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
            Mi App
          </Link>
          {/* Navegación principal */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/inmueble" className="py-2 px-3 text-gray-700 hover:text-gray-900">
              Crear Inmueble
            </Link>
            <Link to="/inmuebles" className="py-2 px-3 text-gray-700 hover:text-gray-900">
              Inmuebles
            </Link>
            <Link to="/dashboard" className="py-2 px-3 text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
          </div>
        </div>
        {/* Aquí puedes agregar otros elementos del encabezado como búsqueda o enlaces de perfil */}
      </nav>
    </header>
  );
};

export default Header;











// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/auth";
// import jwt_decode from "jwt-decode";

// const Header = () => {
//   const token = useAuthStore.getState().access;
//   const { isAuth } = useAuthStore();

//   let is_admin;
//   let user_id;

//   if (isAuth) {
//     const tokenDecoded = jwt_decode(token);
//     is_admin = tokenDecoded.is_staff;
//     user_id = tokenDecoded.user_id;
//   }

//   function logOutFun() {
//     useAuthStore.getState().logout();
//     window.location.href = "/login";
//   }

//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }

//   return (
//     <Disclosure as="nav" className="bg-grey dark:bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 dark:text-slate-200 dark:hover:text-slate-50">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {isAuth ? (
//                       <>
//                         <Link
//                           to={"/"}
//                           className="bg-slate-400 p-2 px-4 rounded-lg text-black dark:bg-gray-900 dark:text-white"
//                         >
//                           Home
//                         </Link>

//                         <Link
//                           to={"/inmueble"}
//                           className="text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
//                         >
//                           Inmueble
//                         </Link>
//                       </>
//                     ) : (
//                       <>
//                         <Link
//                           to={"/login"}
//                           className="bg-slate-400 p-2 px-4 rounded-lg text-black dark:bg-gray-900 dark:text-white"
//                         >
//                           Log in
//                         </Link>

//                         <Link
//                           to={"/register"}
//                           className="text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
//                         >
//                           Sign up
//                         </Link>
//                       </>
//                     )}

//                     {is_admin && is_admin && (
//                       <Link
//                         to={"/admin"}
//                         className="text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
//                       >
//                         Admin Panel
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute space-x-2 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 {isAuth && (
//                  <div className="flex items-center ml-2">
//                  {/* Elementos del menú visibles y alineados horizontalmente */}
//                  <div className="flex flex-row ml-4">
//                    <Link
//                      to="/profile"
//                      className="px-4 py-2 text-sm text-gray-700 dark:text-slate-200"
//                    >
//                      Your Profile
//                    </Link>
//                    <span
//                      onClick={logOutFun}
//                      className="px-4 py-2 text-sm text-gray-700 cursor-pointer dark:text-slate-200"
//                    >
//                      Sign out
//                    </span>
//                  </div>
//                </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="flex mx-2">
//               <div className="absolute inset-y-[72px] left-2 px-4 flex pl-3 pointer-events-none">
//                 <svg
//                   className="w-5 h-5 text-gray-500"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                 </svg>
//                 <span className="sr-only">Search icon</span>
//               </div>
//               <input
//                 type="text"
//                 id="search-navbar"
//                 className="block w-full p-2
//                 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full 
//                 bg-gray-50 dark:bg-gray-700 outline-none
//                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  
//                 "
//                 placeholder="Search..."
//               />
//             </div>

//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {isAuth ? (
//                 <div className="w-full grid grid-cols-1">
//                   <Link
//                     to={"/"}
//                     className="bg-slate-400 p-2 px-4 rounded-lg text-black dark:bg-gray-900 dark:text-white"
//                   >
//                     Home
//                   </Link>

//                   <Link
//                     to={"/inmueble"}
//                     className="text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     Inmueble
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="w-full grid grid-cols-1">
//                   <Link
//                     to={"/login"}
//                     className="bg-slate-400 p-2 px-4 rounded-lg text-black dark:bg-gray-900 dark:text-white"
//                   >
//                     Log in
//                   </Link>

//                   <Link
//                     to={"/register"}
//                     className="text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     Sign up
//                   </Link>
//                 </div>
//               )}

//               {is_admin && (
//                 <div className="w-full">
//                   <Link
//                     to={"/"}
//                     className="text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     Admin Panel
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Header;
