import { withNavigationWatcher } from "./contexts/navigation";
import { HomePage, TasksPage, ProfilePage, NewPostPage } from "./pages";

const routes = [
  {
    path: "/tasks",
    component: TasksPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/newpost",
    component: NewPostPage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  };
});
