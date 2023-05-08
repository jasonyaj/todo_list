import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Todo = (props) => {

  // update list of array of checked boxes
  const handleCheck = (idx) => {
    props.checkClick(idx)
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
                    Todo: <span className="me-3">
                      
                      {eachTodo.completed === true?
                      <s>{eachTodo.todo}</s>
                      : eachTodo.todo}</span>
                  </p>
                </Col>
                <Col>
                  <Form>
                    <Form.Group>
                      Completed: 
                      <input
                        className='me-5 ms-2'
                        type="checkbox"
                        checked={eachTodo.completed}
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