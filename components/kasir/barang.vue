<template>
  <div class="card card-secondary">
    <div class="row">
      <div class="form-group col-md-6 row mb-0 ml-1 mt-3">
        <label for="perPage">
          Show:
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </label>
      </div>
      <div class="form-group col-md-6 row justify-content-end mb-0 mt-3">
        <div class="">
          <input
            class="form-control"
            type="text"
            placeholder="Cari barang..."
            @change="cari"
            v-model="cariBarang"
          />
        </div>
      </div>
    </div>
    <div class="card-body">
      <table class="table-hover table">
        <thead>
          <tr class="text-capitalize">
            <th>no.</th>
            <th>nama barang</th>
            <th>harga</th>
            <th>stok</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-capitalize" v-for="(b, index) in barang" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ b.nama_barang }}</td>
            <td>Rp.{{ b.harga }}</td>
            <td>{{ b.stok }}</td>
            <td>
              <button type="button" class="btn btn-success">
                <i class="fa-solid fa-circle-plus"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- /.card-body -->
  </div>
</template>

<script setup>
const props = defineProps({ data: Object });
const barang = ref(props.data);

const cariBarang = ref("");

const cari = () => {
  barang.value = barang.value.filter((item) => item === cariBarang.value);
  console.log(cariBarang.value);
};
</script>

<style lang="scss" scoped></style>
