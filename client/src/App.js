import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Route, Routes} from "react-router-dom"
import Access from './pages/Access';
import { autoLogin } from './actions/authActions';
import NavBar from './components/NavBar';
import Novels from './pages/Novels';
import AddNovelForm from './components/AddNovelForm';
import NovelDetails from './components/NovelDetails';

function App() {
  // Use useSelector to get the user state from Redux store
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);


// checking user/sessions exisits
  if (!user){
    return <Access />
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route 
          path='/my-novels'
          element={<Novels/>}/>
        <Route
          path='/add-novel'
          element={<AddNovelForm/>}/>
        <Route
          path='/novel/:id'
          element={<NovelDetails/>}/>
      </Routes>
      <header className="App-header">
        <p>Welcome, {user.display_name}!</p>
      </header>
    </div>
  );
}

export default App;
