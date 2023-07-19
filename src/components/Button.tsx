interface ButtonInterface {
  children: String;
  onAddItem: (newItem:string)=>void
}

const Button = ({ children, onAddItem }: ButtonInterface) => {
  return (
    <>
      <div className="btn btn-primary" onClick={()=>onAddItem("yo")}>{children}</div>
    </>
  );
};
export default Button;
