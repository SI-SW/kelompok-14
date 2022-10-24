const dashboard = {
  path: "/",
  name: "Dashboard",
  redirect: "dashboard",
  children: [
    {
      path: "dashboard",
      name: "Welcome",
      component: () => import("@/views/Dashboard/Home.vue"),
      meta: { auth: true },
    },
    {
      path: "tables",
      name: "Tables",
      component: () => import("@/views/Dashboard/ToDoList.vue"),
      meta: { auth: true },
    },
    {
      path: "tables/:id",
      name: "update",
      component: () => import("@/views/Dashboard/updateTodo.vue"),
      meta: { auth: true },
    },
    {
      path: "profile",
      name: "Profile",
      component: () => import("@/views/Dashboard/Profile.vue"),
      meta: { auth: true },
    },
  ],
};

export default dashboard;
