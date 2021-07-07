import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';

ReactDOM.render(
  <div>
    <App2  title="lala" text="lolo">
      Um novo conteúdo  
    </App2>

    <App2  title="dadada" text="dodo">
    Um novo componente
    </App2>
  </div>,
  document.getElementById('root')
);
