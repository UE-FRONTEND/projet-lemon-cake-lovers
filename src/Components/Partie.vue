<template>
  {{ minute }} : {{second}}
</template>

<script>
export default {
  data() {
    return {
      minute : 10,
      second : 0,
    }
  },
  mounted() {
    this.$nextTick(function () {

      window.setInterval(() => {
        if (this.second > 0) {
          this.second--;
        }
        else if (this.second === 0 && this.minute > 0) {
          this.second = 59;
          this.minute--;
        }
        else {
          // Timer hits 0 do what you want to do here.
        }
      },1000);
    })
  },
}
</script>