
<!-- 
<template>
    <div class="container-fluid">
      <h2 class="mb-4">Pages</h2>
      <div class="d-flex justify-content-end mb-3">
        <router-link to="/pages/create" class="btn btn-primary">Create Page</router-link>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Link Text</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(page, index) in $pages.getAllPages()" :key="index" @click="goToPage(index)">
            <td>{{ page.pageTitle }}</td>
            <td>{{ page.link.text }}</td>
            <td>{{ page.published ? 'Yes' : 'No' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template> -->

  <template>
    <div>
      <h4>Pages</h4>
      <div class="text-end">
        <router-link to="/pages/create" class="btn btn-primary btn-sm">
          Create Page
        </router-link>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Link Text</th>
            <th>Is Published</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(page, index) in $pages.getAllPages()" :key="index" @click="goToPage(index)">
            <td>{{ page.pageTitle }}</td>
            <td>{{ page.link.text }}</td>
            <td>{{ page.published ? 'yes' : 'no' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
<script setup>



import {ref , reactive , inject } from 'vue';

import { useRouter } from 'vue-router';
// const counter =ref(0);
const data =reactive({counter: 0});
const $pages = inject('$pages');
const router = useRouter();
function click(){
    // counter.value++;
    data.counter++;
}

function goToPage(index){
    router.push({path : `pages/${index}/edit`});
}



</script>
<style scope>
    .table.table-hover tr:hover { cursor: pointer ;}
</style>