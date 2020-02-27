$(document).ready(function() {



  $('#sems_head_s1').click(function () { $('#sems_content_s1').slideToggle(); });
  $('#sems_head_s2').click(function () { $('#sems_content_s2').slideToggle(); });
  $('#sems_head_s3').click(function () { $('#sems_content_s3').slideToggle(); });
  $('#sems_head_s4').click(function () { $('#sems_content_s4').slideToggle(); });
  $('#sems_head_s5').click(function () { $('#sems_content_s5').slideToggle(); });
  $('#sems_head_s6').click(function () { $('#sems_content_s6').slideToggle(); });
  $('#sems_head_s7').click(function () { $('#sems_content_s7').slideToggle(); });
  $('#sems_head_s8').click(function () { $('#sems_content_s8').slideToggle(); });

  let cName = {
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
      //S5 and S6 all ECE subs
      "EC301":"Digital Signal Processing - EC301",
      "EC303":"Applied Electromagnetic Theory - EC303",
      "EC305":"Microprocessor and Microcontrollers - EC305",
      "EC307":"Power Electronics and Instrumentation - EC307",
      "EC341":"Design Project - EC341",
      "EC361":"Digital System Design - EC361",
      "EC363":"Optimization Technique - EC363",
      "EC365":"Biomedical Engineering - EC365",
      "EC360":"Soft Computing - EC360",
      "EC302":"Digital Communication - EC302",
      "EC304":"VLSI - EC304",
      "EC306":"Antenna & Wave Propogation - EC306",
      "EC308":"Embedded System - EC308",
      "EC312":"Object Oriented Programming - EC312",
      "EC352":"Comprehensive Exam - EC352",
      "EC362":"Modelling & Simulation of Communication System - EC362",
      "EC364":"Computer Vision - EC364",
      "EC366":"Reat Time Operating System - EC366",
      "EC368":"Robotics - EC368",
      "EC370":"Digital Image Processing - EC370",
      // S7 and S8 all ECE subs
      "EC401":"Information Theory & Coding - EC401",
      "EC403":"Microwave & Radar Engg - EC403",
      "EC405":"Optical Communication - EC405",
      "EC407":"Computer Communication - EC407",
      "EC409":"Control Systems - EC409",
      "EC451":"Seminar & Project Preliminary - EC451",
      "EC461":"Microwave Devices and Circuits - EC461",
      "EC463":"Speech and Audio Processing - EC463",
      "EC465":"MEMS - EC465",
      "EC467":"Pattern Recognition - EC467",
      "EC469":"Opto Electronic Devices - EC469",
      "EC402":"Nano Electronics - EC402",
      "EC404":"Advanced Communication Systems - EC404",
      "EC462":"Mixed Signal Circuit Design - EC462",
      "EC464":"Low Power VLSI Design - EC464",
      "EC466":"Cyber Security - EC466",
      "EC468":"Secure Communication - EC468",
      "EC472":"Integrated Optics & Photonic Systems - EC472",
      "EC492":"Projects - EC492",

      //S3 & S4 all ME subs
      "ME201":"Mechanics of Solids - ME201",
      "ME203":"Mechanics of Fluids - ME203",
      "ME205":"Thermodyanmics - ME205",
      "ME210":"Metallurgy and Materials Engineering - ME210",
      "ME202":"Advanced Mechanics of Solids - ME202",
      "ME204":"Thermal Engineering - ME204",
      "ME206":"Fluid Machinery - ME206",
      "ME220":"Manufacturing Technology - ME220",
      //S5 and S6 all ME subs
      "ME301":"Mechanics of Machinery - ME301",
      "ME303":"Machine Tools and Digital Manufacturing - ME303",
      "ME305":"Computer Programming & Numerical Methods - ME305",
      "EE311":"Electrical Drives & Control for Automation - EE311",
      "ME341":"Design Project - ME341",
      "ME361":"Advanced Fuild Mechanics - ME361",
      "ME363":"Composite Materials and Mechanics - ME363",
      "ME365":"Advanced Metal Casting - ME365",
      "ME367":"Non-Destructive Testing - ME367",
      "ME369":"Tribology - ME369",
      "ME371":"Nuclear Engineering - ME371",
      "ME373":"Human Relations Management - ME373",
      "ME302":"Heat & Mass Transfer - ME302",
      "ME304":"Dynamics of Machinery - ME304",
      "ME306":"Advanced Manufacturing Technology - ME306",
      "ME308":"Computer Aided Design and Analysis - ME308",
      "ME312":"Metrology and Instrumentation - ME312",
      "ME352":"Comprehensive Exam - ME352",
      "ME362":"Control System Engineering - ME362",
      "ME364":"Turbo Machinery - ME364",
      "ME366":"Advanced Metal Joining Technology - ME366",
      "ME368":"Marketing Management - ME368",
      "ME372":"Operations Research - ME372",
      "ME374":"Theory of Vibration - ME374",
      "ME376":"Maintenance Engineering - ME376",
      // S7 and S8 all ME subs
      "ME401":"Design of Machine Elements I - ME401",
      "ME403":"Advanced Energy Engineering - ME403",
      "ME405":"Refrigeration and Air Conditioning - ME405",
      "ME407":"Mechatronics - ME407",
      "ME409":"Comprehensive Fluid Flow - ME409",
      "ME451":"Seminar & Project Preliminary - ME451",
      "ME461":"Aerospace Engineering - ME461",
      "ME463":"Automobile Engineering - ME463",
      "ME465":"Industrial Hydraulics - ME465",
      "IE306":"Supply Chain and Logistics Management - IE306",
      "ME467":"Cryogenic Engineering - ME467",
      "ME469":"Finite Element Analysis - ME469",
      "ME471":"Optimization Techniques - ME471",
      "ME402":"Design of Machine Elements II - ME402",
      "ME404":"Industrial Engineering - ME404",
      "ME462":"Propulsion Engineering - ME462",
      "ME464":"Robotics and Automation - ME464",
      "ME466":"Computational Fluid Dynamics - ME466",
      "ME468":"Nanotechnology - ME468",
      "ME472":"Failure Analysis and Design - ME472",
      "ME474":"Micro and Nano Manufacturing - ME474",
      "ME476":"Material Handling & Facilities Planning - ME476",
      "ME492":"Project - ME492",

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
      //S5 and S6 all CE subs
      "CE301":"Design of Concrete Structures I - CE301",
      "CE303":"Structural Analysis II - CE303",
      "CE305":"Geotechnical Engineering II - CE305",
      "CE307":"Geomatics - CE307",
      "CE309":"Water Resources Engineering - CE309",
      "CE341":"Design Project - CE341",
      "CE361":"Advanced Concrete Technology - CE361",
      "CE363":"Geotechnical Investigation - CE363",
      "CE365":"Functional Design of Building - CE365",
      "CE369":"Disaster Management - CE309",
      "CE371":"Environment and Pollution - CE371",
      "CE373":"Advanced Mechanics of Materials - CE373",
      "CE302":"Design of Hydraulic Structures - CE302",
      "CE304":"Design of Concrete Structures II - CE304",
      "CE306":"Computer Programming and Computational Techniques - CE306",
      "CE308":"Transportation Engineering - CE308",
      "CE352":"Comprehensive Exam - CE352",
      "CE362":"Ground Improvement Techniques - CE362",
      "CE364":"Advanced Foundation Engineering - CE364",
      "CE366":"Traffic Engineering and Management - CE366",
      "CE368":"Prestressed Concrete - CE368",
      "CE372":"Engineering Hydraulogy - CE372",
      "CE374":"Air Quality Management - CE374",
      // S7 and S8 all CE subs
      "CE401":"Design of Steel Structures - CE401",
      "CE403":"Structural Analysis III - CE403",
      "CE405":"Environment Engineering I - CE405",
      "CE407":"Transportation Engineering II - CE407",
      "CE409":"Quantity Surveying and Valuation - CE409",
      "CE451":"Seminar & Project Preliminary - CE451",
      "CE461":"Water Hydrodynamics and Coastal Engineering - CE461",
      "CE463":"Bridge Engineering - CE463",
      "CE465":"Geo-Environmental Engineering - CE465",
      "CE467":"Highway Pavement Design - CE467",
      "CE469":"Environmental Impact Assesment - CE469",
      "CE471":"Advanced Structural Design - CE471",
      "CE473":"Advanced Computational Techniques and Optimization - CE473",
      "CE402":"Environmental Engineering II - CE402",
      "CE404":"Civil Engineering Project Management - CE404",
      "CE462":"Town and Country Planning - CE462",
      "CE464":"Reinforced Soil Structures and Geosynthetics - CE464",
      "CE466":"Finite Element Methods - CE466",
      "CE468":"Structural Dynamics and Earthquake Resistant Design - CE468",
      "CE472":"Transportation Planning - CE472",
      "CE474":"Municipal Solid Waste Management - CE474",
      "CE492":"Project - CE492",

      //S3 & S4 all EEE subs
      "EE201":"Circuits and Networks - EE201",
      "EE203":"Analog Electronics Circuits - EE203",
      "EE205":"DC Machines and Transformers - EE205",
      "EE207":"Computer Programming - EE207",
      "EE202":"Synchronous and Induction Machines - EE202",
      "EE204":"Digital Electronics and Logic Design - EE204",
      "EE206":"Material Science - EE206",
      "EE208":"Measurements and Instrumentation - EE208",
      //S5 and S6 all EEE subs
      "EE301":"Power Generation, Transmission and Protection - EE301",
      "EE303":"Linear Control System - EE303",
      "EE305":"Power Electronics - EE305",
      "EE307":"Signals and Systems - EE307",
      "EE309":"Microprocessor and Embedded Systems - EE309",
      "EE341":"Design Project - EE341",
      "EE361":"Object Oriented Programming - EE361",
      "EE363":"Computer Organization and Architecture - EE363",
      "EE365":"Digital System Design - EE365",
      "EE367":"New and Renewable Energy Systems - EE367",
      "EE369":"High Voltage Engineering - EE369",
      "EE302":"Electromagnetics - EE302",
      "EE304":"Advanced Control Theory - EE304",
      "EE306":"Power Supply Analysis - EE306",
      "EE308":"Electric Drives - EE308",
      "EE352":"Comprehensive Exam - EE352",
      "EE362":"Data Structures and Algorithm - EE362",
      "EE364":"Swithching Mode Power Converters - EE364",
      "EE366":"Illumination Technology - EE366",
      "EE368":"Soft Computing - EE368",
      "EE372":"Biomedical Instrumentation - EE372",
      // S7 and S8 all EEE subs
      "EE401":"Electronic Communication - EE401",
      "EE403":"Distributed generation and smart grids - EE403",
      "EE405":"Electrical System Design - EE405",
      "EE407":"Digital Signal Processing - EE407",
      "EE409":"Electrical Machine Designs - EE409",
      "EE451":"Seminar & Project Preliminary - EE451",
      "EE461":"Modern Operating Systems - EE461",
      "EE463":"Computer Aided Power Systems Analysis - EE463",
      "EE465":"Power Quality - EE465",
      "EE467":"Nonlinear Control Systems - EE467",
      "EE469":"Electric and Hybrid Vehicles - EE469",
      "EE402":"Special Electric Machines - EE402",
      "EE404":"Industrial Instrumentation & Automation - EE404",
      "EE462":"Design of Digital Control Systems - EE462",
      "EE464":"FACTS - EE464",
      "EE466":"Digital Image Processing - EE466",
      "EE468":"Computer Networks - EE468",
      "EE472":"Internet of Things - EE472",
      "EE474":"Energy Management and Auditing - EE474",
      "EE492":"Project - EE492",

      //S3 & S4 all BTE subs
      "BT201":"Fluid Flow and Particle Technology - BT201",
      "BT203":"Concepts in Biochemical Engineering - BT203",
      "BT205":"Bioprocess Calculations - BT205",
      "BT207":"Microbiology - BT207",
      "BT202":"Bioprocess Heat Transfer - BT202",
      "BT204":"Industrial Bioprocessing - BT204",
      "BT206":"C++ Programming - BT206",
      "BT208":"Principles of Biochemistry - BT208",
      //S5 and S6 all BTE subs
      "BT301":"Mass Transfer Operations - BT301",
      "BT303":"Chemical and Biological Reaction Engineering - BT303",
      "BT305":"Cellular and Molecular Biology - BT305",
      "BT307":"Bioprocess Instrumentation - BT307",
      "BT309":"Enzyme Engineering and Technology - BT309",
      "BT341":"Design Project - BT341",
      "BT361":"Animal and Plant Cell Biotechnology - BT361",
      "BT363":"Metabolic Engineering and Synthetic Biology - BT363",
      "BT365":"Proteomics and Protien Engineering - BT365",
      "BT367":"Tissue Engineering and Stem Cells - BT367",
      "BT302":"Transport Phenomena in Biological Systems - BT302",
      "BT304":"Downstream Processing - BT304",
      "BT306":"Bioprocess Engineering - BT306",
      "BT308":"Bioreactor Analysis and Design - BT308",
      "BT352":"Comprehensive Exam - BT352",
      "BT362":"Sustainable Energy Processess - BT362",
      "BT364":"Bio refinery Engineering - BT364",
      "BT366":"Bioremediation Technology - BT366",
      "BT368":"Genetic Engineering - BT368",
      // S7 and S8 all BTE subs
      "BT401":"Process Dynamics and Control - BT401",
      "BT403":"Bioinformatics - BT403",
      "BT405":"Environmental Engineering - BT405",
      "BT407":"Bioenergy Engineering - BT407",
      "BT409":"Environmental Biotechnologys - BT409",
      "BT451":"Seminar & Project Preliminary - BT451",
      "BT461":"Design of Biological Wastewater Treatment Systems - BT461",
      "BT463":"Bioprocess Optimization Modelling and Simulation - BT463",
      "BT465":"Advanced Seperation Processes - BT465",
      "BT467":"Biopharmaceutical Technology - BT467",
      "BT402":"Bioprocess Plant Design and Safety - BT402",
      "BT404":"Bioprocess Quality Control - BT404",
      "BT462":"Biomaterials - BT462",
      "BT464":"Food Process Technology - BT464",
      "BT466":"Nano Biotechnology - BT466",
      "BT468":"Enterpreneurship, IPR and Biosafety - BT468",
      "BT492":"Project - BT492",
    }
  let credit = {
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
      "EC208":3, // Analog Communication Engineering
      //S5 and S6 all ECE subs
      "EC301":4, // Digital Signal Processing
      "EC303":3, // Applied Electromagnetic Theory
      "EC305":3, // Microprocessor and Microcontrollers
      "EC307":3, // Power Electronics and Instrumentation
      "EC341":2, // Design Project
      "EC361":3, // Digital System Design
      "EC363":3, // Optimization Technique
      "EC365":3, // Biomedical Engineering
      "EC360":3, // Soft Computing
      "EC302":4, // Digital Communication
      "EC304":3, // VLSI
      "EC306":3, // Antenna & Wave Propogation
      "EC308":3, // Embedded System
      "EC312":3, // Object Oriented Programming
      "EC352":2, // Comprehensive Exam
      "EC362":3, // Modelling & Simulation of Communication System
      "EC364":3, // Computer Vision
      "EC366":3, // Reat Time Operating System
      "EC368":3, // Robotics
      "EC370":3, // Digital Image Processing
      // S7 and S8 all ECE subs
      "EC401":4, // Information Theory & Coding
      "EC403":3, // Microwave & Radar Engg
      "EC405":3, // Optical Communication
      "EC407":3, // Computer Communication
      "EC409":3, // Control System
      "EC451":2, // Seminar & Project Preliminary
      "EC461":3, // Microwave Devices and Circuits
      "EC463":3, // Speech and Audio Processing
      "EC465":3, // MEMS
      "EC467":3, // Pattern Recognition
      "EC469":3, // Opto Electronic Devices
      "EC402":3, // Nano Electronics
      "EC404":3, // Advanced Communication Systems
      "EC462":3, // Mixed Signal Circuit Design
      "EC464":3, // Low Power VLSI Design
      "EC466":3, // Cyber Security
      "EC468":3, // Secure Communication
      "EC472":3, // Integrated Optics & Photonic Systems
      "EC492":6, // Projects



      //S3 & S4 all ME subs
      "ME201":4, // Mechanics of Solids
      "ME203":4, // Mechanics of Fluids
      "ME205":4, // Thermodyanmics
      "ME210":3, // Metallurgy and Materials Engineering
      "ME202":4, // Advanced Mechanics of Solids
      "ME204":4, // Thermal Engineering
      "ME206":3, // Fluid Machinery
      "ME220":3, // Manufacturing Technology
      //S5 and S6 all ME subs
      "ME301":4, // Mechanics of Machinery
      "ME303":3, // Machine Tools and Digital Manufacturing
      "ME305":3, // Computer Programming & Numerical Methods
      "EE311":3, // Electrical Drives & Control for Automation
      "ME341":2, // Design Project
      "ME361":3, // Advanced Fuild Mechanics
      "ME363":3, // Composite Materials and Mechanics
      "ME365":3, // Advanced Metal Casting
      "ME367":3, // Non-Destructive Testing
      "ME369":3, // Tribology
      "ME371":3, // Nuclear Engineering
      "ME373":3, // Human Relations Management
      "ME302":4, // Heat & Mass Transfer
      "ME304":3, // Dynamics of Machinery
      "ME306":3, // Advanced Manufacturing Technology
      "ME308":3, // Computer Aided Design and Analysis
      "ME312":3, // Metrology and Instrumentation
      "ME352":2, // Comprehensive Exam
      "ME362":3, // Control System Engineering
      "ME364":3, // Turbo Machinery
      "ME366":3, // Advanced Metal Joining Technology
      "ME368":3, // Marketing Management
      "ME372":3, // Operations Research
      "ME374":3, // Theory of Vibration
      "ME376":3, // Maintenance Engineering
      // S7 and S8 all ME subs
      "ME401":4, // Design of Machine Elements I
      "ME403":3, // Advanced Energy Engineering
      "ME405":3, // Refrigeration and Air Conditioning
      "ME407":3, // Mechatronics
      "ME409":3, // Comprehensive Fluid Flow
      "ME451":2, // Seminar & Project Preliminary
      "ME461":3, // Aerospace Engineering
      "ME463":3, // Automobile Engineering
      "ME465":3, // Industrial Hydraulics
      "IE306":3, // Supply Chain and Logistics Management
      "ME467":3, // Cryogenic Engineering
      "ME469":3, // Finite Element Analysis
      "ME471":3, // Optimization Techniques
      "ME402":3, // Design of Machine Elements II
      "ME404":3, // Industrial Engineering
      "ME462":3, // Propulsion Engineering
      "ME464":3, // Robotics and Automation
      "ME466":3, // Computational Fluid Dynamics
      "ME468":3, // Nanotechnology
      "ME472":3, // Failure Analysis and Design
      "ME474":3, // Micro and Nano Manufacturing
      "ME476":3, // Material Handling & Facilities Planning
      "ME492":6, // Project

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
      //S5 and S6 all CE subs
      "CE301":4, // Design of Concrete Structures I
      "CE303":3, // Structural Analysis II
      "CE305":3, // Geotechnical Engineering II
      "CE307":3, // Geomatics
      "CE309":3, // Water Resources Engineering
      "CE341":2, // Design Project
      "CE361":3, // Advanced Concrete Technology
      "CE363":3, // Geotechnical Investigation
      "CE365":3, // Functional Design of Building
      "CE369":3, // Disaster Management
      "CE371":3, // Environment and Pollution
      "CE373":3, // Advanced Mechanics of Materials
      "CE302":4, // Design of Hydraulic Structures
      "CE304":3, // Design of Concrete Structures II
      "CE306":3, // Computer Programming and Computational Techniques
      "CE308":3, // Transportation Engineering
      "CE352":2, // Comprehensive Exam
      "CE362":3, // Ground Improvement Techniques
      "CE364":3, // Advanced Foundation Engineering
      "CE366":3, // Traffic Engineering and Management
      "CE368":3, // Prestressed Concrete
      "CE372":3, // Engineering Hydraulogy
      "CE374":3, // Air Quality Management
      // S7 and S8 all CE subs
      "CE401":4, // Design of Steel Structures
      "CE403":3, // Structural Analysis III
      "CE405":3, // Environment Engineering I
      "CE407":3, // Transportation Engineering II
      "CE409":3, // Quantity Surveying and Valuation
      "CE451":2, // Seminar & Project Preliminary
      "CE461":3, // Water Hydrodynamics and Coastal Engineering
      "CE463":3, // Bridge Engineering
      "CE465":3, // Geo-Environmental Engineering
      "CE467":3, // Highway Pavement Design
      "CE469":3, // Environmental Impact Assesment
      "CE471":3, // Advanced Structural Design
      "CE473":3, // Advanced Computational Techniques and Optimization
      "CE402":3, // Environmental Engineering II
      "CE404":3, // Civil Engineering Project Management
      "CE462":3, // Town and Country Planning
      "CE464":3, // Reinforced Soil Structures and Geosynthetics
      "CE466":3, // Finite Element Methods
      "CE468":3, // Structural Dynamics and Earthquake Resistant Design
      "CE472":3, // Transportation Planning
      "CE474":3, // Municipal Solid Waste Management
      "CE492":6, // Project

      //S3 & S4 all EEE subs
      "EE201":4, // Circuits and Networks
      "EE203":4, // Analog Electronics Circuits
      "EE205":4, // DC Machines and Transformers
      "EE207":3, // Computer Programming
      "EE202":4, // Synchronous and Induction Machines
      "EE204":3, // Digital Electronics and Logic Design
      "EE206":3, // Material Science
      "EE208":4, // Measurements and Instrumentation
      //S5 and S6 all EEE subs
      "EE301":4, // Power Generation, Transmission and Protection
      "EE303":3, // Linear Control System
      "EE305":3, // Power Electronics
      "EE307":3, // Signals and Systems
      "EE309":3, // Microprocessor and Embedded Systems
      "EE341":2, // Design Project
      "EE361":3, // Object Oriented Programming
      "EE363":3, // Computer Organization and Architecture
      "EE365":3, // Digital System Design
      "EE367":3, // New and Renewable Energy Systems
      "EE369":3, // High Voltage Engineering
      "EE302":3, // Electromagnetics
      "EE304":4, // Advanced Control Theory
      "EE306":3, // Power Supply Analysis
      "EE308":3, // Electric Drives
      "EE352":2, // Comprehensive Exam
      "EE362":3, // Data Structures and Algorithm
      "EE364":3, // Swithching Mode Power Converters
      "EE366":3, // Illumination Technology
      "EE368":3, // Soft Computing
      "EE372":3, // Biomedical Instrumentation
      // S7 and S8 all EEE subs
      "EE401":3, // Electronic Communication
      "EE403":3, // Distributed generation and smart grids
      "EE405":4, // Electrical System Design
      "EE407":3, // Digital Signal Processing
      "EE409":3, // Electrical Machine Designs
      "EE451":2, // Seminar & Project Preliminary
      "EE461":3, // Modern Operating Systems
      "EE463":3, // Computer Aided Power Systems Analysis
      "EE465":3, // Power Quality
      "EE467":3, // Nonlinear Control Systems
      "EE469":3, // Electric and Hybrid Vehicles
      "EE402":3, // Special Electric Machines
      "EE404":3, // Industrial Instrumentation & Automation
      "EE462":3, // Design of Digital Control Systems
      "EE464":3, // FACTS
      "EE466":3, // Digital Image Processing
      "EE468":3, // Computer Networks
      "EE472":3, // Internet of Things
      "EE474":3, // Energy Management and Auditing
      "EE492":6, // Project

      //S3 & S4 all BTE subs
      "BT201":4, // Fluid Flow and Particle Technology
      "BT203":4, // Concepts in Biochemical Engineering
      "BT205":4, // Bioprocess Calculations
      "BT207":3, // Microbiology
      "BT202":4, // Bioprocess Heat Transfer
      "BT204":4, // Industrial Bioprocessing
      "BT206":3, // C++ Programming
      "BT208":3, // Principles of Biochemistry
      //S5 and S6 all BTE subs
      "BT301":4, // Mass Transfer Operations
      "BT303":3, // Chemical and Biological Reaction Engineering
      "BT305":3, // Cellular and Molecular Biology
      "BT307":3, // Bioprocess Instrumentation
      "BT309":3, // Enzyme Engineering and Technology
      "BT341":2, // Design Project
      "BT361":3, // Animal and Plant Cell Biotechnology
      "BT363":3, // Metabolic Engineering and Synthetic Biology
      "BT365":3, // Proteomics and Protien Engineering
      "BT367":3, // Tissue Engineering and Stem Cells
      "BT302":4, // Transport Phenomena in Biological Systems
      "BT304":3, // Downstream Processing
      "BT306":3, // Bioprocess Engineering
      "BT308":3, // Bioreactor Analysis and Design
      "BT352":2, // Comprehensive Exam
      "BT362":3, // Sustainable Energy Processess
      "BT364":3, // Bio refinery Engineering
      "BT366":3, // Bioremediation Technology
      "BT368":3, // Genetic Engineering
      // S7 and S8 all BTE subs
      "BT401":4, // Process Dynamics and Control
      "BT403":3, // Bioinformatics
      "BT405":3, // Environmental Engineering
      "BT407":3, // Bioenergy Engineering
      "BT409":3, // Environmental Biotechnologys
      "BT451":2, // Seminar & Project Preliminary
      "BT461":3, // Design of Biological Wastewater Treatment Systems
      "BT463":3, // Bioprocess Optimization Modelling and Simulation
      "BT465":3, // Advanced Seperation Processes
      "BT467":3, // Biopharmaceutical Technology
      "BT402":3, // Bioprocess Plant Design and Safety
      "BT404":3, // Bioprocess Quality Control
      "BT462":3, // Biomaterials
      "BT464":3, // Food Process Technology
      "BT466":3, // Nano Biotechnology
      "BT468":3, // Enterpreneurship, IPR and Biosafety
      "BT492":6, // Project
    }

  let S1 = {"A":"","B":"","C":"","D":"","E":"","F":""}
  let S2 = {"A":"","B":"","C":"","D":"","E":"","F":""}
  let S3 = {"A":"","B":"","C":"","D":"","E":"","F":""}
  let S4 = {"A":"","B":"","C":"","D":"","E":"","F":""}
  let S5 = {"A":"","B":"","C":"","D":"","E":"","F":"","S":""}
  let S6 = {"A":"","B":"","C":"","D":"","E":"","F":"","U":""}
  let S7 = {"A":"","B":"","C":"","D":"","E":"","F":"","S":""}
  let S8 = {"A":"","B":"","C":"","D":"","E":""}

  course = 'cse'

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
    default: console.log("No course detected!");
              break;
  }

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
    //S5
    S5['A']="ME301";
    S5['B']="ME303";
    S5['C']="ME305";
    S5['D']="EE311";
    S5['E']="HS300";
    S5['F']="EL101";
    S5['S']="ME341";
    //S6
    S6['A']="ME302";
    S6['B']="ME304";
    S6['C']="ME306";
    S6['D']="ME308";
    S6['E']="ME312";
    S6['F']="EL102";
    S6['U']="ME352";
    //S7
    S7['A']="ME401";
    S7['B']="ME403";
    S7['C']="ME405";
    S7['D']="ME407";
    S7['E']="ME409";
    S7['F']="EL103";
    S7['S']="ME451";
    //S8
    S8['A']="ME402";
    S8['B']="ME404";
    S8['C']="EL104";
    S8['D']="EL105";
    S8['E']="ME492";
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
    //S5
    S5['A']="EC301";
    S5['B']="EC303";
    S5['C']="EC305";
    S5['D']="EC307";
    S5['E']="HS300";
    S5['F']="EL101";
    S5['S']="EC341";
    //S6
    S6['A']="EC302";
    S6['B']="EC304";
    S6['C']="EC306";
    S6['D']="EC308";
    S6['E']="EC312";
    S6['F']="EL102";
    S6['U']="EC352";
    //S7
    S7['A']="EC401";
    S7['B']="EC403";
    S7['C']="EC405";
    S7['D']="EC407";
    S7['E']="EC409";
    S7['F']="EL103";
    S7['S']="EC451";
    //S8
    S8['A']="EC402";
    S8['B']="EC404";
    S8['C']="EL104";
    S8['D']="EL105";
    S8['E']="EC492";
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
    //S5
    S5['A']="EE301";
    S5['B']="EE303";
    S5['C']="EE305";
    S5['D']="EE307";
    S5['E']="EE309";
    S5['F']="EL101";
    S5['S']="EE341";
    //S6
    S6['A']="EE302";
    S6['B']="EE304";
    S6['C']="EE306";
    S6['D']="EE308";
    S6['E']="HS300";
    S6['F']="EL102";
    S6['U']="EE352";
    //S7
    S7['A']="EE401";
    S7['B']="EE403";
    S7['C']="EE405";
    S7['D']="EE407";
    S7['E']="EE409";
    S7['F']="EL103";
    S7['S']="EE451";
    //S8
    S8['A']="EE402";
    S8['B']="EE404";
    S8['C']="EL104";
    S8['D']="EL105";
    S8['E']="EE492";
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
    //S5
    S5['A']="CE301";
    S5['B']="CE303";
    S5['C']="CE305";
    S5['D']="CE307";
    S5['E']="CE309";
    S5['F']="EL101";
    S5['S']="CE341";
    //S6
    S6['A']="CE302";
    S6['B']="CE304";
    S6['C']="CE306";
    S6['D']="CE308";
    S6['E']="HS300";
    S6['F']="EL102";
    S6['U']="CE352";
    //S7
    S7['A']="CE401";
    S7['B']="CE403";
    S7['C']="CE405";
    S7['D']="CE407";
    S7['E']="CE409";
    S7['F']="EL103";
    S7['S']="CE451";
    //S8
    S8['A']="CE402";
    S8['B']="CE404";
    S8['C']="EL104";
    S8['D']="EL105";
    S8['E']="CE492";
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
    //S5
    S5['A']="BT301";
    S5['B']="BT303";
    S5['C']="BT305";
    S5['D']="BT307";
    S5['E']="BT309";
    S5['F']="EL101";
    S5['S']="BT341";
    //S6
    S6['A']="BT302";
    S6['B']="BT304";
    S6['C']="BT306";
    S6['D']="BT308";
    S6['E']="HS300";
    S6['F']="EL102";
    S6['U']="BT352";
    //S7
    S7['A']="BT401";
    S7['B']="BT403";
    S7['C']="BT405";
    S7['D']="BT407";
    S7['E']="BT409";
    S7['F']="EL103";
    S7['S']="BT451";
    //S8
    S8['A']="BT402";
    S8['B']="BT404";
    S8['C']="EL104";
    S8['D']="EL105";
    S8['E']="BT492";
  }

  function dispData() {
    let subs = ['S1','S2','S3','S4','S5','S6','S7','S8'];
    let num_subs = {'S1':8,'S2':8,'S3':8,'S4':8,'S5':9,'S6':9,'S7':8,'S8':5};
    let ids = ['sems_content_s1', 'sems_content_s2', 'sems_content_s3', 'sems_content_s4', 'sems_content_s5', 'sems_content_s6', 'sems_content_s7', 'sems_content_s8'];
    for (let i = 0; i < ids.length; i++) {
      $('#'+ids[i]+'').html(`
        <table class="table table-bordered">
          <thead>
            <tr>
              <th width="10%"> `+ subs[i] +` </th>
              <th width="60%"> Subject </th>
              <th width="15%"> Credit Earned </th>
              <th width="15%"> Grade </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> A </td>
              <td> Caculus </td>
              <td> - </td>
              <td>
                F
              </td>
            </tr>
          </tbody>
        </table>
        `);
    }
    console.log("Display data");
  }



});
