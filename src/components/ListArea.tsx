import ListItem from "./ListItem";
interface ListAreaProps {
  children: string[];
}
const ListArea = ({ children }: ListAreaProps) => {
  return (
    <>
      <div className="list-group">{children}</div>
    </>
  );
};

export default ListArea;
