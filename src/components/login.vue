<template>
	<div class="login">

		<body class="account-page" style="font-family: 'CircularStd', sans-serif;
    font-size: .9375rem;
    color: #1f1f1f;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;">

			<!-- Main Wrapper -->
			<div class="main-wrapper">
				<div class="account-content" style="padding: 35px 0;">
					<router-link to="/joblist"" class=" btn btn-primary apply-btn">Apply Job</router-link>
					<div class="container">
						<!-- Account Logo -->
						<div class="account-logo">
							<router-link to="/index"><img src="../assets/logo2.png" alt="Klodovsky's Technologies">
							</router-link>
						</div>
						<!-- /Account Logo -->

						<div class="account-box">
							<div class="account-wrapper">
								<h3 class="account-title">Login</h3>
								<p class="account-subtitle">Access to our dashboard</p>

								<!-- Account Form -->
								<form action="index.html">
									<div class="form-group">
										<label>Email Address</label>
										<input class="form-control" type="text">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col">
												<label>Password</label>
											</div>
											<div class="col-auto">
												<a class="text-muted" href="forgotpassword">
													Forgot password?
												</a>
											</div>
										</div>
										<input class="form-control" type="password">
									</div>
									<div class="form-group text-center">
										<button class="btn btn-primary account-btn" type="submit">Login</button>
									</div>
									<div class="account-footer">
										<p>Don't have an account yet? <router-link to="/index">Dashboard</router-link>
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
		name: 'login'
	}
</script>