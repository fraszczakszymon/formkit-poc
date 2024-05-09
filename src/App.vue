<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

	<FormKit
		type="text"
		name="name"
		id="name"
		label="Name"
		help="Your full name"
		placeholder="Jon Doe"
	/>
	<FormKit
		type="select"
		label="Which country is the smallest?"
		name="small_country"
		:options="['Monaco', 'Vatican City', 'Maldives', 'Tuvalu']"
	/>
	<FormKit
		type="month"
		help="What month were you born?"
		label="Birth month"
		name="birth_month"
		value="1965-09"
	/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
