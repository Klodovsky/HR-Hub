<template>
    <div class="changepassword">
        <div class="main-wrapper">
            <layout-header></layout-header>
            <layout-sidebarPromotion></layout-sidebarPromotion>
            <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">

                            <!-- Page Header -->
                            <div class="page-header">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h3 class="page-title">Change Password</h3>
                                    </div>
                                </div>
                            </div>
                            <!-- /Page Header -->

                            <form>
                                <div class="form-group">
                                    <label>Old password</label>
                                    <input type="password" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>New password</label>
                                    <input type="password" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Confirm password</label>
                                    <input type="password" class="form-control">
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Update Password</button>
                                </div>
                            </form>
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
    import LayoutSidebarPromotion from '@/components/layouts/SidebarPromotion.vue'
    export default {
        components: {
            LayoutHeader,
            LayoutSidebarPromotion,
        },
        name: 'changepassword'
    }
</script>