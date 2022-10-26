import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter2/Counter2';
import CounterContextProvider from './counterContext';
import Button from './components/Button/Button';
import AddForm from './components/AddForm/AddForm';
import UsersContextProvider from './userContext';
import UsersList from './components/UsersList/UsersList';
import Details from './components/Details/Details';
import EditForm from './components/EditForm/EditForm';

const App = () => {
  return (
    <>
      <UsersContextProvider>
        <CounterContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/counter' element={<Counter />} />
              <Route path='/counter2' element={<Counter2 />} />
              {/* users routes */}
              <Route path='/users' element={<><AddForm /><UsersList /></>} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/edit/:id" element={<EditForm />} />
            </Routes>
          </BrowserRouter>
        </CounterContextProvider>
      </UsersContextProvider>
    </>
  )
}

export default App