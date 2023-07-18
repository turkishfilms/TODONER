interface ButtonInterface {
children: String,
count: Number
}

const Button = ({children,count}:ButtonInterface) => {
  return (<>
    <div>{ children }</div>
    <div>{ count }</div>
</>
  )
}
export default Button
