import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  standalone: false,
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  companyName='School ERP';
  companyDescription='Empowering education through innovative technology solutions for students, staff, and administrators.';


  socialLinks=[
    { icon: 'fab fa-facebook', url: ' '},
    { icon: 'fab fa-twitter', url: ' ' },
    { icon: 'fab fa-youtube', url: ' ' },
    { icon: 'fab fa-linkedin', url: ' ' }
  ]

  quickLinks=[
    { name: 'Dashboard', icon: 'fas fa-chevron-right', url: ' ' },
    { name: 'Student Portal', icon: 'fas fa-chevron-right', url: ' ' },
    { name: 'Staff Management', icon: 'fas fa-chevron-right', url: ' ' },
    { name: 'Attendance', icon: 'fas fa-chevron-right', url: ' ' },
    { name: 'Reports', icon: 'fas fa-chevron-right', url: ' ' }
  ]

    contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '123 Education Street, Learning City, ED 12345' },
    { icon: 'fas fa-envelope', text: 'support@schoolerp.com' },
    { icon: 'fas fa-phone', text: '+1 (555) 123-4567' }
  ];

   resources = [
    { name: 'Documentation', icon: 'fas fa-book' },
    { name: 'Help Center', icon: 'fas fa-question-circle' },
    { name: 'API Reference', icon: 'fas fa-code' },
    { name: 'Privacy Policy', icon: 'fas fa-shield-alt' },
    { name: 'Terms of Service', icon: 'fas fa-file-contract' }
  ];

  copyrightYear = new Date().getFullYear();
  copyrightText = 'School ERP System. All rights reserved.';
  createdBy = 'Trupti';

}
