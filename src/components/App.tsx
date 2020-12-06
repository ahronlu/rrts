import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo, Todo } from "../actions";
import { StoreState } from "../reducers";

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const [fetching, setFetching] = useState<Boolean>(false);

  const todos: Todo[] = useSelector((state: StoreState) => state.todos);

  useEffect(() => {
    if (todos.length) setFetching(false);
  }, [todos]);

  const fetch = () => {
    setFetching(true);
    dispatch(fetchTodos());
  };

  return (
    <div>
      <button onClick={fetch}>Fetch</button>
      {fetching ? "Loading" : null}
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
