/**
 * ===================================================================
 * College Club Social Media Analytics Dashboard
 * Pure Vanilla JavaScript (Zero external backend, API, or libraries)
 * ===================================================================
 */

(function () {
  'use strict';

  /* ===================================================================
     1. DEMO DATASET REPOSITORY
     =================================================================== */

  const COLLEGE_NAMES = {
    RSCOE: 'Rajarshi Shahu College of Engineering',
    COEP: 'COEP Technological University',
    PCCOE: 'Pimpri Chinchwad College of Engineering',
    VIT: 'Vshwakarma Institude of Technology',
    PICT: 'Pune Institude of Computer Technolgy'
  };

  /**
   * Benchmark data for the 5 specified clubs:
   * Coding Club: Followers: 2450, Posts: 48, Engagement: 6840, Engagement Rate: 8.4%
   * AI & ML Club: Followers: 3200, Posts: 56, Engagement: 8120, Engagement Rate: 9.1%
   * Robotics Club: Followers: 2100, Posts: 39, Engagement: 5210, Engagement Rate: 7.8%
   * IEEE Student Chapter: Followers: 4100, Posts: 67, Engagement: 9650, Engagement Rate: 10.2%
   * Entrepreneurship Cell: Followers: 2850, Posts: 44, Engagement: 7340, Engagement Rate: 8.7%
   */
  const CLUBS_DATA = {
    coding: {
      id: 'coding',
      name: 'Coding Club',
      short: 'CC',
      college: 'RSCOE',
      metrics: {
        all: {
          followers: 2450,
          posts: 48,
          engagement: 6840,
          engagementRate: '8.4%',
          reach: 4120,
          positiveSentiment: '72%',
          sentimentBreakdown: { positive: 72, neutral: 20, negative: 8 },
          weeklyTrend: [620, 780, 890, 1140, 950, 1260, 1200],
          growthTrend: [1650, 1800, 1980, 2150, 2300, 2450],
          likes: 4280,
          comments: 720,
          shares: 410,
          views: 42800
        },
        instagram: {
          followers: 1320,
          posts: 26,
          engagement: 3690,
          engagementRate: '9.8%',
          reach: 2540,
          positiveSentiment: '75%',
          sentimentBreakdown: { positive: 75, neutral: 18, negative: 7 },
          weeklyTrend: [350, 420, 510, 680, 590, 710, 680],
          growthTrend: [850, 960, 1050, 1150, 1240, 1320],
          likes: 2450,
          comments: 390,
          shares: 210,
          views: 24800
        },
        linkedin: {
          followers: 780,
          posts: 14,
          engagement: 2190,
          engagementRate: '7.4%',
          reach: 1180,
          positiveSentiment: '70%',
          sentimentBreakdown: { positive: 70, neutral: 22, negative: 8 },
          weeklyTrend: [180, 240, 260, 310, 250, 360, 340],
          growthTrend: [510, 570, 620, 680, 730, 780],
          likes: 1280,
          comments: 240,
          shares: 150,
          views: 12900
        },
        github: {
          followers: 620,
          posts: 12,
          engagement: 1820,
          engagementRate: '9.2%',
          reach: 1650,
          positiveSentiment: '84%',
          sentimentBreakdown: { positive: 84, neutral: 12, negative: 4 },
          weeklyTrend: [240, 280, 310, 420, 390, 450, 440],
          growthTrend: [380, 430, 480, 530, 580, 620],
          likes: 980,
          comments: 210,
          shares: 140,
          views: 9800
        },
        facebook: {
          followers: 350,
          posts: 8,
          engagement: 960,
          engagementRate: '5.8%',
          reach: 400,
          positiveSentiment: '64%',
          sentimentBreakdown: { positive: 64, neutral: 26, negative: 10 },
          weeklyTrend: [90, 120, 120, 150, 110, 190, 180],
          growthTrend: [290, 305, 318, 330, 342, 350],
          likes: 550,
          comments: 90,
          shares: 50,
          views: 5100
        }
      },
      platformShare: { instagram: 42, linkedin: 26, github: 22, facebook: 10 },
      bestPost: {
        title: 'Coding Workshop 2026: Hands-on Git & Fullstack',
        caption: 'Packed auditorium for our flagship annual coding workshop! 180+ student participants built live portfolio apps.',
        platform: 'Instagram',
        date: 'Oct 14, 2026',
        likes: 480,
        comments: 74,
        shares: 52,
        views: 5620
      },
      posts: [
        {
          id: 'p-cc-1',
          title: 'Coding Workshop 2026: Hands-on Git & Fullstack',
          caption: 'Packed auditorium for our flagship annual coding workshop! 180+ student participants built live portfolio apps.',
          platform: 'Instagram',
          date: '2026-10-14',
          likes: 480,
          comments: 74,
          shares: 52,
          views: 5620
        },
        {
          id: 'p-cc-2',
          title: 'Web3 & Cloud Dev Day: Industry Speaker Recap',
          caption: 'Special thanks to alumni guest speakers from Google and Microsoft for mentoring our third-year engineers.',
          platform: 'LinkedIn',
          date: '2026-10-18',
          likes: 310,
          comments: 48,
          shares: 34,
          views: 3840
        },
        {
          id: 'p-cc-3',
          title: 'Annual Bug Hunt 2026: Registration Opening Soon',
          caption: 'Sharpen your debugging instincts! Cash prizes worth INR 25,000 sponsored by departmental alumni.',
          platform: 'Instagram',
          date: '2026-10-22',
          likes: 395,
          comments: 62,
          shares: 45,
          views: 4520
        },
        {
          id: 'p-cc-4',
          title: 'LeetCode Sprint Week 4 Leaderboard Revealed',
          caption: 'Congratulations to our top 5 campus coders who solved all hard dynamic programming challenges!',
          platform: 'LinkedIn',
          date: '2026-10-25',
          likes: 240,
          comments: 29,
          shares: 18,
          views: 2910
        },
        {
          id: 'p-cc-5',
          title: 'Open Source Day: First Pull Request Workshop',
          caption: 'Guiding 60+ first-year students to submit their very first Hacktoberfest pull requests on GitHub.',
          platform: 'Facebook',
          date: '2026-10-10',
          likes: 185,
          comments: 22,
          shares: 16,
          views: 1800
        },
        {
          id: 'p-cc-gh',
          title: 'Campus Algorithmic Toolkit: LeetCode & DSA Repository',
          caption: 'Comprehensive repository containing curated solutions in C++, Java, and Python for campus placement drives with 500+ stars.',
          platform: 'GitHub',
          date: '2026-10-20',
          likes: 520,
          comments: 68,
          shares: 64,
          views: 6100
        },
        {
          id: 'p-cc-6',
          title: 'Competitive Programming Masterclass Announcement',
          caption: 'Graph Theory, Trees, and Fenwick trees session this Saturday in Computing Lab 3.',
          platform: 'Instagram',
          date: '2026-10-04',
          likes: 290,
          comments: 36,
          shares: 24,
          views: 3120
        }
      ],
      comments: [
        {
          author: 'Abhishek Kakade',
          avatar: 'TD',
          date: '2 hours ago',
          platform: 'Instagram',
          postRef: 'Coding Workshop 2026',
          sentiment: 'positive',
          text: 'The Git rebase explanation was crystal clear! Best session organized this semester.'
        },
        {
          author: 'Mithilesh Joshi',
          avatar: 'VJ',
          date: '4 hours ago',
          platform: 'GitHub',
          postRef: 'Campus Algorithmic Toolkit',
          sentiment: 'positive',
          text: 'Merged my PR for Trie and Disjoint Set algorithms. Excellent test suite in the repo!'
        },
        {
          author: 'Saurabh Bhos',
          avatar: 'PK',
          date: '5 hours ago',
          platform: 'LinkedIn',
          postRef: 'Web3 & Cloud Dev Day',
          sentiment: 'positive',
          text: 'Very insightful panel discussion on distributed systems. Appreciate the club leads!'
        },
        {
          author: 'Aditya Patil',
          avatar: 'AP',
          date: '1 day ago',
          platform: 'Instagram',
          postRef: 'Annual Bug Hunt 2026',
          sentiment: 'neutral',
          text: 'Are second year diploma students eligible for team registrations?'
        },
        {
          author: 'Vaibhav Paike',
          avatar: 'SM',
          date: '2 days ago',
          platform: 'Facebook',
          postRef: 'Open Source Day',
          sentiment: 'negative',
          text: 'Wi-Fi connection in lab 4 was fluctuating during repo clone steps.'
        },
        {
          author: 'Shubham Wavare',
          avatar: 'NJ',
          date: '3 days ago',
          platform: 'Instagram',
          postRef: 'Coding Workshop 2026',
          sentiment: 'positive',
          text: 'Loved building the fullstack prototype with mentors right beside us!'
        }
      ]
    },

    aiml: {
      id: 'aiml',
      name: 'AI & ML Club',
      short: 'AI',
      college: 'RSCOE',
      metrics: {
        all: {
          followers: 3200,
          posts: 56,
          engagement: 8120,
          engagementRate: '9.1%',
          reach: 5340,
          positiveSentiment: '78%',
          sentimentBreakdown: { positive: 78, neutral: 16, negative: 6 },
          weeklyTrend: [840, 920, 1150, 1380, 1210, 1450, 1420],
          growthTrend: [2200, 2410, 2650, 2850, 3050, 3200],
          likes: 5120,
          comments: 860,
          shares: 510,
          views: 52400
        },
        instagram: {
          followers: 1840,
          posts: 31,
          engagement: 4780,
          engagementRate: '10.2%',
          reach: 3410,
          positiveSentiment: '80%',
          sentimentBreakdown: { positive: 80, neutral: 15, negative: 5 },
          weeklyTrend: [510, 560, 690, 810, 720, 860, 840],
          growthTrend: [1200, 1350, 1500, 1630, 1750, 1840],
          likes: 3100,
          comments: 490,
          shares: 280,
          views: 31200
        },
        linkedin: {
          followers: 980,
          posts: 17,
          engagement: 2450,
          engagementRate: '8.1%',
          reach: 1480,
          positiveSentiment: '76%',
          sentimentBreakdown: { positive: 76, neutral: 18, negative: 6 },
          weeklyTrend: [230, 270, 340, 420, 370, 430, 410],
          growthTrend: [680, 740, 810, 870, 930, 980],
          likes: 1480,
          comments: 260,
          shares: 170,
          views: 15400
        },
        github: {
          followers: 750,
          posts: 14,
          engagement: 2150,
          engagementRate: '9.8%',
          reach: 1980,
          positiveSentiment: '86%',
          sentimentBreakdown: { positive: 86, neutral: 10, negative: 4 },
          weeklyTrend: [280, 320, 390, 480, 430, 510, 490],
          growthTrend: [460, 520, 590, 650, 710, 750],
          likes: 1180,
          comments: 240,
          shares: 160,
          views: 11500
        },
        facebook: {
          followers: 380,
          posts: 8,
          engagement: 890,
          engagementRate: '5.2%',
          reach: 450,
          positiveSentiment: '68%',
          sentimentBreakdown: { positive: 68, neutral: 22, negative: 10 },
          weeklyTrend: [100, 90, 120, 150, 120, 160, 170],
          growthTrend: [320, 335, 348, 360, 372, 380],
          likes: 540,
          comments: 110,
          shares: 60,
          views: 5800
        }
      },
      platformShare: { instagram: 44, linkedin: 26, github: 20, facebook: 10 },
      bestPost: {
        title: 'AI Innovation Hackathon: 36-Hour Generative AI Challenge',
        caption: 'Over 220 student developers competed building multi-modal LLM agents and healthcare predictive pipelines.',
        platform: 'Instagram',
        date: 'Oct 12, 2026',
        likes: 620,
        comments: 98,
        shares: 76,
        views: 7420
      },
      posts: [
        {
          id: 'p-ai-1',
          title: 'AI Innovation Hackathon: 36-Hour Generative AI Challenge',
          caption: 'Over 220 student developers competed building multi-modal LLM agents and healthcare predictive pipelines.',
          platform: 'Instagram',
          date: '2026-10-12',
          likes: 620,
          comments: 98,
          shares: 76,
          views: 7420
        },
        {
          id: 'p-ai-2',
          title: 'Computer Vision Hands-on Bootcamp: YOLO & PyTorch',
          caption: 'Autonomous drone tracking and license plate detection workshop for computer vision enthusiasts.',
          platform: 'LinkedIn',
          date: '2026-10-19',
          likes: 380,
          comments: 54,
          shares: 41,
          views: 4610
        },
        {
          id: 'p-ai-3',
          title: 'Research Paper Reading Group #12: Transformer Optimization',
          caption: 'Deep dive into FlashAttention and Quantization techniques with faculty researcher Dr. S. Mehta.',
          platform: 'LinkedIn',
          date: '2026-10-23',
          likes: 290,
          comments: 38,
          shares: 25,
          views: 3200
        },
        {
          id: 'p-ai-4',
          title: 'Kaggle Grandmaster Fireside Chat Session Highlights',
          caption: 'Top advice: Feature engineering beats model tuning 80% of the time. Full recording available on club portal.',
          platform: 'Instagram',
          date: '2026-10-15',
          likes: 490,
          comments: 72,
          shares: 55,
          views: 5890
        },
        {
          id: 'p-ai-gh',
          title: 'Open Source Vision-LLM Starter Template & Weights',
          caption: 'Pre-configured PyTorch boilerplate code with multi-modal attention layers, automated data loaders, and Weights & Biases telemetry.',
          platform: 'GitHub',
          date: '2026-10-18',
          likes: 580,
          comments: 82,
          shares: 70,
          views: 6950
        },
        {
          id: 'p-ai-5',
          title: 'Introduction to Prompt Engineering for Freshers',
          caption: 'Teaching structured zero-shot, few-shot, and chain-of-thought prompt design to 120 first-year students.',
          platform: 'Facebook',
          date: '2026-10-08',
          likes: 210,
          comments: 31,
          shares: 19,
          views: 2240
        }
      ],
      comments: [
        {
          author: 'Shruti Sawant',
          avatar: 'SS',
          date: '3 hours ago',
          platform: 'Instagram',
          postRef: 'AI Innovation Hackathon',
          sentiment: 'positive',
          text: 'The GPU cloud credits provided to every team were a lifesaver for fine-tuning our model!'
        },
        {
          author: 'Kavita Menon',
          avatar: 'KM',
          date: '6 hours ago',
          platform: 'GitHub',
          postRef: 'Vision-LLM Starter Template',
          sentiment: 'positive',
          text: 'The Dockerfile works out of the box with CUDA 12.4. Starred the repo!'
        },
        {
          author: 'Vikram Shinde',
          avatar: 'VS',
          date: '7 hours ago',
          platform: 'LinkedIn',
          postRef: 'Computer Vision Hands-on Bootcamp',
          sentiment: 'positive',
          text: 'YOLO implementation from scratch was brilliantly taught. Thank you coordinators!'
        },
        {
          author: 'Harshal Gawande',
          avatar: 'AM',
          date: '1 day ago',
          platform: 'Instagram',
          postRef: 'AI Innovation Hackathon',
          sentiment: 'neutral',
          text: 'Will certificates be mailed or uploaded on the college portal?'
        },
        {
          author: 'Gaurav Jadhav',
          avatar: 'GJ',
          date: '2 days ago',
          platform: 'LinkedIn',
          postRef: 'Research Paper Reading Group',
          sentiment: 'positive',
          text: 'Extremely high quality technical discussion. Glad to see RSCOE hosting such sessions.'
        },
        {
          author: 'Rohan Gaikwad',
          avatar: 'RG',
          date: '3 days ago',
          platform: 'Facebook',
          postRef: 'Introduction to Prompt Engineering',
          sentiment: 'negative',
          text: 'Audio mic had some squeaking noise in the second half of the seminar.'
        }
      ]
    },

    robotics: {
      id: 'robotics',
      name: 'Robotics Club',
      short: 'RC',
      college: 'RSCOE',
      metrics: {
        all: {
          followers: 2100,
          posts: 39,
          engagement: 5210,
          engagementRate: '7.8%',
          reach: 3450,
          positiveSentiment: '66%',
          sentimentBreakdown: { positive: 66, neutral: 25, negative: 9 },
          weeklyTrend: [510, 580, 690, 840, 770, 920, 900],
          growthTrend: [1450, 1580, 1720, 1850, 1980, 2100],
          likes: 3250,
          comments: 540,
          shares: 280,
          views: 31800
        },
        instagram: {
          followers: 1150,
          posts: 22,
          engagement: 2980,
          engagementRate: '8.6%',
          reach: 2120,
          positiveSentiment: '69%',
          sentimentBreakdown: { positive: 69, neutral: 23, negative: 8 },
          weeklyTrend: [300, 340, 410, 490, 450, 540, 520],
          growthTrend: [780, 850, 940, 1010, 1090, 1150],
          likes: 1920,
          comments: 310,
          shares: 160,
          views: 19100
        },
        linkedin: {
          followers: 650,
          posts: 11,
          engagement: 1530,
          engagementRate: '6.9%',
          reach: 980,
          positiveSentiment: '65%',
          sentimentBreakdown: { positive: 65, neutral: 26, negative: 9 },
          weeklyTrend: [140, 170, 200, 240, 220, 260, 260],
          growthTrend: [450, 490, 530, 570, 610, 650],
          likes: 920,
          comments: 160,
          shares: 80,
          views: 8900
        },
        github: {
          followers: 510,
          posts: 10,
          engagement: 1420,
          engagementRate: '8.2%',
          reach: 1250,
          positiveSentiment: '80%',
          sentimentBreakdown: { positive: 80, neutral: 15, negative: 5 },
          weeklyTrend: [190, 220, 260, 310, 290, 350, 340],
          growthTrend: [310, 360, 410, 450, 480, 510],
          likes: 780,
          comments: 160,
          shares: 110,
          views: 7600
        },
        facebook: {
          followers: 300,
          posts: 6,
          engagement: 700,
          engagementRate: '5.1%',
          reach: 350,
          positiveSentiment: '60%',
          sentimentBreakdown: { positive: 60, neutral: 28, negative: 12 },
          weeklyTrend: [70, 70, 80, 110, 100, 120, 120],
          growthTrend: [220, 240, 255, 270, 285, 300],
          likes: 410,
          comments: 70,
          shares: 40,
          views: 3800
        }
      },
      platformShare: { instagram: 46, linkedin: 24, github: 18, facebook: 12 },
      bestPost: {
        title: 'Robotics Bootcamp 2026: Microcontrollers & Sensor Fusion',
        caption: 'Hands-on hardware lab constructing obstacle-avoiding rovers and telemetry dashboards with Arduino and ESP32.',
        platform: 'Instagram',
        date: 'Oct 09, 2026',
        likes: 410,
        comments: 65,
        shares: 42,
        views: 4890
      },
      posts: [
        {
          id: 'p-rc-1',
          title: 'Robotics Bootcamp 2026: Microcontrollers & Sensor Fusion',
          caption: 'Hands-on hardware lab constructing obstacle-avoiding rovers and telemetry dashboards with Arduino and ESP32.',
          platform: 'Instagram',
          date: '2026-10-09',
          likes: 410,
          comments: 65,
          shares: 42,
          views: 4890
        },
        {
          id: 'p-rc-2',
          title: 'Autonomous Drone Field Test Day: GPS Waypoint Mission',
          caption: 'Outdoor flight trial with our student-fabricated quadcopter running PX4 flight stack over college ground.',
          platform: 'LinkedIn',
          date: '2026-10-16',
          likes: 275,
          comments: 42,
          shares: 28,
          views: 3120
        },
        {
          id: 'p-rc-3',
          title: 'National Robocon 2026 Chassis Fabrication Complete',
          caption: 'Mechanical team pulling all-nighters CNC milling the planetary gearbox and omni-wheel drive bases.',
          platform: 'Instagram',
          date: '2026-10-21',
          likes: 340,
          comments: 51,
          shares: 33,
          views: 3950
        },
        {
          id: 'p-rc-gh',
          title: 'ROS2 Autonomous Rover Navigation & Telemetry Package',
          caption: 'Custom ROS2 Humble nodes for 2D LiDAR SLAM mapping, sensor fusion with BNO055 IMU, and differential drive control.',
          platform: 'GitHub',
          date: '2026-10-14',
          likes: 390,
          comments: 52,
          shares: 44,
          views: 4500
        },
        {
          id: 'p-rc-4',
          title: 'SolidWorks CAD & 3D Printing Masterclass Recap',
          caption: '65 students successfully modeled and printed their first parametric gear train prototypes.',
          platform: 'Facebook',
          date: '2026-10-03',
          likes: 165,
          comments: 24,
          shares: 14,
          views: 1820
        }
      ],
      comments: [
        {
          author: 'Sanket Shirole',
          avatar: 'SS',
          date: '4 hours ago',
          platform: 'Instagram',
          postRef: 'Robotics Bootcamp 2026',
          sentiment: 'positive',
          text: 'Building the motor driver shield with my own hands was super exciting!'
        },
        {
          author: 'Manish Wagh',
          avatar: 'MW',
          date: '8 hours ago',
          platform: 'LinkedIn',
          postRef: 'Autonomous Drone Field Test',
          sentiment: 'positive',
          text: 'Impressive altitude hold stability on the drone quadcopter team.'
        },
        {
          author: 'Sameer Shaikh',
          avatar: 'SS',
          date: '1 day ago',
          platform: 'GitHub',
          postRef: 'ROS2 Autonomous Rover Navigation',
          sentiment: 'neutral',
          text: 'Updated dependencies for rclcpp in package.xml to build without warnings.'
        },
        {
          author: 'Kunal Sonawane',
          avatar: 'KS',
          date: '1 day ago',
          platform: 'Instagram',
          postRef: 'Robotics Bootcamp 2026',
          sentiment: 'negative',
          text: 'We ran out of jumper cables in bench 3. Had to borrow from adjacent bench.'
        },
        {
          author: 'Deepak Bhalerao',
          avatar: 'DB',
          date: '2 days ago',
          platform: 'Facebook',
          postRef: 'SolidWorks CAD Masterclass',
          sentiment: 'neutral',
          text: 'Are student licenses for SolidWorks available through college mail ID?'
        }
      ]
    },

    ieee: {
      id: 'ieee',
      name: 'IEEE Student Chapter',
      short: 'IEEE',
      college: 'RSCOE',
      metrics: {
        all: {
          followers: 4100,
          posts: 67,
          engagement: 9650,
          engagementRate: '10.2%',
          reach: 6890,
          positiveSentiment: '76%',
          sentimentBreakdown: { positive: 76, neutral: 18, negative: 6 },
          weeklyTrend: [1020, 1140, 1380, 1620, 1450, 1790, 1750],
          growthTrend: [2800, 3050, 3350, 3620, 3880, 4100],
          likes: 6150,
          comments: 980,
          shares: 610,
          views: 68500
        },
        instagram: {
          followers: 2180,
          posts: 34,
          engagement: 5380,
          engagementRate: '11.4%',
          reach: 4100,
          positiveSentiment: '78%',
          sentimentBreakdown: { positive: 78, neutral: 16, negative: 6 },
          weeklyTrend: [590, 660, 780, 920, 810, 990, 980],
          growthTrend: [1500, 1650, 1800, 1940, 2070, 2180],
          likes: 3500,
          comments: 540,
          shares: 340,
          views: 39500
        },
        linkedin: {
          followers: 1420,
          posts: 24,
          engagement: 3340,
          engagementRate: '9.3%',
          reach: 2210,
          positiveSentiment: '75%',
          sentimentBreakdown: { positive: 75, neutral: 19, negative: 6 },
          weeklyTrend: [330, 370, 460, 540, 500, 610, 590],
          growthTrend: [950, 1050, 1160, 1260, 1350, 1420],
          likes: 2050,
          comments: 340,
          shares: 210,
          views: 22800
        },
        github: {
          followers: 820,
          posts: 16,
          engagement: 2380,
          engagementRate: '10.5%',
          reach: 2150,
          positiveSentiment: '88%',
          sentimentBreakdown: { positive: 88, neutral: 9, negative: 3 },
          weeklyTrend: [310, 350, 420, 520, 480, 580, 560],
          growthTrend: [510, 580, 650, 720, 770, 820],
          likes: 1320,
          comments: 270,
          shares: 190,
          views: 13200
        },
        facebook: {
          followers: 500,
          posts: 9,
          engagement: 930,
          engagementRate: '5.9%',
          reach: 580,
          positiveSentiment: '68%',
          sentimentBreakdown: { positive: 68, neutral: 24, negative: 8 },
          weeklyTrend: [100, 110, 140, 160, 140, 190, 180],
          growthTrend: [350, 380, 410, 440, 470, 500],
          likes: 600,
          comments: 100,
          shares: 60,
          views: 6200
        }
      },
      platformShare: { instagram: 44, linkedin: 28, github: 18, facebook: 10 },
      bestPost: {
        title: 'IEEE Technical Talk: Quantum Computing Frontiers & Qubits',
        caption: 'Distinguished lecture by IEEE Senior Member Dr. Arvind Ramanujam with interactive quantum simulator demo.',
        platform: 'LinkedIn',
        date: 'Oct 11, 2026',
        likes: 680,
        comments: 112,
        shares: 88,
        views: 8210
      },
      posts: [
        {
          id: 'p-ieee-1',
          title: 'IEEE Technical Talk: Quantum Computing Frontiers & Qubits',
          caption: 'Distinguished lecture by IEEE Senior Member Dr. Arvind Ramanujam with interactive quantum simulator demo.',
          platform: 'LinkedIn',
          date: '2026-10-11',
          likes: 680,
          comments: 112,
          shares: 88,
          views: 8210
        },
        {
          id: 'p-ieee-2',
          title: 'Women in Engineering (WIE) Symposium 2026 Highlights',
          caption: 'Celebrating our trailblazing women engineers with keynote sessions on leadership, R&D, and patents.',
          platform: 'Instagram',
          date: '2026-10-17',
          likes: 540,
          comments: 79,
          shares: 64,
          views: 6450
        },
        {
          id: 'p-ieee-3',
          title: 'IEEEXtreme 24-Hour Global Programming Bootcamp',
          caption: 'Prepping 18 RSCOE teams for the international competitive programming marathon with mock tests.',
          platform: 'Instagram',
          date: '2026-10-24',
          likes: 470,
          comments: 66,
          shares: 49,
          views: 5210
        },
        {
          id: 'p-ieee-4',
          title: 'Distinguished Lecture on Smart Grids and EV Integration',
          caption: 'Power & Energy Society joint technical session attended by over 140 electrical and mechanical scholars.',
          platform: 'LinkedIn',
          date: '2026-10-06',
          likes: 360,
          comments: 48,
          shares: 32,
          views: 4120
        },
        {
          id: 'p-ieee-gh',
          title: 'IEEE Quantum Computing Sandbox: Qiskit Algorithms Suite',
          caption: 'Educational quantum computing library with Shor’s, Grover’s, and Quantum Teleportation interactive Jupyter notebooks.',
          platform: 'GitHub',
          date: '2026-10-16',
          likes: 610,
          comments: 88,
          shares: 74,
          views: 7120
        },
        {
          id: 'p-ieee-5',
          title: 'IEEE Membership Drive & Benefits Orientation',
          caption: 'Join the world’s largest technical professional organization! Access IEEE Xplore digital library.',
          platform: 'Facebook',
          date: '2026-10-02',
          likes: 220,
          comments: 35,
          shares: 20,
          views: 2450
        }
      ],
      comments: [
        {
          author: 'Ananya Deshpande',
          avatar: 'AD',
          date: '1 hour ago',
          platform: 'LinkedIn',
          postRef: 'IEEE Technical Talk',
          sentiment: 'positive',
          text: 'The quantum entanglement simulation cleared so many theoretical doubts. Incredible talk!'
        },
        {
          author: 'Chinmay Kulkarni',
          avatar: 'CK',
          date: '5 hours ago',
          platform: 'GitHub',
          postRef: 'IEEE Quantum Computing Sandbox',
          sentiment: 'positive',
          text: 'Bloch sphere visualization helper functions in utils.py are so clean!'
        },
        {
          author: 'Tejas Chaudhari',
          avatar: 'TC',
          date: '6 hours ago',
          platform: 'Instagram',
          postRef: 'Women in Engineering Symposium',
          sentiment: 'positive',
          text: 'Proud of our college chapter for hosting such empowering forums year after year.'
        },
        {
          author: 'Omkar Salunkhe',
          avatar: 'OS',
          date: '1 day ago',
          platform: 'Instagram',
          postRef: 'IEEEXtreme 24-Hour Bootcamp',
          sentiment: 'neutral',
          text: 'Where can we find the editorial solutions to the mock contest?'
        },
        {
          author: 'Swapnil Jagtap',
          avatar: 'SJ',
          date: '2 days ago',
          platform: 'Facebook',
          postRef: 'IEEE Membership Drive',
          sentiment: 'negative',
          text: 'Payment gateway showed timeout during my student membership renewal.'
        }
      ]
    },

    ecell: {
      id: 'ecell',
      name: 'Entrepreneurship Cell',
      short: 'EC',
      college: 'RSCOE',
      metrics: {
        all: {
          followers: 2850,
          posts: 44,
          engagement: 7340,
          engagementRate: '8.7%',
          reach: 4850,
          positiveSentiment: '74%',
          sentimentBreakdown: { positive: 74, neutral: 19, negative: 7 },
          weeklyTrend: [750, 840, 990, 1220, 1080, 1360, 1320],
          growthTrend: [1950, 2150, 2350, 2520, 2700, 2850],
          likes: 4620,
          comments: 760,
          shares: 440,
          views: 47200
        },
        instagram: {
          followers: 1540,
          posts: 24,
          engagement: 4120,
          engagementRate: '9.9%',
          reach: 2980,
          positiveSentiment: '76%',
          sentimentBreakdown: { positive: 76, neutral: 17, negative: 7 },
          weeklyTrend: [440, 490, 580, 710, 620, 790, 770],
          growthTrend: [1050, 1180, 1290, 1380, 1470, 1540],
          likes: 2680,
          comments: 420,
          shares: 240,
          views: 28400
        },
        linkedin: {
          followers: 980,
          posts: 14,
          engagement: 2410,
          engagementRate: '8.0%',
          reach: 1470,
          positiveSentiment: '73%',
          sentimentBreakdown: { positive: 73, neutral: 20, negative: 7 },
          weeklyTrend: [230, 260, 310, 390, 350, 420, 410],
          growthTrend: [680, 740, 810, 870, 930, 980],
          likes: 1450,
          comments: 250,
          shares: 160,
          views: 14600
        },
        github: {
          followers: 420,
          posts: 9,
          engagement: 1180,
          engagementRate: '7.9%',
          reach: 1100,
          positiveSentiment: '82%',
          sentimentBreakdown: { positive: 82, neutral: 14, negative: 4 },
          weeklyTrend: [160, 180, 210, 260, 230, 290, 280],
          growthTrend: [260, 300, 340, 370, 400, 420],
          likes: 660,
          comments: 130,
          shares: 90,
          views: 6400
        },
        facebook: {
          followers: 330,
          posts: 6,
          engagement: 810,
          engagementRate: '5.4%',
          reach: 400,
          positiveSentiment: '66%',
          sentimentBreakdown: { positive: 66, neutral: 25, negative: 9 },
          weeklyTrend: [80, 90, 100, 120, 110, 150, 140],
          growthTrend: [220, 250, 270, 290, 310, 330],
          likes: 490,
          comments: 90,
          shares: 40,
          views: 4200
        }
      },
      platformShare: { instagram: 48, linkedin: 28, github: 14, facebook: 10 },
      bestPost: {
        title: 'Entrepreneurship Workshop: Pitch Deck Masterclass & VC Funding',
        caption: 'Angel investors from Pune Angels dissected 8 student startup pitch decks and pledged incubation support.',
        platform: 'Instagram',
        date: 'Oct 15, 2026',
        likes: 540,
        comments: 84,
        shares: 61,
        views: 6380
      },
      posts: [
        {
          id: 'p-ec-1',
          title: 'Entrepreneurship Workshop: Pitch Deck Masterclass & VC Funding',
          caption: 'Angel investors from Pune Angels dissected 8 student startup pitch decks and pledged incubation support.',
          platform: 'Instagram',
          date: '2026-10-15',
          likes: 540,
          comments: 84,
          shares: 61,
          views: 6380
        },
        {
          id: 'p-ec-2',
          title: 'E-Summit 2026 Startup Expo: Calling Student Founders',
          caption: 'Stall reservations open for college entrepreneurs. Exhibit your product to 2,000+ visitors and investors.',
          platform: 'LinkedIn',
          date: '2026-10-20',
          likes: 390,
          comments: 57,
          shares: 42,
          views: 4720
        },
        {
          id: 'p-ec-3',
          title: 'Campus Incubator Cohort #5 Openings Announced',
          caption: 'Get INR 50,000 prototype grants, zero-cost desk space, and direct mentorship from industry founders.',
          platform: 'Instagram',
          date: '2026-10-22',
          likes: 430,
          comments: 68,
          shares: 47,
          views: 5120
        },
        {
          id: 'p-ec-4',
          title: 'Fireside Chat: From Campus Project to INR 1 Cr ARR',
          caption: 'RSCOE 2021 alumni sharing their hard-earned lessons building a D2C robotics automation brand.',
          platform: 'LinkedIn',
          date: '2026-10-07',
          likes: 310,
          comments: 41,
          shares: 28,
          views: 3820
        },
        {
          id: 'p-ec-gh',
          title: 'Student Founder Open Source Toolkit & Financial Projections',
          caption: 'Automated cap table generator, term sheet evaluator, and financial runway modeling spreadsheet templates in Python and CSV.',
          platform: 'GitHub',
          date: '2026-10-12',
          likes: 380,
          comments: 48,
          shares: 42,
          views: 4210
        },
        {
          id: 'p-ec-5',
          title: 'Ideathon 2026: Problem Statements Released',
          caption: 'Agri-Tech, FinTech, and Green Clean Energy domains announced for the preliminary elevator pitch round.',
          platform: 'Facebook',
          date: '2026-10-01',
          likes: 195,
          comments: 26,
          shares: 17,
          views: 2150
        }
      ],
      comments: [
        {
          author: 'Sarthak Bhosale',
          avatar: 'SB',
          date: '2 hours ago',
          platform: 'Instagram',
          postRef: 'Pitch Deck Masterclass',
          sentiment: 'positive',
          text: 'The financial unit economics breakdown gave me the confidence to pitch to real investors.'
        },
        {
          author: 'Harshada Patil',
          avatar: 'HP',
          date: '1 day ago',
          platform: 'GitHub',
          postRef: 'Student Founder Open Source Toolkit',
          sentiment: 'positive',
          text: 'Forked the cap table template for our startup pitch next week. Very handy!'
        },
        {
          author: 'Snehal Gholap',
          avatar: 'SG',
          date: '5 hours ago',
          platform: 'LinkedIn',
          postRef: 'E-Summit 2026 Startup Expo',
          sentiment: 'positive',
          text: 'Registered our EdTech startup stall today! Can’t wait for demo day.'
        },
        {
          author: 'Mayur Thorat',
          avatar: 'MT',
          date: '1 day ago',
          platform: 'Instagram',
          postRef: 'Campus Incubator Cohort',
          sentiment: 'neutral',
          text: 'Is incorporation certificate required at the time of preliminary screening?'
        },
        {
          author: 'Akash Shinde',
          avatar: 'AS',
          date: '2 days ago',
          platform: 'Facebook',
          postRef: 'Ideathon 2026',
          sentiment: 'negative',
          text: 'Google form link for team member additions was rejecting 4-member groups.'
        }
      ]
    }
  };

  /* ===================================================================
     2. APP STATE MANAGEMENT
     =================================================================== */

  const state = {
    college: 'RSCOE',
    club: 'coding',
    platform: 'all',
    activeSection: 'dashboard',
    theme: 'light',
    postSearchQuery: '',
    postPlatformFilter: 'all',
    postSortBy: 'score-desc',
    sentimentCommentFilter: 'all'
  };

  /* ===================================================================
     3. FORMULA ENGINE
     Formula: Engagement Score = Likes + (2 * Comments) + (3 * Shares) + (Views / 100)
     =================================================================== */

  function calculateEngagementScore(likes, comments, shares, views) {
    const l = Number(likes) || 0;
    const c = Number(comments) || 0;
    const s = Number(shares) || 0;
    const v = Number(views) || 0;
    const rawScore = l + (2 * c) + (3 * s) + (v / 100);
    return Math.round(rawScore * 10) / 10;
  }

  function formatNumber(num) {
    return Number(num).toLocaleString('en-US');
  }

  /* ===================================================================
     4. LOCAL STORAGE PREFERENCES
     =================================================================== */

  function loadSavedPreferences() {
    try {
      const savedCollege = localStorage.getItem('cc_analytics_college');
      const savedClub = localStorage.getItem('cc_analytics_club');
      const savedPlatform = localStorage.getItem('cc_analytics_platform');
      const savedTheme = localStorage.getItem('cc_analytics_theme');
      const savedGithub = localStorage.getItem('cc_analytics_github');

      if (savedCollege && COLLEGE_NAMES[savedCollege]) state.college = savedCollege;
      if (savedClub && CLUBS_DATA[savedClub]) state.club = savedClub;
      if (savedPlatform) state.platform = savedPlatform;
      if (savedTheme === 'dark' || savedTheme === 'light') state.theme = savedTheme;
      if (savedGithub) {
        state.githubUrl = savedGithub;
        const setGh = document.getElementById('settings-github');
        if (setGh) setGh.value = savedGithub;
      }
    } catch (e) {
      console.warn('LocalStorage access unavailable:', e);
    }
  }

  function savePreferences(college, club, platform, theme, githubUrl) {
    try {
      localStorage.setItem('cc_analytics_college', college);
      localStorage.setItem('cc_analytics_club', club);
      localStorage.setItem('cc_analytics_platform', platform);
      localStorage.setItem('cc_analytics_theme', theme);
      if (githubUrl) localStorage.setItem('cc_analytics_github', githubUrl);
      showToast('Settings saved to localStorage successfully!', 'success');
    } catch (e) {
      console.warn('Unable to write to localStorage:', e);
      showToast('Settings applied for this session.', 'info');
    }
  }

  /* ===================================================================
     5. TOAST NOTIFICATIONS
     =================================================================== */

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const toastClass = type === 'success' ? 'toast-success' : (type === 'error' ? 'toast-error' : '');
    const iconColor = type === 'success' ? 'var(--positive)' : (type === 'error' ? 'var(--negative)' : 'var(--primary)');
    toast.className = `toast ${toastClass}`.trim();
    toast.innerHTML = `
      <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" style="color: ${iconColor}">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /* ===================================================================
     6. THEME MANAGEMENT (LIGHT / DARK)
     =================================================================== */

  function applyTheme(theme) {
    state.theme = theme;
    const body = document.body;
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    if (theme === 'dark') {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }

    // Synchronize radio buttons in settings form
    const radio = document.querySelector(`input[name="settings-theme"][value="${theme}"]`);
    if (radio) radio.checked = true;

    // Redraw charts with adapted colors
    renderAllCharts();
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try {
      localStorage.setItem('cc_analytics_theme', nextTheme);
    } catch (e) {}
  }

  /* ===================================================================
     7. NAVIGATION MANAGEMENT
     =================================================================== */

  function switchSection(sectionId) {
    state.activeSection = sectionId;

    // Update nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((btn) => {
      if (btn.getAttribute('data-section') === sectionId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((sec) => {
      if (sec.id === `section-${sectionId}`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    // Close mobile sidebar if open
    closeMobileSidebar();

    // Redraw charts if dashboard or engagement is visible
    if (sectionId === 'dashboard') {
      setTimeout(renderAllCharts, 50);
    } else if (sectionId === 'sentiment') {
      setTimeout(renderSentimentPageDonut, 50);
    } else if (sectionId === 'reports') {
      updateReportDocument();
    }
  }

  function openMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.add('mobile-open');
    if (overlay) overlay.classList.add('active');
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('active');
  }

  /* ===================================================================
     8. CANVAS CHART RENDERING ENGINE (Pure Vanilla JS)
     =================================================================== */

  function getChartPalette() {
    const isDark = state.theme === 'dark';
    return {
      textColor: isDark ? '#94a3b8' : '#64748b',
      textMain: isDark ? '#f8fafc' : '#0f172a',
      gridColor: isDark ? 'rgba(51, 65, 85, 0.45)' : 'rgba(226, 232, 240, 0.85)',
      primary: '#4f46e5',
      primaryFill: isDark ? 'rgba(79, 70, 229, 0.25)' : 'rgba(79, 70, 229, 0.14)',
      secondary: '#06b6d4',
      secondaryFill: isDark ? 'rgba(6, 182, 212, 0.25)' : 'rgba(6, 182, 212, 0.12)',
      positive: '#10b981',
      neutral: '#f59e0b',
      negative: '#ef4444',
      colorIg: '#e1306c',
      colorLi: '#0a66c2',
      colorGh: isDark ? '#f8fafc' : '#24292f',
      colorFb: '#1877f2'
    };
  }

  function setupCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const parent = canvas.parentElement;
    const width = parent.clientWidth || 500;
    const height = parent.clientHeight || 240;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.resetTransform?.();
    ctx.scale(dpr, dpr);
    return { canvas, ctx, width, height };
  }

  /**
   * Chart 1: Weekly Engagement Trend (Smooth Curved Area Chart)
   */
  function renderWeeklyEngagementChart() {
    const setup = setupCanvas('weekly-chart');
    if (!setup) return;
    const { ctx, width, height } = setup;
    const colors = getChartPalette();

    const club = CLUBS_DATA[state.club];
    const metrics = club.metrics[state.platform] || club.metrics.all;
    const data = metrics.weeklyTrend;
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const padding = { top: 24, right: 24, bottom: 32, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    const maxVal = Math.max(...data) * 1.15;
    const minVal = 0;

    // Draw horizontal grid lines
    const gridLines = 4;
    ctx.strokeStyle = colors.gridColor;
    ctx.lineWidth = 1;
    ctx.fillStyle = colors.textColor;
    ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'right';

    for (let i = 0; i <= gridLines; i++) {
      const val = Math.round((maxVal / gridLines) * i);
      const y = padding.top + chartH - (i / gridLines) * chartH;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();

      ctx.fillText(val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val, padding.left - 8, y + 4);
    }

    // Compute coordinate points
    const points = data.map((val, idx) => {
      const x = padding.left + (idx / (data.length - 1)) * chartW;
      const y = padding.top + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;
      return { x, y, val };
    });

    // Area Fill
    ctx.beginPath();
    ctx.moveTo(points[0].x, padding.top + chartH);
    ctx.lineTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cpX, p0.y, cpX, p1.y, p1.x, p1.y);
    }

    ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
    gradient.addColorStop(0, colors.primaryFill);
    gradient.addColorStop(1, 'rgba(79, 70, 229, 0.01)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Curved Stroke
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cpX, p0.y, cpX, p1.y, p1.x, p1.y);
    }
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw Data Dots & X-Labels
    ctx.textAlign = 'center';
    points.forEach((pt, idx) => {
      // Outer Dot
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // X Label
      ctx.fillStyle = colors.textColor;
      ctx.fillText(labels[idx], pt.x, height - 10);
    });
  }

  /**
   * Chart 2: Followers Growth (Last 6 Months Area Line)
   */
  function renderFollowersGrowthChart() {
    const setup = setupCanvas('growth-chart');
    if (!setup) return;
    const { ctx, width, height } = setup;
    const colors = getChartPalette();

    const club = CLUBS_DATA[state.club];
    const metrics = club.metrics[state.platform] || club.metrics.all;
    const data = metrics.growthTrend;
    const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

    const padding = { top: 24, right: 24, bottom: 32, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    const minVal = Math.min(...data) * 0.85;
    const maxVal = Math.max(...data) * 1.1;

    // Gridlines
    const gridLines = 4;
    ctx.strokeStyle = colors.gridColor;
    ctx.lineWidth = 1;
    ctx.fillStyle = colors.textColor;
    ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'right';

    for (let i = 0; i <= gridLines; i++) {
      const val = Math.round(minVal + ((maxVal - minVal) / gridLines) * i);
      const y = padding.top + chartH - (i / gridLines) * chartH;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();
      ctx.fillText(val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val, padding.left - 8, y + 4);
    }

    const points = data.map((val, idx) => {
      const x = padding.left + (idx / (data.length - 1)) * chartW;
      const y = padding.top + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;
      return { x, y, val };
    });

    // Area Fill
    ctx.beginPath();
    ctx.moveTo(points[0].x, padding.top + chartH);
    ctx.lineTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cpX, p0.y, cpX, p1.y, p1.x, p1.y);
    }
    ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
    gradient.addColorStop(0, colors.secondaryFill);
    gradient.addColorStop(1, 'rgba(6, 182, 212, 0.01)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line Stroke
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cpX, p0.y, cpX, p1.y, p1.x, p1.y);
    }
    ctx.strokeStyle = colors.secondary;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Points
    ctx.textAlign = 'center';
    points.forEach((pt, idx) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors.secondary;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = colors.textColor;
      ctx.fillText(labels[idx], pt.x, height - 10);
    });
  }

  /**
   * Helper: Draw Donut on Any Canvas
   */
  function drawDonutChart(canvasId, sentiment) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const parent = canvas.parentElement;
    const size = Math.min(parent.clientWidth || 200, parent.clientHeight || 200);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;

    const ctx = canvas.getContext('2d');
    ctx.resetTransform?.();
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, size, size);

    const colors = getChartPalette();
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.42;
    const innerRadius = size * 0.28;

    const total = sentiment.positive + sentiment.neutral + sentiment.negative;
    const segments = [
      { pct: sentiment.positive / total, color: colors.positive },
      { pct: sentiment.neutral / total, color: colors.neutral },
      { pct: sentiment.negative / total, color: colors.negative }
    ];

    let startAngle = -Math.PI / 2;

    segments.forEach((seg) => {
      const sliceAngle = seg.pct * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle, false);
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();

      startAngle += sliceAngle;
    });
  }

  /**
   * Chart 3: Sentiment Donut (Dashboard view)
   */
  function renderSentimentDonut() {
    const club = CLUBS_DATA[state.club];
    const metrics = club.metrics[state.platform] || club.metrics.all;
    const sentiment = metrics.sentimentBreakdown;

    drawDonutChart('sentiment-donut', sentiment);

    // Update center and legend labels
    const centerPct = document.getElementById('donut-center-pct');
    if (centerPct) centerPct.textContent = `${sentiment.positive}%`;

    const posPct = document.getElementById('legend-pos-pct');
    const neuPct = document.getElementById('legend-neu-pct');
    const negPct = document.getElementById('legend-neg-pct');

    if (posPct) posPct.textContent = `${sentiment.positive}%`;
    if (neuPct) neuPct.textContent = `${sentiment.neutral}%`;
    if (negPct) negPct.textContent = `${sentiment.negative}%`;
  }

  /**
   * Chart 4: Platform Performance Comparison Bar Chart
   */
  function renderPlatformBarChart() {
    const setup = setupCanvas('platform-bar-chart');
    if (!setup) return;
    const { ctx, width, height } = setup;
    const colors = getChartPalette();

    const club = CLUBS_DATA[state.club];
    const m = club.metrics;

    const platforms = [
      { name: 'Instagram', followers: m.instagram.followers, engagement: m.instagram.engagement, color: colors.colorIg },
      { name: 'LinkedIn', followers: m.linkedin.followers, engagement: m.linkedin.engagement, color: colors.colorLi },
      { name: 'GitHub', followers: m.github ? m.github.followers : 0, engagement: m.github ? m.github.engagement : 0, color: colors.colorGh },
      { name: 'Facebook', followers: m.facebook.followers, engagement: m.facebook.engagement, color: colors.colorFb }
    ];

    const padding = { top: 20, right: 20, bottom: 32, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    // Max value between followers and engagement
    const maxVal = Math.max(...platforms.map((p) => Math.max(p.followers, p.engagement))) * 1.15;

    // Grid lines
    const gridLines = 4;
    ctx.strokeStyle = colors.gridColor;
    ctx.lineWidth = 1;
    ctx.fillStyle = colors.textColor;
    ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'right';

    for (let i = 0; i <= gridLines; i++) {
      const val = Math.round((maxVal / gridLines) * i);
      const y = padding.top + chartH - (i / gridLines) * chartH;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();
      ctx.fillText(val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val, padding.left - 8, y + 4);
    }

    const groupW = chartW / platforms.length;
    const barW = Math.min(24, groupW * 0.28);
    const gap = 6;

    platforms.forEach((p, idx) => {
      const groupX = padding.left + idx * groupW + groupW / 2;

      // Bar 1: Followers
      const fH = (p.followers / maxVal) * chartH;
      const fX = groupX - barW - gap / 2;
      const fY = padding.top + chartH - fH;

      ctx.fillStyle = p.color;
      ctx.fillRect(fX, fY, barW, fH);

      // Bar 2: Engagement (slighter lighter opacity)
      const eH = (p.engagement / maxVal) * chartH;
      const eX = groupX + gap / 2;
      const eY = padding.top + chartH - eH;

      ctx.fillStyle = colors.primary;
      ctx.fillRect(eX, eY, barW, eH);

      // Channel label
      ctx.fillStyle = colors.textMain;
      ctx.textAlign = 'center';
      ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText(p.name, groupX, height - 10);
    });
  }

  /**
   * Sentiment Section Large Donut
   */
  function renderSentimentPageDonut() {
    const club = CLUBS_DATA[state.club];
    const metrics = club.metrics[state.platform] || club.metrics.all;
    const sentiment = metrics.sentimentBreakdown;

    drawDonutChart('sentiment-donut-large', sentiment);

    const posEl = document.getElementById('sent-page-pos-pct');
    const vPos = document.getElementById('sent-val-pos');
    const vNeu = document.getElementById('sent-val-neu');
    const vNeg = document.getElementById('sent-val-neg');

    if (posEl) posEl.textContent = `${sentiment.positive}%`;
    if (vPos) vPos.textContent = `${sentiment.positive}%`;
    if (vNeu) vNeu.textContent = `${sentiment.neutral}%`;
    if (vNeg) vNeg.textContent = `${sentiment.negative}%`;
  }

  function renderAllCharts() {
    renderWeeklyEngagementChart();
    renderFollowersGrowthChart();
    renderSentimentDonut();
    renderPlatformBarChart();
  }

  /* ===================================================================
     9. UI SYNCHRONIZATION (CARDS, BANNER, POSTS, COMMENTS, REPORT)
     =================================================================== */

  function updateDashboardUI() {
    const club = CLUBS_DATA[state.club];
    const collegeName = COLLEGE_NAMES[state.college] || COLLEGE_NAMES.RSCOE;
    const platformKey = state.platform;
    const metrics = club.metrics[platformKey] || club.metrics.all;

    // Header context label
    const headerLabel = document.getElementById('header-context-label');
    if (headerLabel) {
      const platText = platformKey === 'all' ? 'All Channels' : platformKey.charAt(0).toUpperCase() + platformKey.slice(1);
      headerLabel.textContent = `${club.name} (${platText})`;
    }

    // Context Banner
    const bannerCollege = document.getElementById('banner-college-name');
    const bannerClub = document.getElementById('banner-club-name');
    const bannerPlatform = document.getElementById('banner-platform-name');
    if (bannerCollege) bannerCollege.textContent = collegeName;
    if (bannerClub) bannerClub.textContent = club.name;
    if (bannerPlatform) {
      if (platformKey === 'all') {
        bannerPlatform.textContent = 'All Platforms (Instagram, LinkedIn, Facebook)';
      } else {
        bannerPlatform.textContent = `${platformKey.toUpperCase()} Channel`;
      }
    }

    // Summary Cards
    const cardFollowers = document.getElementById('card-followers');
    const cardPosts = document.getElementById('card-posts');
    const cardEngagement = document.getElementById('card-engagement');
    const cardRate = document.getElementById('card-rate');
    const cardReach = document.getElementById('card-reach');
    const cardSentiment = document.getElementById('card-sentiment');

    if (cardFollowers) cardFollowers.textContent = formatNumber(metrics.followers);
    if (cardPosts) cardPosts.textContent = metrics.posts;
    if (cardEngagement) cardEngagement.textContent = formatNumber(metrics.engagement);
    if (cardRate) cardRate.textContent = metrics.engagementRate;
    if (cardReach) cardReach.textContent = formatNumber(metrics.reach);
    if (cardSentiment) cardSentiment.textContent = metrics.positiveSentiment;

    // Sidebar active club indicator
    const sideAvatar = document.getElementById('sidebar-club-avatar');
    const sideName = document.getElementById('sidebar-club-name');
    const sideMeta = document.getElementById('sidebar-club-meta');
    const sidePosts = document.getElementById('sidebar-posts-count');

    if (sideAvatar) sideAvatar.textContent = club.short;
    if (sideName) sideName.textContent = club.name;
    if (sideMeta) sideMeta.textContent = `${formatNumber(metrics.followers)} Followers`;
    if (sidePosts) sidePosts.textContent = metrics.posts;

    // Top Performing Post preview card
    const topPost = club.bestPost;
    const topTitle = document.getElementById('dash-top-post-title');
    const topCaption = document.getElementById('dash-top-post-caption');
    const topPlatform = document.getElementById('dash-top-post-platform');
    const topLikes = document.getElementById('dash-top-likes');
    const topComments = document.getElementById('dash-top-comments');
    const topShares = document.getElementById('dash-top-shares');
    const topViews = document.getElementById('dash-top-views');
    const topScore = document.getElementById('dash-top-score');

    if (topTitle) topTitle.textContent = `“${topPost.title}”`;
    if (topCaption) topCaption.textContent = topPost.caption;
    if (topPlatform) {
      topPlatform.textContent = topPost.platform;
      topPlatform.className = `platform-badge badge-${topPost.platform.toLowerCase()}`;
    }
    if (topLikes) topLikes.textContent = formatNumber(topPost.likes);
    if (topComments) topComments.textContent = formatNumber(topPost.comments);
    if (topShares) topShares.textContent = formatNumber(topPost.shares);
    if (topViews) topViews.textContent = formatNumber(topPost.views);
    if (topScore) {
      topScore.textContent = calculateEngagementScore(topPost.likes, topPost.comments, topPost.shares, topPost.views).toFixed(1);
    }

    // Update Engagement Tab metrics
    updateEngagementTabUI();

    // Render Posts Table
    renderPostsTable();

    // Render Comments Stream
    renderCommentsStream();

    // Render Document Report
    updateReportDocument();

    // Redraw charts
    renderAllCharts();
    renderSentimentPageDonut();
  }

  function updateEngagementTabUI() {
    const club = CLUBS_DATA[state.club];
    const metrics = club.metrics[state.platform] || club.metrics.all;

    const engLikes = document.getElementById('eng-total-likes');
    const engComments = document.getElementById('eng-total-comments');
    const engShares = document.getElementById('eng-total-shares');
    const engViews = document.getElementById('eng-total-views');
    const engRate = document.getElementById('eng-rate-display');

    if (engLikes) engLikes.textContent = formatNumber(metrics.likes);
    if (engComments) engComments.textContent = formatNumber(metrics.comments);
    if (engShares) engShares.textContent = formatNumber(metrics.shares);
    if (engViews) engViews.textContent = formatNumber(metrics.views);
    if (engRate) engRate.textContent = metrics.engagementRate;

    // Platform share & cards
    const igF = document.getElementById('ig-followers');
    const igS = document.getElementById('ig-score');
    const igR = document.getElementById('ig-rate');
    const igP = document.getElementById('ig-share-pct');
    const igProg = document.getElementById('ig-prog');

    if (igF) igF.textContent = formatNumber(club.metrics.instagram.followers);
    if (igS) igS.textContent = formatNumber(club.metrics.instagram.engagement);
    if (igR) igR.textContent = club.metrics.instagram.engagementRate;
    if (igP) igP.textContent = `${club.platformShare.instagram}% Share`;
    if (igProg) igProg.style.width = `${club.platformShare.instagram}%`;

    const liF = document.getElementById('li-followers');
    const liS = document.getElementById('li-score');
    const liR = document.getElementById('li-rate');
    const liP = document.getElementById('li-share-pct');
    const liProg = document.getElementById('li-prog');

    if (liF) liF.textContent = formatNumber(club.metrics.linkedin.followers);
    if (liS) liS.textContent = formatNumber(club.metrics.linkedin.engagement);
    if (liR) liR.textContent = club.metrics.linkedin.engagementRate;
    if (liP) liP.textContent = `${club.platformShare.linkedin}% Share`;
    if (liProg) liProg.style.width = `${club.platformShare.linkedin}%`;

    const ghF = document.getElementById('gh-followers');
    const ghS = document.getElementById('gh-score');
    const ghR = document.getElementById('gh-rate');
    const ghP = document.getElementById('gh-share-pct');
    const ghProg = document.getElementById('gh-prog');

    if (club.metrics.github) {
      if (ghF) ghF.textContent = formatNumber(club.metrics.github.followers);
      if (ghS) ghS.textContent = formatNumber(club.metrics.github.engagement);
      if (ghR) ghR.textContent = club.metrics.github.engagementRate;
      if (ghP) ghP.textContent = `${club.platformShare.github || 20}% Share`;
      if (ghProg) ghProg.style.width = `${club.platformShare.github || 20}%`;
    }

    const fbF = document.getElementById('fb-followers');
    const fbS = document.getElementById('fb-score');
    const fbR = document.getElementById('fb-rate');
    const fbP = document.getElementById('fb-share-pct');
    const fbProg = document.getElementById('fb-prog');

    if (fbF) fbF.textContent = formatNumber(club.metrics.facebook.followers);
    if (fbS) fbS.textContent = formatNumber(club.metrics.facebook.engagement);
    if (fbR) fbR.textContent = club.metrics.facebook.engagementRate;
    if (fbP) fbP.textContent = `${club.platformShare.facebook}% Share`;
    if (fbProg) fbProg.style.width = `${club.platformShare.facebook}%`;
  }

  /* ===================================================================
     10. POSTS ANALYTICS SECTION (SEARCH, FILTER, SORT & MODAL)
     =================================================================== */

  function renderPostsTable() {
    const tbody = document.getElementById('posts-tbody');
    const emptyState = document.getElementById('posts-empty-state');
    const tableEl = document.getElementById('posts-table');
    const filteredCount = document.getElementById('posts-filtered-count');
    const totalCount = document.getElementById('posts-total-count');

    if (!tbody) return;

    const club = CLUBS_DATA[state.club];
    let posts = [...club.posts];

    if (totalCount) totalCount.textContent = posts.length;

    // Filter by platform
    const platformFilter = state.postPlatformFilter;
    if (platformFilter !== 'all') {
      posts = posts.filter((p) => p.platform.toLowerCase() === platformFilter.toLowerCase());
    }

    // Filter by search query
    const query = state.postSearchQuery.trim().toLowerCase();
    if (query) {
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(query) ||
        p.caption.toLowerCase().includes(query) ||
        p.platform.toLowerCase().includes(query)
      );
    }

    // Calculate score for each
    posts.forEach((p) => {
      p.score = calculateEngagementScore(p.likes, p.comments, p.shares, p.views);
    });

    // Sort
    const sortBy = state.postSortBy;
    posts.sort((a, b) => {
      if (sortBy === 'score-desc') return b.score - a.score;
      if (sortBy === 'score-asc') return a.score - b.score;
      if (sortBy === 'date-desc') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
      if (sortBy === 'likes-desc') return b.likes - a.likes;
      if (sortBy === 'views-desc') return b.views - a.views;
      return 0;
    });

    if (filteredCount) filteredCount.textContent = posts.length;

    if (posts.length === 0) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (tableEl) tableEl.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    if (tableEl) tableEl.style.display = 'table';

    tbody.innerHTML = posts.map((post) => {
      const platClass = post.platform.toLowerCase() === 'instagram'
        ? 'badge-instagram'
        : post.platform.toLowerCase() === 'linkedin'
        ? 'badge-linkedin'
        : post.platform.toLowerCase() === 'github'
        ? 'badge-github'
        : 'badge-facebook';

      return `
        <tr>
          <td class="post-cell">
            <div class="post-title-row" title="${post.title}">“${post.title}”</div>
            <div class="post-desc-row" title="${post.caption}">${post.caption}</div>
          </td>
          <td><span class="platform-badge ${platClass}">${post.platform}</span></td>
          <td>${post.date}</td>
          <td class="num-col bold">${formatNumber(post.likes)}</td>
          <td class="num-col">${formatNumber(post.comments)}</td>
          <td class="num-col">${formatNumber(post.shares)}</td>
          <td class="num-col">${formatNumber(post.views)}</td>
          <td class="num-col">
            <span class="score-pill">${post.score.toFixed(1)}</span>
          </td>
          <td>
            <button class="btn btn-secondary btn-sm post-detail-btn" data-post-id="${post.id}">
              View
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Attach click handlers to modal buttons
    document.querySelectorAll('.post-detail-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const postId = btn.getAttribute('data-post-id');
        openPostModal(postId);
      });
    });
  }

  function openPostModal(postId) {
    const club = CLUBS_DATA[state.club];
    const post = club.posts.find((p) => p.id === postId);
    if (!post) return;

    const modal = document.getElementById('post-modal');
    const badge = document.getElementById('modal-platform-badge');
    const date = document.getElementById('modal-post-date');
    const title = document.getElementById('modal-post-title');
    const caption = document.getElementById('modal-post-caption');
    const likes = document.getElementById('modal-likes');
    const comments = document.getElementById('modal-comments');
    const shares = document.getElementById('modal-shares');
    const views = document.getElementById('modal-views');
    const score = document.getElementById('modal-score');

    if (badge) {
      badge.textContent = post.platform;
      const pLower = post.platform.toLowerCase();
      const pClass = pLower === 'instagram' ? 'badge-instagram' : pLower === 'linkedin' ? 'badge-linkedin' : pLower === 'github' ? 'badge-github' : 'badge-facebook';
      badge.className = `platform-badge ${pClass}`;
    }
    if (date) date.textContent = `Published on ${post.date}`;
    if (title) title.textContent = post.title;
    if (caption) caption.textContent = post.caption;
    if (likes) likes.textContent = formatNumber(post.likes);
    if (comments) comments.textContent = formatNumber(post.comments);
    if (shares) shares.textContent = formatNumber(post.shares);
    if (views) views.textContent = formatNumber(post.views);
    if (score) score.textContent = calculateEngagementScore(post.likes, post.comments, post.shares, post.views).toFixed(1);

    if (modal) modal.classList.remove('hidden');
  }

  function closePostModal() {
    const modal = document.getElementById('post-modal');
    if (modal) modal.classList.add('hidden');
  }

  /* ===================================================================
     11. SENTIMENT ANALYSIS COMMENTS STREAM
     =================================================================== */

  function renderCommentsStream() {
    const container = document.getElementById('comments-list-container');
    if (!container) return;

    const club = CLUBS_DATA[state.club];
    let comments = [...club.comments];

    const filter = state.sentimentCommentFilter;
    if (filter !== 'all') {
      comments = comments.filter((c) => c.sentiment === filter);
    }

    if (comments.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="padding: 24px;">
          <p>No comments found under "${filter}" sentiment classification.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = comments.map((c) => {
      const badgeClass = c.sentiment === 'positive'
        ? 'badge-pos'
        : c.sentiment === 'neutral'
        ? 'badge-neu'
        : 'badge-neg';

      return `
        <div class="comment-card">
          <div class="comment-avatar">${c.avatar}</div>
          <div class="comment-content">
            <div class="comment-header-row">
              <span class="comment-author-name">${c.author}</span>
              <div class="comment-meta">
                <span>${c.platform}</span> &bull;
                <span>${c.date}</span> &bull;
                <span class="sent-badge ${badgeClass}">${c.sentiment}</span>
              </div>
            </div>
            <p class="comment-text">"${c.text}"</p>
            <span class="comment-post-ref">&bull; In response to: ${c.postRef}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ===================================================================
     12. FORMAL REPORT DOCUMENT BUILDER
     =================================================================== */

  function updateReportDocument() {
    const club = CLUBS_DATA[state.club];
    const collegeName = COLLEGE_NAMES[state.college] || COLLEGE_NAMES.RSCOE;
    const platformKey = state.platform;
    const metrics = club.metrics[platformKey] || club.metrics.all;
    const bestPost = club.bestPost;

    const repCollege = document.getElementById('rep-college-display');
    const repDate = document.getElementById('rep-date-display');
    const repClub = document.getElementById('rep-club-display');
    const repPlatform = document.getElementById('rep-platform-display');
    const repId = document.getElementById('rep-id-display');

    if (repCollege) repCollege.textContent = collegeName;
    if (repDate) {
      const today = new Date();
      repDate.textContent = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    if (repClub) repClub.textContent = club.name;
    if (repPlatform) repPlatform.textContent = platformKey === 'all' ? 'All Channels (Aggregated)' : platformKey.toUpperCase();
    if (repId) repId.textContent = `REP-${state.college}-${club.short}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Report Summary Stats
    const repFollowers = document.getElementById('rep-followers');
    const repPosts = document.getElementById('rep-posts');
    const repEng = document.getElementById('rep-engagement');
    const repRate = document.getElementById('rep-rate');
    const repSent = document.getElementById('rep-sentiment');

    if (repFollowers) repFollowers.textContent = formatNumber(metrics.followers);
    if (repPosts) repPosts.textContent = metrics.posts;
    if (repEng) repEng.textContent = formatNumber(metrics.engagement);
    if (repRate) repRate.textContent = metrics.engagementRate;
    if (repSent) repSent.textContent = metrics.positiveSentiment;

    // Best Performing Post
    const bestTitle = document.getElementById('rep-best-title');
    const bestDate = document.getElementById('rep-best-date');
    const bestPlat = document.getElementById('rep-best-platform');
    const bestSummary = document.getElementById('rep-best-summary');
    const bestLikes = document.getElementById('rep-best-likes');
    const bestComments = document.getElementById('rep-best-comments');
    const bestShares = document.getElementById('rep-best-shares');
    const bestViews = document.getElementById('rep-best-views');
    const bestScore = document.getElementById('rep-best-score');

    if (bestTitle) bestTitle.textContent = `“${bestPost.title}”`;
    if (bestDate) bestDate.textContent = `Published: ${bestPost.date}`;
    if (bestPlat) {
      bestPlat.textContent = bestPost.platform;
      bestPlat.className = `platform-badge badge-${bestPost.platform.toLowerCase()}`;
    }
    if (bestSummary) bestSummary.textContent = bestPost.caption;
    if (bestLikes) bestLikes.textContent = formatNumber(bestPost.likes);
    if (bestComments) bestComments.textContent = formatNumber(bestPost.comments);
    if (bestShares) bestShares.textContent = formatNumber(bestPost.shares);
    if (bestViews) bestViews.textContent = formatNumber(bestPost.views);
    if (bestScore) {
      bestScore.textContent = calculateEngagementScore(bestPost.likes, bestPost.comments, bestPost.shares, bestPost.views).toFixed(1);
    }

    // Sentiment breakdown in report
    const sPos = document.getElementById('rep-sent-pos');
    const sNeu = document.getElementById('rep-sent-neu');
    const sNeg = document.getElementById('rep-sent-neg');
    if (sPos) sPos.textContent = `${metrics.sentimentBreakdown.positive}%`;
    if (sNeu) sNeu.textContent = `${metrics.sentimentBreakdown.neutral}%`;
    if (sNeg) sNeg.textContent = `${metrics.sentimentBreakdown.negative}%`;

    // Platform share breakdown
    const shIg = document.getElementById('rep-share-ig');
    const shLi = document.getElementById('rep-share-li');
    const shGh = document.getElementById('rep-share-gh');
    const shFb = document.getElementById('rep-share-fb');
    if (shIg) shIg.textContent = `${club.platformShare.instagram}%`;
    if (shLi) shLi.textContent = `${club.platformShare.linkedin}%`;
    if (shGh) shGh.textContent = `${club.platformShare.github || 20}%`;
    if (shFb) shFb.textContent = `${club.platformShare.facebook}%`;
  }

  function downloadReportCSV() {
    const club = CLUBS_DATA[state.club];
    const collegeName = COLLEGE_NAMES[state.college] || COLLEGE_NAMES.RSCOE;
    const metrics = club.metrics[state.platform] || club.metrics.all;

    let csv = `COLLEGE CLUB SOCIAL MEDIA ANALYTICS REPORT\n`;
    csv += `College,${collegeName}\n`;
    csv += `Club / Chapter,${club.name}\n`;
    csv += `Platform Filter,${state.platform}\n`;
    csv += `Generated Date,${new Date().toISOString().split('T')[0]}\n\n`;

    csv += `EXECUTIVE METRICS\n`;
    csv += `Total Followers,${metrics.followers}\n`;
    csv += `Total Posts,${metrics.posts}\n`;
    csv += `Total Engagement,${metrics.engagement}\n`;
    csv += `Engagement Rate,${metrics.engagementRate}\n`;
    csv += `Average Reach,${metrics.reach}\n`;
    csv += `Positive Sentiment,${metrics.positiveSentiment}\n\n`;

    csv += `POSTS TELEMETRY CATALOG\n`;
    csv += `Post Title,Platform,Date,Likes,Comments,Shares,Views,Engagement Score\n`;

    club.posts.forEach((p) => {
      const score = calculateEngagementScore(p.likes, p.comments, p.shares, p.views).toFixed(1);
      const safeTitle = `"${p.title.replace(/"/g, '""')}"`;
      csv += `${safeTitle},${p.platform},${p.date},${p.likes},${p.comments},${p.shares},${p.views},${score}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${club.id}_analytics_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Report downloaded as CSV successfully!', 'success');
  }

  /* ===================================================================
     13. EVENT LISTENERS SETUP
     =================================================================== */

  function setupEventListeners() {
    // ==========================================
    // College Portal Login Screen & Validation
    // ==========================================
    const welcomeScreen = document.getElementById('welcome-screen');
    const appContainer = document.getElementById('app-container');
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    const rememberCheckbox = document.getElementById('login-remember');
    const loginAlert = document.getElementById('login-alert');
    const loginErrorMsg = document.getElementById('login-error-msg');
    const usernameFeedback = document.getElementById('login-username-feedback');
    const passwordFeedback = document.getElementById('login-password-feedback');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const togglePasswordBtn = document.getElementById('toggle-password-btn');
    const pwdEyeIcon = document.getElementById('pwd-eye-icon');
    const pwdEyeSlashIcon = document.getElementById('pwd-eye-slash-icon');

    // Demo Credentials (College Prototype)
    const DEMO_USER = 'Shubham';
    const DEMO_PASS = 'RBT25CS049';

    // Populate remembered username if available
    try {
      const savedUser = localStorage.getItem('college_portal_remember_user');
      if (savedUser && usernameInput) {
        usernameInput.value = savedUser;
        if (rememberCheckbox) rememberCheckbox.checked = true;
      }
    } catch (e) {
      /* ignore storage access error */
    }

    function clearAlerts() {
      if (loginAlert) {
        loginAlert.className = 'login-alert hidden';
        loginAlert.textContent = '';
      }
      if (loginErrorMsg) {
        loginErrorMsg.className = 'login-error-msg hidden';
        loginErrorMsg.textContent = '';
        loginErrorMsg.style.display = 'none';
      }
      if (usernameFeedback) {
        usernameFeedback.textContent = '';
        usernameFeedback.className = 'login-feedback';
      }
      if (passwordFeedback) {
        passwordFeedback.textContent = '';
        passwordFeedback.className = 'login-feedback';
      }
      if (usernameInput) usernameInput.classList.remove('input-error', 'input-success');
      if (passwordInput) passwordInput.classList.remove('input-error', 'input-success');
    }

    function showAlert(message, type = 'error') {
      if (loginAlert) {
        loginAlert.className = `login-alert login-alert-${type}`;
        loginAlert.textContent = message;
        loginAlert.classList.remove('hidden');
      }
      if (loginErrorMsg) {
        loginErrorMsg.textContent = message;
        if (type === 'error') {
          loginErrorMsg.className = 'login-error-msg visible text-error';
          loginErrorMsg.style.display = 'block';
        } else {
          loginErrorMsg.className = 'login-error-msg hidden';
          loginErrorMsg.style.display = 'none';
        }
      }
    }

    // Clear field errors as user types
    if (usernameInput) {
      usernameInput.addEventListener('input', () => {
        usernameInput.classList.remove('input-error');
        if (usernameFeedback) {
          usernameFeedback.textContent = '';
          usernameFeedback.className = 'login-feedback';
        }
        if (loginAlert && loginAlert.classList.contains('login-alert-error')) {
          clearAlerts();
        }
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener('input', () => {
        passwordInput.classList.remove('input-error');
        if (passwordFeedback) {
          passwordFeedback.textContent = '';
          passwordFeedback.className = 'login-feedback';
        }
        if (loginAlert && loginAlert.classList.contains('login-alert-error')) {
          clearAlerts();
        }
      });
    }

    // Toggle password visibility
    if (togglePasswordBtn && passwordInput) {
      togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        if (pwdEyeIcon && pwdEyeSlashIcon) {
          if (isPassword) {
            pwdEyeIcon.classList.add('hidden');
            pwdEyeSlashIcon.classList.remove('hidden');
          } else {
            pwdEyeIcon.classList.remove('hidden');
            pwdEyeSlashIcon.classList.add('hidden');
          }
        }
      });
    }

    // Forgot Password handler
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        showAlert('Demo Prototype: Use demo credentials (Username: Shubham, Password: RBT25CS049). For live accounts, contact Chapter Admin.', 'info');
        showToast('Demo Credentials: Shubham / RBT25CS049', 'info');
      });
    }

    function handleLogin() {
      clearAlerts();

      const username = usernameInput ? usernameInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';

      // Validation 1: Username cannot be empty
      if (!username) {
        if (usernameInput) {
          usernameInput.classList.add('input-error');
          usernameInput.focus();
        }
        if (usernameFeedback) {
          usernameFeedback.textContent = 'Username cannot be empty.';
          usernameFeedback.className = 'login-feedback visible text-error';
        }
        showAlert('Username cannot be empty.', 'error');
        return;
      }

      // Validation 2: Password cannot be empty
      if (!password) {
        if (passwordInput) {
          passwordInput.classList.add('input-error');
          passwordInput.focus();
        }
        if (passwordFeedback) {
          passwordFeedback.textContent = 'Password cannot be empty.';
          passwordFeedback.className = 'login-feedback visible text-error';
        }
        showAlert('Password cannot be empty.', 'error');
        return;
      }

      // Credential verification (Demo Prototype)
      const isUserMatch = (username === DEMO_USER || username.toLowerCase() === DEMO_USER.toLowerCase());
      const isPassMatch = (password === DEMO_PASS);

      if (isUserMatch && isPassMatch) {
        if (usernameInput) usernameInput.classList.add('input-success');
        if (passwordInput) passwordInput.classList.add('input-success');

        showAlert('Login successful! Welcome back, Shubham.', 'success');
        showToast('Login successful! Welcome back, Shubham.', 'success');

        // Remember Me: Only store username, never password
        try {
          if (rememberCheckbox && rememberCheckbox.checked) {
            localStorage.setItem('college_portal_remember_user', username);
          } else {
            localStorage.removeItem('college_portal_remember_user');
          }
        } catch (e) {
          /* ignore */
        }

        // Open Dashboard
        if (welcomeScreen && appContainer) {
          welcomeScreen.classList.add('hidden');
          appContainer.classList.remove('hidden');
          requestAnimationFrame(() => {
            setTimeout(renderAllCharts, 40);
          });
        }
      } else {
        if (usernameInput) usernameInput.classList.add('input-error');
        if (passwordInput) passwordInput.classList.add('input-error');
        showAlert('Invalid username or password.', 'error');
        showToast('Invalid username or password.', 'error');
      }
    }

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
      });
    }

    if (loginBtn) {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogin();
      });
    }

    // Return to Welcome Screen
    const returnBtn = document.getElementById('return-welcome-btn');
    if (returnBtn) {
      returnBtn.addEventListener('click', () => {
        if (appContainer) appContainer.classList.add('hidden');
        if (welcomeScreen) welcomeScreen.classList.remove('hidden');
        if (passwordInput) passwordInput.value = '';
        clearAlerts();
      });
    }

    // Mobile Hamburger & Overlay
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const overlay = document.getElementById('sidebar-overlay');

    if (mobileBtn) mobileBtn.addEventListener('click', openMobileSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileSidebar);
    if (overlay) overlay.addEventListener('click', closeMobileSidebar);

    // Sidebar Navigation Tabs
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetSection = btn.getAttribute('data-section');
        if (targetSection) switchSection(targetSection);
      });
    });

    // Theme Toggle Button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // Global Selectors: College, Club, Platform
    const collegeSelect = document.getElementById('college-select');
    const clubSelect = document.getElementById('club-select');
    const platformSelect = document.getElementById('platform-select');

    if (collegeSelect) {
      collegeSelect.addEventListener('change', (e) => {
        state.college = e.target.value;
        updateDashboardUI();
        showToast(`Switched campus to ${COLLEGE_NAMES[state.college]}`);
      });
    }

    if (clubSelect) {
      clubSelect.addEventListener('change', (e) => {
        state.club = e.target.value;
        updateDashboardUI();
        showToast(`Loaded ${CLUBS_DATA[state.club].name} telemetry!`);
      });
    }

    if (platformSelect) {
      platformSelect.addEventListener('change', (e) => {
        state.platform = e.target.value;
        updateDashboardUI();
      });
    }

    // Posts Section Toolbar
    const searchInput = document.getElementById('posts-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const postPlatFilter = document.getElementById('posts-platform-filter');
    const postSortSelect = document.getElementById('posts-sort-select');
    const resetFilterBtn = document.getElementById('reset-posts-filter-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.postSearchQuery = e.target.value;
        if (clearSearchBtn) {
          if (e.target.value.length > 0) clearSearchBtn.classList.remove('hidden');
          else clearSearchBtn.classList.add('hidden');
        }
        renderPostsTable();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        state.postSearchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderPostsTable();
      });
    }

    if (postPlatFilter) {
      postPlatFilter.addEventListener('change', (e) => {
        state.postPlatformFilter = e.target.value;
        renderPostsTable();
      });
    }

    if (postSortSelect) {
      postSortSelect.addEventListener('change', (e) => {
        state.postSortBy = e.target.value;
        renderPostsTable();
      });
    }

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (postPlatFilter) postPlatFilter.value = 'all';
        if (postSortSelect) postSortSelect.value = 'score-desc';
        state.postSearchQuery = '';
        state.postPlatformFilter = 'all';
        state.postSortBy = 'score-desc';
        if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
        renderPostsTable();
      });
    }

    // Modal Close buttons
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalDismissBtn = document.getElementById('modal-dismiss-btn');
    const modalOverlay = document.getElementById('post-modal');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePostModal);
    if (modalDismissBtn) modalDismissBtn.addEventListener('click', closePostModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closePostModal();
      });
    }

    // Sentiment Comments Filter Pills
    const commentPills = document.querySelectorAll('.filter-pill');
    commentPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        commentPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        state.sentimentCommentFilter = pill.getAttribute('data-sentiment-filter') || 'all';
        renderCommentsStream();
      });
    });

    // Report Action Buttons
    const generateRepBtn = document.getElementById('btn-generate-report');
    const printRepBtn = document.getElementById('btn-print-report');
    const downloadRepBtn = document.getElementById('btn-download-report');

    if (generateRepBtn) {
      generateRepBtn.addEventListener('click', () => {
        updateReportDocument();
        showToast('Fresh report generated with latest parameters!', 'success');
      });
    }

    if (printRepBtn) {
      printRepBtn.addEventListener('click', () => {
        window.print();
      });
    }

    if (downloadRepBtn) {
      downloadRepBtn.addEventListener('click', downloadReportCSV);
    }

    // Settings Form
    const settingsForm = document.getElementById('settings-form');
    const resetSettingsBtn = document.getElementById('btn-reset-settings');

    if (settingsForm) {
      settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selCollege = document.getElementById('settings-college').value;
        const selClub = document.getElementById('settings-club').value;
        const selPlat = document.getElementById('settings-platform').value;
        const selGh = document.getElementById('settings-github')?.value || '';
        const selTheme = document.querySelector('input[name="settings-theme"]:checked')?.value || 'light';

        state.college = selCollege;
        state.club = selClub;
        state.platform = selPlat;
        state.githubUrl = selGh;
        state.theme = selTheme;

        // Sync header controls
        if (collegeSelect) collegeSelect.value = selCollege;
        if (clubSelect) clubSelect.value = selClub;
        if (platformSelect) platformSelect.value = selPlat;

        applyTheme(selTheme);
        savePreferences(selCollege, selClub, selPlat, selTheme, selGh);
        updateDashboardUI();
      });
    }

    if (resetSettingsBtn) {
      resetSettingsBtn.addEventListener('click', () => {
        const defCollege = 'RSCOE';
        const defClub = 'coding';
        const defPlat = 'all';
        const defGh = 'https://github.com/rscoe-coding-club';
        const defTheme = 'light';

        document.getElementById('settings-college').value = defCollege;
        document.getElementById('settings-club').value = defClub;
        document.getElementById('settings-platform').value = defPlat;
        const ghInput = document.getElementById('settings-github');
        if (ghInput) ghInput.value = defGh;
        const lightRadio = document.querySelector('input[name="settings-theme"][value="light"]');
        if (lightRadio) lightRadio.checked = true;

        state.college = defCollege;
        state.club = defClub;
        state.platform = defPlat;
        state.githubUrl = defGh;
        state.theme = defTheme;

        if (collegeSelect) collegeSelect.value = defCollege;
        if (clubSelect) clubSelect.value = defClub;
        if (platformSelect) platformSelect.value = defPlat;

        applyTheme(defTheme);
        savePreferences(defCollege, defClub, defPlat, defTheme, defGh);
        updateDashboardUI();
        showToast('Settings reset to system defaults.', 'info');
      });
    }

    // Window Resize Redraw (responsive charts)
    window.addEventListener('resize', () => {
      if (state.activeSection === 'dashboard') {
        renderAllCharts();
      } else if (state.activeSection === 'sentiment') {
        renderSentimentPageDonut();
      }
    });

    // Keyboard Shortcuts (Esc to close modal)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePostModal();
    });
  }

  /* ===================================================================
     14. APPLICATION INITIALIZATION
     =================================================================== */

  function initApp() {
    loadSavedPreferences();

    // Populate Settings form initial values
    const setCol = document.getElementById('settings-college');
    const setClb = document.getElementById('settings-club');
    const setPlt = document.getElementById('settings-platform');
    if (setCol) setCol.value = state.college;
    if (setClb) setClb.value = state.club;
    if (setPlt) setPlt.value = state.platform;

    // Header Selectors initial values
    const colSel = document.getElementById('college-select');
    const clbSel = document.getElementById('club-select');
    const pltSel = document.getElementById('platform-select');
    if (colSel) colSel.value = state.college;
    if (clbSel) clbSel.value = state.club;
    if (pltSel) pltSel.value = state.platform;

    // Apply theme
    applyTheme(state.theme);

    // Setup events
    setupEventListeners();

    // Initial UI render
    updateDashboardUI();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
