import { useState } from "react";

interface ListItemProps {
  children: string;
  deadline: number;
  timeCreated: number;
  completed: boolean;
  finalTask: boolean;
}
const ListItem = ({
  children,
  deadline,
  timeCreated,
  completed,
  finalTask,
}: ListItemProps) => {
  const [finished, setFinished] = useState(false);
  return (
    <>
      <li
        className={
          finished ? "list-group-item bg-success" : "list-group-item bg-warning"
        }>
        <input type="button" value="Done?" onClick={() => setFinished(true)} />
        {children}, {deadline}, {timeCreated},{completed},{finalTask}
      </li>
    </>
  );
};

export default ListItem;
