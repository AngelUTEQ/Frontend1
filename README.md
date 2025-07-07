# Microservicios API - Sistema de Gestión de Tareas con Frontend Angular

Un sistema de microservicios desarrollado en Flask que incluye autenticación, gestión de usuarios y tareas. Ahora con vistas desarrolladas en Angular, accesibles desde el navegador (`http://localhost:4200/`).

## 📋 Tabla de Contenidos

- [Características](#características)
- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Usuarios Preconfigurados](#usuarios-preconfigurados)
- [Pruebas con Postman](#pruebas-con-postman)
- [Solución de Problemas](#solución-de-problemas)
- [Contribuir](#contribuir)

## ✨ Características

- **API Gateway** como punto de entrada centralizado
- **Servicio de Autenticación** con login, registro y validación de tokens JWT
- **Servicio de Usuarios** con CRUD completo
- **Servicio de Tareas** con estados y control de vida
- **Base de datos persistente** con SQLite
- **Arquitectura desacoplada** basada en microservicios
- **Frontend Angular** con vistas funcionales de login, registro y errores (pantalla 404)

## 🏗️ Arquitectura

```
┌─────────────────┐ ┌──────────────────┐ ┌─────────────────┐
│ API Gateway     │ │ Auth Service     │ │ User Service    │
│ Puerto 5000     │─┤ Puerto 5001      │ │ Puerto 5002     │
└─────────────────┘ └──────────────────┘ └─────────────────┘
        │
        └──────────────────┐
                          │
                ┌─────────────────┐
                │ Task Service    │
                │ Puerto 5003     │
                │ (SQLite DB)     │
                └─────────────────┘
                          │
                          ▼
                ┌────────────────────┐
                │ Frontend Angular   │
                │ Puerto 4200        │
                └────────────────────┘
```

## 🚀 Instalación

### Prerrequisitos

- Python 3.7+
- pip
- Node.js y Angular CLI (`npm install -g @angular/cli`)

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### Instalar dependencias de backend

```bash
pip install flask requests
```

### Instalar dependencias del frontend

```bash
cd frontend
npm install
```

## ⚙️ Configuración

### Ejecutar los servicios Flask

Abre 4 terminales diferentes y ejecuta lo siguiente:

**Terminal 1 - Auth Service**
```bash
python auth_service.py
```

**Terminal 2 - User Service**
```bash
python user_service.py
```

**Terminal 3 - Task Service**
```bash
python task_service.py
```

**Terminal 4 - API Gateway**
```bash
python gateway.py
```

### Ejecutar el Frontend Angular

En una terminal separada:

```bash
cd frontend
ng serve
```

Luego accede a: [http://localhost:4200](http://localhost:4200)

## 📖 Uso

### 1. Autenticación

Primero debes autenticarte para obtener un token JWT:

```bash
curl -X POST http://127.0.0.1:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "user1", "password": "pass1"}'
```

### 2. Usar el token

Copia el token recibido y úsalo en las siguientes peticiones como header:

```
Authorization: Bearer TU_TOKEN_AQUI
```

## 💡 Ejemplos de Uso

### Crear una nueva tarea

```bash
curl -X POST http://127.0.0.1:5000/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -d '{
    "name_task": "Nueva Tarea",
    "desc_task": "Descripción de la tarea",
    "deadline": "2024-12-31",
    "status": 1
  }'
```

### Actualizar una tarea

```bash
curl -X PUT http://127.0.0.1:5000/tasks/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -d '{
    "name_task": "Tarea Actualizada",
    "status": 3
  }'
```

### Crear un nuevo usuario

```bash
curl -X POST http://127.0.0.1:5000/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "nuevo_usuario",
    "email": "nuevo@email.com"
  }'
```

## 👥 Usuarios Preconfigurados

### Para Autenticación:
- `user1` / `pass1`
- `user2` / `pass2`

### Para User Service:
- **ID 1:** `user1` / `user1@email.com`
- **ID 2:** `user2` / `user2@email.com`

## 🧪 Pruebas con Postman

1. Importa la colección con todos los endpoints
2. Configura el environment con la variable `{{base_url}} = http://127.0.0.1:5000`
3. Ejecuta el flujo:
   - Login → Copiar token
   - Probar endpoints de usuarios
   - Probar endpoints de tareas con el token


