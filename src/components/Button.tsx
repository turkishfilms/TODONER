interface ButtonInterface {
  children: String;
}

const Button = ({ children }: ButtonInterface) => {
  return (
    <>
      <div className="btn btn-primary">{children}</div>
    </>
  );
};
export default Button;
