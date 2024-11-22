import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Login from './components/login';
import Signup from './components/signup';
import ForgetPassword from './components/forgetPassword';
import Companies from './components/companies';
import { 
  UseCompaniesProvider, 
  UseContactProvider, 
  UseForgetProvider, 
  UseHomeProvider, 
  UseJobsProvider, 
  UseLoginProvider, 
  UseSignupProvider, 
  UseTermProvider 
} from '../store/store';
import Home from './components/home';
import Jobs from './components/jobs';
import Contact from './components/contact';
import Terms from './components/terms';

function App() {
  return (
    <BrowserRouter>
      <UseHomeProvider>
        <UseLoginProvider>
          <UseSignupProvider>
            <UseForgetProvider>
              <UseCompaniesProvider>
                <UseJobsProvider>
                  <UseContactProvider>
                    <UseTermProvider>
                      <Routes>
                        <Route path="/" element={<Layout />}>
                          <Route index element={<Home />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/signup" element={<Signup />} />
                          <Route path="/forget" element={<ForgetPassword />} />
                          <Route path="/company" element={<Companies />} />
                          <Route path="/jobs" element={<Jobs />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/term" element={<Terms />} />
                        </Route>
                      </Routes>
                    </UseTermProvider>
                  </UseContactProvider>
                </UseJobsProvider>
              </UseCompaniesProvider>
            </UseForgetProvider>
          </UseSignupProvider>
        </UseLoginProvider>
      </UseHomeProvider>
    </BrowserRouter>
  );
}

export default App;

