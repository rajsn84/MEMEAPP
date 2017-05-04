angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/page2',
    views: {
      'tab5': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page3',
    views: {
      'tab5': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mEME'
      2) Using $state.go programatically:
        $state.go('tabsController.mEME');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page4
      /page1/tab5/page4
  */
  .state('tabsController.mEME', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/mEME.html',
        controller: 'mEMECtrl'
      },
      'tab5': {
        templateUrl: 'templates/mEME.html',
        controller: 'mEMECtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.memeCreate'
      2) Using $state.go programatically:
        $state.go('tabsController.memeCreate');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page5
      /page1/tab1/page5
      /page1/tab4/page5
      /page1/tab5/page5
  */
  .state('tabsController.memeCreate', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/memeCreate.html',
        controller: 'memeCreateCtrl'
      },
      'tab1': {
        templateUrl: 'templates/memeCreate.html',
        controller: 'memeCreateCtrl'
      },
      'tab4': {
        templateUrl: 'templates/memeCreate.html',
        controller: 'memeCreateCtrl'
      },
      'tab5': {
        templateUrl: 'templates/memeCreate.html',
        controller: 'memeCreateCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.imageTiles'
      2) Using $state.go programatically:
        $state.go('tabsController.imageTiles');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page7
      /page1/tab5/page7
  */
  .state('tabsController.imageTiles', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/imageTiles.html',
        controller: 'imageTilesCtrl'
      },
      'tab5': {
        templateUrl: 'templates/imageTiles.html',
        controller: 'imageTilesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab2/page4')

  

});