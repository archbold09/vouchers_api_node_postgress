# API VOUCHERS API

\_Prueba tecnica.

## Comenzando 🚀

- El proyecto esta basado en rutas, controlador y peticiones API.
  Todas las peticiones del "cliente" llegan a los archivos de la carpeta "routes"
  En cada archivo se crea un servicio, ejemplo: "/direccion" y de ahi parten los diferentes metodos. POST, GET, DELETE, ETC.

- Estas rutas requieren un archivo "controller" que sera el encargado de manejar toda la logica, en la carpeta "controller" ejemplo: "direccionController.js" tendra las funciones requeridas como, `consultar, listar, agregar, etc` 🛠️

- La carpeta "Utils" Contiene funciones generales - reutilizables que pueden ser usadas en cualquier parte del codigo 🏹.

- La carpeta Config, guarda toda la informacion general del proyeto, estos datos solo se deben modificar desde el archvo .env

- Se debe correr un comando para iniciar la BD de prueba con postgress :  npm run create_schema

### Pre-requisitos 📋

_Que debes instalar para que funcione_

```
1. Instalar node
2. Postgress 
```

### Instalación 🔧

```

1. Instalar las dependencias con: npm install
2. Correr el comando : npm run create_schema
3. Iniciar el proyecto con : npm run dev

```

### Correr las pruebas unitarias 🔧

Cuenta con TEST para validar la informacion de las rutas.

```
npm run test
```

### Documentación de la API 🔧

Para ver toda la documentación y como funciona cada ruta de esta API debe correr:

```
npm run dev
```

y dirigirse a la ruta:

```
http://localhost:{PUERTO_DE_MICROSERVICIO}:documentation
```
