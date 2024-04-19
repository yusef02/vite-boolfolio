<script>
import { store } from "../../store";
import axios from "axios";

export default {
	data() {
		return {
			project: {},
		};
	},
	methods: {
		fetchProjectDetail(
			endpoint = store.api.url + "/projects/" + this.$route.params.project
		) {
			axios.get(endpoint).then((res) => {
				console.log(res.data.project[0]);
				this.project = res.data.project[0];
			});
		},
	},
	created() {
		this.fetchProjectDetail();
	},
};
</script>
<template>
	<div class="container py-5">
		<div class="row">
			<div class="col">
				<h1 class="mb-4">{{ project.title }}</h1>
				<p class="mb-2"><strong>Title: </strong>{{ project.title }}</p>
				<p class="mb-2">
					<strong>Repository: </strong>{{ project.repository }}
				</p>
				<p class="mb-2"><strong>Author: </strong>{{ project.author }}</p>
				<p class="mb-2">
					<strong>Description: </strong>{{ project.description }}
				</p>
				<p class="mb-2">
					<strong>Created ad: </strong>{{ project.date_create }}
				</p>
				<p class="mb-2">
					<strong>Last update: </strong>{{ project.last_update }}
				</p>
				<router-link
					class="btn btn-dark mt-5"
					:to="{
						name: 'homepage',
					}"
					>torna alla home</router-link
				>
			</div>
		</div>
	</div>
</template>
<style></style>
