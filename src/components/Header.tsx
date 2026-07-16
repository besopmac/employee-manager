import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from './Button';

export default function Header() {
  const { session, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:px-6">
      <span className="text-lg font-semibold text-gray-900">
        Employee Manager
      </span>
      <div className="flex items-center gap-3">
        {session && (
          <span className="hidden text-sm text-gray-600 sm:inline">
            {session.user.firstName} {session.user.lastName}
          </span>
        )}
        <Button variant="secondary" onClick={handleLogout}>
          Sair
        </Button>
      </div>
    </header>
  );
}
