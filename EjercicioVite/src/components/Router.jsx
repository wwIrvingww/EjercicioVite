import React from 'react';

function RouterComponent({ currentRoute }) {
  // Puedes utilizar lógica adicional aquí para cambiar el contenido según la ruta
  return (
    <div>
      {/* Ejemplo básico */}
      {currentRoute === '/' && <h1>Home Page</h1>}
      {currentRoute === '/login' && <h1>Login Page</h1>}
    </div>
  );
}

export default RouterComponent;
