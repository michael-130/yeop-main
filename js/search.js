// Search functionality
$(document).ready(function() {
    // Handle search button click
    $('#search-btn').on('click', function() {
        performSearch();
    });
    
    // Handle enter key press in search input
    $('#keyword').on('keypress', function(e) {
        if (e.which === 13) { // Enter key
            e.preventDefault();
            performSearch();
        }
    });
});

function performSearch() {
    const searchTerm = $('#keyword').val().toLowerCase().trim();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    // Define search mappings
    const searchMappings = {
        'finance': ['finance', 'money', 'investment', 'banking', 'financial', 'economy', 'stock', 'trading'],
        'design': ['design', 'creative', 'ui', 'ux', 'graphic', 'visual', 'art', 'branding'],
        'marketing': ['marketing', 'advertising', 'promotion', 'seo', 'social media', 'content', 'digital marketing'],
        'technology': ['technology', 'tech', 'programming', 'coding', 'software', 'development', 'ai', 'artificial intelligence']
    };
    
    // Find matching topic
    let matchedTopic = null;
    
    for (const [topic, keywords] of Object.entries(searchMappings)) {
        if (keywords.some(keyword => searchTerm.includes(keyword) || keyword.includes(searchTerm))) {
            matchedTopic = topic;
            break;
        }
    }
    
    // Redirect to appropriate page
    if (matchedTopic) {
        window.location.href = `topic-detail.html?topic=${matchedTopic}`;
    } else {
        // If no specific match, go to topics listing with search term
        window.location.href = `topics-listing.html?search=${encodeURIComponent(searchTerm)}`;
    }
}