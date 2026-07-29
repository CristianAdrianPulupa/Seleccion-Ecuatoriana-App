# 🇪🇨 La Tri App

Aplicación móvil desarrollada con **React Native y Expo**, dedicada a mostrar información sobre la Selección Española de Fútbol y Argentina.

El proyecto presenta una pantalla de bienvenida animada, información general del equipo, jugadores destacados, convocados, participaciones mundialistas y otros datos almacenados en un archivo JSON.

---

## 📱 Descripción

La App permite consultar información relevante sobre la Selección Española de Fútbol y Argentina mediante una interfaz móvil organizada en tarjetas.

La aplicación utiliza un archivo JSON para separar los datos de la interfaz, permitiendo modificar jugadores, nombres, imágenes, participaciones y otros datos sin escribirlos directamente en los componentes.

---

## ✨ Funcionalidades

- Pantalla Splash con animación de entrada y salida.
- Logo e identidad visual de la Selección 
- Información general del equipo.
- Visualización de jugadores destacados.
- Datos como edad, posición, número y goles.
- Imágenes dinámicas asociadas a cada jugador.
- Lista de convocados destacados.
- Participaciones mundialistas.
- Identificación del mundial más reciente.
- Sección de premios.
- Botón con mensaje mediante `Alert`.
- Datos cargados desde un archivo JSON.
- Diseño adaptable con `ScrollView`.

---

## 🛠️ Tecnologías utilizadas

- React Native
- Expo
- Expo Go
- JavaScript
- JSON
- StyleSheet
- Git
- GitHub

---

## 📂 Estructura del proyecto

```text
Seleccion-Ecuatoriana-App/
│
├── assets/
│   ├── espana.png
│   ├── David.jpg
│   ├── Raul.jpg
│   ├── Fernando.jpg
│   ├── Argentina.jpg
│   ├── Pedro.jpg
│   └── mundial2026.jpg
│
├── src/
│   ├── data/
│   │   └── seleccion.json
│   │
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── SplashScreen.js
│   │
│   └── styles/
│       └── styles.js
│
├── App.js
├── app.json
├── package.json
└── README.md