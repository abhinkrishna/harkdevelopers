$(function() {

  $(".JavaError").hide(); //Hide Java Error message
  $(".showContent").fadeIn(250); //Show content

  instruction() // Calling How to use Box

  var credit = {
    //S1 & S2 [Full Course]
    "LAB":1,   // For all LAB 1 credit concept
    "MA101":4, // Calculus
    "PH100":4, // Engineering Physics
    "BE110":3, // Engineering Graphics
    "BE100":4, // Engineering Mechanics
    "BE102":3, // Design and Engineering
    "BE10101":3, // Introduction to Civil Engineering
    "BE10102":3, // Introduction to Mechanical Engineering Sciences
    "BE10103":3, // Introduction to Electrical Engineering
    "BE10104":3, // Introduction to Electronics Engineering
    "BE10105":3, // Introduction to Computing and Problem Solving
    "BE10106":3, // Introduction to Chemical Engineering
    "BE103":3, // Introduction to Sustainable Engineering
    "MA102":4, // Differential Equations
    "CY100":4, // Engineering Chemistry
    "EE100":3, // Basics of Electrical Engineering
    "EC100":3, // Basics of Electronics Engineering
    "ME100":3, // Basics of Mechanical Engineering
    "CE100":3, // Basics of Civil Engineering
    "BASICS":3, // Basics of ....
    "CS100":3, // Computer Programming
    //S3 6 CSE subs
    "MA201":4, // Liner Algebra and Complex Analysis
    "CS201":4, // Discrete Computational Structures
    "CS203":4, // Switching theory and logic design
    "CS205":4, // Data structures
    "CS207":3, // Electronic Devices and Circuits
    "HS200":3, // Business Economics
    //S4 6 CSE subs
    "MA202":4, //Probability Distributions,Transforms and Numerical Methods
    "CS202":4, // Computer Organization and Architecture
    "CS204":4, // Operating Systems
    "CS206":3, // Object Oriented Design and Programming
    "CS208":3, //Principles of Database Design
    "HS210":3, // Life Skills
    //S5 all CSE subs
    "CS301":4, // Theory of Computation
    "CS303":3, // System Software
    "CS305":3, // Microprocessors and Microcontrollers
    "CS307":3, // DataCommunication
    "CS309":3, // Graph Theory and Combinatorics
    "CS361":3, // Soft Computing
    "CS363":3, // Signals and Systems
    "CS365":3, // Optimization Techniques
    "CS367":3, // Logic for Computer Science
    "CS369":3, // Digital System Testing & Testable Design
    "CS341":2, // Design Project
    //S6 all CSE subs
    "CS302":4, // Design and Analysis of Algorithms
    "CS304":3, // Compiler Design
    "CS306":3, // Computer Networks
    "CS308":3, // Software Engineering and Project Management
    "HS300":3, // Principles of Management
    "CS362":3, // Computer Vision
    "CS364":3, // Mobile Computing
    "CS366":3, // Natural Language Processing
    "CS368":3, // Web Technologies
    "CS372":3, // High Performance Computing
    "CS332":2, // Microprocessor Lab
    "CS334":1, // Network Programming Lab
    "CS352":2, // Comprehensive Exam
    //S3 & S4 all ECE subs
    "EC201":4, // Network Theory
    "EC203":4, // Solid State Devices
    "EC205":4, // Electronic Circuits
    "EC207":3, // Logic Circuit Design
    "EC202":4, // Signals and Systems
    "EC204":4, // Analog Integrated Circuits
    "EC206":3, // Computer Organization
    "EC208":3, // Analog Communication Engineerin
    //S3 & S4 all ME subs
    "ME201":4, // Mechanics of Solids
    "ME203":4, // Mechanics of Fluids
    "ME205":4, // Thermodyanmics
    "ME210":3, // Metallurgy and Materials Engineering
    "ME202":4, // Advanced Mechanics of Solids
    "ME204":4, // Thermal Engineering
    "ME206":3, // Fluid Machinery
    "ME220":3, // Manufacturing Technology
    //S3 & S4 all IT subs
    "IT201":4, // Digital System Design
    "IT203":3, // Data Communication
    "IT202":4, // Algorithm Analysis and Design
    "IT204":3, // Object Oriented Techniques
    //S3 & S4 all CE subs
    "CE201":4, // Mechanics of Solids
    "CE203":4, // Fluid Mechanics I
    "CE205":4, // Engineering Geology
    "CE207":3, // Surveying
    "CE202":4, // Structural Analysis I
    "CE204":4, // Construction Technology
    "CE206":3, // Fluid Mechanics II
    "CE208":3, // Geotechnical Engineering I
    //S3 & S4 all EEE subs
    "EE201":4, // Circuits and Networks
    "EE203":4, // Analog Electronics Circuits
    "EE205":4, // DC Machines and Transformers
    "EE207":3, // Computer Programming
    "EE202":4, // Synchronous and Induction Machines
    "EE204":3, // Digital Electronics and Logic Design
    "EE206":3, // Material Science
    "EE208":4, // Measurements and Instrumentation
    //S3 & S4 all BTE subs
    "BT201":4, // Fluid Flow and Particle Technology
    "BT203":4, // Concepts in Biochemical Engineering
    "BT205":4, // Bioprocess Calculations
    "BT207":3, // Microbiology
    "BT202":4, // Bioprocess Heat Transfer
    "BT204":4, // Industrial Bioprocessing
    "BT206":3, // C++ Programming
    "BT208":3, // Principles of Biochemistry
  };
  var cName = {
    //S1 & S2 [Full Course]
    "MA101":"Calculus - MA101",
    "PH100":"Engineering Physics - PH100",
    "BE110":"Engineering Graphics - BE110",
    "BE100":"Engineering Mechanics - BE100",
    "BE102":"Design and Engineering - BE102",
    "BE10101":"Introduction to Civil Engineering - BE10101",
    "BE10102":"Introduction to Mechanical Engineering Sciences - BE10102",
    "BE10103":"Introduction to Electrical Engineering - BE10103",
    "BE10104":"Introduction to Electronics Engineering - BE10104",
    "BE10105":"Introduction to Computing and Problem Solving - BE10105",
    "BE10106":"Introduction to Chemical Engineering - BE10106",
    "BE1010X":"BE1010X - Introduction to ",
    "BE103":"Introduction to Sustainable Engineering - BE103",
    "MA102":"Differential Equations - MA102",
    "CY100":"Engineering Chemistry - CY100",
    "EE100":"Basics of Electrical Engineering - EE100",
    "EC100":"Basics of Electronics Engineering - EC100",
    "ME100":"Basics of Mechanical Engineering - ME100",
    "CE100":"Basics of Civil Engineering - CE100",
    "BASICS":"Basics of (Electrical / Electronics / Mechanical / Civil) Engineering - (EE100 / EC100 / ME100 / CE100)",
    "CS100":"Computer Programming - CS100",
    //S3 6 CSE subs
    "MA201":"Liner Algebra and Complex Analysis - MA201",
    "CS201":"Discrete Computational Structures - CS201",
    "CS203":"Switching theory and logic design - CS203",
    "CS205":"Data structures - CS205",
    "CS207":"Electronic Devices and Circuits - CS207",
    "HS200":"Business Economics - HS200",
    //S4 6 CSE subs
    "MA202":"Probability Distributions,Transforms and Numerical Methods - MA202",
    "CS202":"Computer Organization and Architecture - CS202",
    "CS204":"Operating Systems - CS204",
    "CS206":"Object Oriented Design and Programming - CS206",
    "CS208":"Principles of Database Design - CS208",
    "HS210":"Life Skills - HS210",
    //S5 all CSE subs
    "CS301":"Theory of Computation",
    "CS303":"System Software",
    "CS305":"Microprocessors and Microcontrollers",
    "CS307":"DataCommunication",
    "CS309":"Graph Theory and Combinatorics",
    "CS361":"Soft Computing",
    "CS363":"Signals and Systems",
    "CS365":"Optimization Techniques",
    "CS367":"Logic for Computer Science",
    "CS369":"Digital System Testing & Testable Design",
    "CS341":"Design Project",
    //S6 all CSE subs
    "CS302":"Design and Analysis of Algorithms",
    "CS304":"Compiler Design",
    "CS306":"Computer Networks",
    "CS308":"Software Engineering and Project Management",
    "HS300":"Principles of Management",
    "CS362":"Computer Vision",
    "CS364":"Mobile Computing",
    "CS366":"Natural Language Processing",
    "CS368":"Web Technologies",
    "CS372":"High Performance Computing",
    "CS332":"Microprocessor Lab",
    "CS334":"Network Programming Lab",
    "CS352":"Comprehensive Exam",
    //S3 & S4 all ECE subs
    "EC201":"Network Theory - EC201",
    "EC203":"Solid State Devices - EC203",
    "EC205":" Electronic Circuits - EC205",
    "EC207":"Logic Circuit Design - EC207",
    "EC202":"Signals and Systems - EC202",
    "EC204":"Analog Integrated Circuits - EC204",
    "EC206":"Computer Organization - EC206",
    "EC208":"Analog Communication Engineering - EC208",
    //S3 & S4 all ME subs
    "ME201":"Mechanics of Solids - ME201",
    "ME203":"Mechanics of Fluids - ME203",
    "ME205":"Thermodyanmics - ME205",
    "ME210":"Metallurgy and Materials Engineering - ME210",
    "ME202":"Advanced Mechanics of Solids - ME202",
    "ME204":"Thermal Engineering - ME204",
    "ME206":"Fluid Machinery - ME206",
    "ME220":"Manufacturing Technology - ME220",
    //S3 & S4 all IT subs
    "IT201":"Digital System Design - IT201",
    "IT203":"Data Communication - IT203",
    "IT202":"Algorithm Analysis and Design - IT202",
    "IT204":"Object Oriented Techniques - IT204",
    //S3 & S4 all CE subs
    "CE201":"Mechanics of Solids - CE201",
    "CE203":"Fluid Mechanics - I - CE203",
    "CE205":"Engineering Geology - CE205",
    "CE207":"Surveying - CE207",
    "CE202":"Structural Analysis - I - CE202",
    "CE204":"Construction Technology - CE204",
    "CE206":"Fluid Mechanics - II - CE206",
    "CE208":"Geotechnical Engineering I - CE208",
    //S3 & S4 all EEE subs
    "EE201":"Circuits and Networks - EE201",
    "EE203":"Analog Electronics Circuits - EE203",
    "EE205":"DC Machines and Transformers - EE205",
    "EE207":"Computer Programming - EE207",
    "EE202":"Synchronous and Induction Machines - EE202",
    "EE204":"Digital Electronics and Logic Design - EE204",
    "EE206":"Material Science - EE206",
    "EE208":"Measurements and Instrumentation - EE208",
    //S3 & S4 all BTE subs
    "BT201":"Fluid Flow and Particle Technology - BT201",
    "BT203":"Concepts in Biochemical Engineering - BT203",
    "BT205":"Bioprocess Calculations - BT205",
    "BT207":"Microbiology - BT207",
    "BT202":"Bioprocess Heat Transfer - BT202",
    "BT204":"Industrial Bioprocessing - BT204",
    "BT206":"C++ Programming - BT206",
    "BT208":"Principles of Biochemistry - BT208",
  };

  var S1 = {"A":"","B":"","C":"","D":"","E":"","F":""}
  var S2 = {"A":"","B":"","C":"","D":"","E":"","F":""}
  var S3 = {"A":"","B":"","C":"","D":"","E":"","F":""}
  var S4 = {"A":"","B":"","C":"","D":"","E":"","F":""}
//  var S5 = {"A":"","B":"","C":"","D":"","E":"","F":""}
//  var S6 = {"A":"","B":"","C":"","D":"","E":"","F":""}


  $("#show").click(function() {
    course = $('#course').val(); // dropdown value recieves and stores
    switch (course) {
      case 'cse': getCSE();
                  dispData();
                  break;
      case 'me':  getME();
                  dispData();
                  break;
      case 'ece':  getECE();
                  dispData();
                  break;
      case 'eee':  getEEE();
                  dispData();
                  break;
      case 'ce':  getCE();
                  dispData();
                  break;
      case 'bt':  getBT();
                  dispData();
                  break;
      case 'othr':hideAll();
                  $(".dispmsg").fadeIn('200').html("Sorry your course is not added yet");
                  break;
      default: hideAll();
                $(".dispmsg").html("Please select a course to continue ");
                break;
    }
  });

  var MaxCreditData,TotEarndCrdt,TotEarndAccmCrdttime,LabCrdt,earnedCrdtS2=0,earnedCrdtS4=0;
  //Function Declarations
  function getCSE() {
    //S1
    S1['A']="MA101";
    S1['B']="PH100";
    S1['C']="BE110";
    S1['D']="BE10105";
    S1['E']="BE103";
    S1['F']="BASICS";
    //S2
    S2['A']="MA102";
    S2['B']="CY100";
    S2['C']="BE100";
    S2['D']="BE102";
    S2['E']="BASICS";
    S2['F']="CS100";
    //S3
    S3['A']="MA201";
    S3['B']="CS201";
    S3['C']="CS203";
    S3['D']="CS205";
    S3['E']="CS207";
    S3['F']="HS200";
    //S4
    S4['A']="MA202";
    S4['B']="CS202";
    S4['C']="CS204";
    S4['D']="CS206";
    S4['E']="CS208";
    S4['F']="HS210";
  }
  function getME() {
    //S1
    S1['A']="MA101";
    S1['B']="PH100";
    S1['C']="BE110";
    S1['D']="BE10102";
    S1['E']="BE103";
    S1['F']="BASICS";
    //S2
    S2['A']="MA102";
    S2['B']="CY100";
    S2['C']="BE100";
    S2['D']="BE102";
    S2['E']="BASICS";
    S2['F']="BASICS";
    //S3
    S3['A']="MA201";
    S3['B']="ME201";
    S3['C']="ME203";
    S3['D']="ME205";
    S3['E']="ME210";
    S3['F']="HS200";
    //S4
    S4['A']="MA202";
    S4['B']="ME202";
    S4['C']="ME204";
    S4['D']="ME206";
    S4['E']="ME220";
    S4['F']="HS210";
  }
  function getECE() {
    //S1
    S1['A']="MA101";
    S1['B']="PH100";
    S1['C']="BE110";
    S1['D']="BE10104";
    S1['E']="BE103";
    S1['F']="BASICS";
    //S2
    S2['A']="MA102";
    S2['B']="CY100";
    S2['C']="BE100";
    S2['D']="BE102";
    S2['E']="BASICS";
    S2['F']="BASICS";
    //S3
    S3['A']="MA201";
    S3['B']="EC201";
    S3['C']="EC203";
    S3['D']="EC205";
    S3['E']="EC207";
    S3['F']="HS200";
    //S4
    S4['A']="MA202";
    S4['B']="EC202";
    S4['C']="EC204";
    S4['D']="EC206";
    S4['E']="EC208";
    S4['F']="HS210";
  }
  function getEEE() {
    //S1
    S1['A']="MA101";
    S1['B']="PH100";
    S1['C']="BE110";
    S1['D']="BE10103";
    S1['E']="BE103";
    S1['F']="BASICS";
    //S2
    S2['A']="MA102";
    S2['B']="CY100";
    S2['C']="BE100";
    S2['D']="BE102";
    S2['E']="BASICS";
    S2['F']="BASICS";
    //S3
    S3['A']="MA201";
    S3['B']="EE201";
    S3['C']="EE203";
    S3['D']="EE205";
    S3['E']="EE207";
    S3['F']="HS200";
    //S4
    S4['A']="MA202";
    S4['B']="EE202";
    S4['C']="EE204";
    S4['D']="EE206";
    S4['E']="EE208";
    S4['F']="HS210";
  }
  function getCE() {
    //S1
    S1['A']="MA101";
    S1['B']="PH100";
    S1['C']="BE110";
    S1['D']="BE10101";
    S1['E']="BE103";
    S1['F']="BASICS";
    //S2
    S2['A']="MA102";
    S2['B']="CY100";
    S2['C']="BE100";
    S2['D']="BE102";
    S2['E']="BASICS";
    S2['F']="BASICS";
    //S3
    S3['A']="MA201";
    S3['B']="CE201";
    S3['C']="CE203";
    S3['D']="CE205";
    S3['E']="CE207";
    S3['F']="HS200";
    //S4
    S4['A']="MA202";
    S4['B']="CE202";
    S4['C']="CE204";
    S4['D']="CE206";
    S4['E']="CE208";
    S4['F']="HS210";
  }
  function getBT() {
    //S1
    S1['A']="MA101";
    S1['B']="PH100";
    S1['C']="BE110";
    S1['D']="BE10106";
    S1['E']="BE103";
    S1['F']="BASICS";
    //S2
    S2['A']="MA102";
    S2['B']="CY100";
    S2['C']="BE100";
    S2['D']="BE102";
    S2['E']="BASICS";
    S2['F']="BASICS";
    //S3
    S3['A']="MA201";
    S3['B']="BT201";
    S3['C']="BT203";
    S3['D']="BT205";
    S3['E']="BT207";
    S3['F']="HS200";
    //S4
    S4['A']="MA202";
    S4['B']="BT202";
    S4['C']="BT204";
    S4['D']="BT206";
    S4['E']="BT208";
    S4['F']="HS210";
  }

  function dispData() {
    $(".dispmsg").fadeOut(200) // hide message box
    resetCheckBox() // Reset all checkboxes
    dispShift(200) // Hide and Show the contentBox wih a flash 'x'*2
    //S1 Displaying
    $("#S1A_Name").html(cName[S1['A']]);
    $("#S1B_Name").html(cName[S1['B']]);
    $("#S1C_Name").html(cName[S1['C']]);
    $("#S1D_Name").html(cName[S1['D']]);
    $("#S1E_Name").html(cName[S1['E']]);
    $("#S1F_Name").html(cName[S1['F']]);
    $("#S1A_Credit").html(credit[S1['A']]);
    $("#S1B_Credit").html(credit[S1['B']]);
    $("#S1C_Credit").html(credit[S1['C']]);
    $("#S1D_Credit").html(credit[S1['D']]);
    $("#S1E_Credit").html(credit[S1['E']]);
    $("#S1F_Credit").html(credit[S1['F']]);
    //S2 Displaying
    $("#S2A_Name").html(cName[S2['A']]);
    $("#S2B_Name").html(cName[S2['B']]);
    $("#S2C_Name").html(cName[S2['C']]);
    $("#S2D_Name").html(cName[S2['D']]);
    $("#S2E_Name").html(cName[S2['E']]);
    $("#S2F_Name").html(cName[S2['F']]);
    $("#S2A_Credit").html(credit[S2['A']]);
    $("#S2B_Credit").html(credit[S2['B']]);
    $("#S2C_Credit").html(credit[S2['C']]);
    $("#S2D_Credit").html(credit[S2['D']]);
    $("#S2E_Credit").html(credit[S2['E']]);
    $("#S2F_Credit").html(credit[S2['F']]);
    //S3 Displaying
    $("#S3A_Name").html(cName[S3['A']]);
    $("#S3B_Name").html(cName[S3['B']]);
    $("#S3C_Name").html(cName[S3['C']]);
    $("#S3D_Name").html(cName[S3['D']]);
    $("#S3E_Name").html(cName[S3['E']]);
    $("#S3F_Name").html(cName[S3['F']]);
    $("#S3A_Credit").html(credit[S3['A']]);
    $("#S3B_Credit").html(credit[S3['B']]);
    $("#S3C_Credit").html(credit[S3['C']]);
    $("#S3D_Credit").html(credit[S3['D']]);
    $("#S3E_Credit").html(credit[S3['E']]);
    $("#S3F_Credit").html(credit[S3['F']]);
    //S4 Displaying
    $("#S4A_Name").html(cName[S4['A']]);
    $("#S4B_Name").html(cName[S4['B']]);
    $("#S4C_Name").html(cName[S4['C']]);
    $("#S4D_Name").html(cName[S4['D']]);
    $("#S4E_Name").html(cName[S4['E']]);
    $("#S4F_Name").html(cName[S4['F']]);
    $("#S4A_Credit").html(credit[S4['A']]);
    $("#S4B_Credit").html(credit[S4['B']]);
    $("#S4C_Credit").html(credit[S4['C']]);
    $("#S4D_Credit").html(credit[S4['D']]);
    $("#S4E_Credit").html(credit[S4['E']]);
    $("#S4F_Credit").html(credit[S4['F']]);
    CalculateCredit();
  }

  function CalculateCredit() {
    $("#CalcBtn").click(function() {
      MaxCreditData    = {"S1":23,"S2":24,"S3":24,"S4":23};
      TotEarndCrdt     = {"S1":0,"S2":0,"S3":0,"S4":0};
      TotEarndAccmCrdt = {"S1":0,"S2":0,"S3":0,"S4":0};
      LabCrdt          = {"S1":3,"S2":3,"S3":2,"S4":2};
      Passed           = {"S1":0,"S2":0,"S3":0,"S4":0,"Total":0}
      SemesterSelection= {"S1":false,"S2":false,"S3":false,"S4":false}
      //S1 Checking
      if ($('#S1A').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['A']]; Passed['S1']+=1; SemesterSelection['S1']=true;}
      if ($('#S1B').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['B']]; Passed['S1']+=1; SemesterSelection['S1']=true;}
      if ($('#S1C').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['C']]; Passed['S1']+=1; SemesterSelection['S1']=true;}
      if ($('#S1D').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['D']]; Passed['S1']+=1; SemesterSelection['S1']=true;}
      if ($('#S1E').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['E']]; Passed['S1']+=1; SemesterSelection['S1']=true;}
      if ($('#S1F').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['F']]; Passed['S1']+=1; SemesterSelection['S1']=true;}
      LabCrdt['S1'] = parseInt($('#s1labcrdt').val());
      if (LabCrdt['S1']!=0) {SemesterSelection['S1']=true}
      TotEarndCrdt['S1'] += LabCrdt['S1'];
      //S2 Checking
      if ($('#S2A').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['A']]; Passed['S2']+=1; SemesterSelection['S2']=true;}
      if ($('#S2B').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['B']]; Passed['S2']+=1; SemesterSelection['S2']=true;}
      if ($('#S2C').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['C']]; Passed['S2']+=1; SemesterSelection['S2']=true;}
      if ($('#S2D').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['D']]; Passed['S2']+=1; SemesterSelection['S2']=true;}
      if ($('#S2E').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['E']]; Passed['S2']+=1; SemesterSelection['S2']=true;}
      if ($('#S2F').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['F']]; Passed['S2']+=1; SemesterSelection['S2']=true;}
      LabCrdt['S2'] = parseInt($('#s2labcrdt').val());
      if (LabCrdt['S2']!=0) {SemesterSelection['S2']=true}
      TotEarndCrdt['S2'] += LabCrdt['S2'];
      //S3 Checking
      if ($('#S3A').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['A']]; Passed['S3']+=1; SemesterSelection['S3']=true;}
      if ($('#S3B').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['B']]; Passed['S3']+=1; SemesterSelection['S3']=true;}
      if ($('#S3C').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['C']]; Passed['S3']+=1; SemesterSelection['S3']=true;}
      if ($('#S3D').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['D']]; Passed['S3']+=1; SemesterSelection['S3']=true;}
      if ($('#S3E').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['E']]; Passed['S3']+=1; SemesterSelection['S3']=true;}
      if ($('#S3F').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['F']]; Passed['S3']+=1; SemesterSelection['S3']=true;}
      LabCrdt['S3'] = parseInt($('#s3labcrdt').val());
      if (LabCrdt['S3']!=0) {SemesterSelection['S3']=true}
      TotEarndCrdt['S3'] += LabCrdt['S3'];
      //S4 Checking
      if ($('#S4A').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['A']]; Passed['S4']+=1; SemesterSelection['S4']=true;}
      if ($('#S4B').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['B']]; Passed['S4']+=1; SemesterSelection['S4']=true;}
      if ($('#S4C').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['C']]; Passed['S4']+=1; SemesterSelection['S4']=true;}
      if ($('#S4D').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['D']]; Passed['S4']+=1; SemesterSelection['S4']=true;}
      if ($('#S4E').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['E']]; Passed['S4']+=1; SemesterSelection['S4']=true;}
      if ($('#S4F').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['F']]; Passed['S4']+=1; SemesterSelection['S4']=true;}
      LabCrdt['S4'] = parseInt($('#s4labcrdt').val());
      if (LabCrdt['S4']!=0) {SemesterSelection['S4']=true}
      TotEarndCrdt['S4'] += LabCrdt['S4'];
      //Calculating Sums of Earned Credits
      TotEarndAccmCrdt['S1']=TotEarndCrdt['S1'];
      TotEarndAccmCrdt['S2']=TotEarndAccmCrdt['S1']+TotEarndCrdt['S2'];
      TotEarndAccmCrdt['S3']=TotEarndAccmCrdt['S2']+TotEarndCrdt['S3'];
      TotEarndAccmCrdt['S4']=TotEarndAccmCrdt['S3']+TotEarndCrdt['S4'];

      //Calculating no. of passed subjects
      Passed['Total']=Passed['S1']+Passed['S2']+Passed['S3']+Passed['S4'];


      //Displays Rest
      dispSemWiseCredits(); // Displaying Calclated data to the tables
      setResultClasses() // Sets green and red color accordingly
      checkVoidAndDisplayResult() // Display Result in a seperate box
      dispMaxCredits();
    });
  }
  function dispSemWiseCredits() {
    //Sem vice earned credits
    //S1 not needed
    $("#s2Total").html(TotEarndCrdt['S2']);
    $("#s3Total").html(TotEarndCrdt['S3']);
    $("#s4Total").html(TotEarndCrdt['S4']);
    //Accmltd credits
    $("#AccmltdS1").html(TotEarndAccmCrdt['S1']);
    $("#AccmltdS2").html(TotEarndAccmCrdt['S2']);
    $("#AccmltdS3").html(TotEarndAccmCrdt['S3']);
    $("#AccmltdS4").html(TotEarndAccmCrdt['S4']);
    //Accmltd max credits
    $("#AccmltdMaxS1").html(MaxCreditData['S1']);
    $("#AccmltdMaxS2").html(MaxCreditData['S2']+MaxCreditData['S1']);
    $("#AccmltdMaxS3").html(MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
    $("#AccmltdMaxS4").html(MaxCreditData['S4']+MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
  }
  function dispMaxCredits() {
    //S1 not needed
    $("#S2MaxCredit").html(MaxCreditData['S2']);
    $("#S3MaxCredit").html(MaxCreditData['S3']);
    $("#S4MaxCredit").html(MaxCreditData['S4']);
  }
  function checkVoidAndDisplayResult() {
    if(TotEarndAccmCrdt['S4']!=0) {
      $(".errorMsg").slideUp();
      $(".resultBox").fadeIn(1500);
      // Displaying Calculated Values
      if(SemesterSelection['S1']==true || SemesterSelection['S2']==true || SemesterSelection['S3']==false && SemesterSelection['S4']==false) {
        //Disp S1 and S2
        $("#s1s2").html(TotEarndAccmCrdt['S2']);
        $("#S1S4Result").fadeOut(); // Hiding S1S4 result if user doesn't input S3 and S4
      }
      if (SemesterSelection['S3']==true || SemesterSelection['S4']==true) {
        //Disp S1 to S4
        $("#s1s2").html(TotEarndAccmCrdt['S2']);
        $("#S1S4Result").fadeIn(); // Showing in case of hiding before // BugFixed
        $("#s1s4").html(TotEarndAccmCrdt['S4']);
      }
      var userMaxSem=0,TotalSupply=0;
      if(SemesterSelection['S1']==true) {userMaxSem=6}
      if(SemesterSelection['S2']==true) {userMaxSem=12}
      if(SemesterSelection['S3']==true) {userMaxSem=18}
      if(SemesterSelection['S4']==true) {userMaxSem=24}
      TotalSupply=userMaxSem-Passed['Total'];
      $("#ResultReview").html("You have cleared <b>" + Passed['Total'] + "</b> subjects out of <b>" + userMaxSem + " </b><br><b> " + TotalSupply + "</b> subjects left.");
      if(TotalSupply==0) {$("#ResultReview").html("<font color='green'> Congratulations you have passed all subjects </font>")}
     } else {
      // $(".errorMsg").slideUp(); //
      $(".resultBox").slideUp(500);
      $(".errorMsg").slideDown();
    }
  }
  function setResultClasses() {
    if(TotEarndAccmCrdt['S2']<26) {
      $("#s1s2").removeClass("green");
      $("#s1s2").addClass("red");
    }
    else {
      $("#s1s2").removeClass("red");
      $("#s1s2").addClass("green");
    }
    // Adding or Removing classes according to the total credits optained from S1 S2 S3 and S4
    if(TotEarndAccmCrdt['S4']<52) {
      $("#s1s4").removeClass("green");
      $("#s1s4").addClass("red");
    }
    else {
      $("#s1s4").removeClass("red");
      $("#s1s4").addClass("green");
    }
  }
  function dispShift(time) {
    $(".contentBox").fadeOut(time); // Hiding the contentBox
    $(".contentBox").fadeIn(time); // Showing the contentBox
  }
  function hideAll() {
    $(".contentBox").fadeOut(750);
    $(".resultBox").fadeOut(750);
    $(".dispmsg").fadeIn(750);
  }
  function resetCheckBox() {
    $('input[type=checkbox]').prop('checked',false);
  }
  function instruction() {
    $(".instructionsBox").fadeIn();
    $("#instctCloseBtn").click(function(){
      $(".instructionsBox").fadeOut();
    });
  }
  function dispOther() {
    $(".contentBox").fadeOut(750); // Hide contentBox
    $(".resultBox").fadeOut(750); // Hide resultBox
    $(".dispmsg").fadeOut(); // Hide displayMessege
    $(".instructionsBox").fadeOut(); // Hide instructionsBox
  }
});
