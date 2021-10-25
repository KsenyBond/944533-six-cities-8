import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <Logo isActive={false} />
      </header>

      <main className="page__not-found">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default NotFoundScreen;
