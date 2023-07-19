interface TodoInputProps {
  onAddText: (text: string) => void;
}

const TodoInput = ({ onAddText }: TodoInputProps) => {
  return (
    <>
      <input
        type="text"
        className="textinput"
        defaultValue="TodoHere"
        onInput={() => {
          console.log("hey oo rodoinput changed");
          onAddText("strong");
        }}
      />
    </>
  );
};
export default TodoInput;
