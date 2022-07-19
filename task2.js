let Resume = {
    personalDetails : {
        name : "Sivanesh M",
        profession : "Planning Engineer",
        yearOfExperinece : 6,
        contactNumber : "+971-588956032",
        emailId : "shivaaarthi08@gmail.com",
        aboutMe : function()    {
            return `I am ${this.name} Mechanical Engineering Graduate having over ${this.yearOfExperinece} as a ${this.profession}. A Highly skilled and enthusiastic person currently Seeking challenging assignments in new role. you can contact me anytime in mob ${this.contactNumber} and my active emailid ${this.emailId}.`
        }
        },
    experineceDetails : {
        companyName : "Dolphin Manufacturing LLC",
        from : "25Dec-2017",
        to : "At present",
        role : "Production Planning Engineer",
        responsibilities : ["1) To prepare the planning data based on the customers requirement.","2) To prepare the Plan Vs. Production data in section wise & Product wise (Fin/Tube/Core Assembly section ,Fabrication section, Radiator assembly section , Painting section & Delivery Section", "3) Establishing, developing, periodic work progress reports for consultant & client and higher management", "4) Implement the work schedule and monitor progress of the work for timely execution of the project through daily/weekly/monthly/ reports with respect to review of the overall project"],
        listing : function() {
            let kpi ="";
            for( let role of this.responsibilities)  {
                kpi+=role +"\n ";
            }return kpi
        },
        inDetail : function()  {
            return `${this.to}, I am working in ${this.companyName} as a ${this.role} from dated ${this.from}. My key responsilities are ${this.listing()}.`
        }
    },
    educationDetails : [
        {
        degree : "Mechanical Engineering",
        yearOfPassout : 2015,
        cgpa : 7.6,
        collegeName : "University VOC College of Engineering, Thoothukudi"
    }, 
    {
    schoolHS : "Maths Boilogy",
    yearOfPassout : 2011,
    cgpa : "86%",
    collegeName : "St.Lawrence HS School Madathatuvilai"
    }]
    
    
}
console.log(Resume.personalDetails.aboutMe());
console.log(Resume.experineceDetails.inDetail());
