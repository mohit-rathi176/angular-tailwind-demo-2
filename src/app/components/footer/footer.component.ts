import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  links: any[] = [
    {
      title: 'About',
      subLinks: [
        {
          title: 'Contact Us',
          href: '#'
        },
        {
          title: 'About Us',
          href: '#'
        },
        {
          title: 'Careers',
          href: '#'
        },
        {
          title: 'Stories',
          href: '#'
        },
        {
          title: 'Press',
          href: '#'
        },
        {
          title: 'Corporate Information',
          href: '#'
        },
      ]
    },
    {
      title: 'Group Companies',
      subLinks: [
        {
          title: 'React',
          href: '#'
        },
        {
          title: 'Vue',
          href: '#'
        },
        {
          title: 'Svelte',
          href: '#'
        },
        {
          title: 'Laravel',
          href: '#'
        },
      ]
    },
    {
      title: 'Consumer Policies',
      subLinks: [
        {
          title: 'Cancellation & Returns',
          href: '#'
        },
        {
          title: 'Terms of Use',
          href: '#'
        },
        {
          title: 'Security',
          href: '#'
        },
        {
          title: 'Privacy',
          href: '#'
        },
        {
          title: 'Sitemap',
          href: '#'
        },
        {
          title: 'Grievance Redressal',
          href: '#'
        },
        {
          title: 'EPR Compliance',
          href: '#'
        },
      ]
    },
    {
      title: 'Help',
      subLinks: [
        {
          title: 'Payments',
          href: '#'
        },
        {
          title: 'Shipping',
          href: '#'
        },
        {
          title: 'Cancellation & Returns',
          href: '#'
        },
        {
          title: 'FAQ',
          href: '#'
        },
        {
          title: 'Report Infringement',
          href: '#'
        },
      ]
    }
  ];

}
