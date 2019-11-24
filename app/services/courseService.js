angular
    .module('myApp')
    .factory('courseService', function() {
        var data = [
            {
                id: 1,
                title: 'Video Course 1',
                time: 23,
                date: new Date('10.20.2019'),
                note: 'Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?',
                topRated: true
            },
            {
                id: 2,
                title: 'Video Course 2',
                time: 15,
                date: new Date('10.22.2019'),
                note: 'Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?',
                topRated: true
            },
            {
                id: 3,
                title: 'Video Course 3',
                time: 45,
                date: new Date('11.04.2019'),
                note: 'Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?',
                topRated: false
            },
            {
                id: 4,
                title: 'Video Course 4',
                time: 20,
                date: new Date('02.10.2019'),
                note: 'Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?',
                topRated: false
            },
            {
                id: 5,
                title: 'Video Course 5',
                time: 120,
                date: new Date('04.16.2019'),
                note: 'Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?',
                topRated: false
            },
            {
                id: 6,
                title: 'Video Course 6',
                time: 126,
                date: new Date('11.05.2019'),
                note: 'Lorem ipsum maiores sto repelsmo vitae accusamus facilis mollitia voluptates assumenda, dolore officiis obcaece voluptate quae? Voluptates harum amet aspernatur illum ex debitis beatae. Cupiditate fugit itaque dolore possimus odit natus, exercitationem tenetur officia sapiente nesciunt placeat doloremque iste distinctio labore sint, amet quas nemo quam voluptate accusamus ipsam animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatem quisquam recusandae perspiciatis pariatur molestiae?',
                topRated: true
            }
        ];

        return {
            getData: getData,
            deleteDataById: deleteDataById,
            addData: addData,
            getCourseById: getCourseById,
            updateData: updateData,
            filterCoursesByName: filterCoursesByName
        };

        function getData() {
            return data;
        }

        function getCourseById(id) {
            var course = null;

            data.forEach(function(item) {
                if (item.id === id) {
                    course = item;
                }
            });

            return course;
        }

        function deleteDataById(id) {
            data = data.filter(function(item) {
                return item.id !== id;
            });
        }

        function addData(course) {
            course.id = new Date().getUTCMilliseconds();
            course.date = new Date();

            data.push(course);
        }

        function updateData(course) {
            data.forEach(function(item, i) {
                if (item.id === course.id) {
                    data[i] = course;
                }
            });
        }

        function filterCoursesByName(searchValue) {
            return data.filter(function(item) {
                return item.title.toLowerCase().match(searchValue.toLowerCase());
            });
        }
    });
