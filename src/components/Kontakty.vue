<template>
  <div class="kontakty">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-card-section class="col-6">
          <div class="text-h5 q-mt-sm q-mb-xs  text-center">Kontakty</div>
          <div class="row q-mt-md">
            <div class="col-6 text-right q-pr-sm">Tel:</div>
            <div class="col-6 text-left text-bold q-pl-sm">+420 721 242 558</div>
          </div>
          <div class="row q-mt-md">
            <div class="col-6  text-right q-pr-sm">Email:</div>
            <div class="col-6 text-left text-bold q-pl-sm zalomeni">info@brannecviceni.cz</div>
          </div>
          <div class="row q-mt-md">
            <div class="col-6  text-right q-pr-sm">Facebook:</div>
            <div class="col-6 text-left text-bold q-pl-sm fb">
             <a href="https://www.facebook.com/Brann%C3%A9-cvi%C4%8Den%C3%AD-103488061060096/">
              <i class="fab fa-facebook-square"></i> Branne cvičení
             </a>
            </div>
          </div>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-6">
          <div class="text-h5 q-mt-sm q-mb-xs">Napište Nám</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="stylus" scoped>
.kontakty
    .fb
        color: royalblue;
    
    .zalomeni
            overflow-wrap: break-word;

    a
        text-decoration: none; 
</style>
