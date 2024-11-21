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
  UseLoginProvider, 
  UseSignupProvider 
} from '../store/store';
import Home from './components/home';

function App() {
  return (
    <UseHomeProvider>
      <UseLoginProvider>
        <UseSignupProvider>
          <UseForgetProvider>
            <UseCompaniesProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forget" element={<ForgetPassword />} />
                    <Route path="/company" element={<Companies />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </UseCompaniesProvider>
          </UseForgetProvider>
        </UseSignupProvider>
      </UseLoginProvider>
    </UseHomeProvider>
  );
}

export default App;
