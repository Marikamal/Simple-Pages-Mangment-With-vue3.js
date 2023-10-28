<template>
    <li>
        <router-link
            :to="`/${index}`"
            class="nav-link"
            active-class ="active emphasize"
            
            aria-current="page"
            
            :title="'this is a link to the ' + page.link.text + ' page'"
            >{{ page.link.text }}
        </router-link>

    </li>

</template>

<script>
    export default{
        props: ['page','index' ],
    }
</script>
