
<template>
    <div v-if="page" id="content" class="container">
      <h1>{{ page.pageTitle }}</h1>
      <div class="row">
        <div class="col-md-8">
          <p>{{ page.content }}</p>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <p>{{ page.sidebarContent }}</p>
            <a :href="page.link">{{ page.Link }}</a>
            <p v-if="page.published">Published</p>
            <p v-else>Not published</p>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
    export default {
        props: ['index'],
        inject: ['$pages'],
        created(){
            this.page = this.$pages.getSinglePage(this.index);
        },
        data(){
            return {
                page : null
            };
        },
        watch: { 
            index(newIndex , oldIndex){
                this.page = this.$pages.getSinglePage(newIndex);
            }
        }

      }
</script>