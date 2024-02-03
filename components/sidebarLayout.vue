<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link d-flex justify-content-center">
      <img
        src="~/assets/seroja.jpeg"
        alt="AdminLTE Logo"
        class="brand-image elevation-3"
        style="opacity: 0.8"
      />
      <!-- <nuxt-img src="@/assets/seroja.png" alt="My Image" /> -->
      <br />
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="" class="nav-link active">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Pembelian</p>
            </a>
          </li>

          <li class="nav-item menu-open">
            <a href="#" class="nav-link">
              <i class="fa-solid fa-store"></i>
              <p>Toko<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview ml-3">
              <li class="nav-item">
                <a
                  wire:navigate
                  href="{{route('kategori.index')}}"
                  class="nav-link {{ request()->routeIs('kategori.index') ? 'active' : '' }}"
                >
                  <i class="fa-solid fa-layer-group"></i>
                  <p>Kategori</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  wire:navigate
                  href="{{route('barang.index')}}"
                  class="nav-link {{ request()->routeIs('barang.index') ? 'active' : '' }}"
                >
                  <i class="fa-solid fa-box-open"></i>
                  <p>Barang</p>
                </a>
              </li>
            </ul>
          </li>
          <li
            class="nav-item {{ request()->routeIs('kategoriBengkel.index') || request()->routeIs('barangBengkel.index') ? 'menu-open' : '' }}"
          >
            <a href="#" class="nav-link">
              <i class="fa-solid fa-warehouse"></i>
              <p>Bengkel<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview ml-3">
              <li class="nav-item">
                <a
                  wire:navigate
                  href="{{route('kategoriBengkel.index')}}"
                  class="nav-link {{ request()->routeIs('kategoriBengkel.index') ? 'active' : '' }}"
                >
                  <i class="fa-solid fa-layer-group"></i>
                  <p>Kategori</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  wire:navigate
                  href="{{route('barangBengkel.index')}}"
                  class="nav-link {{ request()->routeIs('barangBengkel.index') ? 'active' : '' }}"
                >
                  <i class="fa-solid fa-box-open"></i>
                  <p>Barang</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              wire:navigate
              href="{{route('pembelian.index')}}"
              class="nav-link {{ request()->routeIs('pembelian.index') ? 'active' : '' }}"
            >
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Laporan</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script></script>

<style lang="scss" scoped></style>
