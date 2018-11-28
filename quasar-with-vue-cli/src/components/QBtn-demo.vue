<template>
  <div>
    <span>{{counter}}</span>
    <q-btn @click="increment()"></q-btn>
  </div>

</template>

<script>
export default {
  name: 'QBUTTON',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment () {
      this.counter++
    }
  }
}
</script>
