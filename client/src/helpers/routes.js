import LoadingScreen from '../Views/LoadingScreen/LoadingScreen';
import HomeScreen from '../Views/HomeScreen/HomeScreen';
import EraSelectContainer from '../Views/EraSelect/EraSelectContainer';
import AudioPlayerContainer from '../Views/Player/AudioPlayerContainer';

import Global from '../Views/Global/Global';
import HallOfFame from '../Views/HallOfFame/HallOfFame';
const routes = [
  {
    name: "loadingScreen",
    exact: true,
    path: "/",
    component: LoadingScreen
  },
  {
    name: "homeScreen",
    path: "/home",
    component: HomeScreen
  },
  {
    name: "player",
    path: "/player",
    component: AudioPlayerContainer
  },
  {
    name: "global",
    component: Global,
    path: "/g",
    routes: [
      {
        name: "eraSelect",
        path: "/select-your-era",
        component: EraSelectContainer
      },
      {
        name: "hallOfFame",
        path: "/hall-of-fame",
        component: HallOfFame
      },
      {
        redirect: true,
        to: '/select'
      }
    ]
  },
  {
    redirect: true,
    to: '/'
  }
]

export default routes;