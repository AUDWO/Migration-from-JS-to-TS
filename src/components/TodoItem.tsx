import { useTodoDispatch, useTodoState } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    //dispatch.onClickDelete(props.id);
    dispatch.onClickDelete(props.id);
  };
  return (
    <div>
      <div>
        {props.id}번: {props.content}
      </div>
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
