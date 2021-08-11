import Vue from "vue";
import Quiz from "./Quiz.vue";
import questions from "./questions";
import './assets/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
    render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
