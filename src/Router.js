import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pt-br';
// methods
import logPageView 	from './resources/methods/pageView';

// CSS libs and polyfills
import 'flexboxgrid';
import objectFitImages from 'object-fit-images';
import './resources/styles/normalize.min.css';
import './resources/styles/main.css';
import { Theme } from './Router-style';

// Routes imports
import Home       from './routes/home/Home.jsx';
import Components from './routes/components/Components.jsx';
import Past       from './routes/past/Past.jsx';
import Present    from './routes/present/Present.jsx';
import Future     from './routes/future/Future.jsx';
import NavBar     from './components/navbar/NavBar.jsx';

objectFitImages();
moment.locale('pt-br');

//Url da marca de acordo com a matéria especial
const marcaEspecial = `${process.env.PUBLIC_URL}/img/capa/marca-cesio_negativa.png`;

const links = [
  {path: "/ontem", name: "Ontem"},
  {path: "/hoje", name: "Hoje"},
  {path: "/amanha", name: "Amanhã"}
]

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Theme>
        <Route component={ScrollToTop}/>
        <Route path="/" component={logPageView}/>
        <header>
          <NavBar 
            links={links}
            especial={marcaEspecial}
          />
        </header>

        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/components" component={Components}/>
          <Route exact path="/ontem" component={Past}/>
          <Route exact path="/hoje" component={Present}/>
          <Route exact path="/amanha" component={Future}/>
        </main>
      </Theme>
    </Router>
  );
}

export default Routes;
