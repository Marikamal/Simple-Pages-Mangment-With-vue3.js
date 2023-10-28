<template>
    <nav :class="['navbar-' + theme, 'bg-' + theme, 'navbar', 'navbar-expand-lg']">
      l
            <div class="container-fluid">
              <a href="#" class="navbar-brand">Mu Vue</a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <navbar-link
                        v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                        :page="page"
                        :index="index"
                        
                       
                        >
                    </navbar-link>
                    <li>
                      <router-link
                        to="/pages"
                        class="nav-link"
                        active-class="active"
                        aria-current="page"
                        > Pages
                    </router-link>
                    </li>
            
              </ul>
              <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle Navbar</button>
              </form>
            </div>
        </nav>
</template>
<script>
    import NavbarLink from './NavbarLink.vue';

    export default {
      components: {
        NavbarLink
      },
     
      inject : ['$pages', '$bus'],
      created(){
        this.getTheThemeSetting();
        this.pages =this.$pages.getAllPages();
        this.$bus.$on('page-updated',() => {
          this.pages =[...this.$pages.getAllPages()];///new array < tell nav the pages array changed <refresh and updatedd
        });
        this.$bus.$on('page-created',() => {
          this.pages =[...this.$pages.getAllPages()];
        });
        this.$bus.$on('page-deleted',() => {
          this.pages =[...this.$pages.getAllPages()];
        });

      },
      computed: {
          publishedPages(){
            return this.pages.filter(p => p.published);
          }
      },
        props: ['pages'],

        data() {
          return {
            theme: 'light',
            pages:[]
          };
        },
        methods: {
          changeTheme() {
            let theme = 'light';
    
            if (this.theme == 'light') {
              theme = 'dark';
            }
    
            this.theme = theme;
            this.storeTheThemeSetting();
          },
          storeTheThemeSetting(){
            localStorage.setItem('theme', this.theme);
          },
          getTheThemeSetting(){
            let theme = localStorage.getItem('theme', this.theme);

            if (theme){
              this.theme = theme ;
            }
          }
        },
      }
</script>
