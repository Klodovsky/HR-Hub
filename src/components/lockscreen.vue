<template>
	<div class="lockscreen">

		<body class="account-page" style="font-family: 'CircularStd', sans-serif;
    font-size: .9375rem;
    color: #1f1f1f;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;">

			<!-- Main Wrapper -->
			<div class="main-wrapper">
				<div class="account-content" style="padding: 53px 0;">
					<router-link to="/joblist" class="btn btn-primary apply-btn">Apply Job</router-link>
					<div class="container">

						<!-- Account Logo -->
						<div class="account-logo">
							<router-link to="/index"><img src="../assets/logo2.png" alt="Klodovsky's Technologies">
							</router-link>
						</div>
						<!-- /Account Logo -->

						<div class="account-box">
							<div class="account-wrapper">

								<!-- Lock User Img -->
								<div class="lock-user">
									<img alt="" src="../assets/profiles/avatar-02.jpg" class="rounded-circle">
									<h4>John Doe</h4>
								</div>
								<!-- /Lock User Img -->

								<!-- Account Form -->
								<form action="index">
									<div class="form-group">
										<label>Password</label>
										<input class="form-control" type="password">
									</div>
									<div class="form-group text-center">
										<button class="btn btn-primary account-btn" type="submit">Enter</button>
									</div>
									<div class="account-footer">
										<p>Sign in as a different user? <router-link to="/register">Login</router-link>
										</p>
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
		name: 'lockscreen'
	}
</script>