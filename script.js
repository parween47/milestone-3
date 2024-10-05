"use strict";
const startProcess = document.getElementById("getResumeButton");
startProcess.addEventListener("click", (e) => {
    e.preventDefault(); 
    buildResume(); 

});
function buildResume() {
    var _a;
    const nameInput = document.getElementById("name");
    const jobTitleInput = document.getElementById("jobTitle");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const linkdinInput = document.getElementById("linkdin");
    const addressInput = document.getElementById("address");
    const personalDetailInput = document.getElementById("personalDetail");
    const certificateInput = document.getElementById("certificate");
    const educationInput = document.getElementById("education");
    const experienceInput = document.getElementById("experience");
    const skillsInput = document.getElementById("skills");
    const profileImageInput = document.getElementById("profileImage");
    const currentImage = document.getElementById("profilePic");
    const name = nameInput.value;
    const jobTitle = jobTitleInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const linkdin = linkdinInput.value;
    const address = addressInput.value;
    const personalDetail = personalDetailInput.value;
    const certificate = certificateInput.value
        .split(",")
        .map((element) => element.trim());
    const education = educationInput.value
        .split(",")
        .map((element) => element.trim());
    const experience = experienceInput.value
        .split(",")
        .map((element) => element.trim());
    const skill = skillsInput.value
        .split(",")
        .map((element) => element.trim());
    let nameOutput = document.getElementById("nameCv");
    let jobTitleOutput = document.getElementById("jobTitleCv");
    let emailOutput = document.getElementById("emailCv");
    let phoneOutput = document.getElementById("phoneCv");
    let linkdinOutput = document.getElementById("linkdinCv");
    let addressOutput = document.getElementById("addressCv");
    let personalDetailOutput = document.getElementById("personalDetailCv");
    nameOutput.textContent = name || "John Doe";
    jobTitleOutput.textContent = jobTitle || "Job Title";
    emailOutput.textContent = email || "***@gmail.com";
    phoneOutput.textContent = phone || "03*********";
    linkdinOutput.textContent = linkdin || "John Doe";
    addressOutput.textContent = address || "1234 Oakwood Drive";
    personalDetailOutput.innerHTML =
        personalDetail ||
            "Highly motivated and adaptable professionalwith astrong work ethic and passion for learning. Proven ability to colloborate effectively and drive results in dynamic environment";
    const skillsCv = document.getElementById("skillsCv");
    skillsCv.innerHTML = "";
    skill.forEach((element) => {
        const skillElement = document.createElement("li");
        skillElement.textContent = element || "English Communication";
        skillsCv.appendChild(skillElement);
    });
    const educationCv = document.getElementById("educationCv");
    educationCv.innerHTML = "";
    for (let i = 0; i < education.length; i += 3) {
        const degree = education[i];
        const place = education[i + 1];
        const year = education[i + 2];
        const yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = `${year || ""}`;
        const degreeElement = document.createElement("P");
        degreeElement.innerHTML = `<b><span>${degree || "Degree in higher education"}</span></b>`;
        const placeElement = document.createElement(`P`);
        placeElement.innerHTML = `${place || "Abc college"}`;
        const lineBreakElement = document.createElement("br");
        educationCv.appendChild(yearElement);
        educationCv.appendChild(degreeElement);
        educationCv.appendChild(placeElement);
        educationCv.appendChild(lineBreakElement);
    }
    const experienceCv = document.getElementById("experienceCv");
    experienceCv.innerHTML = "";
    for (let i = 0; i < experience.length; i += 3) {
        const postName = experience[i];
        const corporation = experience[i + 1];
        const year = experience[i + 2];
        const yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = `${year || ""}`;
        const postElement = document.createElement("P");
        postElement.innerHTML = `<b><span>${postName || "ABC Post"}</span></b>`;
        const corporationElement = document.createElement(`P`);
        corporationElement.innerHTML = `${corporation || "Abc corporation"}`;
        const lineBreakElement = document.createElement("br");
        experienceCv.appendChild(yearElement);
        experienceCv.appendChild(postElement);
        experienceCv.appendChild(corporationElement);
        experienceCv.appendChild(lineBreakElement);
    }
    const certificationContainer = document.getElementById("certificationContainer");
    certificationContainer.innerHTML = "";
    for (let i = 0; i < certificate.length; i += 3) {
        const courseName = certificate[i];
        const academy = certificate[i + 1];
        const year = certificate[i + 2];
        const yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = `${year || ""}`;
        const courseElement = document.createElement("P");
        courseElement.innerHTML = `<b><span>${courseName || "XYZ course"}</span></b>`;
        const academyElement = document.createElement(`P`);
        academyElement.innerHTML = `${academy || "XYZ institute"}`;
        const lineBreakElement = document.createElement("br");
        certificationContainer.appendChild(yearElement);
        certificationContainer.appendChild(courseElement);
        certificationContainer.appendChild(academyElement);
        certificationContainer.appendChild(lineBreakElement);
    }
    const file = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        currentImage.src = URL.createObjectURL(file);
    }
}
