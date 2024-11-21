import React, { createContext, useState } from 'react';



//login context
export const LoginContext = createContext(null);

export const UseLoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  // Corrected handleLogin function
  const handleLogin = () => {
    setLogin((prevLogin) => !prevLogin); 
  };

  return (
    <LoginContext.Provider value={{ login, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};






// signup context

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


// forgetpassword context

export const ForgetContext = createContext(null);
export const UseForgetProvider =({ children})=>{
  const [forget , setForget]=useState(false);

  const handleForget=()=>{
    setForget((prevForget) => !prevForget);
  }

  return(
    <ForgetContext.Provider value={{forget,handleForget}}>
      {children}
    </ForgetContext.Provider>
  )
}


//handle compnies

export const CompaniesContext =createContext(null);
export const UseCompaniesProvider = ({children})=>{
  const [company , setCompany]=useState(false);

  const handleCompany=()=>{
    setCompany((prevCompany) => !prevCompany);
  }

  return(
    <CompaniesContext.Provider value={{company , handleCompany}}>
      {children}
    </CompaniesContext.Provider>
  )
}



// home handle

export const HomeContext = createContext(null);
export const UseHomeProvider=({children})=>{
const [home,setHome]=useState(false);
  const handleHome=()=>{
    setHome();
  }

  return(
    <HomeContext.Provider value = {{home , handleHome}}>
      {children}
    </HomeContext.Provider>
  )
};







