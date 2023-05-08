import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTodo = (props) => {
  const [todo, setTodo] = useState([]);
  // const [completed, setCompleted] = useState(false);

  // form submit function - that will add to state
  const formSubmit = (e) => {
    e.preventDefault();

    // create the obj here
    const newTodo = {
      todo,
      completed: false
    };

    // execute the function coming from props
    props.updateTodo(newTodo);
  }

  
  return (
    <div className='mt-5'>
      <Form onSubmit={formSubmit}>
        <Form.Group>
          <input className='me-3' type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
          <Button type='submit'>Add</Button>
        </Form.Group>
      </Form>
    </div>
  )

}

export default AddTodo