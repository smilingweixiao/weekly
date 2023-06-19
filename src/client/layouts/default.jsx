import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../store/users/actions';

import { Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from '../components/Navbar'
import TitleBar from '../components/TitleBar';

import { useAuthenticator } from '@aws-amplify/ui-react';
import HelpModal from '../components/HelpModal';


const DefaultLayout = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const loginStatus = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const userStatus = async () => {
      let data = await fetch("/api/user", {
        method: "GET",
        headers: {
          "idToken": user.getSignInUserSession().getIdToken().getJwtToken(),
        }
      });
      console.log(data)
    }
    if(user){
      console.log(user.getSignInUserSession().getIdToken().getJwtToken())
    }
    if(authStatus === "authenticated"){
      userStatus().catch(console.error);
      dispatch(setStatus(user.getSignInUserSession().getIdToken().getJwtToken()));
      console.log("authenticated", loginStatus)
    }else if(authStatus === "unauthenticated"){
      console.log("unauthenticated", loginStatus)
      if(loginStatus){
        dispatch(setStatus(""));
        location.reload();
      }
    }
  })

  return (

    <Container fluid className='m-0 p-0 h-100 d-flex flex-column flex-row max-h-100'>
      <TitleBar className='flex-shrink-0 w-100'></TitleBar>
      <div className='flex-shrink-1 overflow-auto m-2'>
        <Outlet context={[user, authStatus]}/>
      </div>
      <div className='flex-shrink-0 w-100 mt-auto'>
        <OffcanvasExample user={user} authStatus={authStatus} signOut={signOut}></OffcanvasExample>
      </div>
      
      <HelpModal/>
    </Container>
  )
};

export default DefaultLayout;