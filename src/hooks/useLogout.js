import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    const confirmLogOut = window.confirm("Are you sure you want to Logout?");
    if (confirmLogOut) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
    else{
      alert("Can't Logout at the moment!!");
    }

  };

  return logout;
};

export default useLogout;
