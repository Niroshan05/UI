import './App.css';
import ShowAllEmp from './Employee/ShowAllEmp';
import AddEmployee from './Employee/AddEmployee';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UpdateEmployee from './Employee/UpdateEmployee';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Form } from 'react-bootstrap';

function App() {
  return (
   <>
    <BrowserRouter>
    <div className="App">
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/ShowAllEmp'>All Employees</Nav.Link>
            <Nav.Link href="Contactus">Contactus</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="AddEmployee">Add new</Nav.Link>
            <Nav.Link href="UpdateEmployee">Update Employee</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/ShowAllEmp' element={<ShowAllEmp/>}></Route>
        <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
        <Route path='/UpdateEmployee' element={<UpdateEmployee/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
