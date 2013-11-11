require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrapAffix: '../components/bootstrap/js/affix',
    bootstrapAlert: '../components/bootstrap/js/alert',
    bootstrapButton: '../components/bootstrap/js/button',
    bootstrapCarousel: '../components/bootstrap/js/carousel',
    bootstrapCollapse: '../components/bootstrap/js/collapse',
    bootstrapDropdown: '../components/bootstrap/js/dropdown',
    bootstrapModal: '../components/bootstrap/js/modal',
    bootstrapPopover: '../components/bootstrap/js/popover',
    bootstrapScrollspy: '../components/bootstrap/js/scrollspy',
    bootstrapTab: '../components/bootstrap/js/tab',
    bootstrapTooltip: '../components/bootstrap/js/tooltip',
    bootstrapTransition: '../components/bootstrap/js/transition'
  },
  shim: {
    bootstrapAffix: {
      deps: ['jquery']
    },
    bootstrapAlert: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapButton: {
      deps: ['jquery']
    },
    bootstrapCarousel: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapCollapse: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapDropdown: {
      deps: ['jquery']
    },
    bootstrapModal: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapPopover: {
      deps: ['jquery', 'bootstrapTooltip']
    },
    bootstrapScrollspy: {
      deps: ['jquery']
    },
    bootstrapTab: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapTooltip: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapTransition: {
      deps: ['jquery']
    }
  }
});

require(['app', 'jquery'], function (app, $) {
  'use strict';
  // use app here
  console.log(app);
  console.log('Running jQuery %s', $().jquery);
});
