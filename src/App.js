import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {

  // dummy array to start list
  const [todo, setTodo] = useState([
    {
      todo: "Clean room",
      completed: false
    },
    {
      todo: "Wash clothes",
      completed: false
    },
    {
      todo: "Oil change",
      completed: true
    }
  ])

  // delete a todo and update list
  const deleteOne = (id) => {
    const newTodoList = [...todo]; //duplicate current todo array
      newTodoList.splice(id, 1); //remove selected todo object using passed in id and slice method
      setTodo(newTodoList); //replaces current today with newTodoList
  }

  // add in a new todo and update list
  const updateTodo = (newObj) => {
    setTodo([...todo, newObj]);
  }

  const checkClick = (idx) => {
    const newCompleted = [...todo]; //duplicate array of boolean(checked boxes)
    newCompleted[idx].completed = !newCompleted[idx].completed; //true/false trigger
    setTodo(newCompleted); //sets updated array of boolean with newCompleted
  }

  return (
    <Container>
      {/* {JSON.stringify(todo)} */}
      <Row>
        <Col className='d-flex justify-content-center'>
          <AddTodo updateTodo = {updateTodo} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Todo todo={todo} deleteOne = {deleteOne} checkClick = {checkClick}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
