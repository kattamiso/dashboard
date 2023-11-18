import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import GridViewIcon from "@mui/icons-material/GridView";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export const SidebarData = [
  {
    title: "Payment",
    icon: <HomeIcon />,
    link: "/Home",
  },
  {
    title: "MailBox",
    icon: <EmailIcon />,
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
    link: "/Friends",
  },
  {
    title: "Dashboard",
    icon: <GridViewIcon />,
    link: "/dashboard",
  },
  {
    title: "Images",
    icon: <PermMediaIcon />,
    link: "/images",
  },
];
