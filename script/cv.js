let Qualifications = [
     {
        Qualification: "Software Information Technology",
        Institude: "Eszterházy Károly University",
        Location: "Eger, Hungary",
        Date: "2016 - 2019" 
    },
    {
        Qualification: "Cisco CCNA certificate",
        Institude: "Eszterházy Károly University",
        Location: "Eger, Hungary",
        Date: "2018"
    },
    {
        Qualification: "English intermediate level B2 language exam",
        Institude: "Langwest",
        Location: "Eger, Hungary",
        Date: "2014 - 2015"
    },
    {
        Qualification: "Graduation certificate",
        Institude: "Balassi Bálint Secondary School",
        Location: "Kal, Hungary",
        Date: "2012 - 2014"
    },
    {
        Qualification: "Electrician certificate",
        Institude: "Wigner Jenő Secondary School",
        Location: "Eger, Hungary",
        Date: "2002 - 2003"
    }
];

let WorkExperiences = [
    {
        WorkExperience: ".NET Software Developer",
        Company: "Rosenberger Hungary Ltd.",
        Location: "Jaszarokszallas, Hungary",
        Date: "2019 - 2021"
    },
    {
        WorkExperience: "Production Support intern",
        Company: "Robert Bosch Elektronika Ltd.",
        Location: "Hatvan, Hungary",
        Date: "2018 - 2019"
    },
    {
        WorkExperience: "Software Developer intern",
        Company: "Qnszt Ltd.",
        Location: "Eger, Hungary",
        Date: "2018"
    },
    {
        WorkExperience: "Maintenance Operative",
        Company: "Grange St Paul's Hotel",
        Location: "London, U.K.",
        Date: "2015 - 2016"
    },
    {
        WorkExperience: "Computer Technician",
        Company: "Home Computer Store",
        Location: "Heves, Hungary",
        Date: "2006 - 2008"
    }    
];

let FinishedCourses = [
    {
        Course: "Learning Industrial Automation",
        Platform: "LinkedIn Learning"
    },
    {
        Course: "Learning PLC Ladder Logic",
        Platform: "LinkedIn Learning"
    },
    {
        Course: "Siemens TIA Portal - PLC Programming Basics",
        Platform: "Udemy"
    },
    {
        Course: "Angular 10 Course: Build Angular Apps",
        Platform: "Udemy"
    },
    {
        Course: "React JS Course: The Beginners Guide",
        Platform: "Udemy"
    },
    {
        Course: "HTML, JavaScript, & Bootstrap - Certification Course",
        Platform: "Udemy"
    },
    {
        Course: "Network and Operating System Ethical Hacking Course",
        Platform: "Udemy"
    },
    {
        Course: "Scanning Cyber Security Hacking Course",
        Platform: "Udemy"
    },
    {
        Course: "Create a Members Only Blog using PHP, MySQL & AJAX",
        Platform: "Udemy"
    },
    {
        Course: "PIC Microcontroller meets LabVIEW",
        Platform: "Udemy"
    }
];

let createTH = (html, parent) => {
    let th = document.createElement("th");
    th.innerHTML = html;
    parent.appendChild(th);
}

let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

/* Feltölteni a végzettségek fejlécét */
let tableQualificationsHead = document.querySelector("#tableQualifications thead");
let tr_q = document.createElement("tr");
tr_q.className = "table-info";

for (let key of Object.keys(Qualifications[0])) {
    createTH(key, tr_q)
}
tableQualificationsHead.appendChild(tr_q);

/* Feltölteni a munkatapasztalatok fejlécét */
let tableWorkExperiencesHead = document.querySelector("#tableWorkExperiences thead");
let tr_w = document.createElement("tr");
tr_w.className = "table-info";

for (let key of Object.keys(WorkExperiences[0])) {
    createTH(key, tr_w);
}
tableWorkExperiencesHead.appendChild(tr_w);

/* Feltölteni a kurzusok fejlécét */
let tableFinishedCoursesHead = document.querySelector("#tableFinishedCourses thead");
let tr_c = document.createElement("tr");
tr_c.className = "table-info";

for (let key of Object.keys(FinishedCourses[0])) {
    createTH(key, tr_c);
}
tableFinishedCoursesHead.appendChild(tr_c);

/* Feltölteni a végzettségeket */
let tableQualificationsBody = document.querySelector("#tableQualifications tbody");

for (let i in Qualifications) {
    let tr = document.createElement("tr");
    
    for (let value of Object.values(Qualifications[i])) {
        createTD(value, tr);
    }    
    
    tableQualificationsBody.appendChild(tr);
}

/* Feltölteni a munkatapasztalatokat */
let tableWorkExperiencesBody = document.querySelector("#tableWorkExperiences tbody");

for (let k in WorkExperiences) {
    let tr = document.createElement("tr");
    
    for (let value of Object.values(WorkExperiences[k])) {
        createTD(value, tr);
    }    
    
    tableWorkExperiencesBody.appendChild(tr);
}

/* Feltölteni a kurzusokat */
let tableFinishedCoursesBody = document.querySelector("#tableFinishedCourses tbody");

for (let k in FinishedCourses) {
    let tr = document.createElement("tr");
    
    for (let value of Object.values(FinishedCourses[k])) {
        createTD(value, tr);
    }    
    
    tableFinishedCoursesBody.appendChild(tr);
}
