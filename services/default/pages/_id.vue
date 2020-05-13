<template>
  <div>
      <Logo />
    {{$route.params.id}}
  </div>
</template>

<script>
import Logo from '~~/components/logo/logo.vue'
export default {
  components: {Logo}
}
</script>
