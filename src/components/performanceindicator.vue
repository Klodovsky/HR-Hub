<template>
  <div class="performanceindicator">
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
                <h3 class="page-title">Performance Indicator</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Performance</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_indicator"><i
                    class="fa fa-plus"></i> Add New</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <!----Datatable-->
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Added By</th>
                      <th>Create At</th>
                      <th>Status</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Web Designer </td>
                      <td>Designing</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-02.jpg">
                          </router-link>
                          <router-link to="/profile">John Doe </router-link>
                        </h2>
                      </td>
                      <td>
                        7 May 2019
                      </td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>IOS Developer </td>
                      <td>IOS</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-05.jpg">
                          </router-link>
                          <router-link to="/profile">Mike Litorus </router-link>
                        </h2>
                      </td>
                      <td>
                        7 May 2019
                      </td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Web Designer </td>
                      <td>Designing</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-10.jpg">
                          </router-link>
                          <router-link to="/profile">John Smith </router-link>
                        </h2>
                      </td>
                      <td>
                        7 May 2019
                      </td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Web Designer </td>
                      <td>Designing</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-12.jpg">
                          </router-link>
                          <router-link to="/profile">Jeffrey Warden </router-link>
                        </h2>
                      </td>
                      <td>
                        7 May 2019
                      </td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Web Designer </td>
                      <td>Designing</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-11.jpg">
                          </router-link>
                          <router-link to="/profile">Wilmer Deluna </router-link>
                        </h2>
                      </td>
                      <td>
                        7 May 2019
                      </td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> Active
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i>
                              Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i
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

        <!-- Add Performance Indicator Modal -->
        <div id="add_indicator" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Set New Indicator</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Designation</label>
                        <select class="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>IOS Developer</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Technical</h4>
                      <div class="form-group">
                        <label class="col-form-label">Customer Experience</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Marketing</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Management</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Administration</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Presentation Skill</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Quality Of Work</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Efficiency</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Organizational</h4>
                      <div class="form-group">
                        <label class="col-form-label">Integrity</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Professionalism</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Team Work</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Critical Thinking</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Conflict Management</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Attendance</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Ability To Meet Deadline</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <select class="select">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Performance Indicator Modal -->

        <!-- Edit Performance Indicator Modal -->
        <div id="edit_indicator" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Performance Indicator</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Designation</label>
                        <select class="select">
                          <option>Select Designation</option>
                          <option selected>Web Designer</option>
                          <option>IOS Developer</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Technical</h4>
                      <div class="form-group">
                        <label class="col-form-label">Customer Experience</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Marketing</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option selected>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Management</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option selected>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Administration</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Presentation Skill</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Quality Of Work</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Efficiency</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Organizational</h4>
                      <div class="form-group">
                        <label class="col-form-label">Integrity</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Professionalism</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option selected>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Team Work</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Critical Thinking</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Conflict Management</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Attendance</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option selected>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Ability To Meet Deadline</label>
                        <select class="select">
                          <option>None</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option selected>Advanced</option>
                          <option>Expert / Leader</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <select class="select">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Performance Indicator Modal -->

        <!-- Delete Performance Indicator Modal -->
        <div class="modal custom-modal fade" id="delete_indicator" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Performance Indicator List</h3>
                  <p>Are you sure want to delete?</p>
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
        <!-- /Delete Performance Indicator Modal -->

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
    name: 'performanceindicator'
  }
</script>