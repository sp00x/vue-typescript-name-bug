<template>
  <div id="app">
    Foo: <Foo /> -
    Bar: <Bar />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import Foo from '@/components/Foo.vue';
import Bar from '@/components/Bar.vue';

console.log("in App.vue:\n\nFoo.name = " + Foo.name + "\nBar.name = " + Bar.name);
//alert("in App.vue:\n\nFoo.name = " + Foo.name + "\nBar.name = " + Bar.name);

@Component
export default class App extends Vue {
}

</script>
