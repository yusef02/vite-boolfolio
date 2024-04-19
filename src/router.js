import { createRouter, createWebHistory } from "vue-router";

import AppMain from "./components/AppMain.vue";
import ProjectDetail from "./components/pages/ProjectDetail.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "homepage",
			component: AppMain,
		},
		{
			path: "/:project",
			name: "project-detail",
			component: ProjectDetail,
		},
	],
});
export { router };
