# Mocking Axios in Jest + Testing Async Functions

Aquí puedes encontrar como hacer un mock para axios simulando una petición HTTP GET a la API de Unsplash la cual necesita un token para funcionar [https://unsplash.com/developers](https://unsplash.com/developers) testeamos el numero de veces que se llama al MOCK, lo que recibe el MOCK como parametros de la funcion async, y la respuesta de la API 

## Installation
Requerido tener instalado Nodejs y Jest de manera Global (si no tienes jest instalado de manera global lo puedes instalar esta como devDependencies corriendo el mismo **npm i**)
[https://jestjs.io/docs/en/getting-started](https://jestjs.io/docs/en/getting-started)

    $ npm i

## Scripts

 - npm start (corre la funcion)
 - npm test (corre los test)
 - npm run test:watch (corre los test y si hay cambios los vuelve a correr)

## .env

Es requerido tener un archivo .env en la raiz del proyecto para poder integrar las variables de entornos [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) que en este caso es solo una que corresponde al token de la API [https://unsplash.com/developers](https://unsplash.com/developers) 

> Crear el .env en raiz con la siguiente variable **UNSPLASH_TOKEN=token**

