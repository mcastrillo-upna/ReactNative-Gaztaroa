import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { excursiones } from './excursiones';
import { comentarios } from './comentarios';
import { cabeceras } from './cabeceras';
import { actividades } from './actividades';
import { favoritos } from './favoritos';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist'

// export const ConfigureStore = () => {
//     const store = createStore(
//         combineReducers({
//             excursiones,
//             comentarios,
//             cabeceras,
//             actividades,
//             favoritos
//         }),
//         // applyMiddleware(thunk, logger)
//         applyMiddleware(thunk)
//     );

//     return store;
// }

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favoritos'] // guardamos favoritos aunque se reinicie la aplicación
};

const reducer = combineReducers({
    excursiones,
    comentarios,
    cabeceras,
    actividades,
    favoritos
});

// Aplicamos la configuración de persist al reducer
const reducer_persist = persistReducer(persistConfig, reducer);

const middleware = applyMiddleware(thunk);
//const middleware = applyMiddleware(thunk, logger);

// Creamos la store y la exportamos
const store = createStore(reducer_persist, middleware);
const persistor = persistStore(store);
export { persistor, store };

