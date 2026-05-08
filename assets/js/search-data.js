// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "TA experiences @ Imperial",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-gfw-technical-review-14-the-cat-and-mouse-game",
        
          title: "GFW Technical Review 14 – The Cat and Mouse Game",
        
        description: "The Arms Race between the GFW and Circumvention",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw14/";
          
        },
      },{id: "post-gfw-technical-review-13-hysteria",
        
          title: "GFW Technical Review 13 – Hysteria",
        
        description: "QUIC Censorship, Brutal and BBR Congestion Control, Hysteria",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw13/";
          
        },
      },{id: "post-gfw-technical-review-12-advanced-tls-evasion",
        
          title: "GFW Technical Review 12 – Advanced TLS Evasion",
        
        description: "The Modern Circumvention Stack with NaïveProxy, XTLS, and REALITY",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw12/";
          
        },
      },{id: "post-gfw-technical-review-11-statistical-fingerprinting",
        
          title: "GFW Technical Review 11 – Statistical Fingerprinting",
        
        description: "GFW Modernized",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw11/";
          
        },
      },{id: "post-gfw-technical-review-10-trojan",
        
          title: "GFW Technical Review 10 – Trojan",
        
        description: "The Imitation Game",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw10/";
          
        },
      },{id: "post-gfw-technical-review-09-v2ray",
        
          title: "GFW Technical Review 09 – V2Ray",
        
        description: "The VMess protocol and V2Ray",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw09/";
          
        },
      },{id: "post-gfw-technical-review-08-tor",
        
          title: "GFW Technical Review 08 – Tor",
        
        description: "The Onion Routing, Tor bridges, and pluggable transports",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw08/";
          
        },
      },{id: "post-gfw-technical-review-07-active-probing",
        
          title: "GFW Technical Review 07 – Active Probing",
        
        description: "The firewall talks back",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw07/";
          
        },
      },{id: "post-gfw-technical-review-06-https-censorship",
        
          title: "GFW Technical Review 06 – HTTPS Censorship",
        
        description: "HTTPS, SNI censorship, Domain Fronting",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw06/";
          
        },
      },{id: "post-gfw-technical-review-05-shadowsocks",
        
          title: "GFW Technical Review 05 – Shadowsocks",
        
        description: "Shadowsocks is the most influential censorship circumvention protocol up until today",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw05/";
          
        },
      },{id: "post-gfw-technical-review-04-the-west-chamber-project",
        
          title: "GFW Technical Review 04 – The West Chamber Project",
        
        description: "TCP Based Evasion, TCP Insertion Attack, and the West Chamber Project",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw04/";
          
        },
      },{id: "post-gfw-technical-review-03-deep-packet-inspection",
        
          title: "GFW Technical Review 03 – Deep Packet Inspection",
        
        description: "Deep Packet Inspection is GFW&#39;s most powerful tool",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw03/";
          
        },
      },{id: "post-gfw-technical-review-02-vpn",
        
          title: "GFW Technical Review 02 – VPN",
        
        description: "How VPNs circumvent the GFW",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw02/";
          
        },
      },{id: "post-gfw-technical-review-01-architecture",
        
          title: "GFW Technical Review 01 – Architecture",
        
        description: "The early history and architecture of the GFW",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gfw01/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-project-10",
          title: 'project 10',
          description: "A project with an introduction section",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kaiyanfan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kaiyan-fan-249644156", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
