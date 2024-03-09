# Caso Practico 2 Zambrano Rommel ESPE 

El proyecto utiliza Django como backend para la creación de una aplicación web inmobiliaria. El objetivo principal es proporcionar una plataforma donde los usuarios puedan buscar y publicar propiedades en línea.

Para el frontend, se utiliza React junto con Vite para una experiencia de desarrollo rápida y eficiente. React permite construir interfaces de usuario interactivas y reactivas, mientras que Vite proporciona un entorno de desarrollo optimizado y una configuración de construcción rápida.

Además de Django y React, el proyecto también hace uso de otras tecnologías como HTML, CSS y JavaScript para la creación de la interfaz de usuario y la interacción con el backend.

## Pre-requisitos

- node
- npm/yarn
- python3, pip, python
- mysql

# Instalación de dependencias del backend (Django)
python -m venv venv
source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
pip install -r requirements.txt

# Compilación y ejecución del backend (Dajngo)
Tener corriendo mysql en la maquina local

- python manage.py makemigrations     
- python manage.py migrate
- python manage.py runserver

# Instalación de dependencias del frontend (Vite)
cd frontend
npm install

# Compilación y ejecución del frontend
npm run dev

# Crear las variables de entrono

## .env
SECRET_KEY='clave_secreta_aqui_del_archivo_setting_de_la_carpeta_backend'

## .env.local
VITE_BACKEND_URL="http://localhost:8000"
