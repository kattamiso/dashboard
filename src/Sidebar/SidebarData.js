import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <GridViewIcon />,
    link: "/dashboard",
  },
  {
    title: "Payment",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "MailBox",
    icon: <ChatBubbleIcon />,
    link: "/mailBox",
  },
  {
    title: "Analytics",
    icon: <BarChartIcon />,
    link: "/analytics",
  },
  {
    title: "Friends",
    icon: <GroupIcon />,
    link: "/friends",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];
