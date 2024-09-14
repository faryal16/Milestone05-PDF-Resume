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

const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement
const shareableLinkContanier = document.getElementById('shareable-link-contanier') as HTMLDivElement



    
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
      const uniquePath = `resumes/${username.replace(/\s+/g, ' ')}_cv.html`
    

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
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your Resume';
   


// // display The Resume  Output in contanier
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      
      resumeOutputElement.appendChild(downloadLink)
      resumeOutputElement.style.display = 'block' 
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

    //   Generate  a shareable  URL with username  only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the  Shareable link

    shareableLinkContanier.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL

// Prefillthe form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParms = new URLSearchParams(window.location.search);
    const username = urlParms.get('username');
    if(username){
        const savedResumeData = localStorage.getItem(username);
    }
})



    }else{
      console.error('Resume output contanier not Found')
    }
    }else{
        console.error('one or more output elements are missing!!')
    }
  });
  
  




  