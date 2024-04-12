import React, { useState } from 'react';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  // Función para cambiar la ruta
  const handleRouteChange = (route) => {
    setCurrentRoute(route);
    window.history.pushState(null, '', route); // Actualizar la URL en el navegador
  };

  // Función para renderizar el componente correspondiente según la ruta
  const renderComponent = () => {
    if (currentRoute === '/') {
      return <Home />;
    } else if (currentRoute === '/login') {
      return <Login />;
    } else {
      return <div>404 - Not Found</div>;
    }
  };

  return (
    <div>
      {/* Renderizar el componente correspondiente según la ruta */}
      {renderComponent()}

      {/* Enlaces para cambiar la ruta */}
      <nav>
        <ul>
          <li>
            <button onClick={() => handleRouteChange('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleRouteChange('/login')}>Login</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
