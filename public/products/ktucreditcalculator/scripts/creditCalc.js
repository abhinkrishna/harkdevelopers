$(function() {

  $(".JavaError").hide(); //Hide Java Error message
  $(".showContent").fadeIn(250); //Show content

  instruction() // Calling How to use Box

  var credit = {
    //Miscellaneous
    "EL101":3,
    "EL102":3,
    "EL103":3,
    "EL104":3,
    "EL105":3,
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
    //S7 all CSE subs
    "CS401":4, // Computer Graphics
    "CS403":3, // Programming Paradigms
    "CS405":3, // Computer System Architecture
    "CS407":3, // Distributed Computing
    "CS409":3, // Cryptography and Network Security
    "CS461":3, // Computational Geometry
    "CS463":3, // Digital Image Processing
    "CS465":3, // Bio Informatics
    "CS467":3, // Machine Learning
    "CS469":3, // Computational Complexity
    "CS451":2, // Seminar and Project Preliminary
    //S8 all CSE subs
    "CS402":3, // Data Mining and Ware Housing
    "CS404":3, // Embedded Systems
    "CS462":3, // Fuzzy Set Theory and Applications
    "CS464":3, // Artificial Intelligence
    "CS466":3, // Data Science
    "CS468":3, // Cloud Computing
    "CS472":3, // Principles of Information Security
    "CS492":6, // Project
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
    //Miscellaneous
    "EL101":"Elective 1",
    "EL102":"Elective 2",
    "EL103":"Elective 3",
    "EL104":"Elective 4",
    "EL105":"Elective 5 (Non-departmental)",
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
    "CS301":"Theory of Computation - CS301",
    "CS303":"System Software - CS303",
    "CS305":"Microprocessors and Microcontrollers - CS305",
    "CS307":"DataCommunication - CS307",
    "CS309":"Graph Theory and Combinatorics - CS309",
    "CS361":"Soft Computing - CS361",
    "CS363":"Signals and Systems - CS363",
    "CS365":"Optimization Techniques - CS365",
    "CS367":"Logic for Computer Science - CS367",
    "CS369":"Digital System Testing & Testable Design - CS369",
    "CS341":"Design Project - CS341",
    //S6 all CSE subs
    "CS302":"Design and Analysis of Algorithms - CS302",
    "CS304":"Compiler Design - CS304",
    "CS306":"Computer Networks - CS306",
    "CS308":"Software Engineering and Project Management - CS308",
    "HS300":"Principles of Management - HS300",
    "CS362":"Computer Vision - CS362",
    "CS364":"Mobile Computing - CS364",
    "CS366":"Natural Language Processing - CS366",
    "CS368":"Web Technologies - CS368",
    "CS372":"High Performance Computing - CS372",
    "CS332":"Microprocessor Lab - CS332",
    "CS334":"Network Programming Lab - CS334",
    "CS352":"Comprehensive Exam - CS352",
    //S7 all CSE subs
    "CS401":"Computer Graphics - CS401",
    "CS403":"Programming Paradigms - CS403",
    "CS405":"Computer System Architecture - CS405",
    "CS407":"Distributed Computing - CS407",
    "CS409":"Cryptography and Network Security - CS409",
    "CS461":"Computational Geometry - CS461",
    "CS463":"Digital Image Processing - CS463",
    "CS465":"Bio Informatics - CS465",
    "CS467":"Machine Learning - CS467",
    "CS469":"Computational Complexity - CS469",
    "CS451":"Seminar and Project Preliminary - CS451",
    //S8 all CSE subs
    "CS402":"Data Mining and Ware Housing - CS402",
    "CS404":"Embedded Systems - CS404",
    "CS462":"Fuzzy Set Theory and Applications - CS462",
    "CS464":"Artificial Intelligence - CS464",
    "CS466":"Data Science - CS466",
    "CS468":"Cloud Computing - CS468",
    "CS472":"Principles of Information Security - CS472",
    "CS492":"Project - CS492",
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
  var S5 = {"A":"","B":"","C":"","D":"","E":"","F":"","S":""}
  var S6 = {"A":"","B":"","C":"","D":"","E":"","F":"","U":""}
  var S7 = {"A":"","B":"","C":"","D":"","E":"","F":"","S":""}
  var S8 = {"A":"","B":"","C":"","D":"","E":""}


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
    //S5
    S5['A']="CS301";
    S5['B']="CS303";
    S5['C']="CS305";
    S5['D']="CS307";
    S5['E']="CS309";
    S5['F']="EL101";
    S5['S']="CS341";
    //S6
    S6['A']="CS302";
    S6['B']="CS304";
    S6['C']="CS306";
    S6['D']="CS308";
    S6['E']="HS300";
    S6['F']="EL102";
    S6['U']="CS352";
    //S7
    S7['A']="CS401";
    S7['B']="CS403";
    S7['C']="CS405";
    S7['D']="CS407";
    S7['E']="CS409";
    S7['F']="EL103";
    S7['S']="CS451";
    //S8
    S8['A']="CS402";
    S8['B']="CS404";
    S8['C']="EL104";
    S8['D']="EL105";
    S8['E']="CS492";

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
    //S5 Displaying
    $("#S5A_Name").html(cName[S5['A']]);
    $("#S5B_Name").html(cName[S5['B']]);
    $("#S5C_Name").html(cName[S5['C']]);
    $("#S5D_Name").html(cName[S5['D']]);
    $("#S5E_Name").html(cName[S5['E']]);
    $("#S5F_Name").html(cName[S5['F']]);
    $("#S5S_Name").html(cName[S5['S']]);
    $("#S5A_Credit").html(credit[S5['A']]);
    $("#S5B_Credit").html(credit[S5['B']]);
    $("#S5C_Credit").html(credit[S5['C']]);
    $("#S5D_Credit").html(credit[S5['D']]);
    $("#S5E_Credit").html(credit[S5['E']]);
    $("#S5F_Credit").html(credit[S5['F']]);
    $("#S5S_Credit").html(credit[S5['S']]);
    //S6 Displaying
    $("#S6A_Name").html(cName[S6['A']]);
    $("#S6B_Name").html(cName[S6['B']]);
    $("#S6C_Name").html(cName[S6['C']]);
    $("#S6D_Name").html(cName[S6['D']]);
    $("#S6E_Name").html(cName[S6['E']]);
    $("#S6F_Name").html(cName[S6['F']]);
    $("#S6U_Name").html(cName[S6['U']]);
    $("#S6A_Credit").html(credit[S6['A']]);
    $("#S6B_Credit").html(credit[S6['B']]);
    $("#S6C_Credit").html(credit[S6['C']]);
    $("#S6D_Credit").html(credit[S6['D']]);
    $("#S6E_Credit").html(credit[S6['E']]);
    $("#S6F_Credit").html(credit[S6['F']]);
    $("#S6U_Credit").html(credit[S6['U']]);
    //S7 Displaying
    $("#S7A_Name").html(cName[S7['A']]);
    $("#S7B_Name").html(cName[S7['B']]);
    $("#S7C_Name").html(cName[S7['C']]);
    $("#S7D_Name").html(cName[S7['D']]);
    $("#S7E_Name").html(cName[S7['E']]);
    $("#S7F_Name").html(cName[S7['F']]);
    $("#S7S_Name").html(cName[S7['S']]);
    $("#S7A_Credit").html(credit[S7['A']]);
    $("#S7B_Credit").html(credit[S7['B']]);
    $("#S7C_Credit").html(credit[S7['C']]);
    $("#S7D_Credit").html(credit[S7['D']]);
    $("#S7E_Credit").html(credit[S7['E']]);
    $("#S7F_Credit").html(credit[S7['F']]);
    $("#S7S_Credit").html(credit[S7['S']]);
    //S8 Displaying
    $("#S8A_Name").html(cName[S8['A']]);
    $("#S8B_Name").html(cName[S8['B']]);
    $("#S8C_Name").html(cName[S8['C']]);
    $("#S8D_Name").html(cName[S8['D']]);
    $("#S8E_Name").html(cName[S8['E']]);
    $("#S8A_Credit").html(credit[S8['A']]);
    $("#S8B_Credit").html(credit[S8['B']]);
    $("#S8C_Credit").html(credit[S8['C']]);
    $("#S8D_Credit").html(credit[S8['D']]);
    $("#S8E_Credit").html(credit[S8['E']]);
    CalculateCredit();
  }

  function CalculateCredit() {
    $("#CalcBtn").click(function() {
      MaxCreditData    = {"S1":23,"S2":24,"S3":24,"S4":23,"S5":23,"S6":23,"S7":22,"S8":18};
      TotEarndCrdt     = {"S1":0,"S2":0,"S3":0,"S4":0,"S5":0,"S6":0,"S7":0,"S8":0};
      TotEarndAccmCrdt = {"S1":0,"S2":0,"S3":0,"S4":0,"S5":0,"S6":0,"S7":0,"S8":0};
      LabCrdt          = {"S1":3,"S2":3,"S3":2,"S4":2,"S5":0,"S6":0,"S7":0,"S8":0};
      Passed           = {"S1":0,"S2":0,"S3":0,"S4":0,"S5":0,"S6":0,"S7":0,"S8":0,"Total":0}
      Failed           = {"S1":0,"S2":0,"S3":0,"S4":0,"S5":0,"S6":0,"S7":0,"S8":0,"Total":0}
      SemesterSelection= {"S1":false,"S2":false,"S3":false,"S4":false,"S5":false,"S6":false,"S7":false,"S8":false}

      //S1 Checking
      if ($('#S1A').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['A']]; Passed['S1']+=1; SemesterSelection['S1']=true;} else {Failed['S1']+=1;}
      if ($('#S1B').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['B']]; Passed['S1']+=1; SemesterSelection['S1']=true;} else {Failed['S1']+=1;}
      if ($('#S1C').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['C']]; Passed['S1']+=1; SemesterSelection['S1']=true;} else {Failed['S1']+=1;}
      if ($('#S1D').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['D']]; Passed['S1']+=1; SemesterSelection['S1']=true;} else {Failed['S1']+=1;}
      if ($('#S1E').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['E']]; Passed['S1']+=1; SemesterSelection['S1']=true;} else {Failed['S1']+=1;}
      if ($('#S1F').is(":checked")) {TotEarndCrdt['S1'] += credit[S1['F']]; Passed['S1']+=1; SemesterSelection['S1']=true;} else {Failed['S1']+=1;}
      LabCrdt['S1'] = parseInt($('#s1labcrdt').val());
      if (LabCrdt['S1']!=0) {SemesterSelection['S1']=true}
      TotEarndCrdt['S1'] += LabCrdt['S1'];

      //S2 Checking
      if ($('#S2A').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['A']]; Passed['S2']+=1; SemesterSelection['S2']=true;} else {Failed['S2']+=1;}
      if ($('#S2B').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['B']]; Passed['S2']+=1; SemesterSelection['S2']=true;} else {Failed['S2']+=1;}
      if ($('#S2C').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['C']]; Passed['S2']+=1; SemesterSelection['S2']=true;} else {Failed['S2']+=1;}
      if ($('#S2D').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['D']]; Passed['S2']+=1; SemesterSelection['S2']=true;} else {Failed['S2']+=1;}
      if ($('#S2E').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['E']]; Passed['S2']+=1; SemesterSelection['S2']=true;} else {Failed['S2']+=1;}
      if ($('#S2F').is(":checked")) {TotEarndCrdt['S2'] += credit[S2['F']]; Passed['S2']+=1; SemesterSelection['S2']=true;} else {Failed['S2']+=1;}
      LabCrdt['S2'] = parseInt($('#s2labcrdt').val());
      if (LabCrdt['S2']!=0) {SemesterSelection['S2']=true}
      TotEarndCrdt['S2'] += LabCrdt['S2'];

      //S3 Checking
      if ($('#S3A').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['A']]; Passed['S3']+=1; SemesterSelection['S3']=true;} else {Failed['S3']+=1;}
      if ($('#S3B').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['B']]; Passed['S3']+=1; SemesterSelection['S3']=true;} else {Failed['S3']+=1;}
      if ($('#S3C').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['C']]; Passed['S3']+=1; SemesterSelection['S3']=true;} else {Failed['S3']+=1;}
      if ($('#S3D').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['D']]; Passed['S3']+=1; SemesterSelection['S3']=true;} else {Failed['S3']+=1;}
      if ($('#S3E').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['E']]; Passed['S3']+=1; SemesterSelection['S3']=true;} else {Failed['S3']+=1;}
      if ($('#S3F').is(":checked")) {TotEarndCrdt['S3'] += credit[S3['F']]; Passed['S3']+=1; SemesterSelection['S3']=true;} else {Failed['S3']+=1;}
      LabCrdt['S3'] = parseInt($('#s3labcrdt').val());
      if (LabCrdt['S3']!=0) {SemesterSelection['S3']=true}
      TotEarndCrdt['S3'] += LabCrdt['S3'];

      //S4 Checking
      if ($('#S4A').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['A']]; Passed['S4']+=1; SemesterSelection['S4']=true;} else {Failed['S4']+=1;}
      if ($('#S4B').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['B']]; Passed['S4']+=1; SemesterSelection['S4']=true;} else {Failed['S4']+=1;}
      if ($('#S4C').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['C']]; Passed['S4']+=1; SemesterSelection['S4']=true;} else {Failed['S4']+=1;}
      if ($('#S4D').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['D']]; Passed['S4']+=1; SemesterSelection['S4']=true;} else {Failed['S4']+=1;}
      if ($('#S4E').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['E']]; Passed['S4']+=1; SemesterSelection['S4']=true;} else {Failed['S4']+=1;}
      if ($('#S4F').is(":checked")) {TotEarndCrdt['S4'] += credit[S4['F']]; Passed['S4']+=1; SemesterSelection['S4']=true;} else {Failed['S4']+=1;}
      LabCrdt['S4'] = parseInt($('#s4labcrdt').val());
      if (LabCrdt['S4']!=0) {SemesterSelection['S4']=true}
      TotEarndCrdt['S4'] += LabCrdt['S4'];

      //S5 Checking
      if ($('#S5A').is(":checked")) {TotEarndCrdt['S5'] += credit[S5['A']]; Passed['S5']+=1; SemesterSelection['S5']=true;} else {Failed['S5']+=1;}
      if ($('#S5B').is(":checked")) {TotEarndCrdt['S5'] += credit[S5['B']]; Passed['S5']+=1; SemesterSelection['S5']=true;} else {Failed['S5']+=1;}
      if ($('#S5C').is(":checked")) {TotEarndCrdt['S5'] += credit[S5['C']]; Passed['S5']+=1; SemesterSelection['S5']=true;} else {Failed['S5']+=1;}
      if ($('#S5D').is(":checked")) {TotEarndCrdt['S5'] += credit[S5['D']]; Passed['S5']+=1; SemesterSelection['S5']=true;} else {Failed['S5']+=1;}
      if ($('#S5E').is(":checked")) {TotEarndCrdt['S5'] += credit[S5['E']]; Passed['S5']+=1; SemesterSelection['S5']=true;} else {Failed['S5']+=1;}
      if ($('#S5F').is(":checked")) {TotEarndCrdt['S5'] += credit[S5['F']]; Passed['S5']+=1; SemesterSelection['S5']=true;} else {Failed['S5']+=1;}
      if ($('#S5S').is(":checked")) {TotEarndCrdt['S5'] += credit[S5['S']]; Passed['S5']+=1; SemesterSelection['S5']=true;} else {Failed['S5']+=1;}
      LabCrdt['S5'] = parseInt($('#s5labcrdt').val());
      if (LabCrdt['S5']!=0) {SemesterSelection['S5']=true}
      TotEarndCrdt['S5'] += LabCrdt['S5'];

      //S6 Checking
      if ($('#S6A').is(":checked")) {TotEarndCrdt['S6'] += credit[S6['A']]; Passed['S6']+=1; SemesterSelection['S6']=true;} else {Failed['S6']+=1;}
      if ($('#S6B').is(":checked")) {TotEarndCrdt['S6'] += credit[S6['B']]; Passed['S6']+=1; SemesterSelection['S6']=true;} else {Failed['S6']+=1;}
      if ($('#S6C').is(":checked")) {TotEarndCrdt['S6'] += credit[S6['C']]; Passed['S6']+=1; SemesterSelection['S6']=true;} else {Failed['S6']+=1;}
      if ($('#S6D').is(":checked")) {TotEarndCrdt['S6'] += credit[S6['D']]; Passed['S6']+=1; SemesterSelection['S6']=true;} else {Failed['S6']+=1;}
      if ($('#S6E').is(":checked")) {TotEarndCrdt['S6'] += credit[S6['E']]; Passed['S6']+=1; SemesterSelection['S6']=true;} else {Failed['S6']+=1;}
      if ($('#S6F').is(":checked")) {TotEarndCrdt['S6'] += credit[S6['F']]; Passed['S6']+=1; SemesterSelection['S6']=true;} else {Failed['S6']+=1;}
      if ($('#S6U').is(":checked")) {TotEarndCrdt['S6'] += credit[S6['U']]; Passed['S6']+=1; SemesterSelection['S6']=true;} else {Failed['S6']+=1;}
      LabCrdt['S6'] = parseInt($('#s6labcrdt').val());
      if (LabCrdt['S6']!=0) {SemesterSelection['S6']=true}
      TotEarndCrdt['S6'] += LabCrdt['S6'];

      //S7 Checking
      if ($('#S7A').is(":checked")) {TotEarndCrdt['S7'] += credit[S7['A']]; Passed['S7']+=1; SemesterSelection['S7']=true;} else {Failed['S7']+=1;}
      if ($('#S7B').is(":checked")) {TotEarndCrdt['S7'] += credit[S7['B']]; Passed['S7']+=1; SemesterSelection['S7']=true;} else {Failed['S7']+=1;}
      if ($('#S7C').is(":checked")) {TotEarndCrdt['S7'] += credit[S7['C']]; Passed['S7']+=1; SemesterSelection['S7']=true;} else {Failed['S7']+=1;}
      if ($('#S7D').is(":checked")) {TotEarndCrdt['S7'] += credit[S7['D']]; Passed['S7']+=1; SemesterSelection['S7']=true;} else {Failed['S7']+=1;}
      if ($('#S7E').is(":checked")) {TotEarndCrdt['S7'] += credit[S7['E']]; Passed['S7']+=1; SemesterSelection['S7']=true;} else {Failed['S7']+=1;}
      if ($('#S7F').is(":checked")) {TotEarndCrdt['S7'] += credit[S7['F']]; Passed['S7']+=1; SemesterSelection['S7']=true;} else {Failed['S7']+=1;}
      if ($('#S7S').is(":checked")) {TotEarndCrdt['S7'] += credit[S7['S']]; Passed['S7']+=1; SemesterSelection['S7']=true;} else {Failed['S7']+=1;}
      LabCrdt['S7'] = parseInt($('#s7labcrdt').val());
      if (LabCrdt['S7']!=0) {SemesterSelection['S7']=true}
      TotEarndCrdt['S7'] += LabCrdt['S7'];


      //S8 Checking
      if ($('#S8A').is(":checked")) {TotEarndCrdt['S8'] += credit[S8['A']];Passed['S8']+=1; SemesterSelection['S8']=true;} else {Failed['S8']+=1;}
      if ($('#S8B').is(":checked")) {TotEarndCrdt['S8'] += credit[S8['B']];Passed['S8']+=1; SemesterSelection['S8']=true;} else {Failed['S8']+=1;}
      if ($('#S8C').is(":checked")) {TotEarndCrdt['S8'] += credit[S8['C']];Passed['S8']+=1; SemesterSelection['S8']=true;} else {Failed['S8']+=1;}
      if ($('#S8D').is(":checked")) {TotEarndCrdt['S8'] += credit[S8['D']];Passed['S8']+=1; SemesterSelection['S8']=true;} else {Failed['S8']+=1;}
      if ($('#S8E').is(":checked")) {TotEarndCrdt['S8'] += credit[S8['E']];Passed['S8']+=1; SemesterSelection['S8']=true;} else {Failed['S8']+=1;}
      // LabCrdt['S8'] = parseInt($('#s8labcrdt').val()); //No dropdown so ignored on 8th sem
      if (LabCrdt['S8']!=0) {SemesterSelection['S8']=true}
      TotEarndCrdt['S8'] += LabCrdt['S8'];


      //Calculating Sums of Earned Credits
      TotEarndAccmCrdt['S1']=TotEarndCrdt['S1'];
      TotEarndAccmCrdt['S2']=TotEarndAccmCrdt['S1']+TotEarndCrdt['S2'];
      TotEarndAccmCrdt['S3']=TotEarndAccmCrdt['S2']+TotEarndCrdt['S3'];
      TotEarndAccmCrdt['S4']=TotEarndAccmCrdt['S3']+TotEarndCrdt['S4'];
      TotEarndAccmCrdt['S5']=TotEarndAccmCrdt['S4']+TotEarndCrdt['S5'];
      TotEarndAccmCrdt['S6']=TotEarndAccmCrdt['S5']+TotEarndCrdt['S6'];
      TotEarndAccmCrdt['S7']=TotEarndAccmCrdt['S6']+TotEarndCrdt['S7'];
      TotEarndAccmCrdt['S8']=TotEarndAccmCrdt['S7']+TotEarndCrdt['S8'];

      //Calculating no. of passed subjects
      Passed['Total'] = Passed['S1']+Passed['S2']+Passed['S3']+Passed['S4']+Passed['S5']+Passed['S6']+Passed['S7']+Passed['S8'];

      //Calculating no. of passed subjects
      Failed['Total'] = Failed['S1']+Failed['S2']+Failed['S3']+Failed['S4']+Failed['S5']+Failed['S6']+Failed['S7']+Failed['S8'];

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
    $("#s5Total").html(TotEarndCrdt['S5']);
    $("#s6Total").html(TotEarndCrdt['S6']);
    $("#s7Total").html(TotEarndCrdt['S7']);
    $("#s8Total").html(TotEarndCrdt['S8']);
    //Accmltd credits
    $("#AccmltdS1").html(TotEarndAccmCrdt['S1']);
    $("#AccmltdS2").html(TotEarndAccmCrdt['S2']);
    $("#AccmltdS3").html(TotEarndAccmCrdt['S3']);
    $("#AccmltdS4").html(TotEarndAccmCrdt['S4']);
    $("#AccmltdS5").html(TotEarndAccmCrdt['S5']);
    $("#AccmltdS6").html(TotEarndAccmCrdt['S6']);
    $("#AccmltdS7").html(TotEarndAccmCrdt['S7']);
    $(".AccmltdS8").html(TotEarndAccmCrdt['S8']);
    //Accmltd max credits
    $(".AccmltdMaxS1").html(MaxCreditData['S1']);
    $(".AccmltdMaxS2").html(MaxCreditData['S2']+MaxCreditData['S1']);
    $(".AccmltdMaxS3").html(MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
    $(".AccmltdMaxS4").html(MaxCreditData['S4']+MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
    $(".AccmltdMaxS5").html(MaxCreditData['S5']+MaxCreditData['S4']+MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
    $(".AccmltdMaxS6").html(MaxCreditData['S6']+MaxCreditData['S5']+MaxCreditData['S4']+MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
    $(".AccmltdMaxS7").html(MaxCreditData['S7']+MaxCreditData['S6']+MaxCreditData['S5']+MaxCreditData['S4']+MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
    $(".AccmltdMaxS8").html(MaxCreditData['S8']+MaxCreditData['S7']+MaxCreditData['S6']+MaxCreditData['S5']+MaxCreditData['S4']+MaxCreditData['S3']+MaxCreditData['S2']+MaxCreditData['S1']);
  }
  function dispMaxCredits() {
    //S1 not needed
    $("#S2MaxCredit").html(MaxCreditData['S2']);
    $("#S3MaxCredit").html(MaxCreditData['S3']);
    $("#S4MaxCredit").html(MaxCreditData['S4']);
    $("#S5MaxCredit").html(MaxCreditData['S5']);
    $("#S6MaxCredit").html(MaxCreditData['S6']);
    $("#S7MaxCredit").html(MaxCreditData['S7']);
    $("#S8MaxCredit").html(MaxCreditData['S8']);
  }
  function checkVoidAndDisplayResult() {
    if(TotEarndAccmCrdt['S8']!=0) {
        $(".errorMsg").slideUp();
        $(".resultBox").fadeIn(1500);
        // Displaying Calculated Values
        if(SemesterSelection['S1']==true || SemesterSelection['S2']==true || SemesterSelection['S3']==false && SemesterSelection['S4']==false) {
          //Disp S1 and S2
          $(".s1s2").html(TotEarndAccmCrdt['S2']);
          $("#S1S4Result").fadeOut(); // Hiding S1S4 result if user doesn't input S3 and S4
        }
        if (SemesterSelection['S3']==true || SemesterSelection['S4']==true) {
          //Disp S1 to S4
          $(".s1s2").html(TotEarndAccmCrdt['S2']);
          $("#S1S4Result").fadeIn(); // Showing in case of hiding before // BugFixed
          $(".s1s4").html(TotEarndAccmCrdt['S4']);
        }
        //Disp S1 to S4 
        $(".s1s4").html(TotEarndAccmCrdt['S4']);
        //Disp S1 to S6
        $(".s1s6").html(TotEarndAccmCrdt['S6']);
        $("#S1S6Result").fadeIn(); //
        $(".s1s6").html(TotEarndAccmCrdt['S6']);

        //Disp S1 to S8
        $(".s1s8").html(TotEarndAccmCrdt['S8']);
        $("#S1S8Result").fadeIn();
        $(".s1s8").html(TotEarndAccmCrdt['S8']);

        //Displaying Passed subjects
        $(".TotpassdS1Subs").html(Passed['S1']);
        $(".TotpassdS2Subs").html(Passed['S2']);
        $(".TotpassdS3Subs").html(Passed['S3']);
        $(".TotpassdS4Subs").html(Passed['S4']);
        $(".TotpassdS5Subs").html(Passed['S5']);
        $(".TotpassdS6Subs").html(Passed['S6']);
        $(".TotpassdS7Subs").html(Passed['S7']);
        $(".TotpassdS8Subs").html(Passed['S8']);
        $(".TotpassdSubs").html(Passed['Total']);

        //Displaying Failed subjects
        $(".TotfailedS1Subs").html(Failed['S1']);
        $(".TotfailedS2Subs").html(Failed['S2']);
        $(".TotfailedS3Subs").html(Failed['S3']);
        $(".TotfailedS4Subs").html(Failed['S4']);
        $(".TotfailedS5Subs").html(Failed['S5']);
        $(".TotfailedS6Subs").html(Failed['S6']);
        $(".TotfailedS7Subs").html(Failed['S7']);
        $(".TotfailedS8Subs").html(Failed['S8']);
        $(".TotfailedSubs").html(Failed['Total']);
     } else {
      $(".resultBox").slideUp(500);
      $(".errorMsg").slideDown();
    }
  }
  function setResultClasses() {
    if(TotEarndAccmCrdt['S2']<26) {
      $(".s1s2").removeClass("green");
      $(".s1s2").addClass("red");
    }
    else {
      $(".s1s2").removeClass("red");
      $(".s1s2").addClass("green");
    }
    // Adding or Removing classes according to the total credits optained from S1 S2 S3 and S4
    if(TotEarndAccmCrdt['S4']<52) {
      $(".s1s4").removeClass("green");
      $(".s1s4").addClass("red");
    }
    else {
      $(".s1s4").removeClass("red");
      $(".s1s4").addClass("green");
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

  $("#S1FullPass").click(function() {tickAllCheckboxWithSem('S1');});
  $("#S2FullPass").click(function() {tickAllCheckboxWithSem('S2');});
  $("#S3FullPass").click(function() {tickAllCheckboxWithSem('S3');});
  $("#S4FullPass").click(function() {tickAllCheckboxWithSem('S4');});
  $("#S5FullPass").click(function() {tickAllCheckboxWithSem('S5');});
  $("#S6FullPass").click(function() {tickAllCheckboxWithSem('S6');});
  $("#S7FullPass").click(function() {tickAllCheckboxWithSem('S7');});
  $("#S8FullPass").click(function() {tickAllCheckboxWithSem('S8');});
  function tickAllCheckboxWithSem(sem) {
      subs = {
      'S1' : ["#S1A","#S1B","#S1C","#S1D","#S1E","#S1F"],
      'S2' : ["#S2A","#S2B","#S2C","#S2D","#S2E","#S2F"],
      'S3' : ["#S3A","#S3B","#S3C","#S3D","#S3E","#S3F"],
      'S4' : ["#S4A","#S4B","#S4C","#S4D","#S4E","#S4F"],
      'S5' : ["#S5A","#S5B","#S5C","#S5D","#S5E","#S5F","#S5S"],
      'S6' : ["#S6A","#S6B","#S6C","#S6D","#S6E","#S6F","#S6U"],
      'S7' : ["#S7A","#S7B","#S7C","#S7D","#S7E","#S7F","#S7S"],
      'S8' : ["#S8A","#S8B","#S8C","#S8D","#S8E"]
    }
    sems = {
      'S1':"#S1FullPass",
      'S2':"#S2FullPass",
      'S3':"#S3FullPass",
      'S4':"#S4FullPass",
      'S5':"#S5FullPass",
      'S6':"#S6FullPass",
      'S7':"#S7FullPass",
      'S8':"#S8FullPass"
    }
    //checkg whether checkbox is turned on or off
    if ($(sems[sem]).is(":checked")) {
      //Check all subs in S1
      for (i=0;i<subs[sem].length;i++){
        $(subs[sem][i]).prop('checked', true);
      }

    } else {
      //Clear check all subs in S2
      for (i=0;i<subs[sem].length;i++){
        $(subs[sem][i]).prop('checked', false);
      }
    }
  }



});
