<template>
  <div class="expensereports">
    <div class="main-wrapper">
      <layout-sidebar></layout-sidebar>
      <layout-header></layout-header>
      <!-- Page Wrapper -->
      <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Expense Report</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Expense Report</li>
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
                  <option>Select buyer</option>
                  <option>Loren Gatlin</option>
                  <option>Tarah Shropshire</option>
                </select>
                <label class="focus-label">Purchased By</label>
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
                      <th>Item</th>
                      <th>Purchase From</th>
                      <th>Purchase Date</th>
                      <th>Purchased By</th>
                      <th>Amount</th>
                      <th>Paid By</th>
                      <th class="text-center">Status</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Dell Laptop</strong>
                      </td>
                      <td>Amazon</td>
                      <td>5 Jan 2019</td>
                      <td>
                        <router-link to="/profile" class="avatar avatar-xs">
                          <img src="../assets/profiles/avatar-04.jpg" alt="">
                        </router-link>
                        <h2>
                          <router-link to="/profile">Loren Gatlin</router-link>
                        </h2>
                      </td>
                      <td>$ 1215</td>
                      <td>Cash</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Pending
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Pending</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i>
                              Approved</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Mac System</strong>
                      </td>
                      <td>Amazon</td>
                      <td>5 Jan 2019</td>
                      <td>
                        <router-link to="/profile" class="avatar avatar-xs">
                          <img src="../assets/profiles/avatar-03.jpg" alt="">
                        </router-link>
                        <h2>
                          <router-link to="/profile">Tarah Shropshire</router-link>
                        </h2>
                      </td>
                      <td>$ 1215</td>
                      <td>Cheque</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Approved
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Pending</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i>
                              Approved</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
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
    name: 'expensereports'
  }
</script>