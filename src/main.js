import { createApp } from "vue";

import App from "@/App.vue";

import store from '@/store';

import components from '@/components/UI';

const app = createApp(App);

const obj = {
    name: 2,
    full: 3,
};

components.forEach(component => app.component(component.name, component));

app.use(store).mount("#app");
