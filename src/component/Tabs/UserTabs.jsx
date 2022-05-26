import * as React from "react";
import UserTab from "./UserTab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import "./UserTab.css";

const data = [
  {
    icon: <PersonIcon />,
    title: "For myself",
    content: "Write Better. Think more clearly. Stay Organised",
  },
  {
    icon: <GroupsIcon />,
    title: "With my team",
    content: "Wikis, docs, tasks & projects, all in one place",
  },
];

export default function UserTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      {data.map((eachData, id) => (
        <Tab key={id} label={<UserTab {...eachData} />} />
      ))}
    </Tabs>
  );
}
