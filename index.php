<!DOCTYPE html>
<html lang="en" >
  <head>
    <title>Angular To Do List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Angular Material style sheet -->
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/example.css">
  </head>
  <body ng-cloak ng-app="Example">
    <div>
      <md-toolbar class="md-hue-2">
        <div class="ex-header">
          <h1>Example Note Application</h1>
        </div>
      </md-toolbar>
      <div ng-view></div>
    </div>
    <!-- Angular Material requires Angular.js Libraries -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-messages.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-route.js"></script>

    <!-- Angular Material Library -->
    <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.js"></script>

    <!-- Initializes the Example object -->
    <script src="js/example-init.js"></script>
    <!-- Application Services -->
    <script src="js/components/note-service/note-service.js"></script>
    <!-- Application Controllers and Directives -->
    <script src="js/components/note-list/list-view-ctrl.js"></script>
    <script src="js/components/note-detail/detail-view-ctrl.js"></script>
    <!-- Main Application Module -->
    <script src="js/example-main.js"></script>
    <?php
      // put your code here
    ?>
  </body>
</html>
