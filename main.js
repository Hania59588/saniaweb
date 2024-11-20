const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Job Data
const jobs = [
   // IT Jobs (10 Jobs)
   { title: "Software Developer", category: "IT", location: "Karachi", description: "Develop software systems.", image: "https://i.postimg.cc/zB64qKb0/soft-eng.webp" },
   { title: "Network Engineer", category: "IT", location: "Lahore", description: "Maintain network systems.", image: "https://i.postimg.cc/BnS79M7J/network-eng-2.jpg" },
   { title: "Data Analyst", category: "IT", location: "Islamabad", description: "Analyze business data.", image: "https://i.postimg.cc/MGhYTD5M/data-ana-2.jpg" },
   { title: "Frontend Developer", category: "IT", location: "Karachi", description: "Develop user interfaces.", image: "https://i.postimg.cc/wBJmWd5M/front-end2.jpg" },
   { title: "Backend Developer", category: "IT", location: "Lahore", description: "Build server-side applications.", image: "https://i.postimg.cc/brvM0LXy/back-end-2.jpg" },
   { title: "UI/UX Designer", category: "IT", location: "Islamabad", description: "Design user experiences.", image: "https://i.postimg.cc/wjB2SPH6/istockphoto-1189377184-612x612.jpg" },
   { title: "DevOps Engineer", category: "IT", location: "Karachi", description: "Optimize deployment pipelines.", image: "https://i.postimg.cc/FRCGv4qv/deveops.jpg" },
   { title: "IT Support", category: "IT", location: "Lahore", description: "Provide IT support.", image: "https://i.postimg.cc/5NVwMrBh/images-2.jpg" },
   { title: "Database Admin", category: "IT", location: "Islamabad", description: "Manage databases.", image: "https://i.postimg.cc/dQ7g0H96/database.jpg" },
   { title: "Cybersecurity Analyst", category: "IT", location: "Karachi", description: "Ensure cybersecurity.", image: "https://i.postimg.cc/mr893ZKR/cyber1.jpg" },

   // Healthcare Jobs (9 Jobs)
   { title: "Nurse", category: "Healthcare", location: "Lahore", description: "Provide patient care.", image: "https://i.postimg.cc/1RvWQp6S/nurse.jpg" },
   { title: "Doctor", category: "Healthcare", location: "Karachi", description: "Diagnose and treat patients.", image: "https://i.postimg.cc/JzyQNvGY/doc.jpg" },
   { title: "Pharmacist", category: "Healthcare", location: "Islamabad", description: "Dispense medications.", image: "https://i.postimg.cc/vH48bt1w/pharm.jpg" },
   { title: "Lab Technician", category: "Healthcare", location: "Lahore", description: "Perform lab tests.", image: "https://i.postimg.cc/hv8QK8ZB/lab-tecnition2.jpg" },
   { title: "Surgeon", category: "Healthcare", location: "Karachi", description: "Perform surgeries.", image: "https://i.postimg.cc/JzF0Vd7X/surgon.jpg" },
   { title: "Radiologist", category: "Healthcare", location: "Islamabad", description: "Interpret medical imaging.", image: "https://i.postimg.cc/kX1XKhbH/rediologist.jpg" },
   { title: "Physiotherapist", category: "Healthcare", location: "Lahore", description: "Rehabilitate patients.", image: "https://i.postimg.cc/XJbfLDYc/phiso.jpg" },
   { title: "Paramedic", category: "Healthcare", location: "Karachi", description: "Provide emergency care.", image: "https://i.postimg.cc/zGGTPgN6/param.jpg" },
   { title: "Dentist", category: "Healthcare", location: "Islamabad", description: "Perform dental procedures.", image: "https://i.postimg.cc/sDBbHnLq/DENTISt.jpg" },

   // Education Jobs (8 Jobs)
   { title: "Math Teacher", category: "Education", location: "Islamabad", description: "Teach mathematics.", image: "https://i.postimg.cc/ZRpbLVMm/maths.jpg" },
   { title: "English Teacher", category: "Education", location: "Lahore", description: "Teach English language.", image: "https://i.postimg.cc/fys83Rds/engl.jpg" },
   { title: "Physics Teacher", category: "Education", location: "Karachi", description: "Teach physics concepts.", image: "https://i.postimg.cc/7YNdTLKV/phy-2.jpg" },
   { title: "Chemistry Teacher", category: "Education", location: "Islamabad", description: "Teach chemistry.", image: "https://i.postimg.cc/QNFPvF8B/chemistry.jpg" },
   { title: "School Principal", category: "Education", location: "Lahore", description: "Manage school operations.", image: "https://i.postimg.cc/7LBq1VXK/princippple.jpg" },
   { title: "Lecturer", category: "Education", location: "Karachi", description: "Deliver university lectures.", image: "https://i.postimg.cc/YCb5TSg9/lecture.jpg" },
   { title: "Librarian", category: "Education", location: "Islamabad", description: "Manage library resources.", image: "https://i.postimg.cc/d3bXm7zH/library.jpg" },
   { title: "Counselor", category: "Education", location: "Lahore", description: "Provide student guidance.", image: "https://i.postimg.cc/3JDQ4hPf/consjpg.jpg" },

   // Graphic Design Jobs (8 Jobs)
   { title: "Graphic Designer", category: "Graphic Design", location: "Karachi", description: "Create graphic content.", image: "https://i.postimg.cc/3RSwKSYm/graphic-desinger2.jpg" },
   { title: "UI Designer", category: "Graphic Design", location: "Lahore", description: "Design user interfaces.", image: "https://i.postimg.cc/h4NdTvRx/ui-designer-jpg.jpg" },
   { title: "Logo Designer", category: "Graphic Design", location: "Islamabad", description: "Create company logos.", image: "https://i.postimg.cc/4ycnBvRc/logo-desinger.jpg" },
   { title: "Motion Designer", category: "Graphic Design", location: "Karachi", description: "Create animations.", image: "https://i.postimg.cc/Jhhn9CWM/motion-desinger.jpg" },
   { title: "Illustrator", category: "Graphic Design", location: "Lahore", description: "Draw illustrations.", image: "https://i.postimg.cc/NGCDKm4x/ilus.jpg" },
   { title: "Brand Designer", category: "Graphic Design", location: "Islamabad", description: "Develop branding.", image: "https://i.postimg.cc/65wBkxdg/brand-desingers-2.jpg" },
   { title: "Digital Artist", category: "Graphic Design", location: "Karachi", description: "Create digital artwork.", image: "https://i.postimg.cc/RVMzPQmz/digital-artist-2.jpg" },
   { title: "Web Designer", category: "Graphic Design", location: "Lahore", description: "Design websites.", image: "https://i.postimg.cc/tRNKVZxv/web-desinger.jpg" }
];
// Function to display jobs dynamically
function displayJobs(jobsToShow) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = ""; // Clear previous jobs

    if (jobsToShow.length === 0) {
        jobList.innerHTML = `<p style="text-align: center; font-size: 1.2rem;">No jobs found.</p>`;
        return;
    }

    jobsToShow.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <img src="${job.image}" alt="${job.title}">
            <h4>${job.title}</h4>
            <p>${job.description}</p>
            <p>${job.category} | ${job.location}</p>
            <button>Apply Now</button>
        `;
        jobList.appendChild(jobCard);
    });
}

// Search and filter function
document.getElementById("searchBtn").addEventListener("click", function () {
    const searchTerm = document.getElementById("jobSearch").value.toLowerCase();
    const category = document.getElementById("categorySelect").value.toLowerCase();

    const filteredJobs = jobs.filter(job => {
        const matchesCategory = category === "all" || job.category.toLowerCase() === category;
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    displayJobs(filteredJobs);
});

// Initially display all jobs
displayJobs(jobs);
// Function to display jobs dynamically
function displayJobs(jobsToShow) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = ""; // Clear previous jobs

    if (jobsToShow.length === 0) {
        jobList.innerHTML = `<p style="text-align: center; font-size: 1.2rem;">No jobs found.</p>`;
        return;
    }

    jobsToShow.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <img src="${job.image}" alt="${job.title}">
            <h4>${job.title}</h4>
            <p>${job.description}</p>
            <p>${job.category} | ${job.location}</p>
            <button class="apply-btn" data-title="${job.title}">Apply Now</button>
        `;
        jobList.appendChild(jobCard);
    });

    // Add click event for Apply buttons
    const applyButtons = document.querySelectorAll(".apply-btn");
    applyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const jobTitle = e.target.getAttribute("data-title");
            showApplyForm(jobTitle);
        });
    });
}

// Function to show Apply form
function showApplyForm(jobTitle) {
    const applyModal = document.getElementById("applyModal");
    const jobNameField = document.getElementById("jobName");
    jobNameField.value = jobTitle; // Autofill job title
    applyModal.style.display = "block";
}

// Close Apply Modal
document.getElementById("closeModal").addEventListener("click", () => {
    const applyModal = document.getElementById("applyModal");
    applyModal.style.display = "none";
});

// Submit Apply Form
document.getElementById("applyForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your application has been submitted!");
    document.getElementById("applyModal").style.display = "none";
});