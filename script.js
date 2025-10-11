
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });


        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const backToTop = document.querySelector('.back-to-top');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                backToTop.classList.add('active');
            } else {
                header.classList.remove('scrolled');
                backToTop.classList.remove('active');
            }
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('nav ul').classList.remove('active');
                }
            });
        });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Prepare email content
            const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
            `;
            
            // Create mailto link
            const mailtoLink = `mailto:goldbournefin@gmail.com?subject=Website Contact: ${subject}&body=${encodeURIComponent(emailBody)}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Reset form
            setTimeout(function() {
                document.getElementById('contactForm').reset();
                alert('Thank you for your message! Your email client should open with your message. If it doesn\'t, please email us directly at goldbournefin@gmail.com');
            }, 500);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const nav = document.querySelector('nav ul');
            const menuIcon = document.querySelector('.mobile-menu');
            
            if (!nav.contains(e.target) && !menuIcon.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });

// Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    