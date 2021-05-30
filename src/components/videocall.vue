<template>
    <div class="videocall">
        <div class="main-wrapper">
            <layout-header></layout-header>
            <layout-sidebarEmployee></layout-sidebarEmployee>
            <!-- Page Wrapper -->
            <div class="page-wrapper" style="min-height: 657px;
       left: 0;
       padding-top: 60px;">
                <!-- Main Row -->
                <div class="chat-main-row">
                    <div class="chat-main-wrapper">
                        <div class="col-lg-9 message-view task-view">
                            <div class="chat-window">
                                <div class="fixed-header">
                                    <div class="navbar">
                                        <div class="user-details">
                                            <div class="float-left user-img">
                                                <router-link to="/profile" class="avatar" title="Mike Litorus">

                                                    <img src="../assets/profiles/avatar-05.jpg" alt=""
                                                        class="rounded-circle">
                                                    <span class="status online"></span>

                                                </router-link>
                                            </div>
                                            <div class="user-info float-left">
                                                <router-link to="/profile"><span>Mike Litorus</span></router-link>

                                                <span class="last-seen">Online</span>
                                            </div>
                                        </div>
                                        <ul class="nav float-right custom-menu">
                                            <li class="nav-item">
                                                <a href="#task_window" id="task_chat"
                                                    class="task-chat profile-rightbar float-right"><i
                                                        class="fa fa-comments"></i></a>
                                            </li>
                                            <li class="nav-item dropdown dropdown-action">
                                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i class="fa fa-cog"></i></a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item">Settings</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="chat-contents">
                                    <div class="chat-content-wrap">
                                        <div class="user-video">
                                            <img src="../assets/video-call.jpg" alt="">
                                        </div>
                                        <div class="my-video">
                                            <ul>
                                                <li>
                                                    <img src="../assets/profiles/avatar-01.jpg" class="img-fluid"
                                                        alt="">
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-footer">
                                    <div class="call-icons">
                                        <span class="call-duration">00:59</span>
                                        <ul class="call-items">
                                            <li class="call-item">
                                                <a href="" title="Enable Video" data-placement="top"
                                                    data-toggle="tooltip">
                                                    <i class="fa fa-video-camera camera"></i>
                                                </a>
                                            </li>
                                            <li class="call-item">
                                                <a href="" title="Mute Audio" data-placement="top"
                                                    data-toggle="tooltip">
                                                    <i class="fa fa-microphone microphone"></i>
                                                </a>
                                            </li>
                                            <li class="call-item">
                                                <a href="" title="Add User" data-placement="top" data-toggle="tooltip">
                                                    <i class="fa fa-user-plus"></i>
                                                </a>
                                            </li>
                                            <li class="call-item">
                                                <a href="" title="Full Screen" data-placement="top"
                                                    data-toggle="tooltip">
                                                    <i class="fa fa-arrows-v full-screen"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="end-call">
                                            <a href="javascript:void(0);">
                                                <i class="material-icons">call_end</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 message-view chat-profile-view chat-sidebar" id="task_window">
                            <div class="chat-window video-window">
                                <div class="fixed-header">
                                    <ul class="nav nav-tabs nav-tabs-bottom">
                                        <li class="nav-item"><a class="nav-link active" href="#calls_tab"
                                                data-toggle="tab">Calls</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#chats_tab"
                                                data-toggle="tab">Chats</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#profile_tab"
                                                data-toggle="tab">Profile</a></li>
                                    </ul>
                                </div>
                                <div class="tab-content chat-contents">
                                    <div class="content-full tab-pane show active" id="calls_tab">
                                        <div class="chat-wrap-inner">
                                            <div class="chat-box">
                                                <div class="chats">
                                                    <div class="chat chat-left">
                                                        <div class="chat-avatar">
                                                            <router-link to="/profile" class="avatar">

                                                                <img alt="" src="../assets/profiles/avatar-02.jpg">

                                                            </router-link>
                                                        </div>
                                                        <div class="chat-body">
                                                            <div class="chat-bubble">
                                                                <div class="chat-content">
                                                                    <span class="task-chat-user">You</span> <span
                                                                        class="chat-time">8:35 am</span>
                                                                    <div class="call-details">
                                                                        <i class="material-icons">phone_missed</i>
                                                                        <div class="call-info">
                                                                            <div class="call-user-details">
                                                                                <span class="call-description">Jeffrey
                                                                                    Warden missed the call</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="chat chat-left">
                                                        <div class="chat-avatar">
                                                            <router-link to="/profile" class="avatar">

                                                                <img alt="" src="../assets/profiles/avatar-02.jpg">

                                                            </router-link>
                                                        </div>
                                                        <div class="chat-body">
                                                            <div class="chat-bubble">
                                                                <div class="chat-content">
                                                                    <span class="task-chat-user">John Doe</span> <span
                                                                        class="chat-time">8:35 am</span>
                                                                    <div class="call-details">
                                                                        <i class="material-icons">call_end</i>
                                                                        <div class="call-info">
                                                                            <div class="call-user-details"><span
                                                                                    class="call-description">This call
                                                                                    has ended</span></div>
                                                                            <div class="call-timing">Duration: <strong>5
                                                                                    min 57 sec</strong></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="chat-line">
                                                        <span class="chat-date">January 29th, 2019</span>
                                                    </div>
                                                    <div class="chat chat-left">
                                                        <div class="chat-avatar">
                                                            <router-link to="/profile" class="avatar">

                                                                <img alt="" src="../assets/profiles/avatar-09.jpg"
                                                                    class="img-fluid rounded-circle">

                                                            </router-link>
                                                        </div>
                                                        <div class="chat-body">
                                                            <div class="chat-bubble">
                                                                <div class="chat-content">
                                                                    <span class="task-chat-user">Richard Miles</span>
                                                                    <span class="chat-time">8:35 am</span>
                                                                    <div class="call-details">
                                                                        <i class="material-icons">phone_missed</i>
                                                                        <div class="call-info">
                                                                            <div class="call-user-details">
                                                                                <span class="call-description">You
                                                                                    missed the call</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="chat chat-left">
                                                        <div class="chat-avatar">
                                                            <router-link to="/profile" class="avatar">

                                                                <img alt="" src="../assets/profiles/avatar-09.jpg">

                                                            </router-link>
                                                        </div>
                                                        <div class="chat-body">
                                                            <div class="chat-bubble">
                                                                <div class="chat-content">
                                                                    <span class="task-chat-user">You</span> <span
                                                                        class="chat-time">8:35 am</span>
                                                                    <div class="call-details">
                                                                        <i class="material-icons">ring_volume</i>
                                                                        <div class="call-info">
                                                                            <div class="call-user-details">
                                                                                <a href="#"
                                                                                    class="call-description call-description--linked"
                                                                                    data-qa="call_attachment_link">Calling
                                                                                    John Smith ...</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-full tab-pane" id="chats_tab">
                                        <div class="chat-window">
                                            <div class="chat-contents">
                                                <div class="chat-content-wrap">
                                                    <div class="chat-wrap-inner">
                                                        <div class="chat-box">
                                                            <div class="chats">
                                                                <div class="chat chat-left">
                                                                    <div class="chat-avatar">
                                                                        <router-link to="/profile" class="avatar">

                                                                            <img alt=""
                                                                                src="../assets/profiles/avatar-09.jpg">

                                                                        </router-link>
                                                                    </div>
                                                                    <div class="chat-body">
                                                                        <div class="chat-bubble">
                                                                            <div class="chat-content">
                                                                                <span class="task-chat-user">John
                                                                                    Doe</span> <span
                                                                                    class="chat-time">8:35 am</span>
                                                                                <p>I'm just looking around.</p>
                                                                                <p>Will you tell me something about
                                                                                    yourself? </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="chat chat-left">
                                                                    <div class="chat-avatar">
                                                                        <router-link to="/profile" class="avatar">

                                                                            <img alt=""
                                                                                src="../assets/profiles/avatar-09.jpg">

                                                                        </router-link>
                                                                    </div>
                                                                    <div class="chat-body">
                                                                        <div class="chat-bubble">
                                                                            <div class="chat-content">
                                                                                <span class="task-chat-user">John
                                                                                    Doe</span> <span
                                                                                    class="file-attached">attached 3
                                                                                    files <i
                                                                                        class="fa fa-paperclip"></i></span>
                                                                                <span class="chat-time">Feb 17, 2019 at
                                                                                    4:32am</span>
                                                                                <ul class="attach-list">
                                                                                    <li><i class="fa fa-file"></i> <a
                                                                                            href="#">project_document.avi</a>
                                                                                    </li>
                                                                                    <li><i class="fa fa-file"></i> <a
                                                                                            href="#">video_conferencing.psd</a>
                                                                                    </li>
                                                                                    <li><i class="fa fa-file"></i> <a
                                                                                            href="#">landing_page.psd</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="chat-line">
                                                                    <span class="chat-date">January 29th, 2019</span>
                                                                </div>
                                                                <div class="chat chat-left">
                                                                    <div class="chat-avatar">
                                                                        <router-link to="/profile" class="avatar">

                                                                            <img alt=""
                                                                                src="../assets/profiles/avatar-16.jpg">

                                                                        </router-link>
                                                                    </div>
                                                                    <div class="chat-body">
                                                                        <div class="chat-bubble">
                                                                            <div class="chat-content">
                                                                                <span class="task-chat-user">Jeffery
                                                                                    Lalor</span> <span
                                                                                    class="file-attached">attached file
                                                                                    <i
                                                                                        class="fa fa-paperclip"></i></span>
                                                                                <span class="chat-time">Yesterday at
                                                                                    9:16pm</span>
                                                                                <ul class="attach-list">
                                                                                    <li class="pdf-file"><i
                                                                                            class="fa fa-file-pdf-o"></i>
                                                                                        <a
                                                                                            href="#">Document_2016.pdf</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="chat chat-left">
                                                                    <div class="chat-avatar">
                                                                        <router-link to="/profile" class="avatar">

                                                                            <img alt=""
                                                                                src="../assets/profiles/avatar-16.jpg">

                                                                        </router-link>
                                                                    </div>
                                                                    <div class="chat-body">
                                                                        <div class="chat-bubble">
                                                                            <div class="chat-content">
                                                                                <span class="task-chat-user">Jeffery
                                                                                    Lalor</span> <span
                                                                                    class="file-attached">attached file
                                                                                    <i
                                                                                        class="fa fa-paperclip"></i></span>
                                                                                <span class="chat-time">Today at
                                                                                    12:42pm</span>
                                                                                <ul class="attach-list">
                                                                                    <li class="img-file">
                                                                                        <div
                                                                                            class="attach-img-download">
                                                                                            <a href="#">avatar-1.jpg</a>
                                                                                        </div>
                                                                                        <div class="task-attach-img">
                                                                                            <img src="../assets/user.jpg"
                                                                                                alt=""></div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat-footer">
                                                <div class="message-bar">
                                                    <div class="message-inner">
                                                        <a class="link attach-icon" href="#" data-toggle="modal"
                                                            data-target="#drag_files"><img
                                                                src="../assets/attachment.png" alt=""></a>
                                                        <div class="message-area">
                                                            <div class="input-group">
                                                                <textarea class="form-control"
                                                                    placeholder="Type message..."></textarea>
                                                                <span class="input-group-append">
                                                                    <button class="btn btn-primary" type="button"><i
                                                                            class="fa fa-send"></i></button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-full tab-pane" id="profile_tab">
                                        <div class="display-table">
                                            <div class="table-row">
                                                <div class="table-body">
                                                    <div class="table-content">
                                                        <div class="chat-profile-img">
                                                            <div class="edit-profile-img">
                                                                <img src="../assets/profiles/avatar-09.jpg" alt="">
                                                                <span class="change-img">Change Image</span>
                                                            </div>
                                                            <h3 class="user-name m-t-10 mb-0">John Doe</h3>
                                                            <small class="text-muted">Web Designer</small>
                                                            <a href="javascript:void(0);"
                                                                class="btn btn-primary edit-btn"><i
                                                                    class="fa fa-pencil"></i></a>
                                                        </div>
                                                        <div class="chat-profile-info">
                                                            <ul class="user-det-list">
                                                                <li>
                                                                    <span>Username:</span>
                                                                    <span class="float-right text-muted">johndoe</span>
                                                                </li>
                                                                <li>
                                                                    <span>DOB:</span>
                                                                    <span class="float-right text-muted">24 July</span>
                                                                </li>
                                                                <li>
                                                                    <span>Email:</span>
                                                                    <span
                                                                        class="float-right text-muted">johndoe@example.com</span>
                                                                </li>
                                                                <li>
                                                                    <span>Phone:</span>
                                                                    <span
                                                                        class="float-right text-muted">9876543210</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul class="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                                                                <li class="nav-item"><a class="nav-link active"
                                                                        href="#all_files" data-toggle="tab">All
                                                                        Files</a></li>
                                                                <li class="nav-item"><a class="nav-link"
                                                                        href="#my_files" data-toggle="tab">My Files</a>
                                                                </li>
                                                            </ul>
                                                            <div class="tab-content">
                                                                <div class="tab-pane show active" id="all_files">
                                                                    <ul class="files-list">
                                                                        <li>
                                                                            <div class="files-cont">
                                                                                <div class="file-type">
                                                                                    <span class="files-icon"><i
                                                                                            class="fa fa-file-pdf-o"></i></span>
                                                                                </div>
                                                                                <div class="files-info">
                                                                                    <span
                                                                                        class="file-name text-ellipsis">AHA
                                                                                        Selfcare Mobile Application
                                                                                        Test-Cases.xls</span>
                                                                                    <span class="file-author"><a
                                                                                            href="#">Loren
                                                                                            Gatlin</a></span> <span
                                                                                        class="file-date">May 31st at
                                                                                        6:53 PM</span>
                                                                                </div>
                                                                                <ul class="files-action">
                                                                                    <li
                                                                                        class="dropdown dropdown-action">
                                                                                        <a href=""
                                                                                            class="dropdown-toggle"
                                                                                            data-toggle="dropdown"
                                                                                            aria-expanded="false"><i
                                                                                                class="material-icons">more_horiz</i></a>
                                                                                        <div class="dropdown-menu">
                                                                                            <a class="dropdown-item"
                                                                                                href="javascript:void(0)">Download</a>
                                                                                            <a class="dropdown-item"
                                                                                                href="#"
                                                                                                data-toggle="modal"
                                                                                                data-target="#share_files">Share</a>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="tab-pane" id="my_files">
                                                                    <ul class="files-list">
                                                                        <li>
                                                                            <div class="files-cont">
                                                                                <div class="file-type">
                                                                                    <span class="files-icon"><i
                                                                                            class="fa fa-file-pdf-o"></i></span>
                                                                                </div>
                                                                                <div class="files-info">
                                                                                    <span
                                                                                        class="file-name text-ellipsis">AHA
                                                                                        Selfcare Mobile Application
                                                                                        Test-Cases.xls</span>
                                                                                    <span class="file-author"><a
                                                                                            href="#">John Doe</a></span>
                                                                                    <span class="file-date">May 31st at
                                                                                        6:53 PM</span>
                                                                                </div>
                                                                                <ul class="files-action">
                                                                                    <li
                                                                                        class="dropdown dropdown-action">
                                                                                        <a href=""
                                                                                            class="dropdown-toggle"
                                                                                            data-toggle="dropdown"
                                                                                            aria-expanded="false"><i
                                                                                                class="material-icons">more_horiz</i></a>
                                                                                        <div class="dropdown-menu">
                                                                                            <a class="dropdown-item"
                                                                                                href="javascript:void(0)">Download</a>
                                                                                            <a class="dropdown-item"
                                                                                                href="#"
                                                                                                data-toggle="modal"
                                                                                                data-target="#share_files">Share</a>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Main Row -->
                <!-- Dragfiles Modal -->
                <div id="drag_files" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Drag and drop files upload</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="js-upload-form">
                                    <div class="upload-drop-zone" id="drop-zone">
                                        <i class="fa fa-cloud-upload fa-2x"></i> <span class="upload-text">Just drag and
                                            drop files here</span>
                                    </div>
                                    <h4>Uploading</h4>
                                    <ul class="upload-list">
                                        <li class="file-list">
                                            <div class="upload-wrap">
                                                <div class="file-name">
                                                    <i class="fa fa-photo"></i>
                                                    photo.png
                                                </div>
                                                <div class="file-size">1.07 gb</div>
                                                <button type="button" class="file-close">
                                                    <i class="fa fa-close"></i>
                                                </button>
                                            </div>
                                            <div class="progress progress-xs progress-striped">
                                                <div class="progress-bar bg-success" role="progressbar"
                                                    style="width: 65%"></div>
                                            </div>
                                            <div class="upload-process">37% done</div>
                                        </li>
                                        <li class="file-list">
                                            <div class="upload-wrap">
                                                <div class="file-name">
                                                    <i class="fa fa-file"></i>
                                                    task.doc
                                                </div>
                                                <div class="file-size">5.8 kb</div>
                                                <button type="button" class="file-close">
                                                    <i class="fa fa-close"></i>
                                                </button>
                                            </div>
                                            <div class="progress progress-xs progress-striped">
                                                <div class="progress-bar bg-success" role="progressbar"
                                                    style="width: 65%"></div>
                                            </div>
                                            <div class="upload-process">37% done</div>
                                        </li>
                                        <li class="file-list">
                                            <div class="upload-wrap">
                                                <div class="file-name">
                                                    <i class="fa fa-photo"></i>
                                                    dashboard.png
                                                </div>
                                                <div class="file-size">2.1 mb</div>
                                                <button type="button" class="file-close">
                                                    <i class="fa fa-close"></i>
                                                </button>
                                            </div>
                                            <div class="progress progress-xs progress-striped">
                                                <div class="progress-bar bg-success" role="progressbar"
                                                    style="width: 65%"></div>
                                            </div>
                                            <div class="upload-process">Completed</div>
                                        </li>
                                    </ul>
                                </form>
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Dragfiles Modal -->
                <!-- Add Group Modal -->
                <div id="add_group" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Create a group</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Groups are where your team communicates. They’re best when organized around a topic —
                                    #leads, for example.</p>
                                <form>
                                    <div class="form-group">
                                        <label>Group Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text">
                                    </div>
                                    <div class="form-group">
                                        <label>Send invites to: <span class="text-muted-light">(optional)</span></label>
                                        <input class="form-control" type="text">
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Group Modal -->
                <!-- Add Chat User Modal -->
                <div id="add_chat_user" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Direct Chat</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="input-group m-b-30">
                                    <input placeholder="Search to start a chat" class="form-control search-input"
                                        type="text">
                                    <span class="input-group-append">
                                        <button class="btn btn-primary">Search</button>
                                    </span>
                                </div>
                                <div>
                                    <h5>Recent Conversations</h5>
                                    <ul class="chat-user-list">
                                        <li>
                                            <a href="#">
                                                <div class="media">
                                                    <span class="avatar align-self-center"><img alt=""
                                                            src="../assets/profiles/avatar-16.jpg"></span>
                                                    <div class="media-body align-self-center text-nowrap">
                                                        <div class="user-name">Jeffery Lalor</div>
                                                        <span class="designation">Team Leader</span>
                                                    </div>
                                                    <div class="text-nowrap align-self-center">
                                                        <div class="online-date">1 day ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="media ">
                                                    <span class="avatar align-self-center"><img alt=""
                                                            src="../assets/profiles/avatar-13.jpg"></span>
                                                    <div class="media-body align-self-center text-nowrap">
                                                        <div class="user-name">Bernardo Galaviz</div>
                                                        <span class="designation">Web Developer</span>
                                                    </div>
                                                    <div class="align-self-center text-nowrap">
                                                        <div class="online-date">3 days ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="media">
                                                    <span class="avatar align-self-center">
                                                        <img alt="" src="../assets/profiles/avatar-02.jpg">
                                                    </span>
                                                    <div class="media-body text-nowrap align-self-center">
                                                        <div class="user-name">John Doe</div>
                                                        <span class="designation">Web Designer</span>
                                                    </div>
                                                    <div class="align-self-center text-nowrap">
                                                        <div class="online-date">7 months ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Chat User Modal -->
                <!-- Share Files Modal -->
                <div id="share_files" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Share File</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="files-share-list">
                                    <div class="files-cont">
                                        <div class="file-type">
                                            <span class="files-icon"><i class="fa fa-file-pdf-o"></i></span>
                                        </div>
                                        <div class="files-info">
                                            <span class="file-name text-ellipsis">AHA Selfcare Mobile Application
                                                Test-Cases.xls</span>
                                            <span class="file-author"><a href="#">Bernardo Galaviz</a></span> <span
                                                class="file-date">May 31st at 6:53 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Share With</label>
                                    <input class="form-control" type="text">
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Share</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Share Files Modal -->
            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>
<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebarEmployee from '@/components/layouts/SidebarEmployee.vue'
    export default {
        components: {
            LayoutHeader,
            LayoutSidebarEmployee,
        },
        name: 'videocall'
    }
</script>