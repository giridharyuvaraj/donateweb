document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const navLinks = document.getElementById("navLinks");

    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("loginForm");
        const signupForm = document.getElementById("signupForm");
        const switchToSignup = document.getElementById("switchToSignup");
        const switchToLogin = document.getElementById("switchToLogin");
    
        switchToSignup.addEventListener("click", function () {
            loginForm.classList.add("hidden");
            signupForm.classList.remove("hidden");
        });
    
        switchToLogin.addEventListener("click", function () {
            signupForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
        });
    });

    
// Get modal elements
const modal = document.getElementById("loginMethodModal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Event listeners for social icons
document.getElementById("googleLogin").onclick = function () {
    openLoginMethod("Google");
};
document.getElementById("phoneLogin").onclick = function () {
    openLoginMethod("Phone");
};
document.getElementById("emailLogin").onclick = function () {
    openLoginMethod("Email");
};

// Function to open modal and display the login form
function openLoginMethod(method) {
    document.getElementById("loginMethodTitle").innerText = `Sign in with ${method}`;
    const loginForm = document.getElementById("loginFormContent");
    loginForm.innerHTML = ""; // Clear previous content

    if (method === "Google") {
        loginForm.innerHTML = `<p>Login using Google:</p><button onclick="googleLogin()">Continue with Google</button>`;
    } else if (method === "Phone") {
        loginForm.innerHTML = `<input type="text" placeholder="Phone Number"><br><input type="password" placeholder="Password">`;
    } else if (method === "Email") {
        loginForm.innerHTML = `<input type="email" placeholder="Email"><br><input type="password" placeholder="Password">`;
    }

    modal.style.display = "block";
}

// Close the modal when clicking the close button
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Placeholder function for Google login
function googleLogin() {
    alert("Google login functionality goes here!");
}

// Submit the login form
function submitLogin() {
    alert("Login submitted!");
}
 // Ensure both elements exist
 if (showSignup && backToLogin && loginBox && signupBox) {
    showSignup.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents default link behavior
        console.log("Signup clicked"); // Debugging log
        loginBox.style.display = "none"; 
        signupBox.style.display = "block"; 
    });

    backToLogin.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Back to login clicked"); // Debugging log
        signupBox.style.display = "none"; 
        loginBox.style.display = "block"; 
    });
} 
document.addEventListener("DOMContentLoaded", function () {
    const showSignup = document.getElementById("showSignup");

    showSignup.addEventListener("click", function () {
        if (window.innerWidth >= 768) {
            // Redirect to full signup page on desktop
            window.location.href = "signup.html";
        } else {
            // Show inline signup form on mobile
            document.getElementById("loginBox").classList.add("hidden");
            document.getElementById("signupBox").classList.remove("hidden");
        }
    });

    document.getElementById("backToLogin").addEventListener("click", function () {
        document.getElementById("signupBox").classList.add("hidden");
        document.getElementById("loginBox").classList.remove("hidden");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const showSignup = document.getElementById("showSignup");

    if (showSignup) {
        showSignup.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                window.location.href = "signup.html";  // Redirect only on mobile
            }
        });
    }
});

document.getElementById("getLocation").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                console.log("Location obtained:", latitude, longitude);  // Debugging log
                document.getElementById("locationStatus").innerText = `Location: ${latitude}, ${longitude}`;
            },
            function(error) {
                console.error("Geolocation error:", error);  // Debugging log
                document.getElementById("locationStatus").innerText = "Location access denied!";
            }
        );
    } else {
        console.log("Geolocation not supported by browser");  // Debugging log
        document.getElementById("locationStatus").innerText = "Geolocation is not supported by your browser.";
    }
});

      function showDetails(cardType) {
        var modal = document.getElementById("modal");
        var passage = document.getElementById("short-passage");
    
        // Set the content based on the cardType
        switch(cardType) {
            case 'donations':
                passage.innerHTML = "Helping others in need is a fundamental act of kindness that strengthens communities and fosters compassion. Whether through small gestures like offering a helping hand or larger efforts such as volunteering or donating, every act of support makes a difference. Helping those in distress not only improves their lives but also brings a sense of fulfillment and purpose. In times of crisis, lending assistance can provide hope and comfort to those struggling. Acts of kindness create a ripple effect, inspiring others to do the same. By being empathetic and proactive, we contribute to a more caring and united society. Ultimately, helping others is not just about giving—it is about creating a world where everyone has the opportunity to thrive.";
                break;
            case 'profile':
                passage.innerHTML = "Helping others in need is a fundamental act of kindness that strengthens communities and fosters compassion. Whether through small gestures like offering a helping hand or larger efforts such as volunteering or donating, every act of support makes a difference. Helping those in distress not only improves their lives but also brings a sense of fulfillment and purpose. In times of crisis, lending assistance can provide hope and comfort to those struggling. Acts of kindness create a ripple effect, inspiring others to do the same. By being empathetic and proactive, we contribute to a more caring and united society. Ultimately, helping others is not just about giving—it is about creating a world where everyone has the opportunity to thrive.";
                break;
            case 'events':
                passage.innerHTML = "Helping others in need is a fundamental act of kindness that strengthens communities and fosters compassion. Whether through small gestures like offering a helping hand or larger efforts such as volunteering or donating, every act of support makes a difference. Helping those in distress not only improves their lives but also brings a sense of fulfillment and purpose. In times of crisis, lending assistance can provide hope and comfort to those struggling. Acts of kindness create a ripple effect, inspiring others to do the same. By being empathetic and proactive, we contribute to a more caring and united society. Ultimately, helping others is not just about giving—it is about creating a world where everyone has the opportunity to thrive.";
                break;
            case 'donors':
                passage.innerHTML = "Helping others in need is a fundamental act of kindness that strengthens communities and fosters compassion. Whether through small gestures like offering a helping hand or larger efforts such as volunteering or donating, every act of support makes a difference. Helping those in distress not only improves their lives but also brings a sense of fulfillment and purpose. In times of crisis, lending assistance can provide hope and comfort to those struggling. Acts of kindness create a ripple effect, inspiring others to do the same. By being empathetic and proactive, we contribute to a more caring and united society. Ultimately, helping others is not just about giving—it is about creating a world where everyone has the opportunity to thrive.";
                break;
            case 'reports':
                passage.innerHTML = "Helping others in need is a fundamental act of kindness that strengthens communities and fosters compassion. Whether through small gestures like offering a helping hand or larger efforts such as volunteering or donating, every act of support makes a difference. Helping those in distress not only improves their lives but also brings a sense of fulfillment and purpose. In times of crisis, lending assistance can provide hope and comfort to those struggling. Acts of kindness create a ripple effect, inspiring others to do the same. By being empathetic and proactive, we contribute to a more caring and united society. Ultimately, helping others is not just about giving—it is about creating a world where everyone has the opportunity to thrive.";
                break;
            case 'support':
                passage.innerHTML = "Helping others in need is a fundamental act of kindness that strengthens communities and fosters compassion. Whether through small gestures like offering a helping hand or larger efforts such as volunteering or donating, every act of support makes a difference. Helping those in distress not only improves their lives but also brings a sense of fulfillment and purpose. In times of crisis, lending assistance can provide hope and comfort to those struggling. Acts of kindness create a ripple effect, inspiring others to do the same. By being empathetic and proactive, we contribute to a more caring and united society. Ultimately, helping others is not just about giving—it is about creating a world where everyone has the opportunity to thrive.";
                break;
        }
        
        modal.style.display = "block";
    }
    
    function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        var modal = document.getElementById("modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
    

    document.querySelector('.clickable-image').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          redirectToLogin();
        }
      });
   