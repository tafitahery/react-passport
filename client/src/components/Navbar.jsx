import { Link } from 'react-router-dom';

export default function Navbar({ user }) {
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Lebo App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">Jhon Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
}
