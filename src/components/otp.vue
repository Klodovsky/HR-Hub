<template>
  <div class="otp">

    <body class="account-page" style="font-family: 'CircularStd', sans-serif;
    font-size: .9375rem;
    color: #1f1f1f;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;">

      <!-- Main Wrapper -->
      <div class="main-wrapper">
        <div class="account-content" style="padding: 85px 0;">
          <router-link to="/joblist" class="btn btn-primary apply-btn">Apply Job</router-link>
          <div class="container">

            <!-- Account Logo -->
            <div class="account-logo">
              <router-link to="/index"><img src="../assets/logo2.png" alt="Klodovsky's Technologies"></router-link>
            </div>
            <!-- /Account Logo -->

            <div class="account-box">
              <div class="account-wrapper">
                <h3 class="account-title">OTP</h3>
                <p class="account-subtitle">Verification your account</p>

                <!-- Account Form -->
                <form action="index">
                  <div class="otp-wrap">
                    <input type="text" placeholder="0" maxlength="1" class="otp-input">
                    <input type="text" placeholder="0" maxlength="1" class="otp-input">
                    <input type="text" placeholder="0" maxlength="1" class="otp-input">
                    <input type="text" placeholder="0" maxlength="1" class="otp-input">
                  </div>
                  <div class="form-group text-center">
                    <button class="btn btn-primary account-btn" type="submit">Enter</button>
                  </div>
                  <div class="account-footer">
                    <p>Not yet received? <a href="javascript:void(0);">Resend OTP</a></p>
                  </div>
                </form>
                <!-- /Account Form -->

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Main Wrapper -->
    </body>
  </div>
</template>

<script>
  export default {
    mounted() {
      if ($('.otp-input').length > 0) {
        $(".otp-input").keyup(function (e) {
          if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
            $(e.target).next('.otp-input').focus();
          } else if (e.which == 8) {
            $(e.target).prev('.otp-input').focus();
          }
        });
      }
      if ($('.floating').length > 0) {
        $('.floating').on('focus blur', function (e) {
          $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
      }
    },
    name: 'otp'
  }
</script>