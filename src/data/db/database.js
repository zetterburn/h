import Mock from "../mock";

const database = {
  information: {
    name: 'Clayton Redmon',
    nickname: 'Clayton',
    aboutContent: "I am a graduate of Eastern Kentucky University with a Bachelors in Computer Science. I am an intermediate-level developer who loves continually growing more knowledge of JavaScript, HTML, CSS, and more. While not necessarily posessing job experience related to IT, I have a passion for self-teaching, and finding useful applications for as much as I can about what I have learned.",
    aboutConcise: "I am an intermediate-level developer who loves continually growing more knowledge of JavaScript, HTML, CSS, and more.",
    age: 24,
    phone: '15025930589',
    language: 'English',
    email: 'redmon.xln@gmail.com',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/zam.clay',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/cmredmon/',
      dribbble: '',
      github: ''
    },
    brandImage: 'https://raw.githubusercontent.com/zetterburn/resume/master/public/images/brand-image.jpg',
    aboutImage: 'https://raw.githubusercontent.com/zetterburn/resume/master/public/images/about-image.jpg',
    aboutImageLg: 'https://raw.githubusercontent.com/zetterburn/resume/master/public/images/about-image-lg.jpg',
    resumefile: 'https://raw.githubusercontent.com/zetterburn/resume/master/public/files/resume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Designing and maintaining updates for front-end website development."
    },
    {
      title: "Node Development",
      icon: 'code',
      details: "Solutions for node-based JavaScript applications."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "If Clayton actually had any reviews, they would go here!",
      author: {
        name: 'Person McPersonson',
        designation: 'Web Developer'
      }
    }
  ],

  /* skills are complete */

  skills:{
    languages: [
      {
        title: "C#",
        value: 1
      },
      {
        title: "HTML",
        value: 11
      },
      {
        title: "HTML5",
        value: 6
      },
      {
        title: "CSS",
        value: 11
      },
      {
        title: "CSS3",
        value: 5
      },
      {
        title: "Java",
        value: 4
      },
      {
        title: "JavaScript",
        value: 10
      },
      {
        title: "jQuery",
        value: 6
      },
      {
        title: "MySQL",
        value: 3
      },
      {
        title: "NoSQL",
        value: 2
      },
      {
        title: "Python",
        value: 1
      },
      {
        title: "ReactJS",
        value: 2
      },
      {
        title: "SQL",
        value: 3
      },
      {
        title: "Swift 4.0",
        value: 1
      },
    ],
    software: [
      {
        title: "Adobe Animate CC 2015",
        value: 2
      },
      {
        title: "Atom",
        value: 3
      },
      {
        title: "Autodesk Maya",
        value: 1
      },
      {
        title: "Blender",
        value: 3
      },
      {
        title: "Brackets",
        value: 3
      },
      {
        title: "Eclipse",
        value: 4
      },
      {
        title: "Gimp 2.6 - 2.8",
        value: 10
      },
      {
        title: "Git",
        value: 4
      },
      {
        title: "HeidiSQL",
        value: 3
      },
      {
        title: "Inkscape",
        value: 2
      },
      {
        title: "Microsoft Word / Excel / PowerPoint",
        value: 10
      },
      {
        title: "NotePad++",
        value: 6
      },
      {
        title: "Node.JS",
        value: 5
      },
      {
        title: "Photoshop CS6",
        value: 3
      },
      {
        title: "PuTTY",
        value: 3
      },
      {
        title: "Unity",
        value: 4
      },
      {
        title: "Unreal Engine 4",
        value: 1
      },
      {
        title: "Visual Studio 2015 - 2017",
        value: 4
      },
      {
        title: "Visual Studio Code",
        value: 4
      },
      {
        title: "Xcode 10",
        value: 1
      }
    ],
    systems:[
      {
        title: "Windows XP",
        value: 12
      },
      {
        title: "Windows Vista",
        value: 10
      },
      {
        title: "Windows 8 / 8.1",
        value: 7
      },
      {
        title: "Windows 10",
        value: 3
      },
      {
        title: "Ubuntu 14.04 - 18.04",
        value: 4
      },
      {
        title: "Mac OSX 10.6",
        value: 1
      }
    ]
  },


  portfolios: [
    {
      id: 1,
      title: "test",
      subtitle: "subtitle",
      imageUrl: "https://raw.githubusercontent.com/zetterburn/resume/master/public/images/portfolio-image-1.jpg",
      largeImageUrl: ["https://raw.githubusercontent.com/zetterburn/resume/master/public/images/portfolio-image-1-lg.jpg"],
      url: 'https://zetterburn.github.io/resume'
    }
  ],

  /* Experience is Complete */
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Mar 2020 - Present",
        position: "Shift Manager",
        company: "Arbys",
        details: "In charge of maintaining the store and running shifts 5-6 days per week, managing a full staff of bright employees and regularly helping to train new employees AND managers at our training store."
      },
      {
        id: 2,
        year: "May 2018 - Aug 2018",
        position: "Fullfilment Center Associate",
        company: "Amazon",
        details: "Was responsible for Picking items from shelves, scanning, and sending them off to packing. Fast-paced 12-hour shifts. Summer job between college semesters."
      },
      {
        id: 3,
        year: "Apr 2014 - May 2018",
        position: "Customer Service/Shift Manager",
        company: "Arbys",
        details: "Switched constantly, and was trained on every position available, including Cashier, Drivethrough, Fry Station, Morning-prep, cleaning, backline food-prep, taking inventory, etc. Left for a higher paying job at Amazon."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019",
        graduation: "Bachelors of Computer Science",
        university: "Eastern Kentucky University",
        details: ""
      },
      {
        id: 2,
        year: "2014",
        graduation: "High School Degree",
        university: "Trinity High School",
        details: ""
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'test',
      featuredImage: 'https://raw.githubusercontent.com/zetterburn/resume/master/public/images/blog-image-10.jpg',
      filesource: 'https://raw.githubusercontent.com/zetterburn/resume/master/src/blog/test.md',
      createDay: "1",
      createMonth: 'March',
      createYear: "2020"
    },
  ],
  contactInfo: {
    phoneNumbers: ['+1 (502) 593-0589'],
    emailAddress: ['redmon.xln@gmail.com'],
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});