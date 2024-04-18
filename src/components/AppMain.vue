<script>
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";

export default {
	data() {
		return {
			store,
		};
	},
	components: { ProjectCard },
};
</script>
<template>
	<div class="container py-5">
		<div class="row gy-4">
			<project-card v-for="project in store.projects" :project="project" />
		</div>
	</div>
</template>
<style></style>
