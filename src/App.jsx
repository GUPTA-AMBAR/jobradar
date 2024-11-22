import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Login from './components/login';
import Signup from './components/signup';
import ForgetPassword from './components/forgetPassword';
import Companies from './components/companies';
import { 
  UseCompaniesProvider, 
  UseForgetProvider, 
  UseHomeProvider, 
  UseJobsProvier, 
  UseLoginProvider, 
  UseSignupProvider 
} from '../store/store';
import Home from './components/home';
import Jobs from './components/jobs';

function App() {
  return (
    <UseHomeProvider>
      <UseLoginProvider>
        <UseSignupProvider>
          <UseForgetProvider>
            <UseCompaniesProvider>
              <UseJobsProvier>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forget" element={<ForgetPassword />} />
                    <Route path="/company" element={<Companies />} />
                    <Route path="/jobs" element={<Jobs/>} />
                  </Route>
                </Routes>
              </BrowserRouter>
              </UseJobsProvier>
            </UseCompaniesProvider>
          </UseForgetProvider>
        </UseSignupProvider>
      </UseLoginProvider>
    </UseHomeProvider>
  );
}

export default App;
