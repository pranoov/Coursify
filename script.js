let newUsername, newPassword, newName;
let username, password;
var database = firebase.database();
var questionNumber = 1;
var questionCount = 4;
var currentYear;
var graduateLevel;
var courseCodes = [];
var courseNames = [];
var currentEnglish;
var currentMath;
var currentScience;
var career;
var year;
 var objects, values;
var gradYear;
var todayYear = new Date().getFullYear();
var Careers = ["Agriculture, Food & Natural Resources","Architecture & Construction","Arts & Communication","Business Management & Administration","Education & Training","Finance & Accounting","Government & Public Administration","Health Science","Hospitality & Tourism","Human Services","Interactive and Information Technology","Law, Public Safety, Corrections & Security","Manufacturing","Marketing","Science,Technology, Engineering & Math","Transportation, Distribution & Logistics"]
var agricultureCourses = ["G143","H266","G349","G359","H224","H243","H266","H267","S234","S332","S338","H333","H466","H467","S333","S335","S336","S338","S369","S347","G442","G446","H225","S432","S439","S449","S469"]
var constructionCourses = ["A152","A252","T144","T166","T202","A253","A352","H244","T245","T266","T276","T302","A487","H446","T346","T347","T366","T377","T408","T418","A489","A497","H447"]
var artsCourses = ["A152","A195","A196","A252","B164","B164","C124","C135","C157","H173","H276","L142","L152","L162","L163","L165","L166","L276","T174","A233","A234","A253","A254","A255","A256","A295","A296","A352","A355","B164","B232","C224","C235","C236","C257","E203","E204","E205","E207","E212","H275","H277","H244","L252","L262","L362","L263","L266","L366","L376","T254","T276","A353", "A354", "A397", "A399", "A467", "A487", "B232", "B366", "C324", "C336", "C357", "C365", "T346", "E303", "E307", "E317", "H476", "L352", "L366", "L376", "L362", "L363", "L462", "L466", "L476","A489", "A497", "A499", "A599", "B232", "B366", "C324", "C336", "C457", "C365", "T446", "S432", "E214", "E405", "H482", "H477", "L549", "L462", "L466", "L559", "L569", "L579", "L589"]
var businessCourses = ["B164", "B184", "L142", "L152", "L162", "L163", "L165", "L166", "L276","B223", "B384", "B397", "E203", "E204", "H224", "G216", "G262", "L252", "L262", "L362", "L263", "L266", "L366", "L376","B384", "B386", "B387", "B397", "G343", "G353", "G379", "L352", "L366", "L376", "L362", "L363", "L462", "L466", "L476","B384", "B386", "B387", "B397", "B488", "G459", "G462", "G466", "G469", "L549", "L462", "L466", "L559", "L569", "L579", "L589"]
var educationCourses = ["A152", "A252", "B162", "B163", "B184", "C124", "C136", "C157", "H173", "L142", "L152", "L162", "L163", "L165", "L166", "L276", "R226", "A252", "A253", "A255", "B274", "C224", "C235", "C236", "C257", "E203", "H253", "H254", "L252", "L262", "L362", "L263", "L266", "L366", "L376", "A252", "A253", "A255", "B366", "B384", "C324", "C336", "C357", "C365", "G343", "G353", "G379", "E305", "H253", "H254", "H453", "H455", "H456", "H457", "L352", "L366", "L376", "L362", "L363", "L462", "L466", "L476", "P361", "P362", "A252", "A253", "A255", "B332", "C324", "C336", "C357.", "H253", "H254", "H453", "H454", "H455", "H456", "H457", "L549", "L462", "L466", "L559", "L569", "L579", "L589"]
var financeCourses = ["B164", "B184", "G143", "G146", "L142", "L152", "L162", "L163", "L165", "L166", "L276", "B164", "B184", "B223", "B285", "B386", "B397", "G262", "H243", "L252", "L262", "L362", "L263", "L266", "L366", "L376", "B223", "B285", "B386", "B387", "B396", "B397", "G336", "G342", "L352", "L366", "L376", "L362", "L363", "L462", "L466", "L476", "B386", "B387", "B396", "B397", "G466", "G469", "L549", "L462", "L466", "L559", "L569", "L579", "L589"]
var governmentCourses = ["G143", "G146", "G349", "L142", "L152", "L162", "L163", "L165", "L166", "L276", "G216", "G236", "G262", "G339", "G359", "G369", "L252", "L262", "L362", "L263", "L266", "L366", "L376", "G336", "G331", "G339", "G341", "G342", "G359", "G365", "G369", "L352", "L366", "L376", "L362", "L363", "L462", "L466", "L476", "G462", "G469", "G472", "G479", "L549", "L462", "L466", "L559", "L569", "L579", "L589"]
var healthCourses = ["L142", "L152", "L162", "L163", "L165", "L166", "L276", "S137", "S138", "L252", "L262", "L362", "L263", "L266", "L366", "L376", "P242", "S332", "S338", "G343", "G353", "G379", "L352", "L366", "L376", "L362", "L363", "L462", "L466", "L476", "P242", "R313", "S332", "S432", "S369", "S437", "G343", "G353", "G379", "L549", "L462", "L466", "L559", "L569", "L579", "L589", "R313", "R314", "S352", "S437", "S439", "S443", "$449", "S478"]
var hospitalityCourses = ["B164", "B184", "C124", "C135", "C136", "C157", "G143", "G146", "H266", "L142", "L152", "L162", "L163", "L165", "L166", "L276", "B164", "B184", "B223", "B224", "C224", "C235", "C236", "C257", "G262", "G349", "H224", "H243", "H266", "H267", "H275", "L252", "L262", "L362", "L263", "L266", "L366", "L376", "B223", "B224", "B225", "B384", "C324", "C336", "C357", "C365", "H224", "H225", "H266", "H267", "H346", "H352", "H466", "H467", "L549", "L462", "L466", "L559", "L569", "L579", "L589", "B223", "B224", "B225", "B384", "C324", "C336", "C357", "C365", "C424", "C457", "H224", "H225", "H266", "H267", "H346", "H352", "H466", "H467", "L549", "L462", "L466", "L559", "L569", "L579", "L589"]
var humanCourses = ["B164", "C124", "C135", "C136", "C157", "H173", "L142", "L152", "L162", "L163", "L165", "L166", "L276", "B285", "C224", "C235", "C236", "C257", "H243", "H253", "H253", "L252", "L262", "L362", "L263", "L266", "L366", "L376", "B285", "B384", "B387", "C324", "C336", "C357", "C365", "G343", "G353", "G379", "H345", "H352", "L352", "L366", "L376", "L362", "L363", "L462", "L466", "L476", "P327", "P334", "P345", "P361", "R313", "B285", "B384", "B387", "C324", "C336", "C357", "C365", "C424", "C457", "G343", "G353", "G379", "H452", "H453", "H454", "H455", "H456", "H457", "L549", "L462", "L466", "L559", "L569", "L579", "L589", "P345", "P362", "P427", "P434", "R313"]
var technologyCourses = ["A195","A196","A233","A234","A295","A296","A397","A497","B162","B223","B232","B274","B397","M256","M319","M359","M257","M468","T202","T302","T408","T174","T273","T276","T377","T477","T166","T266","T366","T466"]
var lawCourses = ["B184","B386","R226","B387","B397","G365","G342","G343","G353","G379","S352","B384","B488","G462","G472","G343","G353"]
var manufacturingCourses = ["T144","T244","S432","T344","T444"]
var marketingCourses = ["A195", "A196", "B164", "B184", "H173", "H276", "A233", "A234", "A254", "A255", "A295", "A296", "B223", "B224", "B274", "B396", "H224", "H275", "H243", "H244", "H277", "A397", "A467", "B223", "B225", "B274", "B396", "H225", "H476", "A497", "A499", "B223", "B274", "B396", "H482"]
var scienceCourses = ["M117", "M147", "M217", "M218", "M256", "M319", "M328", "S131", "S137", "S138", "T134", "T144", "T166", "T174", "T202", "M217", "M248", "M256", "M308", "M317", "M319", "M328", "M359", "M418", "M439", "S221", "S233", "S234", "S332", "S338", "T235", "T244", "T245", "T266", "T273", "T276", "T302", "M217", "M248", "M256", "M308", "M317", "M319", "M328", "M359", "M418", "M439", "S221", "S233", "S234", "S332", "S338", "T235", "T244", "T245", "T266", "T273", "T276", "T302", "T377", "T418", "T438", "M256", "M319", "M359", "M417", "M418", "M419", "M447", "M449", "M579", "M459", "M468", "M479", "R313", "S314", "S332", "S333", "S334", "S335", "S336", "S344", "S347", "S352", "S432", "S437", "S439", "S443", "S449", "S457", "S458", "S468", "S469", "S478", "S457", "S458", "S468", "S469", "S478", "T437", "T446", "T447", "T466", "T477", "T487", "T408", "T428"]
var transportationCourses = ["B164","B184","T134","B223","T235","B384","B387","B397","T336","T437","T487"]
var electives = ["Applied Technology","Art & Media","Business Education","Family & Consumer Sciences","Music","World Language"]

//authenticates the login
function LoginCheck(){
  username = document.getElementById("nameLogin").value;
  password = document.getElementById("passwordLogin").value;
  localStorage.username = username;
  localStorage.password = password;
  console.log(username)
  console.log(password)
  database.ref(username + '/password').on("value", function (data) {
    if(data.val() === password){
      window.location.href = "dashboard.html"
    }else{
      document.getElementById("errorLabel").className = "errorMessage";
    }
  })
}

function SignUp(){
  newUsername = document.getElementById("usernameInput").value;
  newPassword = document.getElementById("passwordInput").value;
  newFirstName = document.getElementById("firstNameInput").value;
  newLastName = document.getElementById("lastNameInput").value;
  newMiddleInitial = document.getElementById("middleInitialInput").value;
  database.ref("/" + newUsername).set({
    password: newPassword,
    firstName: newFirstName,
    lastName: newLastName,
    middleInitial: newMiddleInitial,
    schoolName: "undefined",
    schoolYear: "undefined",
  })
  window.location.href = "dashboard.html";
}

function updateInfo(){
  window.location.href = "create.html";    
}


function set(){
  if(localStorage.username != undefined){
    var list;
    console.log(localStorage.username)
  database.ref(localStorage.username + "/firstName").on("value", function(data){
    document.getElementById("label1").innerHTML = "Hello " + data.val() + "!"
  })
  document.getElementById("accountLabel").innerHTML = " " + localStorage.username
    //Work on this
  database.ref(localStorage.username + "/").on("value", function(data){
    list = Object.keys(data.val())
    console.log(list)
    
    if(list.includes("schoolName")){
      document.getElementById("cardTitle").innerHTML = "Add Your Courses!"
      document.getElementById("cardInfo").innerHTML = "Start setting up your courses for your next year at High-School. Answer questions, choose your interests, and build your courses."
      localStorage.questionType = "Courses"
    }else{
      document.getElementById("cardTitle").innerHTML = "Update Your Information"
      document.getElementById("cardInfo").innerHTML = "Add information about yourself, to continue finishing your profile. Then you can start setting up your courses!"
      localStorage.questionType = "Information"
    }
  })
    
    
  }else {
    window.location.href = "login.html"
  }
}

function setQuestions(){
  if(localStorage.questionType === "Information"){
    questionCount = 2;
    informationQuestions()
  }
  if(localStorage.questionType === "Courses"){
    questionCount = 12;
    courseQuestions()
  }
}


function nextQuestion(){
  if(localStorage.questionType === "Information"){
    //update school name in database
  if(questionNumber === 1){
    if(document.getElementById("questionInput").value != ""){
    schoolName = document.getElementById("questionInput").value
    database.ref("/" + localStorage.username).update({
    schoolName: schoolName
  })
    questionNumber += 1;
    informationQuestions()
    }else{
      window.alert("Please fully type in your School Name")
    }
  }
  if(questionNumber === 2){
    gradYear = document.getElementById("questionInput").value
     if(gradYear.length > 0){
    database.ref("/" + localStorage.username).update({
      graduationYear: gradYear
    })
       questionNumber += 1;
       informationQuestions();
    
  }
    if(questionNumber === 3){
  database.ref(localStorage.username).update({
      freshmanSummerCourse : document.getElementById("questionInput").value
    })

      questionNumber += 1;
      informationQuestions();
     }
     }
  }
  if(localStorage.questionType === "Courses"){
    if(questionNumber === 1 && currentYear != undefined){
    questionNumber += 1;
    courseQuestions();
    }else if(questionNumber === 2){
      database.ref("/" + localStorage.username).update({
         career : document.getElementById("careerSelect").value
      })
      questionNumber += 1;
      courseQuestions();
    }else if(questionNumber === 3 || questionNumber === 4 || questionNumber === 6 || questionNumber === 8){
      questionNumber += 1;
      courseQuestions();
    }else if(questionNumber === 5){
      updateCourses("English");
      questionNumber += 1;
      courseQuestions();
    }else if(questionNumber === 7){
      updateCourses("Mathematics");
      questionNumber += 1;
      courseQuestions();
    }else if(questionNumber === 9){
        updateCourses("Science")
      questionNumber += 2;
      courseQuestions();
      }else if(questionNumber === 10){
    console.log("hello")
      updateCourses("Social Studies")
      questionNumber += 1;
      courseQuestions();
    }else if(questionNumber === 11){
      if(currentYear === "Freshman"){
      database.ref("/" + localStorage.username).update({
         freshmanElective1 : document.getElementById("electiveSelect2").value
      })}
      if(currentYear === "Sophomore"){
      database.ref("/" + localStorage.username).update({
         sophomoreElective1 : document.getElementById("electiveSelect2").value
      })}
      if(currentYear === "Junior"){
      database.ref("/" + localStorage.username).update({
          juniorElective1 : document.getElementById("electiveSelect2").value
      })}
      if(currentYear === "Senior"){
      database.ref("/" + localStorage.username).update({
         seniorElective1 : document.getElementById("electiveSelect2").value
      })}
      questionNumber += 1;
      courseQuestions();
    }else if(questionNumber === 12){
      if(currentYear === "Freshman"){
      database.ref("/" + localStorage.username).update({
         freshmanElective2 : document.getElementById("electiveSelect2").value
      })}
      if(currentYear === "Sophomore"){
      database.ref("/" + localStorage.username).update({
         sophomoreElective2 : document.getElementById("electiveSelect2").value
      })}
      if(currentYear === "Junior"){
      database.ref("/" + localStorage.username).update({
          juniorElective2 : document.getElementById("electiveSelect2").value
      })}
      if(currentYear === "Senior"){
      database.ref("/" + localStorage.username).update({
         seniorElective2 : document.getElementById("electiveSelect2").value
      })}
      questionNumber += 1;
      courseQuestions();
    }
    }
  }


function updateCourses(subject){
  if(subject === "English"){
   if(currentYear === "Freshman"){
      database.ref("/" + localStorage.username).update({
         freshmanEnglish : document.getElementById("englishSelect").value
      })}
      if(currentYear === "Sophomore"){
      database.ref("/" + localStorage.username).update({
         sophomoreEnglish : document.getElementById("englishSelect").value
      })}
      if(currentYear === "Junior"){
      database.ref("/" + localStorage.username).update({
          juniorEnglish : document.getElementById("englishSelect").value
      })}
      if(currentYear === "Senior"){
      database.ref("/" + localStorage.username).update({
         seniorEnglish : document.getElementById("englishSelect").value
      })}
  }
  if(subject === "Mathematics"){
    if(currentYear === "Freshman"){
      database.ref("/" + localStorage.username).update({
         freshmanMathematics : document.getElementById("mathSelect").value
      })}
      if(currentYear === "Sophomore"){
      database.ref("/" + localStorage.username).update({
         sophomoreMathematics : document.getElementById("mathSelect").value
      })}
      if(currentYear === "Junior"){
      database.ref("/" + localStorage.username).update({
          juniorMathematics : document.getElementById("mathSelect").value
      })}
      if(currentYear === "Senior"){
      database.ref("/" + localStorage.username).update({
         seniorMathematics : document.getElementById("mathSelect").value
      })}
  }
  if(subject === "Science"){
    if(currentYear === "Freshman"){
      database.ref("/" + localStorage.username).update({
         freshmanScience : document.getElementById("scienceSelect").value
      })}
      if(currentYear === "Sophomore"){
      database.ref("/" + localStorage.username).update({
         sophomoreScience : document.getElementById("scienceSelect").value
      })}
      if(currentYear === "Junior"){
      database.ref("/" + localStorage.username).update({
          juniorScience : document.getElementById("scienceSelect").value
      })}
      if(currentYear === "Senior"){
      database.ref("/" + localStorage.username).update({
         seniorScience : document.getElementById("scienceSelect").value
      })}
  }
  if(subject === "Social Studies"){
    if(currentYear === "Freshman"){
      database.ref("/" + localStorage.username).update({
         freshmanSocialStudies : document.getElementById("socialstudiesSelect").value
      })}
      if(currentYear === "Sophomore"){
      database.ref("/" + localStorage.username).update({
         sophomoreSocialStudies : document.getElementById("socialstudiesSelect").value
      })}
      if(currentYear === "Junior"){
      database.ref("/" + localStorage.username).update({
          juniorSocialStudies : document.getElementById("socialstudiesSelect").value
      })}
      if(currentYear === "Senior"){
      database.ref("/" + localStorage.username).update({
         seniorSocialStudies : document.getElementById("socialstudiesSelect").value
      })}
  }
  if(subject === "Wellness"){
    if(currentYear === "Freshman"){
      database.ref("/" + localStorage.username).update({
         freshmanWellness : document.getElementById("wellnessSelect").value
      })}
      if(currentYear === "Sophomore"){
      database.ref("/" + localStorage.username).update({
         sophomoreWellness : document.getElementById("wellnessSelect").value
      })}
      if(currentYear === "Junior"){
      database.ref("/" + localStorage.username).update({
          juniorWellness : document.getElementById("wellnessSelect").value
      })}
      if(currentYear === "Senior"){
      database.ref("/" + localStorage.username).update({
         seniorWellness : document.getElementById("wellnessSelect").value
      })}
  }
}

function skipQuestion(){
  questionNumber += 1;
  courseQuestions();
}

function backQuestion(){
  if(localStorage.questionType === "Information"){
  if(questionNumber > 0){
  questionNumber -= 1;
  informationQuestions()
  }
  }
  if(localStorage.questionType === "Courses"){
    if(questionNumber > 0){
      questionNumber -= 1;
      courseQuestions();
    }
  }
}

function finishQuestion(){
  if(localStorage.questionType === "Information"){
    if(questionNumber === 3){
      database.ref(localStorage.username).update({
        freshmanEnglish : document.getElementById("englishInput").value,
        freshmanMathematics : document.getElementById("mathInput").value,
        freshmanScience : document.getElementById("scienceInput").value,
        freshmanSocialStudies : document.getElementById("socialstudiesInput").value,
        freshmanWellness : document.getElementById("wellnessInput").value,
        freshmanElective1 : document.getElementById("elective1Input").value,
        freshmanElective2 : document.getElementById("elective2Input").value
      })
    }
  }
  if(localStorage.questionType === "Courses"){
    if(questionNumber === 13){
      updateCourses("Wellness")
    }
  }
  window.location.href = "dashboard.html";
}

function informationQuestions(){
  questionCount = 4;
  if(questionNumber === 1){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("extraInputs").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Enter the High School You Are Attending"
    document.getElementById("questionInput").placeholder = "High-School"
    document.getElementById("questionInput").style.display = "inline";
    document.getElementById("questionInput").innerHTML = "";
    document.getElementById("questionDoneButton").style.display = "none";
    document.getElementById("electiveSelect").style.display = "none";
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    document.getElementById("freshmanButton").style.display = "none";
    document.getElementById("sophomoreButton").style.display = "none";
    document.getElementById("juniorButton").style.display = "none";
    document.getElementById("seniorButton").style.display = "none";
    document.getElementById("learnMore").style.display = "none";
    document.getElementById("wellnessSelect").style.display = "none";
  }else if(questionNumber === 2){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("extraInputs").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "What year will you graduate from High-School?"
    document.getElementById("questionInput").placeholder = "Year";
    document.getElementById("questionInput").value = "";
    document.getElementById("electiveSelect").style.display = "none";
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    document.getElementById("learnMore").style.display = "none";
    document.getElementById("wellnessSelect").style.display = "none";
  }
  if(questionNumber === 3){
     document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("extraInputs").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Have you taken any summer courses for your Freshman year?"
    document.getElementById("questionInput").placeholder = "Course";
    document.getElementById("questionInput").value = "";
    document.getElementById("electiveSelect").style.display = "none";
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    document.getElementById("learnMore").style.display = "none";
    document.getElementById("wellnessSelect").style.display = "none";
  }
  if(questionNumber === 4){
    document.getElementById("yearButtons").style.display = "none";
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("extraInputs").style.display = "inline";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").style.display = "none";
    document.getElementById("questionInput").style.display = "none";
    document.getElementById("questionInput").innerHTML = "";
    document.getElementById("electiveSelect").style.display = "none";
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    document.getElementById("learnMore").style.display = "none";
    document.getElementById("wellnessSelect").style.display = "none";
  }
  if(questionNumber != questionCount){
    document.getElementById("questionNextButton").style.display = "inline";
  }
  if(questionNumber === 4 && questionNumber > 2){
    document.getElementById("questionNextButton").style.display = "none";
    document.getElementById("questionDoneButton").style.display = "inline";
  }
  document.getElementById("questionNumberText").innerHTML = questionNumber + "/" + questionCount
}

function courseQuestions(){
  questionCount = 13;
  if(questionNumber === 1){
    document.getElementById("extraInputs").style.display = "none";
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
  document.getElementById("questionTitle").innerHTML = "What year of High-School will you start planning for?";
  document.getElementById("questionInput").style.display = "none";
document.getElementById("questionDoneButton").style.display = "none";
    document.getElementById("freshmanButton").innerHTML = "Freshman"
    document.getElementById("sophomoreButton").innerHTML = "Sophomore"
    document.getElementById("juniorButton").innerHTML = "Junior"
    document.getElementById("seniorButton").innerHTML = "Senior"
    document.getElementById("electiveSelect").style.display = "none";
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    document.getElementById("wellnessSelect").style.display = "none";
    resetButtonColors();
    if(currentYear != undefined){
      document.getElementById(currentYear.toLowerCase() + "Button").style.background = "cyan";
    }
  }
  if(questionNumber === 2){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "What college or school will you graduate from?"
    document.getElementById("freshmanButton").innerHTML = "High-School"
    document.getElementById("sophomoreButton").innerHTML = "Community College"
    document.getElementById("juniorButton").innerHTML = "3-4 year University"
    document.getElementById("seniorButton").innerHTML = "Top University School"
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    resetButtonColors();
    if(graduateLevel != undefined){
      switch(graduateLevel){
        case "High-School": document.getElementById("freshmanButton").style.background = "cyan";
        break;
        case "Community College": document.getElementById("sophomoreButton").style.background = "cyan";
        break;
        case "3-4 year University": document.getElementById("juniorButton").style.background = "cyan";
        break;
        case "Top University School": document.getElementById("seniorButton").style.background = "cyan";
        break;
      }
    }
  }
  if(questionNumber === 3){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "inline";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "What career do you plan to pursue?"
    document.getElementById("yearButtons").style.display = "none"
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    for(var i = 0; i < Careers.length; i++){
    var select = document.getElementById("careerSelect")
    var option = document.createElement('option');
    option.value = Careers[i];
    option.innerHTML = Careers[i];
    select.appendChild(option);
    }
  }
  if(questionNumber === 4){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Let's Start of with English"
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
  }
  if(questionNumber === 5){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "inline";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Choose your English Course" 
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
     
    database.ref("Courses/" + currentYear + "/English").on("value", function(data){
      console.log(data.val())
      courseCodes = Object.keys(data.val());
      courseNames = Object.values(data.val());
  for(var i = 0; i < courseCodes.length; i++){ 
    var select = document.getElementById("englishSelect")
    var option = document.createElement('option');
    var length = courseNames[i].length;
    var name = courseNames[i];
    option.value = courseCodes[i] + ": " + name;
    option.innerHTML = courseCodes[i] + ": " + name;;
    select.appendChild(option);
      }
    })
  }
  if(questionNumber === 6){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Let's move onto Math!"
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
  }
  if(questionNumber === 7){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "inline";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Choose your Math Course"
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
  
    database.ref("Courses/" + currentYear + "/Mathematics").on("value", function(data){
      console.log(data.val())
      courseCodes = Object.keys(data.val());
      courseNames = Object.values(data.val());
  for(var i = 0; i < courseCodes.length; i++){ 
    var x = i + 1;
   var select = document.getElementById("mathSelect")
    var option = document.createElement('option');
    var length = courseNames[i].length;
    var name = courseNames[i]
    option.value = courseCodes[i] + ": " + name;
    option.innerHTML = courseCodes[i] + ": " + name;;
    select.appendChild(option);

      }
      
    })
  }
  if(questionNumber === 8){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    //document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Let's move onto Science!"
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
  }
  if(questionNumber === 9){
    document.getElementById("learnMore").style.display = "inline";
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "inline";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "inline";
    document.getElementById("questionTitle").innerHTML = "Choose your Science Course"
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    database.ref("Courses/" + currentYear + "/Science").on("value", function(data){
      console.log(data.val())
      courseCodes = Object.keys(data.val());
      courseNames = Object.values(data.val());
  for(var i = 0; i < courseCodes.length; i++){ 
    var x = i + 1;
   var select = document.getElementById("scienceSelect")
    var option = document.createElement('option');
    var length = courseNames[i].length;
    var name = courseNames[i]
    option.value = courseCodes[i] + ": " + name;
    option.innerHTML = courseCodes[i] + ": " + name;;
    select.appendChild(option);

      }
    })
  }
  if(questionNumber === 10){
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "inline";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("electiveSelect").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Choose your Social Studies Course"
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";

    database.ref("Courses/" + currentYear + "/Social Studies").on("value", function(data){
      console.log(data.val())
      courseCodes = Object.keys(data.val());
      courseNames = Object.values(data.val());
  for(var i = 0; i < courseCodes.length; i++){ 
    var x = i + 1;
  var select = document.getElementById("socialstudiesSelect")
    var option = document.createElement('option');
    var length = courseNames[i].length;
    var name = courseNames[i]
    option.value = courseCodes[i] + ": " + name;
    option.innerHTML = courseCodes[i] + ": " + name;;
    select.appendChild(option);
      }
     
    })
  }
  if(questionNumber === 11 || questionNumber === 12){
    var select2 = document.getElementById("electiveSelect2")
    if(questionNumber === 12){
      while(select2.length > 0){
      console.log("working")
      
  select2.remove(select2.length-1);
}
    }
    document.getElementById("careerSelect").style.display = "none";
     document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("extraInputs").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionDoneButton").style.display = "none";
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("yearButtons").style.display = "none";
    document.getElementById("questionInput").style.display = "none"
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("electiveSelect").style.display = "inline";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    if(questionNumber === 11)document.getElementById("questionTitle").innerHTML = "Choose your 1st Elective"
    if(questionNumber === 12)document.getElementById("questionTitle").innerHTML = "Choose your 2nd Elective"
    document.getElementById("electiveSelect2").style.display = "inline";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";
    document.getElementById("wellnessSelect").style.display = "none";
    var arts = [];
    if(questionNumber === 11){
       arts = ["A233: Graphic Design 1","A234: Graphic Design 2","A253: Painting, Drawing, & PrintMaking2","A255: Photo 1","A256: Art in Contemporary Society","A295: Digital Media Arts 2: Video Game Design & Interactive Media","A296: Video & Animation 2: Visual FX & Production","A352: 3D Design 2","A355: Photo 2"]
    }
    if(questionNumber == 12){
       arts = ["M296: Geometry in Construction (2.0)","T134: Engine & Power Technology","T144: Manufacturing Technology (0.5)","T166: Architecture, Animation, & Engineering Design 1 (1.0)","T174: Electronics Technology 1 (1.0)","T202: PLTW Introduction to Engineering Design (1.0)","T234: Computer Aided Manufacturing (1.0)"];
      }
  
  for(var i = 0; i < electives.length; i++){ 
    var x = i + 1;
    var select = document.getElementById("electiveSelect")
    var option = document.createElement('option');
    option.value = electives[i];
    option.innerHTML = electives[i];
    select.appendChild(option);
      }
    for(var i = 0; i < arts.length; i++){
      
    var option2 = document.createElement('option');
    option2.value = arts[i];
    option2.innerHTML = arts[i];
    select2.appendChild(option2);
    }
    
    //setInterval(refresh,2000)
    
  }
  if(questionNumber === 15){
    document.getElementById("careerSelect").style.display = "none";
     document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("extraInputs").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionDoneButton").style.display = "none";
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("yearButtons").style.display = "none";
    document.getElementById("questionInput").style.display = "none"
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("electiveSelect").style.display = "inline";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionTitle").innerHTML = "Choose your 2nd Elective"
    document.getElementById("electiveSelect2").style.display = "inline";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("questionNextButton").style.display = "inline";
    document.getElementById("wellnessSelect").style.display = "none";
    document.getElementById("questionDoneButton").style.display = "none";
    document.getElementById("electiveSelect4").style.display = "none";

  for(var i = 0; i < electives.length; i++){ 
    var x = i + 1;
    var select = document.getElementById("electiveSelect")
    var option = document.createElement('option');
    option.value = electives[i];
    option.innerHTML = electives[i];
    select.appendChild(option);
  
      }
  }
  if(questionNumber === 13){
      var newCodes = [];
      var newNames = [];
     document.getElementById("careerSelect").style.display = "none";
     document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("extraInputs").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("questionDoneButton").style.display = "none";
    document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("yearButtons").style.display = "none";
    document.getElementById("questionInput").style.display = "none"
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
      document.getElementById("halfUnitText").style.display = "none";
    document.getElementById("careerSelect").style.display = "none";
    document.getElementById("englishSelect").style.display = "none";
    document.getElementById("mathSelect").style.display = "none";
    document.getElementById("scienceSelect").style.display = "none";
    document.getElementById("electiveSelect").style.display = "none";
    document.getElementById("socialstudiesSelect").style.display = "none";
    document.getElementById("questionSkipButton").style.display = "none";
    document.getElementById("wellnessSelect").style.display = "inline";
    document.getElementById("questionTitle").innerHTML = "Choose your Wellness Course"
    document.getElementById("electiveSelect2").style.display = "none";
    document.getElementById("electiveSelect3").style.display = "none";
    document.getElementById("questionNextButton").style.display = "none";
    document.getElementById("questionDoneButton").style.display = "inline";
    document.getElementById("electiveSelect4").style.display = "none";
    database.ref("Courses/Wellness/").on("value", function(data){
      courseCodes = Object.keys(data.val());
      console.log(courseCodes)
      courseNames = Object.values(data.val());
      newCodes = ["P218","P244","P251"]
      newNames = ["Sophomore Leaders (1.0)","Sophomore Wellness (1.0)","Life Gaurd Trianing (1.0)"]
      
        console.log(newCodes)
  for(var i = 0; i < newCodes.length; i++){ 
    var x = i + 1;
  var select = document.getElementById("wellnessSelect")
    var option = document.createElement('option');
    var length = newNames[i].length;
    var name = newNames[i]
    option.value = newCodes[i] + ": " + name;
    option.innerHTML = newCodes[i] + ": " + name;;
    select.appendChild(option);
      }
     
    })
    }
    

  document.getElementById("questionNumberText").innerHTML = questionNumber + "/" + questionCount
}

function refresh(){
  setElectives();
}

function setElectives(){
    var select2 = document.getElementById("electiveSelect2")
    var length = select2.options.length;
    var select3 = document.getElementById("electiveSelect3")
    var length2 = select3.options.length;
    for(var i = length - 1; i >= 0; i--){
      select2.options[i] = null;
    }
    for(var a = length2 - 1; a >= 0; a--){
      select3.options[i] = null;
    }
  
  if(document.getElementById("electiveSelect").value === "Applied Technology"){
    var electiveCodes, electiveNames;
    database.ref("/Courses/Electives/Applied Technology/").on("value",function(data){
        electiveCodes = Object.keys(data.val());
        electiveNames = Object.values(data.val());
    })
    for(var i = 0; i < electiveCodes.length; i++){
    var option2 = document.createElement('option');
    option2.value = electiveCodes[i] + ": " + electiveNames[i];
    option2.innerHTML = electiveCodes[i] + ": " + electiveNames[i];
    select2.appendChild(option2);
    }
  }
    if(document.getElementById("electiveSelect").value === "Art & Media"){
      var electiveCodes, electiveNames;
    database.ref("/Courses/Electives/Art&Media/" + currentYear).on("value",function(data){
       electiveCodes = Object.keys(data.val());
       electiveNames = Object.values(data.val());
    })
    for(var i = 0; i < electiveCodes.length; i++){
    var option2 = document.createElement('option');
   option2.value = electiveCodes[i] + ": " + electiveNames[i];
    option2.innerHTML = electiveCodes[i] + ": " + electiveNames[i];
    select2.appendChild(option2);
    }
  }
    if(document.getElementById("electiveSelect").value === "Business Education"){
      var electiveCodes, electiveNames;
      document.getElementById("electiveSelect3").style.display = "inline";
      var select3 = document.getElementById("electiveSelect3")
      var choices = ["Career Readiness Courses","College Preparatory Courses","Technology"]
      for(var a = 0; a < choices.length; a++){
        var options = document.createElement('option');
        options.value = choices[a];
        options.innerHTML = choices[a];
        select3.appendChild(options)
      }
    database.ref("/Courses/Electives/Business Education/" + document.getElementById("select3").value + "/").on("value",function(data){
       electiveCodes = Object.keys(data.val());
       electiveNames = Object.values(data.val());
    })
    for(var i = 0; i < electiveCodes.length; i++){
    var option2 = document.createElement('option');
   option2.value = electiveCodes[i] + ": " + electiveNames[i];
    option2.innerHTML = electiveCodes[i] + ": " + electiveNames[i];
    select2.appendChild(option2);
    }
  }
  
}



function popup(){
  var title;
  var level;
  switch(questionNumber){
    case 5:
      title = document.getElementById("englishSelect").value
      break;
    case 7:
      title = document.getElementById("mathSelect").value
      break;
    case 9:
      title = document.getElementById("scienceSelect").value
      break;
    case 10:
      title = document.getElementById("socialstudiesSelect").value
      break;
  }
  
  switch(title.substring(3,4)){
    case "1": 
      level = 'Level: General';
      break;
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
      level = 'Level: Regular';
      break;
    case "8":
      level = 'Level: Honor';
      break;
    case "9":
      level = 'Level: Advanced Placement'
      break;
  }
  console.log(level)
  document.getElementById("infoTitle").innerHTML = title;
  document.getElementById("infoLevel").innerHTML = level;
  window.location.href = "#popup1";
}

function setCareer(id){
  var idLength = id.length - 6
  career = id.substr(0,idLength)
  console.log(career)
  database.ref("/" + localStorage.username).update({
    career: career
  })
}

function buttonClick(id){
  document.getElementById("freshmanButton").style.background = "#f0f0f0";
  document.getElementById("sophomoreButton").style.background = "#f0f0f0";
  document.getElementById("juniorButton").style.background = "#f0f0f0";
  document.getElementById("seniorButton").style.background = "#f0f0f0";
  
  document.getElementById(id).style.background = "cyan"

  if(questionNumber === 1){
  currentYear = document.getElementById(id).innerHTML
    database.ref(localStorage.username + '/').update({
      currentYear : currentYear
    })
  }else if(questionNumber === 2){
    graduateLevel = document.getElementById(id).innerHTML
    database.ref("/" + localStorage.username).update({
      graduation: graduateLevel
    })
  }
}

function resetButtonColors(){
  document.getElementById("freshmanButton").style.background = "#f0f0f0";
  document.getElementById("sophomoreButton").style.background = "#f0f0f0";
  document.getElementById("juniorButton").style.background = "#f0f0f0";
  document.getElementById("seniorButton").style.background = "#f0f0f0";
}

function courseBack(){
  document.getElementById("freshmanTable").style.display = "none";
    document.getElementById("sophomoreTable").style.display = "none";
    document.getElementById("juniorTable").style.display = "none";
    document.getElementById("seniorTable").style.display = "none";
  switch(year){
    case "sophomore": year = "freshman"
      break;
    case "junior": year = "sophomore"
      break;
    case "senior": year = "junior"
      break;
  }
  document.getElementById("coursesTitle").innerHTML = year.charAt(0).toUpperCase() + year.slice(1);
  document.getElementById(year + "Table").style.display = "inline";
}

function courseNext(){
  document.getElementById("freshmanTable").style.display = "none";
    document.getElementById("sophomoreTable").style.display = "none";
    document.getElementById("juniorTable").style.display = "none";
    document.getElementById("seniorTable").style.display = "none";
  switch(year){
    case "freshman": year = "sophomore"
      break;
    case "sophomore": year = "junior"
      break;
    case "junior": year = "senior"
      break;
  }
  document.getElementById("coursesTitle").innerHTML = year.charAt(0).toUpperCase() + year.slice(1);
  document.getElementById(year + "Table").style.display = "inline";
}

function setCourses(){
  var codes,names;
  var classNames, classCodes;
  database.ref(localStorage.username + "/currentYear").on("value",function(data){
     year = data.val().toLowerCase()
    document.getElementById("coursesTitle").innerHTML = data.val()
    document.getElementById("freshmanTable").style.display = "none";
    document.getElementById("sophomoreTable").style.display = "none";
    document.getElementById("juniorTable").style.display = "none";
    document.getElementById("seniorTable").style.display = "none";
    document.getElementById(year + "Table").style.display = "inline";
  })
  
  database.ref("/" + localStorage.username).on("value",function(data){
    
    codes = Object.keys(data.val());
    names = Object.values(data.val());

    if(codes.includes("freshmanEnglish")){
    for(var i = 0; i < codes.length; i++){
      switch(codes[i]){
        case "freshmanEnglish": document.getElementById("englishClass").innerHTML = names[i]
          break;
        case "freshmanMathematics": document.getElementById("mathClass").innerHTML = names[i]
          break;
        case "freshmanScience": document.getElementById("scienceClass").innerHTML = names[i]
          break;
        case "freshmanSocialStudies": document.getElementById("socialstudiesClass").innerHTML = names[i]
          break;
        case "freshmanWellness": document.getElementById("wellnessClass").innerHTML = names[i]
          break;
        case "freshmanElective1": document.getElementById("elective1Class").innerHTML = names[i]
          break;
        case "freshmanElective2": document.getElementById("elective2Class").innerHTML = names[i]
          break;
      }
    }
  }
  if(codes.includes("sophomoreEnglish")){
     for(var i = 0; i < codes.length; i++){
      switch(codes[i]){
        case "sophomoreEnglish": document.getElementById("sophomoreEnglishClass").innerHTML = names[i]
          break;
        case "sophomoreMathematics": document.getElementById("sophomoreMathClass").innerHTML = names[i]
          break;
        case "sophomoreScience": document.getElementById("sophomoreScienceClass").innerHTML = names[i]
          break;
        case "sophomoreSocialStudies": document.getElementById("sophomoreSocialstudiesClass").innerHTML = names[i]
          break;
        case "sophomoreWellness": document.getElementById("sophomoreWellnessClass").innerHTML = names[i]
          break;
        case "sophomoreElective1": document.getElementById("sophomoreElective1Class").innerHTML = names[i]
          break;
        case "sophomoreElective2": document.getElementById("sophomoreElective2Class").innerHTML = names[i]
          break;
      }
    }
  }
  if(codes.includes("juniorEnglish")){
    for(var i = 0; i < codes.length; i++){
      switch(codes[i]){
        case "juniorEnglish": document.getElementById("juniorEnglishClass").innerHTML = names[i]
          break;
        case "juniorMathematics": document.getElementById("juniorMathClass").innerHTML = names[i]
          break;
        case "juniorScience": document.getElementById("juniorScienceClass").innerHTML = names[i]
          break;
        case "juniorSocialStudies": document.getElementById("juniorSocialstudiesClass").innerHTML = names[i]
          break;
        case "juniorWellness": document.getElementById("juniorWellnessClass").innerHTML = names[i]
          break;
        case "juniorElective1": document.getElementById("juniorElective1Class").innerHTML = names[i]
          break;
        case "juniorElective2": document.getElementById("juniorElective2Class").innerHTML = names[i]
          break;
      }
    }
  }
  if(codes.includes("seniorEnglish")){
    for(var i = 0; i < codes.length; i++){
      switch(codes[i]){
        case "seniorEnglish": document.getElementById("seniorEnglishClass").innerHTML = names[i]
          break;
        case "seniorMathematics": document.getElementById("seniorMathClass").innerHTML = names[i]
          break;
        case "seniorScience": document.getElementById("seniorScienceClass").innerHTML = names[i]
          break;
        case "seniorSocialStudies": document.getElementById("seniorSocialstudiesClass").innerHTML = names[i]
          break;
        case "seniorWellness": document.getElementById("seniorWellnessClass").innerHTML = names[i]
          break;
        case "seniorElective1": document.getElementById("seniorElective1Class").innerHTML = names[i]
          break;
        case "seniorElective2": document.getElementById("seniorElective2Class").innerHTML = names[i]
          break;
      }
    }
  }
  })
  
  var table = document.getElementById("courseTable")
}
