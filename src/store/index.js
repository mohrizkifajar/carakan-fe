import { reactive } from 'vue';

const store = reactive({
  data: {
    captured: '',
    cropped: '',
    converted: '',
    converted_text: '',
  },
  get(key) {
    return this.data[key]
  },
  set(key, value) {
    this.data[key] = value;
  }
});

export default store;
