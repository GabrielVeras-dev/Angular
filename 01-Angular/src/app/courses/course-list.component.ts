import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',

})

export class CourseListComponent implements OnInit {

    course: Course[] = [];

    ngOnInit(): void {
        this.course = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2020'
            },
            {
                id:21,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4,
                releaseDate: 'November, 4,2021'
            }
        ]
    }
}