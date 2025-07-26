// Topic data
const topicData = {
    'finance': {
        title: 'Finance & Investment',
        breadcrumb: 'Finance',
        headerImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Finance is the study and management of money, investments, and other financial instruments. It encompasses personal finance, corporate finance, and public finance, each playing a crucial role in economic development and wealth creation.</p>
            
            <p><strong>Understanding Financial Markets</strong> is essential for anyone looking to build wealth and secure their financial future. From stocks and bonds to cryptocurrency and real estate, the modern financial landscape offers numerous opportunities for growth and investment.</p>
            
            <blockquote>
                "An investment in knowledge pays the best interest." - Benjamin Franklin
            </blockquote>
            
            <h4 class="mt-5 mb-3">Key Financial Concepts</h4>
            <ul class="list-unstyled">
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Budgeting:</strong> Creating a plan for your income and expenses</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Investing:</strong> Putting money to work to generate returns</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Risk Management:</strong> Protecting your assets through insurance and diversification</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Retirement Planning:</strong> Preparing for your financial future</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Tax Planning:</strong> Optimizing your tax strategy</li>
            </ul>
        `,
        images: [
            {
                src: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Financial Planning'
            },
            {
                src: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Investment Strategy'
            }
        ],
        additionalContent: `
            <h4 class="mt-5 mb-3">Investment Strategies</h4>
            <p>Successful investing requires a well-thought-out strategy that aligns with your financial goals, risk tolerance, and time horizon. Here are some popular investment approaches:</p>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <h5>Growth Investing</h5>
                    <p>Focuses on companies with strong growth potential, even if they're currently expensive relative to their earnings.</p>
                </div>
                <div class="col-md-6">
                    <h5>Value Investing</h5>
                    <p>Seeks undervalued companies trading below their intrinsic value, popularized by Warren Buffett.</p>
                </div>
                <div class="col-md-6">
                    <h5>Index Investing</h5>
                    <p>Involves buying index funds that track market indices, providing broad market exposure with low fees.</p>
                </div>
                <div class="col-md-6">
                    <h5>Dividend Investing</h5>
                    <p>Focuses on stocks that pay regular dividends, providing steady income along with potential capital appreciation.</p>
                </div>
            </div>
            
            <h4 class="mt-5 mb-3">Financial Technology (FinTech)</h4>
            <p>The financial industry is rapidly evolving with technological innovations that are making financial services more accessible, efficient, and user-friendly. From mobile banking apps to robo-advisors, FinTech is revolutionizing how we manage our money.</p>
            
            <p>Emerging technologies like blockchain, artificial intelligence, and machine learning are creating new opportunities in areas such as cryptocurrency, automated trading, and personalized financial advice.</p>
        `
    },
    'design': {
        title: 'Design & Creativity',
        breadcrumb: 'Design',
        headerImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Design is the art and science of creating visual solutions that communicate ideas, solve problems, and enhance user experiences. From graphic design to user interface design, the field encompasses various disciplines that shape how we interact with the world around us.</p>
            
            <p><strong>Modern design thinking</strong> emphasizes user-centered approaches, sustainability, and accessibility. Designers today must consider not just aesthetics, but also functionality, usability, and social impact.</p>
            
            <blockquote>
                "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
            </blockquote>
            
            <h4 class="mt-5 mb-3">Design Disciplines</h4>
            <ul class="list-unstyled">
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Graphic Design:</strong> Visual communication through typography, imagery, and layout</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>UX/UI Design:</strong> Creating intuitive and engaging digital experiences</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Product Design:</strong> Developing functional and beautiful physical products</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Brand Design:</strong> Creating cohesive visual identities for companies and organizations</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Web Design:</strong> Designing websites that are both beautiful and functional</li>
            </ul>
        `,
        images: [
            {
                src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Design Process'
            },
            {
                src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Creative Workspace'
            }
        ],
        additionalContent: `
            <h4 class="mt-5 mb-3">Design Tools & Software</h4>
            <p>Modern designers have access to powerful tools that enable creativity and efficiency. Here are some essential design software and platforms:</p>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <h5>Adobe Creative Suite</h5>
                    <p>Industry-standard tools including Photoshop, Illustrator, InDesign, and After Effects for comprehensive design work.</p>
                </div>
                <div class="col-md-6">
                    <h5>Figma</h5>
                    <p>Collaborative interface design tool that's become the go-to choice for UI/UX designers worldwide.</p>
                </div>
                <div class="col-md-6">
                    <h5>Sketch</h5>
                    <p>Vector-based design tool specifically created for digital design, popular among Mac users.</p>
                </div>
                <div class="col-md-6">
                    <h5>Canva</h5>
                    <p>User-friendly design platform that democratizes design for non-professionals and small businesses.</p>
                </div>
            </div>
            
            <h4 class="mt-5 mb-3">Design Trends 2024</h4>
            <p>The design world is constantly evolving, with new trends emerging that reflect cultural shifts, technological advances, and changing user preferences. Current trends include minimalism, dark mode interfaces, sustainable design practices, and inclusive design principles.</p>
        `
    },
    'marketing': {
        title: 'Digital Marketing',
        breadcrumb: 'Marketing',
        headerImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Digital marketing encompasses all marketing efforts that use electronic devices or the internet. It's a dynamic field that leverages digital channels such as search engines, social media, email, and websites to connect with current and prospective customers.</p>
            
            <p><strong>Data-driven marketing</strong> has become the cornerstone of successful campaigns, allowing marketers to measure performance, optimize strategies, and deliver personalized experiences at scale.</p>
            
            <blockquote>
                "Content is fire, social media is gasoline." - Jay Baer
            </blockquote>
            
            <h4 class="mt-5 mb-3">Digital Marketing Channels</h4>
            <ul class="list-unstyled">
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Search Engine Optimization (SEO):</strong> Improving organic search visibility</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Pay-Per-Click (PPC):</strong> Paid advertising on search engines and social platforms</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Social Media Marketing:</strong> Building brand presence on social platforms</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Email Marketing:</strong> Direct communication with customers and prospects</li>
                <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i><strong>Content Marketing:</strong> Creating valuable content to attract and engage audiences</li>
            </ul>
        `,
        images: [
            {
                src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Marketing Analytics'
            },
            {
                src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Social Media Marketing'
            }
        ],
        additionalContent: `
            <h4 class="mt-5 mb-3">Marketing Automation</h4>
            <p>Marketing automation uses software to automate marketing actions, making campaigns more efficient and personalized. This technology helps businesses nurture leads, segment audiences, and deliver the right message at the right time.</p>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <h5>Lead Nurturing</h5>
                    <p>Automated email sequences that guide prospects through the sales funnel with relevant content.</p>
                </div>
                <div class="col-md-6">
                    <h5>Customer Segmentation</h5>
                    <p>Dividing audiences into groups based on behavior, demographics, or preferences for targeted messaging.</p>
                </div>
                <div class="col-md-6">
                    <h5>Performance Analytics</h5>
                    <p>Real-time tracking and reporting of campaign performance across all digital channels.</p>
                </div>
                <div class="col-md-6">
                    <h5>Personalization</h5>
                    <p>Delivering customized content and experiences based on user behavior and preferences.</p>
                </div>
            </div>
            
            <h4 class="mt-5 mb-3">Future of Digital Marketing</h4>
            <p>The digital marketing landscape continues to evolve with emerging technologies like artificial intelligence, voice search, and augmented reality. Marketers must stay agile and adapt to changing consumer behaviors and platform algorithms.</p>
        `
    },
    'technology': {
        title: 'Technology & Innovation',
        breadcrumb: 'Technology',
        headerImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Technology drives innovation and shapes the future of how we live, work, and interact. From artificial intelligence to blockchain, emerging technologies are transforming industries and creating new possibilities for human advancement.</p>
            
            <p><strong>Digital transformation</strong> is no longer optional for businesses—it's essential for survival and growth in today's competitive landscape.</p>
            
            <blockquote>
                "Technology is best when it brings people together." - Matt Mullenweg
            </blockquote>
        `,
        images: [
            {
                src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Technology Innovation'
            },
            {
                src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Digital Transformation'
            }
        ],
        additionalContent: `
            <h4 class="mt-5 mb-3">Emerging Technologies</h4>
            <p>The technology landscape is rapidly evolving with breakthrough innovations that promise to reshape our world.</p>
        `
    }
};

// Load topic data when page loads
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('topic');
    
    if (topicId && topicData[topicId]) {
        loadTopicData(topicData[topicId]);
    } else {
        // Redirect to topics listing if topic not found
        window.location.href = 'topics-listing.html';
    }
});

function loadTopicData(topic) {
    // Update page title
    document.title = `${topic.title} - Topic Details`;
    
    // Update breadcrumb
    $('#topic-breadcrumb').text(topic.breadcrumb);
    
    // Update header
    $('#topic-title').text(topic.title);
    $('#topic-header-image').attr('src', topic.headerImage).attr('alt', topic.title);
    
    // Update detail section
    $('#topic-detail-title').text(topic.title);
    $('#topic-content').html(topic.content);
    
    // Update images
    const imagesContainer = $('#topic-images');
    imagesContainer.empty();
    
    if (topic.images && topic.images.length > 0) {
        topic.images.forEach(image => {
            const colClass = topic.images.length === 1 ? 'col-12' : 'col-lg-6 col-md-6 col-12';
            imagesContainer.append(`
                <div class="${colClass}">
                    <img src="${image.src}" class="topics-detail-block-image img-fluid" alt="${image.alt}">
                </div>
            `);
        });
    }
    
    // Update additional content
    if (topic.additionalContent) {
        $('#topic-additional-content').html(topic.additionalContent);
    }
}