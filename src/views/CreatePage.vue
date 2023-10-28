

<!-- <template>
    <div class="container mb-3">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="pageTitle" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="content" type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input v-model="published" type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Published</label>
        </div>
  
        <div class="form-group">
          <label for="exampleInputLink1">Link</label>
          <input v-model="Link" type="text" class="form-control" id="exampleInputLink1" placeholder="Link">
        </div>
        
        <button type="submit" class="btn btn-primary" :disabled="isFormInvalid" @click.prevent="submitForm()">Submit</button>
      </form>
    </div>
  </template> -->
  <template>
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Page Title</label>
          <input id="title" v-model="pageTitle" type="text" class="form-control" placeholder="Enter page title" required>
        </div>
        
        <fieldset>
          <legend>Content</legend>
          <div class="form-group">
            <label for="content">Main Content</label>
            <textarea id="content" v-model="content" class="form-control" placeholder="Enter main content" required></textarea>
          </div>
          
          <div class="form-group">
            <label for="sidebar">Sidebar Content</label>
            <textarea id="sidebar" v-model="sidebarContent" class="form-control" placeholder="Enter sidebar content"></textarea>
          </div>
        </fieldset>
        
        <div class="form-group">
          <label for="link">Link</label>
          <input id="link" v-model="Link" type="text" class="form-control" placeholder="Enter link URL">
        </div>
        
        <div class="form-group form-check">
          <input id="published" v-model="published" type="checkbox" class="form-check-input">
          <label for="published" class="form-check-label">Published</label>
        </div>
        
        <button type="submit" class="btn btn-primary" :disabled="isFormInvalid">Submit</button>
      </form>
    </div>
  </template>
  <script setup>

  import { ref , inject , computed , watch } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const bus = inject('$bus');
  const pages = inject('$pages');


  let pageTitle = ref('');
  let content = ref('');
  let Link = ref('');
  let published = ref('');
  let sidebarContent =ref("");

  function submitForm(){
          if(!pageTitle || !content || !Link ||!sidebarContent){
              alert('please fill the form');
              return;
          }

          let newPage={
              pageTitle : pageTitle.value,
              content : content.value,
              sidebarContent: sidebarContent.value,
              
              link: {
                  text: Link.value,
              } ,
              published : published.value

          }

          pages.addPage(newPage);
          bus.$emit('page-created',newPage);
          router.push({path : '/pages'});

      }

      const isFormInvalid =computed( () => !pageTitle || !content || !Link ||!sidebarContent);
      watch(pageTitle, (newTitle, oldTitle) => {
        if (Link.value === oldTitle){
          Link.value = newTitle;}
        }); // pageTitle is being ref or reactive
  </script>

 