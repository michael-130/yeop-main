// Why Us click handlers
$(document).ready(function() {
    $('.why-us-card').on('click', function() {
        const caseId = $(this).data('case');
        if (caseId) {
            window.location.href = `case-studies.html?case=${caseId}`;
        }
    });
    
    $('.record-card').on('click', function() {
        const recordType = $(this).data('record');
        if (recordType) {
            window.location.href = `past-records.html?type=${recordType}`;
        }
    });
    
    // Add hover effect for better UX
    $('.why-us-card, .record-card').on('mouseenter', function() {
        $(this).css('cursor', 'pointer');
    });
});