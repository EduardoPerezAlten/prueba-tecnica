# Practica Técnica

_Este preoyecto simula el trabajo de una Batería._

## Comenzando 🚀

_Los siguientes pasaos permiten poder reaalizar la descarga del proyecto y la posibilidad de hacer pruebas en local._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que se necesita para poder ejecutar el proytecto._

```
Node.js
Editor de código (A preferencia de cada uno), en mi caso VSCode.
Opcional: Postman. (Esto será solo posr si se quiere usar un entorno visual en las pruebas)
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Dí cómo será ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
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






