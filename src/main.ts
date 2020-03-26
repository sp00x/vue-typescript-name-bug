import Vue from 'vue'
import App from './App.vue'

import Foo from '@/components/Foo.vue';
import Bar from '@/components/Bar.vue';

console.log("in main.ts\n\nFoo.name = " + Foo.name + "\nBar.name = " + Bar.name);
//alert("in main.ts\n\nFoo.name = " + Foo.name + "\nBar.name = " + Bar.name);

Vue.component(Foo.name, Foo) // typescript
Vue.component(Bar.name, Bar) // javascript

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
