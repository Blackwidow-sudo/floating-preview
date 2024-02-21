export default {
  name: "home",
  path: "/",
  component: () => import("@views/IndexView.vue"),
  children: [
    {
      name: "leaflets",
      path: "leaflets",
      component: () => import("@views/LeafletsView.vue"),
      children: [
        {
          name: "year",
          path: ":year",
          component: () => import("@views/WeekView.vue"),
        },
        {
          name: "years",
          path: "*",
          component: () => import("@views/YearView.vue"),
        },
      ],
    },
    {
      name: "tiles",
      path: "*",
      component: () => import("@views/TilesView.vue"),
    },
  ],
};
