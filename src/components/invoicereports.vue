<template>
  <div class="invoicereports">
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
                <h3 class="page-title">Invoice Report</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Invoice Report</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">
              <div class="form-group form-focus select-focus">
                <select class="select floating">
                  <option>Select Client</option>
                  <option>Global Technologies</option>
                  <option>Delta Infotech</option>
                </select>
                <label class="focus-label">Client</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="form-group form-focus">
                <div class="cal-icon">
                  <input class="form-control floating datetimepicker" type="text">
                </div>
                <label class="focus-label">From</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="form-group form-focus">
                <div class="cal-icon">
                  <input class="form-control floating datetimepicker" type="text">
                </div>
                <label class="focus-label">To</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <a href="#" class="btn btn-success btn-block"> Search </a>
            </div>
          </div>
          <!-- /Search Filter -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Client</th>
                      <th>Created Date</th>
                      <th>Due Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <router-link to="/invoiceview">#INV-0001</router-link>
                      </td>
                      <td>Global Technologies</td>
                      <td>11 Mar 2019</td>
                      <td>17 Mar 2019</td>
                      <td>$2099</td>
                      <td><span class="badge bg-inverse-success">Paid</span></td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <router-link class="dropdown-item" to="/editinvoice"><i class="fa fa-pencil m-r-5"></i> Edit
                            </router-link>
                            <router-link class="dropdown-item" to="/invoiceview"><i class="fa fa-eye m-r-5"></i> View
                            </router-link>
                            <a class="dropdown-item" href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <router-link to="/invoiceview">#INV-0002</router-link>
                      </td>
                      <td> Delta Infotech</td>
                      <td>11 Mar 2019</td>
                      <td>17 Mar 2019</td>
                      <td>$2099</td>
                      <td><span class="badge bg-inverse-info">Sent</span></td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <router-link class="dropdown-item" to="/editinvoice"><i class="fa fa-pencil m-r-5"></i> Edit
                            </router-link>
                            <router-link class="dropdown-item" to="/invoiceview"><i class="fa fa-eye m-r-5"></i> View
                            </router-link>
                            <a class="dropdown-item" href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
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
      // Date Time Picker

      if ($('.datetimepicker').length > 0) {
        $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY',
          icons: {
            up: "fa fa-angle-up",
            down: "fa fa-angle-down",
            next: 'fa fa-angle-right',
            previous: 'fa fa-angle-left'
          }
        });
      }

      // Select 2
      if ($('.select').length > 0) {
        $('.select').select2({
          minimumResultsForSearch: -1,
          width: '100%'
        });
      }
      // Multiselect
      if ($('#customleave_select').length > 0) {
        $('#customleave_select').multiselect();
      }
      if ($('#edit_customleave_select').length > 0) {
        $('#edit_customleave_select').multiselect();
      }
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
    name: 'invoicereports'
  }
</script>