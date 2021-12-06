/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
// import Notifications from "views/Notifications.js";
// import Typography from "views/Typography.js";
// import TableList from "views/Tables.js";
// import UpgradeToPro from "views/Upgrade.js";
import GameDetailPage from "views/GameDetailPage";
import Notifications from "views/Notifications";
import GameAddPage from "views/GameAddPage";
import PlayerList from "views/players/PlayerList";
import GameList from "views/GameList";
import PlayerDetail from "views/players/PlayerDetail";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/new-game",
    name: "New game",
    icon: "nc-icon nc-bell-55",
    component: GameAddPage,
    layout: "/admin",
  },
  {
    path: "/players",
    name: "Players",
    icon: "nc-icon nc-single-02",
    component: PlayerList,
    layout: "/admin",
  },
  {
    path: "/games",
    name: "Games",
    icon: "nc-icon nc-pin-3",
    component: GameList,
    layout: "/admin",
  },
  {
    path: "/game/:id",
    name: "Game",
    icon: "nc-icon nc-pin-3",
    component: GameDetailPage,
    layout: "/admin",
  },
  {
    path: "/player/:id",
    name: "Player",
    icon: "nc-icon nc-pin-3",
    component: PlayerDetail,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
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
