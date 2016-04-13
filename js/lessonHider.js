angular.module("directivePractice")
    .directive("lessonHider", function() {// set every directive up like a service/controller

        return { //directive always returns an object
            templateUrl: './js/lessonHider.html', //templateUrl points to the URL
            restrict: "E",
            scope: {
                lesson: "=",
                dayAlert: "&"
            },
            link: function(scope, element, attributes) {

                scope.getSchedule
                    .then(function (response) {
                        console.log(response);
                        scope.schedule = response.data;

                    scope.schedule.forEach(function(scheduleDay) {
                        if (scheduleDay.lesson === scope.lesson) {
                            element.css("text-decoration", "line-through")

                            scope.lessonDay = scheduleDay.weekday
                            return;
                        }

                    })
                })
            },

            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();

            },

    }
});
