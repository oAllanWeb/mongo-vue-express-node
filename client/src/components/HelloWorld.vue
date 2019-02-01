<template>
  <div>
    <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
   <b-alert show> {{ text1 }} </b-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text1: ''
    }
  }
}
</script>