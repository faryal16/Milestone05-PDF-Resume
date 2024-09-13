var _a;
// // Listing element
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get refrences to form elements usin Ids 
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addElement = document.getElementById("add");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // COde for URL PATH
    var usernameElement = document.getElementById('username');
    // Make a condition to get output
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        // Get VAlue From Form
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var add = addElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // /picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // URL path
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, ' '), "_cv.html");
        // Creat Resume Output
        var resumeOutput = " <h1>DownloadAble Resume <br> By CodeWithFairy</h1>\n     <h2>Personal Information</h2>\n     ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong> Name: </strong><span> ").concat(name_1, " </span><p>\n        <p><strong> Email: </strong><span> ").concat(email, " </span> <p>\n        <p><strong> Contact: </strong><span> ").concat(phone, " </span> <p>\n        <p><strong> Address: </strong><span> ").concat(add, " </span> <p>\n        \n\n\n        <h2>Education</h2>\n        <p> ").concat(education, " </p>\n        \n\n        <h2>Experience</h2>\n        <p>").concat(experience, " </p>\n        \n\n        <h2>Skills</h2>\n      <p>").concat(skills, " </p>\n\n        \n\n      ");
        //   Creat download links
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your Resume';
        // display The Resume  Output in contanier
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');
            // create Contanier for buttons
            var buttonsContanier = document.createElement('div');
            buttonsContanier.id = 'buttonsContanier';
            resumeOutputElement.appendChild(buttonsContanier);
            // Add Download PDF Button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = 'Download as PDF';
            downloadButton.addEventListener('click', function () {
                window.print(); //Open the Print dialog, allowing the users to save as PDF
            });
            buttonsContanier.appendChild(downloadButton);
            // Add Shareable Link Buttton
            var ShareLinkButton = document.createElement('button');
            ShareLinkButton.textContent = 'Copy ShareAble Link';
            ShareLinkButton.addEventListener('click', function () {
                try {
                    // Creat a Unique shareable Link (simulate in the case)
                    var Link = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                    // Use Clipboard API to Copy  The Shareable LINK
                    navigator.clipboard.writeText(Link);
                    alert('ShareAble Link copied To clipboard!');
                }
                catch (err) {
                    console.error('Failed to copy Link:', err);
                    alert('Failed to copy link to Clipboard, Please try again.');
                }
            });
            buttonsContanier.appendChild(ShareLinkButton);
        }
        else {
            console.error('Resume output contanier not Found');
        }
    }
    else {
        console.error('one or more output elements are missing!!');
    }
});
