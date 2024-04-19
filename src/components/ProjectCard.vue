<script>
export default {
	data() {
		return {};
	},
	props: ["project"],
};
</script>
<template>
	<div class="col-3">
		<div class="card">
			<div class="card-header">
				{{ project.title }}
			</div>
			<div class="card-body">
				<span class="mb-2 d-inline-block"
					><strong>Title: </strong>{{ project.title }}</span
				><br />
				<span class="mb-2 d-inline-block"
					><strong>Repository: </strong>{{ project.repository }}</span
				><br />
				<span class="mb-2 d-inline-block"
					><strong>Type: </strong>{{ project.type.type }}</span
				><br />
				<span class="mb-2 d-inline-block"><strong>Technology: </strong></span
				><br />
				<span class="mb-2 d-inline-block"
					><strong>Author: </strong>{{ project.author }}</span
				><br />
				<span class="mb-2 d-inline-block"
					><strong>Description: </strong>{{ project.description }}</span
				><br />
				<span class="mb-2 d-inline-block"
					><strong>Created ad: </strong>{{ project.date_create }}</span
				><br />
				<span class="mb-2 d-inline-block"
					><strong>Last update: </strong>{{ project.last_update }}</span
				><br />
				<router-link
					class="btn btn-dark"
					:to="{
						name: 'project-detail',
						params: { project: project.id },
					}"
					>vai al dettaglio</router-link
				>
			</div>
		</div>
	</div>
</template>
<style></style>
