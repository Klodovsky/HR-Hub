<template>
  <div class="error404 error-page" style="height: 100vh;">
			<!-- Main Wrapper -->
			<div class="main-wrapper">
				
				<div class="error-box">
					<h1>404</h1>
					<h3><i class="fa fa-warning"></i> Oops! Page not found!</h3>
					<p>The page you requested was not found.</p>
					<router-link to="/index" class="btn btn-custom">Back to Home</router-link>
				</div>
			
			</div>
			<!-- /Main Wrapper -->	
  </div>
</template>

<script>
export default {
  name: 'error404'
}
</script>
