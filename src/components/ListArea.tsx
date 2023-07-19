interface ListAreaInterface {
  children: Array<ListItem>;
}

const ListArea = ({ children }: ListAreaInterface) => {
  return <div>ListArea - {children.length}</div>;
};

export default ListArea;
