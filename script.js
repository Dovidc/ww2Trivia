
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const questions = [
    {
        question: "Identify the type of aircraft that was produced in larger amounts than any other during the war",
        options: ["Japanese Zero", "Messerschmitt BF-109E", "B-24 Liberator"],
        answer: "Messerschmitt BF-109E",
        feedback: "The BF-109E, with nearly 36,000 produced."
    },
    {
        question: "Which American entertainer traveled the most to entertain troops during the war?",
        options: ["Gary Cooper", "Bob Hope", "Joe E. Brown"],
        answer: "Joe E. Brown",
        feedback: "Joe E. Brown traveled over 150,000 miles, he was named Father to all men overseas, by the national fathers day committee in 1944"
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"Which unit was nicknamed the 'Red Devils' ?",
        options : ["Russian 6th army", "U.S. 1st infantry", "British 6th Airborne"],
        answer: "British 6th Airborne",
        feedback: "Despite its name, the 6th was actually the second of two airborne divisions raised by the British Army during the war, the other being the 1st Airborne Division",
    },
    {
        question :"Identify the only U.S. navy ship to be sunk on D-Day",
        options : ["U.S.S. Cory", "U.S.S. Augusta", "U.S.S. Butler"],
        answer: "U.S.S. Cory",
        feedback: "The Cory, by gunfire from German gun batteries on Utah beach, 13 crewmen of her 294 man crew died",
    },
    {
        question :"identify the first U.S. Army airfroce aircraft to see action in Europe",
        options : ["Grumman Wildcat","Lockheed P-38", "Douglas Havoc"],
        answer: "Douglas Havoc",
        feedback: "The Douglas A-20G Havoc, on July 4th, 1942",
    },
    {
        question :"How did U.S. Admiral Thomas C. Hart, commander in chief of the Asiatic fleet depart from the Philippines on Dec 26, 1941?",
        options : ["Russian fishing boat", "U.S. submarine 'Shark'", "P-40 'Flying Tiger' which he flew"],
        answer: "U.S. submarine 'Shark'",
        feedback: "Via the 'Shark' headed for Java, where the Asiatic fleet was reorganizing",
    },
    {
        question :"Identify Hitler's chauffeur",
        options : ["Victor Lutze", "Erich Kempka", "Hugo Blaschke"],
        answer: "Erich Kempka",
        feedback: "Lutze was Hitler's SA chief of staff, and Blaschke was Hitler's dentist",
    },
    {
        question :"Identify the first U.S. Navy ship named in honor of an African American",
        options : ["Emmons", "Harmon", "Baldwin"],
        answer: "Harmon",
        feedback: "While the U.S.S. San Francisco was being raked by enemy gunfire, Harmon helped evacuate the wounded to a dressing station. While doing so he deliberately stood between a crewman and enemy gunfire in order to protect his wounded shipmate. This action resulted in his death",
    },
    {
        question :"Who commander the 'Big Red One' during the sicily campaign ?",
        options : ["George Patton", "Walter Bedell Smith", "Terry Allen"],
        answer: "Terry Allen",
        feedback: "Terry Allen commanded the U.S. 1st INF DIV 'The Big Red One'",
    },
    {
        question :"What was the U.S. codename to break out from Anzio by way of Cisterna and Valmonte, Italy?",
        options : ["Buffalo", "Crawdad", "Grasshopper"],
        answer: "Buffalo",
        feedback: "Buffalo, Crawdad was the plan to go along the coast to the north-west, grasshopper was thr plan for an eastward breakout",
    },
    {
        question :"Which Russian newspaper did soviet troops prefer for rolling cigarettes?",
        options : ["Pravda", "Izvestia", "Red Star"],
        answer: "Red Star",
        feedback: "Red Star had a reputation for burning better, and as a result was more popular",
    },
    {
        question :"Who said 'He who hold Paris holds France'?",
        options : ["Charles De Gaulle", "The Duke of Windsor", "Adolf Hitler"],
        answer: "Adolf Hitler",
        feedback: "Hitler",
    },
    {
        question :"Who was the last Commander of the Afrika Korps?",
        options : ["Jurgen von Arnim", "Sepp Dietrich", "Gustav Fehn"],
        answer: "Gustav Fehn",
        feedback: "Von Arnhim was commander of Axis troops in North Africa, Dietrich was an SS panzer commander in the Normandy and Ardennes campaigns, the last commander of the Afriak Corps was Gustav Fehn",
    },
    {
        question :"What was the unoffical name for the allied ship's assembely area prior to the invasion of Normandy?",
        options : ["Piccadilly Circus" , "Swine Lake", "Hero Harbor"],
        answer: "Piccadilly Circus",
        feedback: "Piccadilly Circus",
    },
    {
        question :"Which tank was produced in greater numbers than any other?",
        options : ["German panther", "British Churchill", "American Sherman"],
        answer: "American Sherman",
        feedback: "384 Panthers, 5,640 churchills, 49,000 shermans aptly nicknamed 'Death Traps' by their crew, the T34 came in second place with 40,000 produced",
    },
    {
        question :"Where did the largest tank battle take place?",
        options : ["Tunisia", "Kursk", "Ardennes Forest"],
        answer: "Kursk",
        feedback: "Around the Kursk salient in july 1943 where the Russians and Germans employed more than 3,000 tanks, Germany lost over 400 tanks in the conflict",
    },
    {
        question :"What was the name of the bridge at Sant'Angelo, Italy over the Rapido?",
        options : ["Brooklyn Bridge", "London Bridge", "Mussolini Bridge"],
        answer: "London Bridge",
        feedback: "London Bridge",
    },
    {
        question :"Which was the only major surrender after D-Day that was not accepted in the name of the allid powers?",
        options : ["Rome", "Paris", "Berlin"],
        answer: "Paris",
        feedback: "It was accepted in the name of the provisional government of the French Republic according to instructions de Gaulle had given General Leclerc",
    },
    {
        question :"The first allied troops to cross the strait of Messina and set foot on the Italian penninsula were under the command of who?",
        options : ["Mark Clark", "Bernard Law Montgomery", "George Patton"],
        answer: "Bernard Law Montgomery",
        feedback: "The 8th army under Montgomery, on September 3, 1943",
    },
    {
        question :"How many .50 caliber machine guns were on board B-17 Flying Fortresses",
        options : ["8", "13", "between 15 and 20"],
        answer: "13",
        feedback: "13",
    },
    {
        question :"When did the U.S. offically declare that war with Germany had ended?",
        options : ["May 7, 1945","January 1, 1946", "October 19, 1951"],
        answer: "October 19, 1951",
        feedback: "",
    },
    {
        question :"How many Japanese troops were killed trying to prevent the U.S. from retaking the Philippines in 1945?",
        options : ["100,000", "238,000", "450,000"],
        answer: "450,000",
        feedback: "13,106 American Soldiers died retaking it",
    },
    {
        question :"When did Japan offically sign the peace treaty with the U.S. and 48 other nations (except the USSR) ending its role as a belligerent?",
        options : ["August 15, 1945", "September 2, 1945", "September 8, 1951"],
        answer: "September 8, 1951",
        feedback: "In San Francisco, CA",
    },
    {
        question :"How many aircraft did Japan produce during the war?",
        options : ["35,000", "65,000", "over 80,000"],
        answer: "65,000",
        feedback: "Around 65,000, of which 9000 were still left at the end of the war",
    },
    {
        question :"How many of the 2,000+ German Navy crew members survived the sinking of the Bismark?",
        options : ["Less than 50", "110", "Almost half"],
        answer: "110",
        feedback: "The British rescued 110 officers and sailors from the water",
    },
    {
        question :"When did Josef Stalin become Premier of the Soviet Union?",
        options : ["1927", "1931", "1941"],
        answer: "1941",
        feedback: "On May 7, 1941, although he controlled most of the USSR before that he had not held the title of Premier",
    },
    {
        question :"Indentify the island on which war correspondent Ernie Pyle was killed",
        options : ["Okinawa", "Iwo Jima", "Ie-shima"],
        answer: "Ie-shima",
        feedback: "Ie-shima off Okinawa",
    },
    {
        question :"How many aircraft were destroyed by the Germans during the first 72 hours of operation Barbarossa?",
        options : ["None", "Under 1,000", "Nearly 2,000"],
        answer: "Nearly 2,000",
        feedback: "Only 3 days prior, the USSR airforce was touted as the largest in the world",
    },
    {
        question :"Which Nazi is credited with issuing the first order for the extermination of Jews?",
        options : ["Himmler", "Goering", "Ribbentrop"],
        answer: "Goering",
        feedback: "Goering, in a letter to Reinhard Heydrich on July 31, 1941, in which he asked for a 'Final solution to the jewish question'",
    },
    {
        question :"What were the British casualties in the sinking of the aircraft carrier 'Ark Royal'?",
        options : ["1", "half", "332"],
        answer: "1",
        feedback: "One casualty, she sank on November 14, 1941 two days after being torpedoed by U-81 off Gibraltar",
    },
    {
        question :"How many aircraft carriers did Japan lose during the war?",
        options : ["10," ,"20", "30"],
        answer: "20",
        feedback: "20, including 5 escort carriers between 1942 and 1945",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    {
        question :"",
        options : [""],
        answer: "",
        feedback: "",
    },
    
];
shuffleArray(questions);




let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const optionsList = document.querySelector('.options');
const nextButton = document.querySelector('.next-btn');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    optionsList.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'option';
        li.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        li.addEventListener('click', () => checkAnswer(option));
        optionsList.appendChild(li);
    });

    // Set the background for the question
    document.body.style.background = backgrounds[currentQuestionIndex];
}


function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const feedbackParagraph = document.getElementById('feedback-paragraph');

    const correctIndex = currentQuestion.options.indexOf(currentQuestion.answer);
    const selectedOptionIndex = currentQuestion.options.indexOf(selectedOption);

    // Disable further clicks on options
    options.forEach((option) => {
        option.removeEventListener('click', checkAnswer);
    });

    // Display the common feedback message
    feedbackParagraph.textContent = currentQuestion.feedback;

    // Handle color highlighting
    if (selectedOptionIndex === correctIndex) {
        options[selectedOptionIndex].classList.add('correct');
        score++;
    } else {
        options[selectedOptionIndex].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        nextButton.textContent = 'Next';
    } else {
        nextButton.textContent = 'Finish';
    }
}










function showResult() {
    questionElement.textContent = `Quiz Completed! Your Score: ${score} out of ${questions.length}`;
    optionsList.innerHTML = '';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
});

displayQuestion();
