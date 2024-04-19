import { reactive } from 'vue'

export const image = reactive({
	data: ['', '', ''],
	get(index) {
		return this.data[index]
	},
	set(index, value) {
		this.data[index] = value
	}
})
