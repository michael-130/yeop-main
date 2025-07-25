// Team member data
const teamMembers = {
    'sarah-johnson': {
        name: 'Sarah Johnson',
        position: 'Lead UX Designer',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        bio: `
            <p>Sarah is a passionate UX designer with over 8 years of experience in creating intuitive and user-centered digital experiences. She specializes in user research, wireframing, prototyping, and usability testing.</p>
            
            <p>Before joining our team, Sarah worked at several Fortune 500 companies where she led design teams and managed complex projects from conception to launch. Her work has been recognized with multiple design awards and has significantly improved user engagement across various platforms.</p>
            
            <p>Sarah holds a Master's degree in Human-Computer Interaction from Stanford University and is constantly exploring new design methodologies and emerging technologies to stay at the forefront of UX design.</p>
            
            <blockquote>
                "Great design is not just about how it looks, but how it works and how it makes people feel."
            </blockquote>
        `,
        skills: [
            'User Experience Design',
            'User Interface Design',
            'Wireframing & Prototyping',
            'User Research',
            'Usability Testing',
            'Design Systems',
            'Figma & Sketch',
            'Adobe Creative Suite'
        ],
        contact: {
            email: 'sarah.johnson@company.com',
            linkedin: 'linkedin.com/in/sarahjohnson',
            phone: '+1 (555) 123-4567'
        }
    },
    'michael-chen': {
        name: 'Michael Chen',
        position: 'Full Stack Developer',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        bio: `
            <p>Michael is a highly skilled full-stack developer with expertise in modern web technologies and scalable architecture. With 6+ years of experience, he has built robust applications that serve millions of users worldwide.</p>
            
            <p>His technical expertise spans across frontend frameworks like React and Vue.js, backend technologies including Node.js and Python, and cloud platforms such as AWS and Google Cloud. Michael is passionate about writing clean, maintainable code and implementing best practices in software development.</p>
            
            <p>Michael graduated with a Computer Science degree from MIT and has contributed to several open-source projects. He's also a regular speaker at tech conferences and enjoys mentoring junior developers.</p>
            
            <blockquote>
                "Code is poetry written in logic. Every line should serve a purpose and tell a story."
            </blockquote>
        `,
        skills: [
            'JavaScript & TypeScript',
            'React & Vue.js',
            'Node.js & Express',
            'Python & Django',
            'Database Design',
            'Cloud Architecture (AWS)',
            'DevOps & CI/CD',
            'API Development'
        ],
        contact: {
            email: 'michael.chen@company.com',
            linkedin: 'linkedin.com/in/michaelchen',
            github: 'github.com/michaelchen'
        }
    },
    'emily-rodriguez': {
        name: 'Emily Rodriguez',
        position: 'Digital Marketing Strategist',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        bio: `
            <p>Emily is a data-driven digital marketing strategist with 7+ years of experience in developing and executing comprehensive marketing campaigns that drive growth and engagement.</p>
            
            <p>She specializes in SEO optimization, content strategy, social media marketing, and conversion rate optimization. Emily has successfully managed marketing budgets exceeding $2M and has consistently delivered ROI improvements of 200%+ for her clients.</p>
            
            <p>Emily holds an MBA in Marketing from Wharton and is certified in Google Analytics, Google Ads, and HubSpot. She's passionate about leveraging data insights to create compelling marketing narratives that resonate with target audiences.</p>
            
            <blockquote>
                "Marketing is no longer about the stuff you make, but about the stories you tell and the value you create."
            </blockquote>
        `,
        skills: [
            'SEO & SEM',
            'Content Strategy',
            'Social Media Marketing',
            'Email Marketing',
            'Marketing Analytics',
            'Conversion Optimization',
            'Brand Strategy',
            'Marketing Automation'
        ],
        contact: {
            email: 'emily.rodriguez@company.com',
            linkedin: 'linkedin.com/in/emilyrodriguez',
            twitter: '@emilymarketing'
        }
    },
    'david-thompson': {
        name: 'David Thompson',
        position: 'Project Manager',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        bio: `
            <p>David is an experienced project manager with over 10 years of expertise in leading cross-functional teams and delivering complex projects on time and within budget. He specializes in Agile methodologies and has a proven track record of successful project delivery.</p>
            
            <p>Throughout his career, David has managed projects ranging from small team initiatives to enterprise-level implementations involving multiple stakeholders across different time zones. His strong communication skills and attention to detail ensure smooth project execution and client satisfaction.</p>
            
            <p>David is a certified PMP (Project Management Professional) and Scrum Master. He holds a Bachelor's degree in Business Administration and continuously updates his skills in emerging project management tools and methodologies.</p>
            
            <blockquote>
                "Success in project management is not just about following processes, but about bringing people together towards a common goal."
            </blockquote>
        `,
        skills: [
            'Agile & Scrum Methodologies',
            'Project Planning & Execution',
            'Risk Management',
            'Stakeholder Management',
            'Team Leadership',
            'Budget Management',
            'Quality Assurance',
            'Client Communication'
        ],
        contact: {
            email: 'david.thompson@company.com',
            linkedin: 'linkedin.com/in/davidthompson',
            phone: '+1 (555) 987-6543'
        }
    }
};

// Load member data when page loads
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('member');
    
    if (memberId && teamMembers[memberId]) {
        loadMemberData(teamMembers[memberId]);
    } else {
        // Redirect to home page if member not found
        window.location.href = 'index.html#section_3';
    }
});

function loadMemberData(member) {
    // Update page title
    document.title = `${member.name} - Team Member`;
    
    // Update breadcrumb
    $('#member-breadcrumb').text(member.name);
    
    // Update header
    $('#member-name').text(member.name);
    $('#member-header-image').attr('src', member.image).attr('alt', member.name);
    
    // Update detail section
    $('#member-detail-image').attr('src', member.image).attr('alt', member.name);
    $('#member-detail-name').text(member.name);
    $('#member-detail-position').text(member.position);
    
    // Update bio content
    $('#member-bio-content').html(member.bio);
    
    // Update skills
    const skillsList = $('#member-skills');
    skillsList.empty();
    member.skills.forEach(skill => {
        skillsList.append(`<li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>${skill}</li>`);
    });
    
    // Update contact information
    const contactDiv = $('#member-contact');
    contactDiv.empty();
    
    if (member.contact.email) {
        contactDiv.append(`<p class="mb-2"><i class="bi-envelope-fill me-2"></i><a href="mailto:${member.contact.email}" class="text-primary">${member.contact.email}</a></p>`);
    }
    
    if (member.contact.phone) {
        contactDiv.append(`<p class="mb-2"><i class="bi-telephone-fill me-2"></i><a href="tel:${member.contact.phone}" class="text-primary">${member.contact.phone}</a></p>`);
    }
    
    if (member.contact.linkedin) {
        contactDiv.append(`<p class="mb-2"><i class="bi-linkedin me-2"></i><a href="https://${member.contact.linkedin}" target="_blank" class="text-primary">${member.contact.linkedin}</a></p>`);
    }
    
    if (member.contact.github) {
        contactDiv.append(`<p class="mb-2"><i class="bi-github me-2"></i><a href="https://${member.contact.github}" target="_blank" class="text-primary">${member.contact.github}</a></p>`);
    }
    
    if (member.contact.twitter) {
        contactDiv.append(`<p class="mb-2"><i class="bi-twitter me-2"></i><a href="https://twitter.com/${member.contact.twitter.replace('@', '')}" target="_blank" class="text-primary">${member.contact.twitter}</a></p>`);
    }
}