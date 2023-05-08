import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Todo = (props) => {
  
  // array of boolean for true or false checked boxes
  const [completed, setCompleted] = useState(props.todo.map(() => false))

  // update list of array of checked boxes
  const handleCheck = (idx) => {
    const newCompleted = [...completed]; //duplicate array of boolean(checked boxes)
    newCompleted[idx] = !newCompleted[idx]; //true/false trigger
    setCompleted(newCompleted); //sets updated array of boolean with newCompleted
  }

   // delete a specific todo item
  const handleDeleteClick = (idx) => {
    props.deleteOne(idx);
  };

  return (
    <div>
      {
        props.todo.map((eachTodo, idx) => {
          return (
            <div key={idx} className='mt-4'>
              <Row>
                <Col className='d-flex justify-content-end'>
                  <p key={idx}>
                    Todo: <span className="me-3">{eachTodo.todo}</span>
                  </p>
                </Col>
                <Col>
                  <Form>
                    <Form.Group>
                      Completed: 
                      <input
                        className='me-5 ms-2'
                        type="checkbox"
                        checked={completed[idx]}
                        onChange={() => handleCheck(idx)}
                      />
                      <Button onClick={() => handleDeleteClick(idx)}>Delete</Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          )
        })
      }
    </div>
  )
}

export default Todo