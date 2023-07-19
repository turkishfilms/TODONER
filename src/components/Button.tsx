interface ButtonInterface {
  children: String;
  count: Number;
}

const Button = ({ children, count }: ButtonInterface) => {
  return (
    <>
      <div className="btn btn-primary">{children}</div>
      <div>heyhey+ {count}</div>
    </>
  );
};
export default Button;
