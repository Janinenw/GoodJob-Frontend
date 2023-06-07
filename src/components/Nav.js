import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Nav = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header>
      <div className="container">
        <nav>
          {user && (
            <div className="flex justify-end items-center">
              <span className="mr-5">Go get' em, {user.name}!</span>
              <button 
                onClick={handleClick} 
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg"
              >
                Log out
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;