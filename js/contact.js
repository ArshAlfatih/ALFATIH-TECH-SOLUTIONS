// ===================================
// Contact Page JavaScript
// ===================================

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Form submit button loading state only
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        }
        // Let form submit naturally - no preventDefault!
        return true;
    });
}
    error.style.color = '#ef4444';
    error.style.fontSize = '13px';
    error.style.marginTop = '5px';
    error.textContent = message;
    field.parentElement.appendChild(error);
    field.style.borderColor = '#ef4444';
    
    // Scroll to first error
    if (document.querySelectorAll('.error-message').length === 1) {
        field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showSuccessMessage() {
    const success = document.createElement('div');
    success.className = 'success-message';
    success.style.position = 'fixed';
    success.style.top = '100px';
    success.style.right = '20px';
    success.style.padding = '20px 30px';
    success.style.background = 'rgba(34, 197, 94, 0.95)';
    success.style.color = 'white';
    success.style.borderRadius = '12px';
    success.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)';
    success.style.zIndex = '10000';
    success.style.display = 'flex';
    success.style.alignItems = 'center';
    success.style.gap = '15px';
    success.style.animation = 'slideIn 0.3s ease';
    success.innerHTML = '<i class="fas fa-check-circle" style="font-size: 24px;"></i> <div><strong>Message Sent!</strong><br><small>We\'ll get back to you within 24 hours.</small></div>';
    
    document.body.appendChild(success);
    
    setTimeout(() => {
        success.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => success.remove(), 300);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);
