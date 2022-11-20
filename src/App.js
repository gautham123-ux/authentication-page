
import { useEffect, useState } from 'react';
import './App.css';
import { createClient } from '@supabase/supabase-js'
import Auth from './components/Auth';
import Account from './components/Account';

function App() {

  const [session, setSession] = useState(null)

  // useEffect(() =>{
  //   setSession(createClient.auth.session())
  //   console.log(createClient);
  //   createClient.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])

  return (
    <div className="container mx-auto">
    {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  );
}



export default App;