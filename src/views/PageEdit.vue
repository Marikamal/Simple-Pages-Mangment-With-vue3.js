<!-- <template>
    <h2>{{ page.pageTitle }}</h2>

<form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input  type="text" class="form-control" v-model="page.pageTitle">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="page.content" type="text" class="form-control">
        </div>
        <div class="form-group form-check">
          <input v-model="page.published" type="checkbox" class="form-check-input">
          <label class="form-check-label" for="exampleCheck1">Published</label>
        </div>
  
      

        <button type="submit" class="btn btn-primary me-2" :disabled="isFormInvalid" @click.prevent="submit()">edit</button>
        <button class="btn btn-secondary me-2" @click.prevent="goToPageList()">Cancel</button>
         <button class="btn btn-danger" @click.prevent="deletePage()">delete</button>
      </form>

</template> -->

<template>
  <div id="edit-page" class="container">
    <h1>Edit Page</h1>
    <form>
      <div class="form-group">
        <label for="page-title">Page Title:</label>
        <input type="text" class="form-control" id="page-title" v-model="page.pageTitle">
      </div>
      <div class="form-group">
        <label for="page-content">Page Content:</label>
        <textarea class="form-control" id="page-content" rows="10" v-model="page.content"></textarea>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="page-published" v-model="page.published">
        <label class="form-check-label" for="page-published">Published</label>
      </div>
      <button type="submit" class="btn btn-primary me-2" :disabled="isFormInvalid" @click.prevent="submit()">Save Changes</button>
      <button class="btn btn-secondary me-2" @click.prevent="goToPageList()">Cancel</button>
      <button class="btn btn-danger" @click.prevent="deletePage()">Delete Page</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const router = useRouter();

const pages = inject('$pages');
const bus = inject('$bus');
const {index} = defineProps(['index']);
let page = pages.getSinglePage(index);
function submit(){
    pages.editPage(index, page);

    bus.$emit('page-updated' , {
      index , page
    });
    goToPageList();
} 

 

function deletePage(index) {
  pages.removePage(index);
  bus.$emit('page-deleted', {index}
    );
  goToPageList();
}


function goToPageList(){
  router.push({path: '/pages'});
}
</script>