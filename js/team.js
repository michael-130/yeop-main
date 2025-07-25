// Team member click handler
$(document).ready(function() {
    $('.team-member-card').on('click', function() {
        const memberId = $(this).data('member');
        if (memberId) {
            window.location.href = `team-detail.html?member=${memberId}`;
        }
    });
    
    // Add hover effect for better UX
    $('.team-member-card').on('mouseenter', function() {
        $(this).css('cursor', 'pointer');
    });
});