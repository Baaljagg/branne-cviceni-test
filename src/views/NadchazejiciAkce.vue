<template>
  <div class="nadchazejici-akce">
    <KartaUdalostiNadchazejiciAkce />
  </div>
</template>

<script>
export default {
  name: "nadchazejici-akce"
};
</script>

<script>
import KartaUdalostiNadchazejiciAkce from "@/components/KartaUdalostiNadchazejiciAkce.vue";


export default {
    name: "nadchazejici-akce",
  components: {
    KartaUdalostiNadchazejiciAkce
  }
};
</script>

<style lang="stylus" scoped>
.nadchazejici-akce
  .flex-end
    justify-content flex-end;
</style>
