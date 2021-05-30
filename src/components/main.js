 import $ from 'jquery'
  $(document).ready(function() {  
    // Variables declarations
    // var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    // Sidebar
    var Sidemenu = function() {
    this.$menuItem = $('#sidebar-menu a');
    };
    function init() {    
    var $this = Sidemenu;
    }
    // Sidebar Initiate
    init();
    // Mobile menu sidebar overlay
    // $('body').append('<div class="sidebar-overlay"></div>');
    // $(document).on('click', '#mobile_btn', function() {
    // $wrapper.toggleClass('slide-nav');
    // $('.sidebar-overlay').toggleClass('opened');
    // $('html').addClass('menu-opened');
    // $('#task_window').removeClass('opened');
    // return false;
    // });
    // $(".sidebar-overlay").on("click", function () {
    // $('html').removeClass('menu-opened');
    // $(this).removeClass('opened');
    // $wrapper.removeClass('slide-nav');
    // $('.sidebar-overlay').removeClass('opened');
    // $('#task_window').removeClass('opened');
    // });
    // Chat sidebar overlay
    $(document).on('click', '#task_chat', function() {
    $('.sidebar-overlay').toggleClass('opened');
    $('#task_window').addClass('opened');
    return false;
    });
    if($('.datetimepicker').length > 0) {
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
    // Modal Popup hide show
    if($('.modal').length > 0 ){
    var modalUniqueClass = ".modal";
    $('.modal').on('show.bs.modal', function(e) {
    var $element = $(this);
    var $uniques = $(modalUniqueClass + ':visible').not($(this));
    if ($uniques.length) {
    $uniques.modal('hide');
    $uniques.one('hidden.bs.modal', function(e) {
    $element.modal('show');
    });
    return false;
    }
    });
    }
    // Page Content Height
    var pHeight = $(window).height();
    $pageWrapper.css('min-height', pHeight);
    $(window).resize(function() {
    var prHeight = $(window).height();
    $pageWrapper.css('min-height', prHeight);
    });
    // Placeholder Hide
    if ($('.otp-input, .zipcode-input input, .noborder-input input').length > 0) {
    $('.otp-input, .zipcode-input input, .noborder-input input').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
    .attr('placeholder', '');
    }).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
    });
    }
    // Small Sidebar
    $(document).on('click', '#toggle_btn', function() {
    if($('body').hasClass('mini-sidebar')) {
    $('body').removeClass('mini-sidebar');
    $('.subdrop + ul').slideDown();
    } else {
    $('body').addClass('mini-sidebar');
    $('.subdrop + ul').slideUp();
    }
    return false;
    });
    $(document).on('mouseover', function(e) {
    e.stopPropagation();
    if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
    var targ = $(e.target).closest('.sidebar').length;
    if(targ) {
    $('body').addClass('expand-menu');
    $('.subdrop + ul').slideDown();
    } else {
    $('body').removeClass('expand-menu');
    $('.subdrop + ul').slideUp();
    }
    return false;
    }
    });
  });