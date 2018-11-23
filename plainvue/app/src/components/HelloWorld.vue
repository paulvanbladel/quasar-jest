<template>
  <div >
    <h4>{{x}} + {{y}} = {{result}} </h4>
  </div>
</template>

<script>
import {add} from './calculator.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    x: Number,
    y: Number
  },
  computed:  {
    result() {
      return  add(this.x, this.y)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
