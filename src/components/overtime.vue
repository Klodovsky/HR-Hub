<template>
  <div class="overtime">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Overtime</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Overtime</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_overtime"><i
                    class="fa fa-plus"></i> Add Overtime</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <!-- Overtime Statistics -->
          <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="stats-info">
                <h6>Overtime Employee</h6>
                <h4>12 <span>this month</span></h4>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="stats-info">
                <h6>Overtime Hours</h6>
                <h4>118 <span>this month</span></h4>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="stats-info">
                <h6>Pending Request</h6>
                <h4>23</h4>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="stats-info">
                <h6>Rejected</h6>
                <h4>5</h4>
              </div>
            </div>
          </div>
          <!-- /Overtime Statistics -->

          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table id="overtime" class="table table-striped custom-table dt-responsive" style="width:100%">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>OT Date</th>
                      <th class="text-center">OT Hours</th>
                      <th>OT Type</th>
                      <th>Description</th>
                      <th class="text-center">Status</th>
                      <th>Approved by</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h2 class="table-avatar blue-link">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-02.jpg">
                          </router-link>
                          <router-link to="/profile">John Doe</router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td class="text-center">2</td>
                      <td>Normal day OT 1.5x</td>
                      <td>Lorem ipsum dollar</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                            <i class="fa fa-dot-circle-o text-purple"></i> New
                          </a>
                        </div>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img
                              src="../assets/profiles/avatar-09.jpg" alt=""></router-link>
                          <a href="#">Richard Miles</a>
                        </h2>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_overtime"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_overtime"><i
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

        <!-- Add Overtime Modal -->
        <div id="add_overtime" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Overtime</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Select Employee <span class="text-danger">*</span></label>
                    <select class="select">
                      <option>-</option>
                      <option>John Doe</option>
                      <option>Richard Miles</option>
                      <option>John Smith</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Overtime Date <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                      <input class="form-control datetimepicker" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Overtime Hours <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Description <span class="text-danger">*</span></label>
                    <textarea rows="4" class="form-control"></textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Overtime Modal -->

        <!-- Edit Overtime Modal -->
        <div id="edit_overtime" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Overtime</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Select Employee <span class="text-danger">*</span></label>
                    <select class="select">
                      <option>-</option>
                      <option>John Doe</option>
                      <option>Richard Miles</option>
                      <option>John Smith</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Overtime Date <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                      <input class="form-control datetimepicker" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Overtime Hours <span class="text-danger">*</span></label>
                    <input class="form-control" type="text">
                  </div>
                  <div class="form-group">
                    <label>Description <span class="text-danger">*</span></label>
                    <textarea rows="4" class="form-control"></textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Overtime Modal -->

        <!-- Delete Overtime Modal -->
        <div class="modal custom-modal fade" id="delete_overtime" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Overtime</h3>
                  <p>Are you sure want to Cancel this?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Delete Overtime Modal -->

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
    name: 'overtime'
  }
</script>