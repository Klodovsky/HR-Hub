import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import employeedashboard from '@/components/employeedashboard'
import employees from '@/components/employees'
import holidays from '@/components/holidays'
import leaves from '@/components/leaves'
import leavesemployee from '@/components/leavesemployee'
import chat from '@/components/chat'
import voicecall from '@/components/voicecall'
import videocall from '@/components/videocall'
import outgoingcall from '@/components/outgoingcall'
import incomingcall from '@/components/incomingcall'
import events from '@/components/events'
import contacts from '@/components/contacts'
import inbox from '@/components/inbox'
import filemanager from '@/components/filemanager'
import leavesettings from '@/components/leavesettings'
import attendance from '@/components/attendance'
import attendanceemployee from '@/components/attendanceemployee'
import departments from '@/components/departments'
import designations from '@/components/designations'
import timesheet from '@/components/timesheet'
import overtime from '@/components/overtime'
import clients from '@/components/clients'
import projects from '@/components/projects'
import tasks from '@/components/tasks'
import taskboard from '@/components/taskboard'
import leads from '@/components/leads'
import tickets from '@/components/tickets'
import estimates from '@/components/estimates'
import invoices from '@/components/invoices'
import payments from '@/components/payments'
import expenses from '@/components/expenses'
import providentfund from '@/components/providentfund'
import taxes from '@/components/taxes'
import salary from '@/components/salary'
import salaryview from '@/components/salaryview'
import payrollitems from '@/components/payrollitems'
import policies from '@/components/policies'
import expensereports from '@/components/expensereports'
import invoicereports from '@/components/invoicereports'
import performanceindicator from '@/components/performanceindicator'
import performance from '@/components/performance'
import performanceappraisal from '@/components/performanceappraisal'
import goaltracking from '@/components/goaltracking'
import goaltype from '@/components/goaltype'
import training from '@/components/training'
import trainers from '@/components/trainers'
import trainingtype from '@/components/trainingtype'
import promotion from '@/components/promotion'
import resignation from '@/components/resignation'
import termination from '@/components/termination'
import assets from '@/components/assets'
import jobs from '@/components/jobs'
import jobapplicants from '@/components/jobapplicants'
import knowledgebase from '@/components/knowledgebase'
import activities from '@/components/activities'
import users from '@/components/users'
import settings from '@/components/settings'
import profile from '@/components/profile'
import clientprofile from '@/components/clientprofile'
import tablesbasic from '@/components/tablesbasic'
import datatables from '@/components/datatables'
import formbasicinputs from '@/components/formbasicinputs'
import forminputgroups from '@/components/forminputgroups'
import formhorizontal from '@/components/formhorizontal'
import formvertical from '@/components/formvertical'
import formmask from '@/components/formmask'
import formvalidation from '@/components/formvalidation'
import components from '@/components/components'
import search from '@/components/search'
import faq from '@/components/faq'
import terms from '@/components/terms'
import privacypolicy from '@/components/privacypolicy'
import blankpage from '@/components/blankpage'
import subscriptions from '@/components/subscriptions'
import subscriptionscompany from '@/components/subscriptionscompany'
import subscribedcompanies from '@/components/subscribedcompanies'
import error404 from '@/components/error404'
import error500 from '@/components/error500'
import ticketview from '@/components/ticketview'
import themesettings from '@/components/themesettings'
import salarysettings from '@/components/salarysettings'
import rolespermissions from '@/components/rolespermissions'
import register from '@/components/register'
import projectview from '@/components/projectview'
import projectlist from '@/components/projectlist'
import otp from '@/components/otp'
import notificationssettings from '@/components/notificationssettings'
import mailview from '@/components/mailview'
import login from '@/components/login'
import lockscreen from '@/components/lockscreen'
import localization from '@/components/localization'
import leavetype from '@/components/leavetype'
import knowledgebaseview from '@/components/knowledgebaseview'
import jobview from '@/components/jobview'
import joblist from '@/components/joblist'
import jobdetails from '@/components/jobdetails'
import invoiceview from '@/components/invoiceview'
import invoicesettings from '@/components/invoicesettings'
import forgotpassword from '@/components/forgotpassword'
import estimateview from '@/components/estimateview'
import employeeslist from '@/components/employeeslist'
import emailsettings from '@/components/emailsettings'
import editinvoice from '@/components/editinvoice'
import editestimate from '@/components/editestimate'
import createinvoice from '@/components/createinvoice'
import createestimate from '@/components/createestimate'
import clientslist from '@/components/clientslist'
import changepassword from '@/components/changepassword'
import compose from '@/components/compose'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: 'blue',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/index',
      name: 'indexs',
      component: index,
    },
    {
      path: '/employeedashboard',
      name: 'employeedashboard',
      component: employeedashboard,
    },
    {
      path: '/employees',
      name: 'employees',
      component: employees,
    },
    {
      path: '/holidays',
      name: 'holidays',
      component: holidays,
    },
    {
      path: '/leaves',
      name: 'leaves',
      component: leaves,
    },
    {
      path: '/leavesemployee',
      name: 'leavesemployee',
      component: leavesemployee,
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
    },
    {
      path: '/voicecall',
      name: 'voicecall',
      component: voicecall,
    },
    {
      path: '/videocall',
      name: 'videocall',
      component: videocall,
    },
    {
      path: '/outgoingcall',
      name: 'outgoingcall',
      component: outgoingcall,
    },
    {
      path: '/incomingcall',
      name: 'incomingcall',
      component: incomingcall,
    },
    {
      path: '/events',
      name: 'events',
      component: events,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts,
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: inbox,
    },
    {
      path: '/filemanager',
      name: 'filemanager',
      component: filemanager,
    },
    {
      path: '/leavesettings',
      name: 'leavesettings',
      component: leavesettings,
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: attendance,
    },
    {
      path: '/attendanceemployee',
      name: 'attendanceemployee',
      component: attendanceemployee,
    },
    {
      path: '/departments',
      name: 'departments',
      component: departments,
    },
    {
        path: '/designations',
        name: 'designations',
        component: designations,
      },
      {
        path: '/timesheet',
        name: 'timesheet',
        component: timesheet,
      },
      {
        path: '/overtime',
        name: 'overtime',
        component: overtime,
      },
      {
        path: '/clients',
        name: 'clients',
        component: clients,
      },
      {
        path: '/projects',
        name: 'projects',
        component: projects,
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: tasks,
      },
      {
        path: '/taskboard',
        name: 'taskboard',
        component: taskboard,
      },
      {
        path: '/leads',
        name: 'leads',
        component: leads,
      },
      {
        path: '/tickets',
        name: 'tickets',
        component: tickets,
      },
      {
        path: '/estimates',
        name: 'estimates',
        component: estimates,
      },
      {
        path: '/invoices',
        name: 'invoices',
        component: invoices,
      },
      {
        path: '/payments',
        name: 'payments',
        component: payments,
      },
      {
        path: '/expenses',
        name: 'expenses',
        component: expenses,
      },
      {
        path: '/providentfund',
        name: 'providentfund',
        component: providentfund,
      },
      {
        path: '/taxes',
        name: 'taxes',
        component: taxes,
      },
      {
        path: '/salary',
        name: 'salary',
        component: salary,
      },
      {
        path: '/salaryview',
        name: 'salaryview',
        component: salaryview,
      },
      {
        path: '/payrollitems',
        name: 'payrollitems',
        component: payrollitems,
      },
      {
        path: '/policies',
        name: 'policies',
        component: policies,
      },
      {
        path: '/expensereports',
        name: 'expensereports',
        component: expensereports,
      },
      {
        path: '/invoicereports',
        name: 'invoicereports',
        component: invoicereports,
      },
      {
        path: '/performanceindicator',
        name: 'performanceindicator',
        component: performanceindicator,
      },
      {
        path: '/performance',
        name: 'performance',
        component: performance,
      },
      {
        path: '/performanceappraisal',
        name: 'performanceappraisal',
        component: performanceappraisal,
      },
      {
        path: '/goaltracking',
        name: 'goaltracking',
        component: goaltracking,
      },
      {
        path: '/goaltype',
        name: 'goaltype',
        component: goaltype,
      },
      {
        path: '/training',
        name: 'training',
        component: training,
      },
      {
        path: '/trainers',
        name: 'trainers',
        component: trainers,
      },
      {
        path: '/trainingtype',
        name: 'trainingtype',
        component: trainingtype,
      },
      {
        path: '/promotion',
        name: 'promotion',
        component: promotion,
      },
      {
        path: '/resignation',
        name: 'resignation',
        component: resignation,
      },
      {
        path: '/termination',
        name: 'termination',
        component: termination,
      },
      {
        path: '/assets',
        name: 'assets',
        component: assets,
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: jobs,
      },
      {
        path: '/jobapplicants',
        name: 'jobapplicants',
        component: jobapplicants,
      },
      {
        path: '/knowledgebase',
        name: 'knowledgebase',
        component: knowledgebase,
      },
      {
        path: '/activities',
        name: 'activities',
        component: activities,
      },
      {
        path: '/users',
        name: 'users',
        component: users,
      },
      {
        path: '/settings',
        name: 'settings',
        component: settings,
      },
      {
        path: '/profile',
        name: 'profile',
        component: profile,
      },
      {
        path: '/clientprofile',
        name: 'clientprofile',
        component: clientprofile,
      },
      {
        path: '/tablesbasic',
        name: 'tablesbasic',
        component: tablesbasic,
      },
      {
        path: '/datatables',
        name: 'datatables',
        component: datatables,
      },
      {
        path: '/formbasicinputs',
        name: 'formbasicinputs',
        component: formbasicinputs,
      },
      {
        path: '/forminputgroups',
        name: 'forminputgroups',
        component: forminputgroups,
      },
      {
        path: '/formhorizontal',
        name: 'formhorizontal',
        component: formhorizontal,
      },
      {
        path: '/formvertical',
        name: 'formvertical',
        component: formvertical,
      },
      {
        path: '/formmask',
        name: 'formmask',
        component: formmask,
      },
      {
        path: '/formvalidation',
        name: 'formvalidation',
        component: formvalidation,
      },
      {
        path: '/components',
        name: 'components',
        component: components,
      },
       {
        path: '/search',
        name: 'search',
        component: search,
      },
      {
        path: '/faq',
        name: 'faq',
        component: faq,
      },
      {
        path: '/terms',
        name: 'terms',
        component: terms,
      },
      {
        path: '/privacypolicy',
        name: 'privacypolicy',
        component: privacypolicy,
      },
      {
        path: '/blankpage',
        name: 'blankpage',
        component: blankpage,
      },
      {
        path: '/subscriptions',
        name: 'subscriptions',
        component: subscriptions,
      },
      {
        path: '/subscriptionscompany',
        name: 'subscriptionscompany',
        component: subscriptionscompany,
      },
      {
        path: '/subscribedcompanies',
        name: 'subscribedcompanies',
        component: subscribedcompanies,
      },
      {
        path: '/error404',
        name: 'error404',
        component: error404,
      },
      {
        path: '/error500',
        name: 'error500',
        component: error500,
      },
      {
        path: '/ticketview',
        name: 'ticketview',
        component: ticketview,
      },
      {
        path: '/themesettings',
        name: 'themesettings',
        component: themesettings,
      },
      {
        path: '/salarysettings',
        name: 'salarysettings',
        component: salarysettings,
      },
      {
        path: '/rolespermissions',
        name: 'rolespermissions',
        component: rolespermissions,
      },
      {
        path: '/register',
        name: 'register',
        component: register,
      },
      {
        path: '/projectview',
        name: 'projectview',
        component: projectview,
      },
      {
        path: '/projectlist',
        name: 'projectlist',
        component: projectlist,
      },
      {
        path: '/otp',
        name: 'otp',
        component: otp,
      },
      {
        path: '/notificationssettings',
        name: 'notificationssettings',
        component: notificationssettings,
      },
      {
        path: '/mailview',
        name: 'mailview',
        component: mailview,
      },
      {
        path: '/login',
        name: 'login',
        component: login,
      },
      {
        path: '/lockscreen',
        name: 'lockscreen',
        component: lockscreen,
      },
      {
        path: '/localization',
        name: 'localization',
        component: localization,
      },
      {
        path: '/leavetype',
        name: 'leavetype',
        component: leavetype,
      },
      {
        path: '/knowledgebaseview',
        name: 'knowledgebaseview',
        component: knowledgebaseview,
      },
      {
        path: '/jobview',
        name: 'jobview',
        component: jobview,
      },
      {
        path: '/joblist',
        name: 'joblist',
        component: joblist,
      },
      {
        path: '/jobdetails',
        name: 'jobdetails',
        component: jobdetails,
      },
      {
        path: '/invoiceview',
        name: 'invoiceview',
        component: invoiceview,
      },
      {
        path: '/invoicesettings',
        name: 'invoicesettings',
        component: invoicesettings,
      },
      {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: forgotpassword,
      },
      {
        path: '/estimateview',
        name: 'estimateview',
        component: estimateview,
      },
      {
        path: '/employeeslist',
        name: 'employeeslist',
        component: employeeslist,
      },
      {
        path: '/emailsettings',
        name: 'emailsettings',
        component: emailsettings,
      },
      {
        path: '/editinvoice',
        name: 'editinvoice',
        component: editinvoice,
      },
      {
        path: '/editestimate',
        name: 'editestimate',
        component: editestimate,
      },
      {
        path: '/createinvoice',
        name: 'createinvoice',
        component: createinvoice,
      },
      {
        path: '/createestimate',
        name: 'createestimate',
        component: createestimate,
      },
      {
        path: '/clientslist',
        name: 'clientslist',
        component: clientslist,
      },
      {
        path: '/changepassword',
        name: 'changepassword',
        component: changepassword,
      },
      {
        path: '/compose',
        name: 'compose',
        component: compose,
      }
  ],
  linkActiveClass: "active",
})
export default router