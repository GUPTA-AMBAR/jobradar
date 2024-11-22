import React, { createContext, useState } from 'react';

// Login context
export const LoginContext = createContext(null);

export const UseLoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prevLogin) => !prevLogin);
  };

  return (
    <LoginContext.Provider value={{ login, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

// Signup context
export const SignupContext = createContext(null);

export const UseSignupProvider = ({ children }) => {
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup((prevSignup) => !prevSignup);
  };

  return (
    <SignupContext.Provider value={{ signup, handleSignup }}>
      {children}
    </SignupContext.Provider>
  );
};

// Forget password context
export const ForgetContext = createContext(null);

export const UseForgetProvider = ({ children }) => {
  const [forget, setForget] = useState(false);

  const handleForget = () => {
    setForget((prevForget) => !prevForget);
  };

  return (
    <ForgetContext.Provider value={{ forget, handleForget }}>
      {children}
    </ForgetContext.Provider>
  );
};

// Companies context
export const CompaniesContext = createContext(null);

export const UseCompaniesProvider = ({ children }) => {
  const [company, setCompany] = useState(false);

  const handleCompany = () => {
    setCompany((prevCompany) => !prevCompany);
  };

  return (
    <CompaniesContext.Provider value={{ company, handleCompany }}>
      {children}
    </CompaniesContext.Provider>
  );
};

// Home context
export const HomeContext = createContext(null);

export const UseHomeProvider = ({ children }) => {
  const [home, setHome] = useState(false);

  const handleHome = () => {
    setHome((prevHome) => !prevHome);
  };

  return (
    <HomeContext.Provider value={{ home, handleHome }}>
      {children}
    </HomeContext.Provider>
  );
};

// Jobs context
export const JobContext = createContext(null);

export const UseJobsProvider = ({ children }) => {
  const [job, setJob] = useState(false);

  const handleJob = () => {
    setJob((prevJob) => !prevJob);
  };

  return (
    <JobContext.Provider value={{ job, handleJob }}>
      {children}
    </JobContext.Provider>
  );
};

// Contact context
export const ContactContext = createContext(null);

export const UseContactProvider = ({ children }) => {
  const [contact, setContact] = useState(false);

  const handleContact = () => {
    setContact((prevContact) => !prevContact);
  };

  return (
    <ContactContext.Provider value={{ contact, handleContact }}>
      {children}
    </ContactContext.Provider>
  );
};

// Terms context
export const TermContext = createContext(null);

export const UseTermProvider = ({ children }) => {
  const [term, setTerm] = useState(false);

  const handleTerm = () => {
    setTerm((prevTerm) => !prevTerm);
  };

  return (
    <TermContext.Provider value={{ term, handleTerm }}>
      {children}
    </TermContext.Provider>
  );
};







