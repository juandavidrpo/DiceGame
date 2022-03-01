# DiceGame
Juego de dados, realizado con nodejs y mongodb.

## Execute
Ejecutar el comando `npm install`.

Para iniciar el servidor ingresa el comando `npm run start`. Se ejecuta en el puerto 3000.

## Routes

"POST"

Formulario para registrar a los jugadores
```
localhost:3000/creategame
```

"PUT"

Inicia el juego ingresando la apuesta de cada jugador con el "id de la partida" (La apuesta es aleatoria)
```
localhost:3000/startgame/bet/:id
```

"GET"

Consultar el estado del juego
```
localhost:3000/status
```
Consultar el ganador del juego con el "id de la partida"
```
localhost:3000/winner/:id
```
