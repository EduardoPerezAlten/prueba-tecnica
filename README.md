# Practica Técnica

_Este preoyecto simula el trabajo de una Batería._

## Comenzando 🚀

_Los siguientes pasaos permiten poder reaalizar la descarga del proyecto y la posibilidad de hacer pruebas en local._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que se necesita para poder ejecutar el proytecto._

```
Git
Node.js
Editor de código (A preferencia de cada uno), en mi caso VSCode.
Opcional: Postman. (Esto será solo posr si se quiere usar un entorno visual en las pruebas)
```

### Instalación 🔧

_La instalación se deberá relizar de la siguiente forma._

_En perimer lugar crear un directorio para el proyecto_

```
mkdir proyecto
cd proyecto
```

_Con la carpeta creada y dentro de la misma pocedemos a clonar el respositorio._

```
git clone "enlace al proyecto"
```
_El enlace al proyecto se encuntra en el apartado de code en GitHub._

_Posteriormente al clonado del proyecto, solo querdará instalar lo necesario usando Node.js_

```
npm install --save-dev typescript @types/express ts-node-dev @types/node
npm espress
npm install @nestjs/common
npx tsc --init
npx tsc
```

_Por último solo queda arrancar el código._

```
npm run start
```

_Si todo a salido correctamente la consola debería devolver lo siguiente._

```
> start
> ts-node-dev --respawn src/app.ts

[INFO] 12:44:42 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.3)
Server running at http://localhost:3000
```

## Ejecutando las pruebas ⚙️

_Las pruebas se pueden ejecutar de la siguiete forma._

_Por linea de comandos._

```
El comando Curl nos permitirá poder realizar llamadas a los distintos end points y nos devolverá la información en formato JSON.
```

_Ejemplo de comando GET._

```
curl http://localhost:3000/battery/status
```

_Ejemplo de output._

```
{
  "percentage":"100%",
  "máxChargeValue":"100 kWh",
  "lastMod":"2025-04-29T10:12:48.059Z"
}
```

_Ejemplo de comando POST._

```
curl -X POST http://localhost:3000/battery/discharge -H "Content-Type: application/json" -d '{"amount": 5}'
```

_Ejemplo de output._

```
{
  "amount":95
}
```

_Esto también se puede realizar con un entorno gráfico como Postman._






