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
				<span><strong>Title: </strong>{{ project.title }}</span
				><br />
				<span><strong>Repository: </strong>{{ project.repository }}</span
				><br />
				<span><strong>Type: </strong>{{ project.type.type }}</span
				><br />
				<span><strong>Technology: </strong></span><br />
				<span><strong>Author: </strong>{{ project.author }}</span
				><br />
				<span><strong>Description: </strong>{{ project.description }}</span
				><br />
				<span><strong>Created ad: </strong>{{ project.date_create }}</span
				><br />
				<span><strong>Last update: </strong>{{ project.last_update }}</span
				><br />
			</div>
		</div>
	</div>
</template>
<style></style>
