<script>
import { store } from "./store";
import axios from "axios";

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
	created() {
		this.fetchProjects();
	},
};
</script>
<template></template>
<style></style>
