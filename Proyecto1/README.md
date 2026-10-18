# Proyecto 1

API REST desarrollada con Node.js, Express y PostgreSQL para consultar y administrar registros de clientes.

## Requisitos

- Node.js y npm
- PostgreSQL

## Instalación y configuración

1. Clona el repositorio y entra en la carpeta `Proyecto1`.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea una base de datos en PostgreSQL.
4. Copia `.env.example` como `.env` y configura los datos de conexión:

   ```env
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=nombre_de_tu_base_de_datos
   PORT=5000
   ```

5. Ejecuta en PostgreSQL el script `SQL/query1 - Creacion de la tabla client_records.sql` para crear la tabla requerida.
6. Inicia el servidor:

   ```bash
   node index.js
   ```

La API estará disponible en `http://localhost:5000` si se conserva el puerto del ejemplo. Si `PORT` no está configurado, el servidor usa el puerto `3000`.

## Endpoints

Todos los endpoints usan la ruta base `/test`.

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/test` | Devuelve todos los registros de clientes. |
| `POST` | `/test` | Crea un registro de cliente. |
| `PUT` | `/test/:id` | Actualiza un registro existente. |
| `DELETE` | `/test/:id` | Elimina un registro. |

Los cuerpos de las solicitudes `POST` y `PUT` deben ser JSON:

```json
{
  "username": "nombre_cliente",
  "payment_status": "pendiente",
  "comission_status": "pendiente",
  "deadline": "2026-12-31"
}
```

La tabla `client_records` contiene `id`, `username`, `payment_status`, `comission_status` y `deadline`. El campo `id` se genera automáticamente. `username` es obligatorio.

## Ejemplos

Consultar clientes:

```bash
curl http://localhost:5000/test
```

Crear un cliente:

```bash
curl -X POST http://localhost:5000/test \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"nombre_cliente\",\"payment_status\":\"pendiente\",\"comission_status\":\"pendiente\",\"deadline\":\"2026-12-31\"}"
```

## Seguridad

No subas el archivo `.env` ni publiques credenciales de la base de datos. `.env` está excluido mediante `.gitignore`; utiliza `.env.example` como plantilla.
