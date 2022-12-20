import { ReactComponent as IconDashboard } from '../assets/icons/dashboard.svg';
import { ReactComponent as IconPosts } from '../assets/icons/posts.svg';
import { ReactComponent as IconTasks } from '../assets/icons/tasks.svg';

export const DashboardData = {
  navItems: [
    {
      id: 0,
      name: "Dashboard",
      link: "/dashboard",
      svg: <IconDashboard/>
    },
    {
      id: 1,
      name: "Posts",
      link: "/dashboard/posts",
      svg: <IconPosts/>
    },
    {
      id: 2,
      name: "Tasks",
      link: "/dashboard/tasks",
      svg: <IconTasks/>
    }
  ]
}
