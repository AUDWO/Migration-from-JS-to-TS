import { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor() {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
