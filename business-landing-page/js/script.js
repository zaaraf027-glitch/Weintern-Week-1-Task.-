document.addEventListener("DOMContentLoaded", () => {
    // 1. Search input handling (in Navbar)
    const navSearch = document.getElementById("nav-search");
    if (navSearch) {
        navSearch.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const query = navSearch.value.trim();
                if (query) {
                    showToast(`Searching for "${query}"...`);
                    navSearch.value = "";
                    navSearch.blur();
                }
            }
        });
    }

    // Helper function for showing a Toast notification
    function showToast(message) {
        // Remove existing toast if any
        const existingToast = document.querySelector(".toast");
        if (existingToast) {
            existingToast.remove();
        }

        // Create new toast element
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `
            <span class="toast-icon">🔍</span>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.classList.add("show");
        }, 10);

        // Animate out and remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 3000);
    }

    // 2. Password Strength Check (in Signup Form)
    const passwordInput = document.getElementById("password");
    const psFill = document.getElementById("ps-fill");
    const psText = document.getElementById("ps-text");

    if (passwordInput && psFill && psText) {
        passwordInput.addEventListener("input", () => {
            const password = passwordInput.value;
            let score = 0;

            if (password.length > 0) {
                // Rule 1: Length >= 6
                if (password.length >= 6) score++;
                // Rule 2: Has uppercase and lowercase
                if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
                // Rule 3: Has numbers
                if (/\d/.test(password)) score++;
                // Rule 4: Has special symbols
                if (/[^a-zA-Z\d]/.test(password)) score++;

                // Map score to UX representation
                if (score <= 1) {
                    psFill.style.width = "33%";
                    psFill.style.backgroundColor = "#f87171"; // Red
                    psText.textContent = "WEAK";
                    psText.style.color = "#ef4444";
                } else if (score <= 3) {
                    psFill.style.width = "66%";
                    psFill.style.backgroundColor = "#fbbf24"; // Yellow
                    psText.textContent = "MEDIUM";
                    psText.style.color = "#d97706";
                } else {
                    psFill.style.width = "100%";
                    psFill.style.backgroundColor = "#34d399"; // Green
                    psText.textContent = "STRONG";
                    psText.style.color = "#059669";
                }
            } else {
                psFill.style.width = "0%";
                psFill.style.backgroundColor = "transparent";
                psText.textContent = "WEAK";
                psText.style.color = "var(--text-muted)";
            }
        });
    }

    // 3. Signup form submission
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            
            const card = document.querySelector(".signup-card");
            
            // Fade out the form card
            card.style.opacity = "0";
            card.style.transform = "scale(0.95)";
            card.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            
            setTimeout(() => {
                // Change card content to success state
                card.innerHTML = `
                    <div style="text-align: center; padding: 20px 0; min-height: 250px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                        <div style="font-size: 4rem; margin-bottom: 24px; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);">🎉</div>
                        <h2 style="margin-bottom: 12px; font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; color: var(--text-primary);">Welcome, ${fullName}!</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 32px; font-size: 0.95rem; max-width: 320px; line-height: 1.6;">Your account has been successfully created. We've sent a verification link to <strong style="color: var(--primary-color);">${email}</strong>.</p>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">Redirecting you to the home page...</p>
                    </div>
                `;
                
                // Add popIn animation helper dynamically
                const styleSheet = document.createElement("style");
                styleSheet.innerText = `
                    @keyframes popIn {
                        0% { transform: scale(0.6); opacity: 0; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                `;
                document.head.appendChild(styleSheet);
                
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
                
                // Redirect back to home after 4 seconds
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 4000);
            }, 500);
        });
    }
});