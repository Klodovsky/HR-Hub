<template>
	<div class="register">

		<body class="account-page" style="font-family: 'CircularStd', sans-serif;
    font-size: .9375rem;
    color: #1f1f1f;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;">

			<!-- Main Wrapper -->
			<div class="main-wrapper">
				<div class="account-content">
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
								<h3 class="account-title">Register</h3>
								<p class="account-subtitle">Access to our dashboard</p>

								<!-- Account Form -->
								<form action="index.html">
									<div class="form-group">
										<label>Email</label>
										<input class="form-control" type="text">
									</div>
									<div class="form-group">
										<label>Password</label>
										<input class="form-control" type="password">
									</div>
									<div class="form-group">
										<label>Repeat Password</label>
										<input class="form-control" type="password">
									</div>
									<div class="form-group text-center">
										<button class="btn btn-primary account-btn" type="submit">Register</button>
									</div>
									<div class="account-footer">
										<p>Already have an account? <router-link to="/index">Dashboard</router-link>
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
		name: 'register'
	}
</script>