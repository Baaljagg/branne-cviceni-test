<template>
  <div class="nadchazejici-akce">

    <h4>
      nadcházející akce
    </h4>
    <KartaUdalostiNadchazejiciAkce />

    <KartaUdalostiNadchazejiciAkce />

    <KartaUdalostiNadchazejiciAkce />

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
