/* eslint-disable */
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');

    if (accessToken) {
      axios
        .post('https://211.112.175.88:8080/auth', { accessToken: accessToken })
        .then((response) => {
          console.log(response);
          const { accessToken, refreshToken } = response.data;
          if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            navigate('/');
          }
        })
        .catch((error) => {
          console.error('Error during token processing:', error);
        });
    }
  }, [navigate]);

  return null;
};

export default Callback;
