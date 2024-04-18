import { reactive } from "vue";

export const store = reactive({
	api: {
		url: "http://127.0.0.1:8000/api",
	},
	projects: [],
});
