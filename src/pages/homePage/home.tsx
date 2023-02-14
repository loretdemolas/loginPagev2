import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      <div>
        <h1>Welcome to Training Stats</h1>
      </div>
      <div>
        <Link to="/login">
          <button type="button">Login!</button>
        </Link>

        <Link to="/register">
          <button type="button">Sign Up!</button>
        </Link>
      </div>
    </div>
  );
}
