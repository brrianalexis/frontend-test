import { useRouteMatch } from 'react-router-dom';
import { Header } from './components/Header/';

const App = () => {
  const { isExact } = useRouteMatch('/');

  return <Header isHome={isExact} />;
};

export default App;
