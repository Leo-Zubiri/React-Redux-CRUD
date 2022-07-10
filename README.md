# **REDUX Toolkit**

 Una de las mayores problemáticas de React es la forma en que se administran los estados y como los cambios pueden afectar a otros componentes. React propaga los cambios entre sus componentes de arriba-abajo y de abajo-arriba, es decir, un componente solo se puede comunicar con sus hijos directos y con su padre.

 Redux es una herramienta que nos ayuda a gestionar la forma en que accedemos y actualizamos el estado de la aplicación de una forma centralizada y controlada. Mediante Redux es posible centralizar el estado general de la aplicación en algo llamado store, liberando a los componentes la responsabilidad de administrar un estado interno.

 > Redux ya no es tan fundamental debido a las actualizaciones de React y el uso de su Context API. React Context API puede ser una buena solución cuando lo que necesitas es una simple gestión de estados. Pero debes recordar que el propósito de Redux es el de gestionar el estado de una aplicación, mientras que el de Context es pasar propiedades.

<br>

### **Documentación [Here >>>](https://redux-toolkit.js.org/)**
---
## **Instalación**

### **Instalar Redux en el proyecto**
```
npm install @reduxjs/toolkit react-redux
```

### **Instalar Redux desde el Create-React-App**
```
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```
---
## **Crear el Redux Store**
Store central donde se almacenará el estado global de la aplicación.

1. Crer archivo **src/app/store.js**
2. Desde el arhivo store.js agregar:
   ```Javascript
    import { configureStore } from '@reduxjs/toolkit'

    export const store = configureStore({
        reducer: {},
    })
   ```
---
## **Implementación**

### **Empezar a importar un Provider**
Componente que contiene a toda la aplicacion para que este sea el encargado de gestionar los estados.

1. Desde el archivo principal de react donde se monta "<**App/**>" se debe importar el store y el provider y posteriormente crear un Componente Provider que englobe al componente App
```Javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Redux
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provide store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
  
```
---
## **Crear Reducers**
Los reducers son la forma en la cual se podrá modificar el estado de la store. Se puede contrastar con el setState en los estados de react.

> Se recomienda crear los Reducers en **src/features/carpeta**

Posteriormente desde esa ruta se pueden crear carpetas segun el contexto de funcionalidad. <br>
**En este proyecto se creó la carpeta tasks/taskSlice.js** 

1. Dentro del archivo correspondiente se debe agregar el Slice: 
```Javascript 
import { createSlice } from '@reduxjs/toolkit' 

createSlice({
    name: 'tasks',
    initialState:[],
    reducers: {

    }
})

export default tasklice.reducer
```
2. Importarlo desde el store.js
```javascript
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
})
```