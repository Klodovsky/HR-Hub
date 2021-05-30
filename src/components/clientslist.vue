<template>
    <div class="clientslist">
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
                                <h3 class="page-title">Clients</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>
                                    </li>
                                    <li class="breadcrumb-item active">Clients</li>
                                </ul>
                            </div>
                            <div class="col-auto float-right ml-auto">
                                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_client"><i
                                        class="fa fa-plus"></i> Add Client</a>
                                <div class="view-icons">
                                    <router-link to="/clients" class="grid-view btn btn-link"><i class="fa fa-th"></i>
                                    </router-link>
                                    <router-link to="/clientslist" class="grid-view btn btn-link active"><i
                                            class="fa fa-bars"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Header -->

                    <!-- Search Filter -->
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating">
                                <label class="focus-label">Client ID</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating">
                                <label class="focus-label">Client Name</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus select-focus">
                                <select class="select floating">
                                    <option>Select Company</option>
                                    <option>Global Technologies</option>
                                    <option>Delta Infotech</option>
                                </select>
                                <label class="focus-label">Company</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a href="#" class="btn btn-success btn-block"> Search </a>
                        </div>
                    </div>
                    <!-- Search Filter -->
                    <!----Datatable-->
                    <div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
                    <table class="table table-striped custom-table datatable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Client ID</th>
                                <th>Contact Person</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th class="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img
                                                src="../assets/profiles/avatar-19.jpg" alt=""></router-link>
                                        <router-link to="/clientprofile">Global Technologies</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0001</td>
                                <td>Barry Cuda</td>
                                <td>barrycuda@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-success"></i> Active </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img
                                                src="../assets/profiles/avatar-29.jpg" alt=""></router-link>
                                        <router-link to="/clientprofile">Delta Infotech</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0002</td>
                                <td>Tressa Wexler</td>
                                <td>tressawexler@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-danger"></i> Inactive </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img alt=""
                                                src="../assets/profiles/avatar-07.jpg"></router-link>
                                        <router-link to="/clientprofile">Cream Inc</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0003</td>
                                <td>Ruby Bartlett</td>
                                <td>rubybartlett@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-success"></i> Active </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img alt=""
                                                src="../assets/profiles/avatar-06.jpg"></router-link>
                                        <router-link to="/clientprofile">Wellware Company</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0004</td>
                                <td>Misty Tison</td>
                                <td>mistytison@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-success"></i> Active </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img
                                                src="../assets/profiles/avatar-14.jpg" alt=""></router-link>
                                        <router-link to="/clientprofile">Mustang Technologies</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0005</td>
                                <td>Daniel Deacon</td>
                                <td>danieldeacon@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-success"></i> Active </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img
                                                src="../assets/profiles/avatar-18.jpg" alt=""></router-link>
                                        <router-link to="/clientprofile">International Software Inc</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0006</td>
                                <td>Walter Weaver</td>
                                <td>walterweaver@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-success"></i> Active </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img
                                                src="../assets/profiles/avatar-28.jpg" alt=""></router-link>
                                        <router-link to="/clientprofile">Mercury Software Inc</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0007</td>
                                <td>Amanda Warren</td>
                                <td>amandawarren@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-success"></i> Active </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <router-link to="/clientprofile" class="avatar"><img
                                                src="../assets/profiles/avatar-22.jpg" alt=""></router-link>
                                        <router-link to="/clientprofile">Carlson Tech</router-link>
                                    </h2>
                                </td>
                                <td>CLT-0008</td>
                                <td>Betty Carlson</td>
                                <td>bettycarlson@example.com</td>
                                <td>9876543210</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a href="#" class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false"><i
                                                class="fa fa-dot-circle-o text-danger"></i> Inactive </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal"
                                                data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
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

                <!-- Add Client Modal -->
                <div id="add_client" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Client</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">First Name <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Last Name</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Username <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Email <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control floating" type="email">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Password</label>
                                                <input class="form-control" type="password">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Confirm Password</label>
                                                <input class="form-control" type="password">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Client ID <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control floating" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Phone </label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Company Name</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive m-t-15">
                                        <table class="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Module Permission</th>
                                                    <th class="text-center">Read</th>
                                                    <th class="text-center">Write</th>
                                                    <th class="text-center">Create</th>
                                                    <th class="text-center">Delete</th>
                                                    <th class="text-center">Import</th>
                                                    <th class="text-center">Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Projects</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Tasks</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Chat</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Estimates</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Invoices</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Timing Sheets</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Client Modal -->

                <!-- Edit Client Modal -->
                <div id="edit_client" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Client</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">First Name <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control" value="Barry" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Last Name</label>
                                                <input class="form-control" value="Cuda" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Username <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control" value="barrycuda" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Email <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control floating" value="barrycuda@example.com"
                                                    type="email">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Password</label>
                                                <input class="form-control" value="barrycuda" type="password">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Confirm Password</label>
                                                <input class="form-control" value="barrycuda" type="password">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Client ID <span
                                                        class="text-danger">*</span></label>
                                                <input class="form-control floating" value="CLT-0001" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Phone </label>
                                                <input class="form-control" value="9876543210" type="text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Company Name</label>
                                                <input class="form-control" type="text" value="Global Technologies">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive m-t-15">
                                        <table class="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Module Permission</th>
                                                    <th class="text-center">Read</th>
                                                    <th class="text-center">Write</th>
                                                    <th class="text-center">Create</th>
                                                    <th class="text-center">Delete</th>
                                                    <th class="text-center">Import</th>
                                                    <th class="text-center">Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Projects</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Tasks</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Chat</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Estimates</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Invoices</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Timing Sheets</td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                    <td class="text-center">
                                                        <input checked="" type="checkbox">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Edit Client Modal -->

                <!-- Delete Client Modal -->
                <div class="modal custom-modal fade" id="delete_client" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-header">
                                    <h3>Delete Client</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div class="modal-btn delete-action">
                                    <div class="row">
                                        <div class="col-6">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="javascript:void(0);" data-dismiss="modal"
                                                class="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Delete Client Modal -->

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

	if($('.datatable').length > 0) {
		$('.datatable').DataTable({
			"bFilter": false,
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
            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
        },
        name: 'clientslist'
    }
</script>