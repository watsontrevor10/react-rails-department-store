import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home'
import Departments from './components/Departments';
import Items from './components/Items';
import ItemForm from './components/ItemForm';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import { Container, } from 'semantic-ui-react';
import StoreForm from './components/StoreForm';
import DepartmentView from './components/DepartmentView';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        {/* Static Routes */}
        <Route exact path='/' component={Home} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/departments/new' component={StoreForm} />
        <Route exact path='/departments/:id' component={DepartmentView} />
        <Route exact path='/api/departments/:department_id/items' component={Items} />
        <Route exact path='/api/departments/:department_id/new' component={ItemForm} />

        {/* No Match Route */}
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
