<template>
  <div>
      <!-- <sidebar> -->
          <div class="sidebar" id="sidebar"> 
        <div class="sidebar-inner" id="style-15">
          <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-x="scrollHanle">
  <div id="sidebar-menu" class="sidebar-menu">
    <ul>
      <li class="menu-title">
        <span>Main</span>
      </li>
      <li class="submenu">
        <a><i class="la la-dashboard"></i> <span> Dashboard</span> <span class="menu-arrow"></span></a>
        <ul>
          <li>
            <router-link to="/index" class="admin">Admin Dashboard</router-link>
          </li>
          <li>
            <router-link to="/employeedashboard" class="emmployee">Employee Dashboard</router-link>
            </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-cube"></i> <span> Apps</span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/chat" class="chat">Chat</router-link>
          </li>
          <li class="submenu">
            <a href="#"><span> Calls</span> <span class="menu-arrow"></span></a>
            <ul style="display: none;">
              <li>
                <router-link to="/voicecall" class="voicecall">Voice Call</router-link>
              </li>
              <li>
                <router-link to="/videocall" class="videocall">Video Call</router-link>
              </li>
              <li>
                <router-link to="/outgoingcall" class="outgoingcall">Outgoing Call</router-link>
              </li>
              <li>
                <router-link to="/incomingcall" class="incomingcall">Incoming Call</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/events" class="events">Calendar</router-link>
          </li>
          <li>
            <router-link to="/contacts" class="contacts">Contacts</router-link>
            
          </li>
          <li>
            <router-link to="/inbox" class="inbox">Email</router-link>
          </li>
          <li>
            <router-link to="/filemanager" class="filemanager">File Manager</router-link>
          </li>
        </ul>
      </li>
      <li class="menu-title">
        <span>Employees</span>
      </li>
      <li class="submenu">
        <a href="#" class="noti-dot"><i class="la la-user"></i> <span> Employees</span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
         
          <li>
            <router-link to="/employees" class="employees">All Employees</router-link>
          </li>
          <li>
            <router-link to="/holidays" class="holidays">Holidays</router-link>
          </li>
          <li>
            <router-link to="/leaves" class="leaves">Leaves (Admin) <span class="badge badge-pill bg-primary float-right">1</span></router-link>
          </li>
          <li>
            <router-link to="/leavesemployee" class="leavesemployee">Leaves (Employee)</router-link>
          </li>
          <li>
            <router-link to="/leavesettings" class="leavesettings">Leave Settings</router-link>
          </li>
          <li>
            <router-link to="/attendance" class="attendance">Attendance (Admin)</router-link>
          </li>
          <li>
            <router-link to="/attendanceemployee" class="attendanceemployee">Attendance (Employee)</router-link>
          </li>
          <li>
            <router-link to="/departments" class="departments">Departments</router-link>
          </li>
          <li>
            <router-link to="/designations" class="designations">Designations</router-link>
          </li>
          <li>
            <router-link to="/timesheet" class="timesheet">Timesheet</router-link>
          </li>
          <li>
            <router-link to="/overtime" class="overtime">Overtime</router-link>
          </li>
        </ul>
      </li>
      <li class="clients">
        <router-link to="/clients"><i class="la la-users"></i> <span>Clients</span></router-link>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-rocket"></i> <span> Projects</span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/projects" class="projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/tasks" class="tasks">Tasks</router-link>
          </li>
          <li>
            <router-link to="/taskboard" class="taskboard">Task Board</router-link>
          </li>
        </ul>
      </li>
      <li class="leads">
        <router-link to="/leads"><i class="la la-user-secret"></i> <span>Leads</span></router-link>
      </li>
      <li class="tickets">
        <router-link to="/tickets"><i class="la la-ticket"></i> <span>Tickets</span></router-link>
      </li>
      <li class="menu-title">
        <span>HR</span>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-files-o"></i> <span> Accounts </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/estimates" class="estimates">Estimates</router-link>
          </li>
          <li>
            <router-link to="/invoices" class="invoices">Invoices</router-link>
          </li>
          <li>
            <router-link to="/payments" class="payments">Payments</router-link>
          </li>
          <li>
            <router-link to="/expenses" class="expenses">Expenses</router-link>
          </li>
          <li>
            <router-link to="/providentfund" class="providentfund">Provident Fund</router-link>
          </li>
          <li>
            <router-link to="/taxes" class="taxes">Taxes</router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-money"></i> <span> Payroll </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/salary" class="salary"> Employee Salary </router-link>
          </li>
          <li>
            <router-link to="/salaryview" class="salaryview"> Payslip </router-link>
          </li>
          <li>
            <router-link to="/payrollitems" class="payrollitems"> Payroll Items </router-link>
          </li>
        </ul>
      </li>
      <li class="policies">
        <router-link to="/policies"><i class="la la-file-pdf-o"></i> <span>Policies</span></router-link>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-pie-chart"></i> <span> Reports </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/expensereports" class="expensereports"> Expense Report </router-link>
          </li>
          <li>
            <router-link to="/invoicereports" class="invoicereports"> Invoice Report </router-link>
          </li>
        </ul>
      </li>
      <li class="menu-title">
        <span>Performance</span>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-graduation-cap"></i> <span> Performance </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/performanceindicator" class="performanceindicator"> Performance Indicator </router-link>
          </li>
          <li>
            <router-link to="/performance" class="performance"> Performance Review </router-link>
          </li>
          <li>
            <router-link to="/performanceappraisal" class="performanceappraisal"> Performance Appraisal </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-crosshairs"></i> <span> Goals </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/goaltracking" class="goaltracking"> Goal List </router-link>
          </li>
          <li>
            <router-link to="/goaltype" class="goaltype"> Goal Type </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-edit"></i> <span> Training </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/training" class="training"> Training List </router-link>
          </li>
          <li>
            <router-link to="/trainers" class="trainers"> Trainers</router-link>
          </li>
          <li>
            <router-link to="/trainingtype" class="trainingtype"> Training Type </router-link>
          </li>
        </ul>
      </li>
      <li class="promotion">
        <router-link to="/promotion"><i class="la la-bullhorn"></i> <span>Promotion</span></router-link>
      </li>
      <li class="resignation">
        <router-link to="/resignation"><i class="la la-external-link-square"></i> <span>Resignation</span></router-link>
      </li>
      <li class="termination">
        <router-link to="/termination"><i class="la la-times-circle"></i> <span>Termination</span></router-link>
      </li>
      <li class="menu-title">
        <span>Administration</span>
      </li>
      <li class="assets">
        <router-link to="/assets"><i class="la la-object-ungroup"></i> <span>Assets</span></router-link>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-briefcase"></i> <span> Jobs </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/jobs" class="jobs"> Manage Jobs </router-link>
          </li>
          <li>
            <router-link to="/jobapplicants" class="jobapplicants"> Applied Candidates </router-link>
          </li>
        </ul>
      </li>
      <li class="knowledgebase">
        <router-link to="/knowledgebase"><i class="la la-question"></i> <span>Knowledgebase</span></router-link>
      </li>
      <li class="activities">
        <router-link to="/activities"><i class="la la-bell"></i> <span>Activities</span></router-link>
      </li>
      <li class="users">
        <router-link to="/users"><i class="la la-user-plus"></i> <span>Users</span></router-link>
      </li>
      <li class="settings">
        <router-link to="/settings"><i class="la la-cog"></i> <span>Settings</span></router-link>
      </li>
      <li class="menu-title">
        <span>Pages</span>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-user"></i> <span> Profile </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;"> 
          <li>
            <router-link to="/profile" class="profile"> Employee Profile </router-link>
          </li>
          <li>
            <router-link to="/clientprofile" class="clientprofile"> Client Profile </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-key"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/login" class="login"> Login </router-link>
          </li>
          <li>
            <router-link to="/register" class="register"> Register </router-link>
          </li>
          <li>
            <router-link to="/forgotpassword" class="forgotpassword"> Forgot Password </router-link>
          </li>
          <li>
            <router-link to="/otp" class="otp"> OTP </router-link>
          </li>
          <li>
            <router-link to="/lockscreen" class="lockscreen"> Lock Screen </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-exclamation-triangle"></i> <span> Error Pages </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/error404">404 Error </router-link>
          </li>
          <li>
            <router-link to="/error500">500 Error </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-hand-o-up"></i> <span> Subscriptions </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/subscriptions" class="subscriptions"> Subscriptions (Admin) </router-link>
          </li>
          <li>
            <router-link to="/subscriptionscompany" class="subscriptionscompany"> Subscriptions (Company) </router-link>
          </li>
          <li>
            <router-link to="/subscribedcompanies" class="subscribedcompanies"> Subscribed Companies</router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-columns"></i> <span> Pages </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/search" class="search"> Search </router-link>
          </li>
          <li>
            <router-link to="/faq" class="faq"> FAQ </router-link>
          </li>
          <li>
            <router-link to="/terms" class="terms"> Terms </router-link>
          </li>
          <li>
            <router-link to="/privacypolicy" class="privacypolicy"> Privacy Policy </router-link>
          </li>
          <li>
            <router-link to="/blankpage" class="blankpage"> Blank Page </router-link>
          </li>
        </ul>
      </li>
      <li class="menu-title">
        <span>UI Interface</span>
      </li>
      <li class="components">
        <router-link to="/components"><i class="la la-puzzle-piece"></i> <span>Components</span></router-link>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-object-group"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/formbasicinputs" class="formbasicinputs">Basic Inputs </router-link>
          </li>
          <li>
            <router-link to="/forminputgroups" class="forminputgroups">Input Groups </router-link>
          </li>
          <li>
            <router-link to="/formhorizontal" class="formhorizontal">Horizontal Form </router-link>
          </li>
          <li>
            <router-link to="/formvertical" class="formvertical"> Vertical Form </router-link>
          </li>
          <li>
            <router-link to="/formmask" class="formmask"> Form Mask </router-link>
          </li>
          <li>
            <router-link to="/formvalidation" class="formvalidation"> Form Validation </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="#"><i class="la la-table"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li>
            <router-link to="/tablesbasic" class="tablesbasic">Basic Tables </router-link>
          </li>
          <li>
            <router-link to="/datatables" class="datatables">Data Table </router-link>
          </li>
        </ul>
      </li>
      <li class="menu-title">
        <span>Extras</span>
      </li>
      <li>
        <a href="#"><i class="la la-file-text"></i> <span>Documentation</span></a>
      </li>
      <li>
        <a href="javascript:void(0);"><i class="la la-info"></i> <span>Change Log</span> <span class="badge badge-primary ml-auto">v3.4</span></a>
      </li>
      <li class="submenu">
        <a href="javascript:void(0);"><i class="la la-share-alt"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
        <ul style="display: none;">
          <li class="submenu">
            <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
            <ul style="display: none;">
              <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
              <li class="submenu">
                <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                <ul style="display: none;">
                  <li><a href="javascript:void(0);">Level 3</a></li>
                  <li><a href="javascript:void(0);">Level 3</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);"> <span>Level 1</span></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</vue-custom-scrollbar>
        </div>
    </div>
      <!-- </sidebar> -->
  </div>
  </template>
  <script>  
   import vueCustomScrollbar from 'vue-custom-scrollbar'
  import "vue-custom-scrollbar/dist/vueScrollbar.css"
    export default {
      components: {
      vueCustomScrollbar
    },
    mounted() {
      $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

    },
      computed: {
        currentpage() {
          return this.$route.path;
        },
      },
    data() {
      return {
        settings: {
suppressScrollX: false,
},
        activeClass: 'active',
      };
              //  isactive : true
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
          }
         
          </script>
          <style>
          .scroll-area {
            position: relative;
            margin: auto;
            height: calc(100vh - 60px);
            background-color: transparent !important;
        }
        /* .ps__rail-y {
        top: 0px !important;
    height: 657px !important;
    right: -3px !important;
    background-color: transparent !important;
        } */
      </style>