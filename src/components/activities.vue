<template>
  <div class="activities">
    <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
	<!-- Page Wrapper -->
    <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content">           
            <!-- Page Header -->
            <div class="page-header">
                <div class="row">
                    <div class="col-sm-12">
                        <h3 class="page-title">Activities</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/index">Dashboard</router-link>
                            </li>
                            <li class="breadcrumb-item active">Activities</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->           
            <div class="row">
                <div class="col-md-12">
                    <div class="activity">
                        <div class="activity-box">
                            <ul class="activity-list">
                                <li>
                                    <div class="activity-user">
                                        <router-link to="/profile" title="Lesley Grauer" data-toggle="tooltip" class="avatar">
                                            <img src="../assets/profiles/avatar-01.jpg" alt="">
                                        </router-link>
                                    </div>
                                    <div class="activity-content">
                                        <div class="timeline-content">
                                            <router-link to="/profile" class="name">Lesley Grauer </router-link> added new task <a href="#">Hospital Administration</a>
                                            <span class="time">4 mins ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="activity-user">
                                        <router-link to="/profile" title="Jeffrey Lalore" data-toggle="tooltip" class="avatar">
                                            <img src="../assets/profiles/avatar-16.jpg" alt="">
                                        </router-link>
                                    </div>
                                    <div class="activity-content">
                                        <div class="timeline-content">
                                            <router-link to="/profie" class="name">Jeffery Lalor</router-link> added <router-link to="/profile" class="name">Loren Gatlin</router-link> and <router-link to="/profile" class="name">Tarah Shropshire</router-link> to project <a href="#">Patient appointment booking</a>
                                            <span class="time">6 mins ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="activity-user">
                                            <router-link to="/profile" title="Catherine Manseau" data-toggle="tooltip" class="avatar">
                                            <img src="../assets/profiles/avatar-08.jpg" alt="">
                                            </router-link>
                                    </div>
                                    <div class="activity-content">
                                        <div class="timeline-content">
                                            <router-link to="/profile" class="name">Catherine Manseau</router-link> completed task <a href="#">Appointment booking with payment gatewat</a>
                                            <span class="time">12 mins ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="activity-user">
                                        <router-link to="/profile" title="Bernardo Galaviz" data-toggle="tooltip" class="avatar">
                                            <img src="../assets/profiles/avatar-13.jpg" alt="">
                                        </router-link>
                                    </div>
                                    <div class="activity-content">
                                        <div class="timeline-content">
                                            <router-link to="/profile" class="name">Bernardo Galaviz</router-link> changed the task name <a href="#">Doctor available module</a>
                                            <span class="time">1 day ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="activity-user">
                                        <router-link to="/profile" title="Mike Litorus" data-toggle="tooltip" class="avatar">
                                            <img src="../assets/profiles/avatar-05.jpg" alt="">
                                        </router-link>
                                    </div>
                                    <div class="activity-content">
                                        <div class="timeline-content">
                                            <router-link to="/profile" class="name">Mike Litorus</router-link> added new task <a href="#">Patient and Doctor video conferencing</a>
                                            <span class="time">2 days ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="activity-user">
                                            <router-link to="/profile" title="Jeffery Lalor" data-toggle="tooltip" class="avatar">
                                            <img src="../assets/profiles/avatar-16.jpg" alt="">
                                            </router-link>
                                    </div>
                                    <div class="activity-content">
                                        <div class="timeline-content">
                                            <router-link to="/profile" class="name">Jeffery Lalore</router-link> added <router-link to="/profile" class="name">Jeffery Warden</router-link> and <router-link to="/profile" class="name">Bernado Galaviz</router-link> to the task of <a href="#">Private chat module</a>
                                            <span class="time">7 days ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
  name: 'activities'
}
</script>