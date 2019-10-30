angular.module('myApp', []);

angular
	.module('myApp')
	.factory('courseService', function () {
		var data = [
			{
				id: 1,
				title: "Video Course 1",
				time: 23,
				date: "05.10.2019",
				note: "Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?",
			},
			{
				id: 2,
				title: "Video Course 2",
				time: 15,
				date: "06.12.2019",
				note: "Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?",
			},
			{
				id: 3,
				title: "Video Course 3",
				time: 45,
				date: "04.09.2019",
				note: "Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?",
			},
			{
				id: 4,
				title: "Video Course 4",
				time: 20,
				date: "10.02.2019",
				note: "Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?",
			},
			{
				id: 5,
				title: "Video Course 5",
				time: 22,
				date: "16.04.2019",
				note: "Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?",
			},
			{
				id: 6,
				title: "Video Course 6",
				time: 34,
				date: "22.11.2019",
				note: "Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?",
			},
		];

		return {
			getData: getData,
			deleteDataById: deleteDataById,
			addData: addData,
		}

		function getData() {
			return data;
		}

		function deleteDataById(id) {
			data = data.filter(function (item) {
				return item.id !== id;
			});
		}

		function addData(course) {
			course.id = data[data.length - 1] + 1;
			course.date = new Date().toLocaleDateString();

			data.push(course);
		}
	});
function AppFooter() {
  let $ctrl = this;
}

angular
  .module('myApp')
  .component('appFooter', {
    templateUrl: './app/components/app-footer/app-footer.html',
    controller: AppFooter
  })
function AppHeader() {
  let $ctrl = this;
}

angular
  .module('myApp')
  .component('appHeader', {
    templateUrl: './app/components/app-header/app-header.html',
    controller: AppHeader
  })
function AppHomePage(courseService) {
  let $ctrl = this;

  $ctrl.$onInit = function() {
    $ctrl.courses = courseService.getData();
    $ctrl.isCreationMode = false;
  };
  
  $ctrl.handleDeleteCourse = function(courseId) {
    courseService.deleteDataById(courseId);
    $ctrl.courses = courseService.getData();
  }

  $ctrl.toggleCreationMode = function() {
    $ctrl.isCreationMode = !$ctrl.isCreationMode;
  }

  $ctrl.createCourse = function(course) {
    courseService.addData(course);
    $ctrl.toggleCreationMode();
  }

};

angular
  .module('myApp')
  .component('appHomePage', {
    templateUrl: './app/components/app-home-page/app-home-page.html',
    controller: AppHomePage
  })
function AppBreadcrumbs() {
  let $ctrl = this;
}

angular
  .module('myApp')
  .component('appBreadcrumbs', {
    templateUrl: './app/components/app-home-page/components/app-breadcrumbs/app-breadcrumbs.html',
    controller: AppBreadcrumbs
  })
function AppCourseList() {
  let $ctrl = this;

  $ctrl.handleDelete = function(courseId) {
    $ctrl.onDeleteCourse({courseId: courseId});
  }
}

angular
  .module('myApp')
  .component('appCourseList', {
    templateUrl: './app/components/app-home-page/components/app-course-list/app-course-list.html',
    controller: AppCourseList,
    bindings: {
      courses: '<',
      onDeleteCourse: '&',
    }
  })
function AppCourseSearch() {
  let $ctrl = this;
}

angular
  .module('myApp')
  .component('appCourseSearch', {
    templateUrl: './app/components/app-home-page/components/app-course-search/app-course-search.html',
    controller: AppCourseSearch
  })
function AppCreatingForm() {
  let $ctrl = this;

  $ctrl.newCourse = {
    title: '',
    time: 0,
    note: '',
  }
};

angular
  .module('myApp')
  .component('appCreatingForm', {
    templateUrl: './app/components/app-home-page/components/app-creating-form/app-creating-form.html',
    controller: AppCreatingForm,
    bindings: {
      cancelCreation: '&',
      createCourse: '&',
    }
  })
function AppCourseItem() {
  let $ctrl = this;

  $ctrl.handleDelete = function() {
    $ctrl.onDelete({courseId: $ctrl.course.id})
  };
}

angular
  .module('myApp')
  .component('appCourseItem', {
    templateUrl: './app/components/app-home-page/components/app-course-list/app-course-item/app-course-item.html',
    controller: AppCourseItem,
    bindings: {
      course: '<',
      onDelete: '&',
    }
  })