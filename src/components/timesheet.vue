<template>
  <div class="timesheet">
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
                <h3 class="page-title">Timesheet</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>

                  </li>
                  <li class="breadcrumb-item active">Timesheet</li>

                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_todaywork"><i
                    class="fa fa-plus"></i> Add Today Work</a>
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
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Projects</th>
                      <th class="text-center">Assigned Hours</th>
                      <th class="text-center">Hours</th>
                      <th class="d-none d-sm-table-cell">Description</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-02.jpg">
                          </router-link>
                          <router-link to="/profile">John Doe <span>Web Designer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Office Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">7</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-09.jpg">
                          </router-link>
                          <router-link to="/profile">Richard Miles <span>Web Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Project Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-10.jpg">
                          </router-link>
                          <router-link to="/profile">John Smith <span>Android Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Video Calling App</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-05.jpg">
                          </router-link>
                          <router-link to="/profile">Mike Litorus <span>IOS Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Hospital Administration</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="assets/img/profiles/avatar-11.jpg">
                          </router-link>
                          <router-link to="/profile">Wilmer Deluna <span>Team Leader</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Office Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">7</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-12.jpg">
                          </router-link>
                          <router-link to="/profile">Jeffrey Warden <span>Web Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Project Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-13.jpg">
                          </router-link>
                          <router-link to="/profile">Bernardo Galaviz <span>Web Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Video Calling App</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-01.jpg">
                          </router-link>
                          <router-link to="/profile">Lesley Grauer <span>Team Leader</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Hospital Administration</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="profile" class="avatar"><img alt="" src="../assets/profiles/avatar-16.jpg">
                          </router-link>
                          <router-link to="profile">Jeffery Lalor <span>Team Leader</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Ware house developement</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">9</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-04.jpg">
                          </router-link>
                          <router-link to="/profile">Loren Gatlin <span>Android Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Office Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-03.jpg">
                          </router-link>
                          <router-link to="/profile">Tarah Shropshire <span>Android Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Project Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
                                class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../assets/profiles/avatar-08.jpg">
                          </router-link>
                          <router-link to="/profile">Catherine Manseau <span>Android Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Video Calling App</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Donec vel elit neque.</td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i
                                class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i
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

        <!-- Add Today Work Modal -->
        <div id="add_todaywork" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Today Work details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Project <span class="text-danger">*</span></label>
                      <select class="select">
                        <option>Office Management</option>
                        <option>Project Management</option>
                        <option>Video Calling App</option>
                        <option>Hospital Administration</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-4">
                      <label>Deadline <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <input class="form-control" type="text" value="5 May 2019" readonly>
                      </div>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Total Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="100" readonly>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Remaining Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="60" readonly>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <input class="form-control datetimepicker" type="text">
                      </div>
                    </div>
                    <div class="form-group col-sm-6">
                      <label>Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text">
                    </div>
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
        <!-- /Add Today Work Modal -->

        <!-- Edit Today Work Modal -->
        <div id="edit_todaywork" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Work Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Project <span class="text-danger">*</span></label>
                      <select class="select">
                        <option>Office Management</option>
                        <option>Project Management</option>
                        <option>Video Calling App</option>
                        <option>Hospital Administration</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-4">
                      <label>Deadline <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <input class="form-control" type="text" value="5 May 2019" readonly>
                      </div>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Total Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="100" readonly>
                    </div>
                    <div class="form-group col-sm-4">
                      <label>Remaining Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="60" readonly>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label>Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                        <input class="form-control datetimepicker" value="03/03/2019" type="text">
                      </div>
                    </div>
                    <div class="form-group col-sm-6">
                      <label>Hours <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" value="9">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Description <span class="text-danger">*</span></label>
                    <textarea rows="4"
                      class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Today Work Modal -->

        <!-- Delete Today Work Modal -->
        <div class="modal custom-modal fade" id="delete_workdetail" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Work Details</h3>
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
        <!-- Delete Today Work Modal -->

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
    name: 'timesheet'
  }
</script>