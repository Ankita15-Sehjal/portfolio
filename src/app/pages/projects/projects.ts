import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Complaint Management System',
      desc: 'A full stack web app with login, dashboard and complaint tracking.',
      image: 'assets/project1.jpg',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      desc: 'Modern animated portfolio using Angular with responsive UI.',
      image: 'assets/project2.jpg',
      link: '#'
    },
    {
      title: 'Quiz App',
      desc: 'Interactive quiz app with timer and score tracking.',
      image: 'assets/project3.jpg',
      link: '#'
    }
  ];

}