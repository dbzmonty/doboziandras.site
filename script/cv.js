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
        Date: "2015"
    },
    {
        Qualification: "Graduation certificate",
        Institude: "Balassi Bálint Secondary School",
        Location: "Kal, Hungary",
        Date: "2014"
    },
    {
        Qualification: "Electrician certificate",
        Institude: "Wigner Jenő Secondary School",
        Location: "Eger, Hungary",
        Date: "2003"
    }
];

let WorkExperiences = [
    {
        WorkExperience: ".NET Software Developer",
        Company: "Rosenberger Hungary Ltd.",
        Location: "Jaszarokszallas, Hungary",
        Date: "2019 - Now"
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
        Company: "Grange St Paul’s Hotel",
        Location: "London, U.K.",
        Date: "2015 - 2016"
    },
    {
        WorkExperience: "Computer Technician",
        Company: "Home Computer Store",
        Location: "Heves, Hungary",
        Date: "2006 - 2009"
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
