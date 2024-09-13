
// // Listing element
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get refrences to form elements usin Ids 

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addElement = document.getElementById("add") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

// COde for URL PATH
const usernameElement = document.getElementById('username') as HTMLInputElement




    
    // Make a condition to get output
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      usernameElement
    ) {


      // Get VAlue From Form
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const add = addElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      // /picture element
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :'';
// URL path
      const username = usernameElement.value;
      const uniqurPath = `resumes/${username.replace(/\s+/g, ' ')}_cv.html`
    

    // Creat Resume Output
    const resumeOutput =
     ` <h1>DownloadAble Resume <br> By CodeWithFairy</h1>
     <h2>Personal Information</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
        <p><strong> Name: </strong><span> ${name} </span><p>
        <p><strong> Email: </strong><span> ${email} </span> <p>
        <p><strong> Contact: </strong><span> ${phone} </span> <p>
        <p><strong> Address: </strong><span> ${add} </span> <p>
        


        <h2>Education</h2>
        <p> ${education} </p>
        

        <h2>Experience</h2>
        <p>${experience} </p>
        

        <h2>Skills</h2>
      <p>${skills} </p>

        

      `;


    //   Creat download links
    
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeOutput)
    downloadLink.download = uniqurPath;
    downloadLink.textContent = 'Download Your Resume';
   


// display The Resume  Output in contanier
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      
      resumeOutputElement.classList.remove('hidden');

      // create Contanier for buttons
      const buttonsContanier =document.createElement('div');
      buttonsContanier.id = 'buttonsContanier';
      resumeOutputElement.appendChild(buttonsContanier);
     


      // Add Download PDF Button
      const downloadButton = document.createElement("button");
      downloadButton.textContent = 'Download as PDF';
      downloadButton.addEventListener('click', () => {
        window.print();  //Open the Print dialog, allowing the users to save as PDF
      });
      buttonsContanier.appendChild(downloadButton);

      // Add Shareable Link Buttton
const ShareLinkButton = document.createElement('button');
ShareLinkButton.textContent = 'Copy Link';
ShareLinkButton.addEventListener('click',function () {
    try {

      // Creat a Unique shareable Link (simulate in the case)
      const Link = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;

      // Use Clipboard API to Copy  The Shareable LINK
      navigator.clipboard.writeText(Link);
      alert('ShareAble Link copied To clipboard!');
    } catch (err) {
      console.error('Failed to copy Link:', err);
      alert('Failed to copy link to Clipboard, Please try again.');
    }
  });
buttonsContanier.appendChild(ShareLinkButton);

    }else{
      console.error('Resume output contanier not Found')
    }
    }else{
        console.error('one or more output elements are missing!!')
    }
  });
  
  




  