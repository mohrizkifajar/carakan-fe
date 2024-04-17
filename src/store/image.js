import { reactive } from 'vue'

export const image = reactive({
	data: '',
	get() {
		return this.data
	},
	set(value) {
		this.data = value
	}
})
