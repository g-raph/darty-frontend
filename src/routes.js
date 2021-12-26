import Dashboard from "views/Dashboard.js";
// import Notifications from "views/Notifications.js";
// import Typography from "views/Typography.js";
// import TableList from "views/Tables.js";
// import UpgradeToPro from "views/Upgrade.js";
import Notifications from "views/Notifications";
import GameAddPage from "views/games/GameAddPage";
import PlayerList from "views/players/PlayerList";
import GameList from "views/games/GameList";
import PlayerDetail from "views/players/PlayerDetail";
import GameDetail from "views/games/GameDetail";
import User from "views/User";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/admin",
    showInSidebar: true
  },
  {
    path: "/new-game",
    name: "New game",
    icon: "nc-icon nc-air-baloon",
    component: GameAddPage,
    layout: "/admin",
    showInSidebar: true
  },
  {
    path: "/players",
    name: "Players",
    icon: "nc-icon nc-single-02",
    component: PlayerList,
    layout: "/admin",
    showInSidebar: true
  },
  {
    path: "/games",
    name: "Games",
    icon: "nc-icon nc-pin-3",
    component: GameList,
    layout: "/admin",
    showInSidebar: true
  },
  {
    path: "/game/:id",
    name: "Game",
    icon: "nc-icon nc-pin-3",
    component: GameDetail,
    layout: "/admin",
    showInSidebar: false
  },
  {
    path: "/player/:id",
    name: "Player",
    icon: "nc-icon nc-pin-3",
    component: PlayerDetail,
    layout: "/admin",
    showInSidebar: false
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    showInSidebar: false
  },
  {
    path: "/user",
    name: "User",
    icon: "nc-icon nc-bell-55",
    component: User,
    layout: "/admin",
    showInSidebar: false
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default routes;
