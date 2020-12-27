import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onCreate } from '../../store/actions/todo';

const ENTER_KEY = 'Enter';

export function Header() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => setName(event.target.value);

  const handleSubmit = event => {
    if (event.key !== ENTER_KEY) {
      return;
    }

    dispatch(onCreate(name));
    onCreate(name);
    setName('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onInput={handleChange}
        onKeyUp={handleSubmit}
        onChange={() => {}}
        data-testid="todo-create"
      />
    </header>
  );
}
