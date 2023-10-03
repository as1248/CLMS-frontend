import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import { useEffect } from 'react';
import axios from 'axios';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const jwtToken = localStorage.getItem('accessToken');
    const userRole = localStorage.getItem('userRole');
    if (jwtToken && userRole) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
      axios.defaults.withCredentials = true;
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>
      <Router/>
    </QueryClientProvider>
  );
}

export default App;
