import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Route, Routes, useLocation } from "react-router-dom"
import Access from './pages/Access';
import { autoLogin, clearErrors  } from './actions/authActions';
import NavBar from './components/NavBar';
import Novels from './pages/Novels';
import AddNovelForm from './components/AddNovelForm';
import NovelDetails from './components/NovelDetails';
import EditNovelForm from './components/EditNovelForm';
import Publishers from './pages/Publishers';
import Translators from './pages/Translators';
import PublisherNovels from './components/PublisherNovels';
import TranslatorNovels from './components/TranslatorNovels';

function App() {
  // Use useSelector to get the user state from Redux store
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const location = useLocation();

  
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  useEffect(() => {
    // Clear errors when the route changes
      dispatch(clearErrors());
  }, [location.pathname, dispatch]);

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
          path='/edit-novel/:id'
          element={<EditNovelForm/>}/>
        <Route
          path='/add-novel'
          element={<AddNovelForm/>}/>
        <Route
          path='/novel/:id'
          element={<NovelDetails/>}/>
        <Route
          path='/publishers'
          element={<Publishers/>}/>
        <Route
          path='/publisher/:id'
          element={<PublisherNovels/>}/>
        <Route
          path='/translators'
          element={<Translators/>}/>
        <Route
          path='/translator/:id'
          element={<TranslatorNovels/>}/>
      </Routes>
      <header className="App-header">
        <p>Welcome, {user.display_name}!</p>
      </header>
    </div>
  );
}

export default App;
