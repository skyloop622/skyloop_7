import { Project, Service, SocialLink, PricingTier, WhyChooseFeature, FaqItem, Testimonial, ProcessStep } from '../types';

export const AHMED_INFO = {
  name: 'Ahmed Raza Khan',
  brandName: 'Skyloop Web Development',
  tagline: 'Professional Web Development Services by Ahmed Raza Khan (Skyloop)',
  role: 'Full Web Developer & Digital Specialist',
  age: 19,
  education: '',
  experienceYears: 2,
  clientsCount: '50+',
  websitesCount: '50+',
  location: 'Pakistan (Worldwide Service)',
  email: 'skyloop622@gmail.com',
  whatsappNumber: '+92 371 2034274',
  bio: 'My name is Ahmed Raza Khan and I am 19 years old. I can create any type of website for clients worldwide — including E-Commerce stores, Custom Web Applications, Portfolios, Publishing Blogs, Gym & Fitness platforms, and Restaurant portals. Skyloop provides complete website solutions with free domain, Hostinger web hosting, SEO optimization, and full technical protection.',
  skills: [
    'I Can Create Any Type of Website',
    'Custom Web App Development',
    'Full E-Commerce Store Architecture',
    'WordPress & Hostinger Setup',
    'Personal & Professional Portfolios',
    'Blogs, Gyms & Restaurant Portals',
    'Free Domain & Hostinger Hosting',
    'SEO Optimization & Speed Score 95+',
    'Full Website Protection & Security'
  ],
  stats: [
    { label: 'Websites Built', value: '50+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Owner Age', value: '19 Years Old' },
    { label: 'Brand Name', value: 'Skyloop' },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/923712034274?text=Hello%20Ahmed%20Raza%20Khan!%20I%20want%20to%20build%20a%20website.%20What%20is%20the%20procedure%20for%20this%20and%20how%20will%20it%20be%20built%3F%20Please%20guide%20me.',
    icon: 'MessageSquare',
    handle: '+92 371 2034274',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/skyloop_7/',
    icon: 'Instagram',
    handle: '@skyloop_7',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61592072535029',
    icon: 'Facebook',
    handle: 'Skyloop Web Development',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@skyloop_07?is_from_webapp=1&sender_device=pc',
    icon: 'Video',
    handle: '@skyloop_07',
  },
  {
    name: 'Email',
    url: 'mailto:skylopp622@gmail.com',
    icon: 'Mail',
    handle: 'skylopp622@gmail.com',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ecommerce-fashion-store',
    title: 'Urban Wear E-Commerce Store',
    tagline: 'Full Online Apparel & Streetwear Store',
    description: 'Complete e-commerce store with product collections, cart checkout, mobile order integration, and Hostinger setup.',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    accentBg: 'from-blue-600/20 via-cyan-600/20 to-slate-900',
    tags: ['E-Commerce', 'WooCommerce', 'WordPress', 'Hostinger'],
    metrics: { label: 'Store Sales', value: 'Active' },
    clientName: 'Urban Wear Pakistan',
    clientRole: 'Store Owner',
    liveUrl: '#',
    featured: true,
    completionTime: '4 to 5 Days',
    overview: 'Built a 100% complete online fashion store with multi-category product catalog, interactive cart, and WhatsApp order confirmation.',
    features: [
      'Full apparel product catalog with size & color selectors',
      'Shopping cart & quick order placement flow',
      '100% Mobile & tablet responsive shopping UI',
      'Free domain & Hostinger server setup'
    ],
    deliverables: ['Free Domain', 'Hostinger Hosting', 'Product Uploads', 'SEO & Security'],
    mockupType: 'browser',
    highlights: ['Fast Loading', 'Domain Included', 'Mobile First']
  },
  {
    id: 'ecommerce-electronics-store',
    title: 'ElectroTech Gadgets & Accessories',
    tagline: 'High-Tech Online Electronics Marketplace',
    description: 'Modern e-commerce store for smart devices, headphones, and tech accessories with filterable spec sheets and quick cart.',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    accentBg: 'from-cyan-600/20 via-blue-600/20 to-slate-900',
    tags: ['E-Commerce', 'Tech Store', 'React/WordPress', 'Hostinger'],
    metrics: { label: 'Conversion', value: 'High' },
    clientName: 'ElectroTech PK',
    clientRole: 'Founder',
    liveUrl: '#',
    featured: true,
    completionTime: '4 to 5 Days',
    overview: 'Engineered a sleek gadget e-commerce portal with instant stock badges, product reviews, and streamlined checkout.',
    features: [
      'Filterable electronics categories (Audio, Smartwatches, Chargers)',
      'Real-time price calculations in PKR with discount badges',
      'Integrated WhatsApp order & inquiry button',
      'Free domain name & Hostinger server configuration'
    ],
    deliverables: ['E-Commerce Portal', 'Free Domain', 'Hostinger Setup', 'SEO Ready'],
    mockupType: 'browser',
    highlights: ['Tech Focus', 'Instant Cart', 'PKR Prices']
  },
  {
    id: 'ecommerce-luxury-jewelry',
    title: 'Luxe Jewelry & Watch Boutique',
    tagline: 'Premium High-End E-Commerce Showcase',
    description: 'Elegant e-commerce storefront crafted for luxury watches, rings, and handcrafted jewelry with zoom galleries.',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    accentBg: 'from-amber-600/20 via-purple-600/20 to-slate-900',
    tags: ['E-Commerce', 'Luxury Brand', 'Responsive', 'Hostinger'],
    metrics: { label: 'Client Rating', value: '5.0 ★' },
    clientName: 'Luxe Jewelers',
    clientRole: 'Managing Director',
    liveUrl: '#',
    featured: true,
    completionTime: '4 to 5 Days',
    overview: 'Crafted a dark luxury e-commerce experience for high-end jewelry with micro-interactions and instant inquiry forms.',
    features: [
      'High-resolution zoomable image galleries for products',
      'Custom luxury theme layout with gold/silver accents',
      'Direct order dispatch to email & WhatsApp',
      'Free domain & Hostinger hosting deployment'
    ],
    deliverables: ['Boutique Store', 'Domain & Hosting', 'SEO Care', 'Support'],
    mockupType: 'browser',
    highlights: ['Luxury Design', 'Fast Gallery', 'SSL Security']
  },
  {
    id: 'portfolio-creative-brand',
    title: 'Personal Executive Portfolio',
    tagline: 'Sleek Personal & Professional Brand Website',
    description: 'Clean, modern portfolio website showcasing past work, services, client reviews, and direct WhatsApp contact.',
    category: 'Portfolio & Brand',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    accentBg: 'from-indigo-600/20 via-blue-600/20 to-slate-900',
    tags: ['WordPress', 'Portfolio', 'Responsive', 'Personal Brand'],
    metrics: { label: 'Design Score', value: '10/10' },
    clientName: 'Zain Ul Abidin',
    clientRole: 'Consultant',
    liveUrl: '#',
    featured: true,
    completionTime: '3 to 4 Days',
    overview: 'Created an elegant portfolio website for Zain to highlight consulting services, work samples, and direct booking options.',
    features: [
      'Interactive service showcases & resume section',
      'Direct WhatsApp chat integration button',
      'Clean typography and fast page loading',
      'Free domain & Hostinger web hosting'
    ],
    deliverables: ['Custom Portfolio Design', 'Hostinger Hosting', 'Domain Setup', 'Support'],
    mockupType: 'browser',
    highlights: ['Modern Layout', 'Instant WhatsApp', 'Mobile Ready']
  },
  {
    id: 'blog-tech-insights',
    title: 'TechPulse News & Blog Website',
    tagline: 'High-Speed Publishing Blog & Articles Portal',
    description: 'Rich article & blog platform with categorized posts, newsletter subscription, and search engine SEO optimization.',
    category: 'Blog Website',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
    accentBg: 'from-purple-600/20 via-indigo-600/20 to-slate-900',
    tags: ['WordPress', 'Blog', 'SEO', 'Hostinger'],
    metrics: { label: 'Speed Score', value: '98/100' },
    clientName: 'TechPulse Media',
    clientRole: 'Editor in Chief',
    liveUrl: '#',
    featured: true,
    completionTime: '3 to 4 Days',
    overview: 'Built a high-traffic blog website for tech news with category filters, social sharing, and search engine ranking setup.',
    features: [
      'Categorized article publishing engine',
      'Fast loading speed & mobile optimization',
      'SEO metadata setup for top ranking',
      'Comment system & social media integration'
    ],
    deliverables: ['Blog Setup', 'Free Domain', 'Hostinger Hosting', 'SEO Configuration'],
    mockupType: 'browser',
    highlights: ['SEO Optimized', 'Fast Reading', 'Easy Post Edits']
  },
  {
    id: 'restaurant-bistro-menu',
    title: 'Gourmet Bistro & Cafe Website',
    tagline: 'Food Menu & Online Table Reservation',
    description: 'Delicious restaurant website with online digital menu, photo gallery, table booking form, and location details.',
    category: 'Restaurant Website',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    accentBg: 'from-amber-600/20 via-orange-600/20 to-slate-900',
    tags: ['WordPress', 'Restaurant', 'Digital Menu', 'Hostinger'],
    metrics: { label: 'Client Satisfaction', value: '5.0 ★' },
    clientName: 'Gourmet Bistro Lahore',
    clientRole: 'Restaurant Manager',
    liveUrl: '#',
    featured: true,
    completionTime: '4 to 5 Days',
    overview: 'Designed a mouth-watering restaurant website featuring full food menus, online table reservations, and Google Maps directions.',
    features: [
      'Categorized digital food menu with prices',
      'Online table booking inquiry form',
      'Google Maps location & opening hours',
      'Hostinger web hosting & domain included'
    ],
    deliverables: ['Restaurant Website', 'Free Domain', 'Hostinger Server', 'Menu Uploads'],
    mockupType: 'browser',
    highlights: ['Digital Menu', 'Online Booking', 'Attractive UI']
  },
  {
    id: 'gym-fitness-club',
    title: 'PowerFit Gym & Fitness Club',
    tagline: 'Gym Membership & Trainer Classes Portal',
    description: 'High-energy fitness gym website with class schedules, membership pricing plans, trainer bios, and sign-up form.',
    category: 'Gym & Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    accentBg: 'from-emerald-600/20 via-teal-600/20 to-slate-900',
    tags: ['WordPress', 'Gym', 'Fitness', 'Hostinger'],
    metrics: { label: 'Member Signups', value: '+120%' },
    clientName: 'PowerFit Gym',
    clientRole: 'Head Coach',
    liveUrl: '#',
    featured: true,
    completionTime: '4 to 5 Days',
    overview: 'Built a bold gym and fitness website for PowerFit featuring membership packages, workout schedules, and direct WhatsApp signups.',
    features: [
      'Membership packages & pricing tables',
      'Weekly fitness class timetable',
      'Trainer profiles & client transformations',
      'Free domain & Hostinger web hosting'
    ],
    deliverables: ['Gym Website', 'Free Domain', 'Hostinger Hosting', 'Full Support'],
    mockupType: 'browser',
    highlights: ['Bold Gym UI', 'Pricing Tables', 'Mobile Ready']
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'full-website-dev',
    title: 'Full Website Development',
    description: 'Complete custom website building from scratch on WordPress and Hostinger. Perfect for businesses, portfolios, blogs, gyms, and stores.',
    icon: 'Code2',
    features: [
      'Professional WordPress & Hostinger building',
      '100% Mobile, tablet & desktop responsive',
      'Free domain name included',
      'Free Hostinger hosting setup included'
    ],
  },
  {
    id: 'ecommerce-dev',
    title: 'E-Commerce Online Store',
    description: 'Complete e-commerce store ready to sell products online with product catalog, shopping cart, and order placement system.',
    icon: 'ShoppingBag',
    features: [
      'Full product store setup',
      'Shopping cart & order notification',
      'Complete online store ready to launch',
      '22,000 PKR complete package price'
    ],
  },
  {
    id: 'seo-speed-responsibility',
    title: 'SEO & Speed Optimization',
    description: 'I take full responsibility for your website SEO and speed! Your website will load fast and be optimized for search engine search results.',
    icon: 'Zap',
    features: [
      'Search Engine Optimization (SEO)',
      'Fast page loading speed score',
      'Google search submission',
      'Full SEO setup responsibility taken by Ahmed'
    ],
  },
  {
    id: 'protection-security',
    title: 'Website Protection & Security',
    description: 'Complete security hardening for your website. SSL certificate, protection against spam, and security maintenance included.',
    icon: 'ShieldCheck',
    features: [
      'Free SSL security certificate',
      'Spam & malware protection',
      'Hostinger security firewall setup',
      'Full ongoing security peace of mind'
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    price: '13,000 PKR',
    subtitle: '100% complete personal brand or service portfolio website.',
    tagline: 'Ideal for individuals, freelancers, personal brand & landing pages',
    popular: false,
    buttonText: 'Order Portfolio Website',
    features: [
      '13,000 PKR Complete Price',
      'Free Domain Name Included',
      'Free Hostinger Web Hosting',
      '100% Mobile & Tablet Responsive',
      'Complete SEO & Speed Setup',
      'Website Security & SSL Included',
      'Direct WhatsApp Chat Button'
    ],
  },
  {
    id: 'blog-website',
    name: 'Blog Website',
    price: '10,000 PKR',
    subtitle: 'Multi-page corporate website or publishing blog portal.',
    tagline: 'Best for companies, services, news blogs & agencies',
    popular: false,
    buttonText: 'Order Blog Website',
    features: [
      '10,000 PKR Complete Price',
      'Free Domain Name Included',
      'Free Hostinger Web Hosting',
      'Categorized Articles & Service Pages',
      'Full SEO & Speed Optimization',
      'Security & Spam Protection',
      'Ongoing Technical Support'
    ],
  },
  {
    id: 'gym-restaurant-website',
    name: 'Gym / Restaurant Website',
    price: '15,000 PKR',
    subtitle: 'Specialized website for Gyms, Restaurants, and Cafes.',
    tagline: 'Digital menus, table booking, membership plans & schedules',
    popular: false,
    buttonText: 'Order Special Website',
    features: [
      '15,000 PKR Complete Price',
      'Free Domain Name Included',
      'Free Hostinger Web Hosting',
      'Digital Food Menu / Gym Plans',
      'Online Reservation / Signup Form',
      'Location Map & Hours Setup',
      'Full Post-Launch Support'
    ],
  },
  {
    id: 'ecommerce-website',
    name: 'E-Commerce Website',
    price: '22,000 PKR',
    subtitle: 'Complete online store with product catalog & shopping cart.',
    tagline: 'Full online store built to sell products immediately',
    popular: true,
    buttonText: 'Order E-Commerce Website',
    features: [
      '22,000 PKR Complete Price',
      'Free Domain Name Included',
      'Free Hostinger Web Hosting',
      'Complete Product Catalog & Store',
      'Shopping Cart & Checkout System',
      '100% Mobile Responsive Store',
      'Full Security & SEO Responsibility'
    ],
  },
];

export const WHY_CHOOSE_FEATURES: WhyChooseFeature[] = [
  {
    id: '50-websites',
    title: '50+ Websites Built',
    description: 'Proven experience delivering 50+ successful websites for clients across e-commerce, portfolio, blog, gym, and restaurant domains.',
    icon: 'Sparkles',
  },
  {
    id: 'domain-hosting-free',
    title: 'Free Domain & Hostinger Hosting',
    description: 'No extra hidden costs! Hostinger server hosting and domain configuration are included with every project.',
    icon: 'Server',
  },
  {
    id: 'seo-security',
    title: 'Full SEO & Security Care',
    description: 'I take full responsibility for speed, search engine ranking (SEO), and SSL website protection.',
    icon: 'ShieldCheck',
  },
  {
    id: 'dedicated-support',
    title: 'Dedicated Direct Support',
    description: 'Direct communication with Ahmed Raza Khan with ongoing maintenance and guidance.',
    icon: 'Zap',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is Skyloop and who is behind it?',
    answer: 'Skyloop is a professional web development service created by Ahmed Raza Khan. Ahmed is 19 years old and can create any type of website. He has successfully built over 50+ websites for clients worldwide using WordPress, Hostinger, and custom technologies.',
  },
  {
    id: 'faq-2',
    question: 'How much does an E-Commerce, Portfolio, or Blog website cost?',
    answer: 'An E-Commerce Website costs 22,000 PKR, a Portfolio Website costs 13,000 PKR, a Gym/Restaurant Website costs 15,000 PKR, and a Blog Website costs 10,000 PKR. All prices include free domain, Hostinger hosting, SEO setup, and full support.',
  },
  {
    id: 'faq-3',
    question: 'Are domain name and hosting included?',
    answer: 'Yes! Free domain name registration and high-speed Hostinger web hosting configuration are included with all website builds.',
  },
  {
    id: 'faq-4',
    question: 'Who handles the SEO, speed, and website security?',
    answer: 'Ahmed Raza Khan takes 100% responsibility for your website SEO, speed optimization, and security protection (SSL and malware prevention).',
  },
  {
    id: 'faq-5',
    question: 'How do I place an order or talk directly to Ahmed?',
    answer: 'You can fill out the Order Form on this website or click the WhatsApp button to chat directly with Ahmed Raza Khan. You can also email skyloop622@gmail.com.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Order & Discussion',
    description: 'Submit your website order or contact via WhatsApp. Share your business name, preferences, or details.',
    timeframe: 'Step 1',
    icon: 'MessageSquare',
  },
  {
    number: '02',
    title: 'WordPress & Hostinger Build',
    description: 'I build your complete website on WordPress, set up layout pages, e-commerce store, or portfolio showcases.',
    timeframe: 'Step 2',
    icon: 'Code2',
  },
  {
    number: '03',
    title: 'SEO, Security & Mobile Testing',
    description: 'I optimize speed, search engine ranking (SEO), SSL protection, and test on mobile and desktop screens.',
    timeframe: 'Step 3',
    icon: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'Live Launch & Delivery',
    description: 'I connect your domain, deploy on Hostinger, and hand over a 100% complete live website to you!',
    timeframe: 'Step 4',
    icon: 'Server',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rehman Khan',
    role: 'E-Commerce Store Owner',
    company: 'Retail Store',
    avatar: '',
    comment: 'Ahmed Raza Khan created an exceptional E-Commerce store for my retail business. The product showcase, shopping cart, and quick ordering process work flawlessly. He configured our domain and Hostinger web hosting with great care and professionalism. I highly recommend Skyloop for fast, high-quality web development.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Muhammad Shahzaib',
    role: 'Fashion Brand Owner',
    company: 'Apparel Store',
    avatar: '',
    comment: 'I hired Skyloop to build a modern online store for my apparel brand and the experience was outstanding. Ahmed took full responsibility for mobile responsiveness, fast loading speed, and SSL website security. My online order sales have increased and my clients love the sleek interface.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Hamza Tariq',
    role: 'Software Consultant',
    company: 'Tech Solutions',
    avatar: '',
    comment: 'Ahmed developed an executive portfolio website for my consulting services in record time. The layout is clean and crisp, and the integrated direct WhatsApp contact feature allows clients to reach me instantly. Excellent communication, great work ethic, and total dedication to quality.',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Farhan Ali',
    role: 'Restaurant & Gym Manager',
    company: 'Gourmet Bistro & Fitness',
    avatar: '',
    comment: 'We had our restaurant digital menu and gym membership portal designed by Ahmed Raza Khan. The online reservation forms and digital menu function effortlessly across all smartphones and laptops. He provided great post-launch support and delivered everything exactly as promised.',
    rating: 5,
  },
];
