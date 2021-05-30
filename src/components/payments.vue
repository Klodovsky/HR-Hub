<template>
  <div class="payments">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Payments</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Payments</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Client</th>
                      <th>Payment Type</th>
                      <th>Paid Date</th>
                      <th>Paid Amount</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <router-link to="/invoiceview">#INV-0001</router-link>
                      </td>
                      <td>
                        <h2><a href="#">Global Technologies</a></h2>
                      </td>
                      <td>Paypal</td>
                      <td>8 Feb 2019</td>
                      <td>$500</td>
                    </tr>
                    <tr>
                      <td>
                        <router-link to="/invoiceview">#INV-0002</router-link>
                      </td>
                      <td>
                        <h2><a href="#">Delta Infotech</a></h2>
                      </td>
                      <td>Paypal</td>
                      <td>8 Feb 2019</td>
                      <td>$500</td>
                    </tr>
                    <tr>
                      <td>
                        <router-link to="/invoiceview">#INV-0003</router-link>
                      </td>
                      <td>
                        <h2><a href="#">Cream Inc</a></h2>
                      </td>
                      <td>Paypal</td>
                      <td>8 Feb 2019</td>
                      <td>$500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!---/Datatable-->
        </div>
        <!-- /Page Content -->

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    mounted() {
      // Datatable

      if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
      if ($('.floating').length > 0) {
        $('.floating').on('focus blur', function (e) {
          $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
      }
    },
    name: 'payments'
  }
</script>