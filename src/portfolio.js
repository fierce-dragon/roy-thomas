/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Roy Thomas",
  title: "Hi all, I'm Roy",
  subTitle: emoji(
    "Aspiring Professional Web Developer with a certificate in software engineering, known as an innovative problem-solver who is passionate about developing efficient and effective web applications."
  ),
  resumeLink: "https://drive.google.com/file/d/17Vb_dncMn6-Exo9pIYn6NW4Qz2gfo1x3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BitstarsTeam",
  linkedin: "https://www.linkedin.com/in/roy-thomas-278792221/",
  gmail: "BitStars.team@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
		{
      skillName: "Bitcoin",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
		{
      skillName: "Ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Singapore",
      logo: require("./assets/images/university.png"),
      subHeader: "Master's Degree in Computer Science",
      duration: "Jan 2012 - May 2016",
      descBullets: [
				"I was selected for ACM Contest which is given to top 10% of students in college.",
        "I have received award from respected director for consistently best performance in academics."
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-end development",
      progressPercentage: "95%"
    },
    {
      Stack: "Devops",
      progressPercentage: "92%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "The 0.07%",
      projectDesc: "Party Schedule Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://test.007percent.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "Robhayes",
      projectDesc: "Watch Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.robhayes.co/"
        }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "Fabuwood",
      projectDesc: "Furniture Store",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.fabuwood.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project4.png"),
      projectName: "NFT Gaming Stars",
      projectDesc: "Binance Smart Chain NFT platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nftgamingstars.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project5.png"),
      projectName: "Panther Swap",
      projectDesc: "Yield Farm & AMM on Binance Smart Chain",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pantherswap.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project6.png"),
      projectName: "Successful Australia",
      projectDesc: "Australian Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.successfulaustralia.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/project7.png"),
      projectName: "LEAGUE of LEGENDS",
      projectDesc: "Game Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lol.garena.com"
        }
      ]
    },
    {
      image: require("./assets/images/project8.png"),
      projectName: "Heckenschnitt",
      projectDesc: "Lawn Mower Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://heckenschnitt.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project9.png"),
      projectName: "Emprunte mon toutou",
      projectDesc: "Dog Owner & Borrower",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.empruntemontoutou.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project13.png"),
      projectName: "Snowman Vila",
      projectDesc: "NFT Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://snowmanvila.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project14.png"),
      projectName: "Pet Puppies",
      projectDesc: "NFT Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.petpuppiesnft.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project15.png"),
      projectName: "Wagerr",
      projectDesc: "The World's First Private Betting App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wagerr.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "HackerRank Certifications that I have done !",

  achievementsCards: [
    {
      title: "React",
      subtitle: "HackerRank Certificate",
      image: require("./assets/images/React-Basic.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/d92ab56518f1"
        }
      ]
    },
    {
      title: "Problem Solving",
      subtitle: "HackerRank Certificate",
      image: require("./assets/images/Problem-Solving.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/2cb9f32d6e2a"
        }
      ]
    },
    {
      title: "CSS",
      subtitle: "HackerRank Certificate",
      image: require("./assets/images/CSS.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/aedf30c31052"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
	bio: "Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ ",
	location: "Singapore",
  number: "+86 17521626266",
	hireable: "Yes",
	avatar: require("./assets/images/avatar.png"),
  email_address: "wei.yuxi@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
