// Live Chat Functionality
$(document).ready(function() {
    // Handle live chat button click
    $('#liveChatBtn').on('click', function(e) {
        e.preventDefault();
        openLiveChat();
    });
});

function openLiveChat() {
    // You can customize this function to integrate with your preferred chat service
    // Here are several options:
    
    // Option 1: Open WhatsApp chat (replace with your WhatsApp number)
    const whatsappNumber = '13052409671'; // Replace with your actual WhatsApp number
    const message = encodeURIComponent('Hello! I would like to chat with someone from your team.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Option 2: Open a chat widget (if you have one integrated)
    // if (window.Intercom) {
    //     window.Intercom('show');
    //     return;
    // }
    
    // Option 3: Open Messenger (replace with your Facebook page)
    // const messengerUrl = 'https://m.me/yourfacebookpage';
    
    // Option 4: Open a custom chat modal
    // showChatModal();
    
    // Option 5: Redirect to contact form
    // window.location.href = 'index.html#section_4';
    
    // For this example, we'll use WhatsApp as the default
    // You can modify this to use your preferred chat platform
    
    // Show options modal
    showChatOptionsModal();
}

function showChatOptionsModal() {
    // Create modal HTML
    const modalHtml = `
        <div class="modal fade" id="chatOptionsModal" tabindex="-1" aria-labelledby="chatOptionsModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="chatOptionsModalLabel">
                            <i class="bi-chat-heart-fill me-2"></i>Let's Chat!
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-4">Choose how you'd like to get in touch with us:</p>
                        
                        <div class="d-grid gap-3">
                            <button type="button" class="btn btn-success btn-lg" onclick="openWhatsAppChat()">
                                <i class="bi-whatsapp me-2"></i>
                                Chat on WhatsApp
                                <small class="d-block mt-1">Quick response guaranteed</small>
                            </button>
                            
                            <button type="button" class="btn btn-primary btn-lg" onclick="openMessengerChat()">
                                <i class="bi-messenger me-2"></i>
                                Facebook Messenger
                                <small class="d-block mt-1">Connect via Facebook</small>
                            </button>
                            
                            <button type="button" class="btn btn-info btn-lg" onclick="openEmailChat()">
                                <i class="bi-envelope-fill me-2"></i>
                                Send us an Email
                                <small class="d-block mt-1">Detailed inquiries welcome</small>
                            </button>
                            
                            <button type="button" class="btn btn-secondary btn-lg" onclick="openContactForm()">
                                <i class="bi-form-check me-2"></i>
                                Contact Form
                                <small class="d-block mt-1">Fill out our contact form</small>
                            </button>
                        </div>
                        
                        <div class="text-center mt-4">
                            <small class="text-muted">
                                <i class="bi-clock me-1"></i>
                                We typically respond within 5 minutes during business hours
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if present
    $('#chatOptionsModal').remove();
    
    // Add modal to body
    $('body').append(modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('chatOptionsModal'));
    modal.show();
}

function openWhatsAppChat() {
    const whatsappNumber = '13052409671'; // Replace with your actual WhatsApp number
    const message = encodeURIComponent('Hello! I found your website and would like to chat with someone from your team. 😊');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    $('#chatOptionsModal').modal('hide');
}

function openMessengerChat() {
    // Replace 'yourfacebookpage' with your actual Facebook page username
    const messengerUrl = 'https://m.me/yourfacebookpage';
    
    // For demo purposes, we'll show an alert
    alert('Please replace "yourfacebookpage" in the code with your actual Facebook page username');
    
    // Uncomment the line below and replace with your actual Facebook page
    // window.open(messengerUrl, '_blank');
    $('#chatOptionsModal').modal('hide');
}

function openEmailChat() {
    const email = 'info@company.com';
    const subject = encodeURIComponent('Inquiry from Website');
    const body = encodeURIComponent('Hello,\n\nI visited your website and would like to get in touch with your team.\n\nBest regards');
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    $('#chatOptionsModal').modal('hide');
}

function openContactForm() {
    // Close modal and scroll to contact form
    $('#chatOptionsModal').modal('hide');
    
    // Smooth scroll to contact section
    setTimeout(() => {
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            // If on homepage, scroll to contact section
            $('html, body').animate({
                scrollTop: $('#section_4').offset().top - 100
            }, 800);
        } else {
            // If on other pages, redirect to homepage contact section
            window.location.href = 'index.html#section_4';
        }
    }, 300);
}

// Add some visual feedback when hovering over the chat button
$(document).ready(function() {
    let hoverTimeout;
    
    $('#liveChatBtn').on('mouseenter', function() {
        clearTimeout(hoverTimeout);
        $(this).addClass('animate__animated animate__pulse');
    });
    
    $('#liveChatBtn').on('mouseleave', function() {
        const $this = $(this);
        hoverTimeout = setTimeout(() => {
            $this.removeClass('animate__animated animate__pulse');
        }, 1000);
    });
});

// Optional: Add a subtle bounce animation every few seconds to draw attention
setInterval(function() {
    if (!$('#liveChatBtn:hover').length && !$('#chatOptionsModal').hasClass('show')) {
        $('#liveChatBtn').addClass('animate__animated animate__bounce');
        setTimeout(() => {
            $('#liveChatBtn').removeClass('animate__animated animate__bounce');
        }, 1000);
    }
}, 10000); // Every 10 seconds