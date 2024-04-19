<script>
import { store } from "./store";
import axios from "axios";

import AppMain from "./components/AppMain.vue";

export default {
	data() {
		return {};
	},
	methods: {
		fetchProjects(endpoint = store.api.url + "/projects") {
			axios.get(endpoint).then((res) => {
				store.projects = res.data.projects;
				console.log(store.projects);
			});
		},
	},
	components: { AppMain },
	created() {
		this.fetchProjects();
	},
};
</script>
<template>
	<router-view />
</template>
<style></style>
