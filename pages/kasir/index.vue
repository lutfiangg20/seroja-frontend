<template>
  <NuxtLayout>
    <div class="container-fluid">
      <a href="">
        <button type="button" class="btn btn-primary">
          <i class="fa-solid fa-circle-plus"></i> Transaksi Ecer
        </button>
      </a>
      <a href="">
        <button type="button" class="btn btn-success">
          <i class="fa-solid fa-circle-plus"></i> Transaksi Penjual
        </button>
      </a>
      <a href="">
        <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-circle-plus"></i> Transaksi Bengkel
        </button>
      </a>
      <div class="row">
        <div class="col-sm-4 mt-4">
          <kasir-barang :data="data"></kasir-barang>
        </div>
        <div class="col-sm-8 mt-4"></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const data = ref({});

const getData = async () => {
  await $fetch("http://127.0.0.1:8000/api/barang", {
    method: "GET",
  }).then((res) => {
    data.value = res;
  });
};

onMounted(() => {
  getData();
});
</script>

<style></style>
