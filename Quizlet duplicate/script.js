const terms = [
    { term: "Emotion", definition: "A temporary psychological state involving subjective experience, physiological response, and behavioral expression." },
    { term: "James-Lange Theory", definition: "Theory that emotions result from our interpretation of bodily reactions to stimuli." },
    { term: "Cannon-Bard Theory", definition: "Theory that emotional and physiological responses occur simultaneously and independently." },
    { term: "Two-Factor Theory", definition: "Theory that emotion arises from physiological arousal and cognitive labeling of that arousal." },
    { term: "Amygdala", definition: "Brain structure involved in detecting threats and generating fear responses." },
    { term: "Fast Pathway", definition: "Neural route where sensory input goes directly from thalamus to amygdala, producing quick emotional response." },
    { term: "Slow Pathway", definition: "Neural route where sensory input passes from thalamus to cortex before reaching the amygdala for thoughtful evaluation." },
    { term: "Display Rules", definition: "Cultural norms that govern the expression of emotion." },
    { term: "Microexpressions", definition: "Brief, involuntary facial expressions that reveal true emotions." },
    { term: "Intrinsic Motivation", definition: "Doing an activity for its inherent satisfaction." },
    { term: "Extrinsic Motivation", definition: "Doing an activity for external rewards or pressures." },
    { term: "Maslow's Hierarchy", definition: "A motivational theory proposing five levels of needs from basic physiological to self-actualization." },
    { term: "Ghrelin", definition: "A hormone that increases appetite and signals hunger." },
    { term: "Leptin", definition: "A hormone that suppresses appetite and signals satiety." },
    { term: "Germinal Stage", definition: "The first two weeks of prenatal development after conception." },
    { term: "Embryonic Stage", definition: "The stage of prenatal development from 2 to 8 weeks where major organs begin to form." },
    { term: "Fetal Stage", definition: "The final stage of prenatal development from 9 weeks to birth." },
    { term: "Teratogens", definition: "Substances that can cause harm to a developing fetus." },
    { term: "FASD", definition: "Disorders resulting from alcohol exposure during pregnancy causing cognitive and behavioral problems." },
    { term: "Cephalocaudal Rule", definition: "Motor development progresses from head to toe." },
    { term: "Proximodistal Rule", definition: "Motor skills develop from center of the body outward." },
    { term: "Object Permanence", definition: "Understanding that objects continue to exist even when not seen." },
    { term: "Egocentrism", definition: "Difficulty in seeing the world from another’s perspective, common in preoperational stage." },
    { term: "Conservation", definition: "Understanding that properties like mass and volume remain the same despite changes in form." },
    { term: "Secure Attachment", definition: "A healthy emotional bond where infants feel confident exploring with caregiver present." },
    { term: "Puberty", definition: "Biological process of physical maturation and sexual development." },
    { term: "Prefrontal Cortex", definition: "Part of the brain involved in decision-making, still developing during adolescence." },
    { term: "Identity vs Role Confusion", definition: "Erikson’s stage in adolescence focusing on developing a personal identity." },
    { term: "Socioemotional Selectivity Theory", definition: "Older adults focus more on emotionally satisfying relationships and goals." },
    { term: "Personality", definition: "An individual's characteristic style of behaving, thinking, and feeling." },
    { term: "Trait", definition: "A stable disposition to behave in a certain way." },
    { term: "Big Five", definition: "The five major traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism." },
    { term: "Id", definition: "Part of the mind that contains primal desires and operates on the pleasure principle." },
    { term: "Ego", definition: "The rational part of the personality that mediates between id and superego." },
    { term: "Superego", definition: "The part of personality that represents moral standards and ideals." },
    { term: "Defense Mechanisms", definition: "Unconscious strategies used by the ego to reduce anxiety." },
    { term: "Psychosexual Stages", definition: "Freud's developmental stages where pleasure focuses on different body parts." },
    { term: "Self-Actualization", definition: "The realization of one's full potential, top of Maslow’s hierarchy." },
    { term: "Unconditional Positive Regard", definition: "Accepting and supporting a person regardless of what they say or do." },
    { term: "Locus of Control", definition: "Belief about whether outcomes are controlled internally or externally." },
    { term: "Self-Concept", definition: "A person’s knowledge of their own traits and characteristics." },
    { term: "Self-Esteem", definition: "The evaluative aspect of the self-concept." },
    { term: "Self-Serving Bias", definition: "Tendency to attribute success to oneself and failure to external factors." },
];


let currentQuizIndex = 0;
let correctAnswers = new Set(); // Track correctly answered terms
let incorrectTerms = []; // Stores incorrectly answered terms for retesting
let totalQuestions = terms.length;

// Starts the multiple choice quiz mode
function startQuiz() {
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("flashcard-section").style.display = "none";
    document.getElementById("progress").textContent = `Progress: 0 / ${totalQuestions}`;
    nextQuestion();
}

function nextQuestion() {
    if (correctAnswers.size >= totalQuestions) {
        document.getElementById("quiz-section").innerHTML = "<h2>Congratulations! You've mastered all terms!</h2>";
        return;
    }

    // Pick a term the user hasn't mastered yet
    let remainingTerms = terms.filter(t => !correctAnswers.has(t.term));
    if (incorrectTerms.length > 0 && Math.random() < 0.5) {
        currentQuizIndex = terms.indexOf(incorrectTerms.shift());
    } else {
        currentQuizIndex = terms.indexOf(remainingTerms[Math.floor(Math.random() * remainingTerms.length)]);
    }

    setupMultipleChoice();
    document.getElementById("progress").textContent = `Progress: ${correctAnswers.size} / ${totalQuestions}`;
}

function setupMultipleChoice() {
    let correctTerm = terms[currentQuizIndex].term;
    let definition = terms[currentQuizIndex].definition;

    // Get three incorrect terms
    let wrongAnswers = terms
        .map(t => t.term)
        .filter(term => term !== correctTerm)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // Shuffle correct answer with incorrect ones
    let options = [correctTerm, ...wrongAnswers].sort(() => 0.5 - Math.random());

    document.getElementById("quiz-question").textContent = `${definition}`;
    document.getElementById("quiz-answer-container").innerHTML = "";

    options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option, correctTerm);
        document.getElementById("quiz-answer-container").appendChild(btn);
    });

    document.getElementById("quiz-feedback").textContent = "";
}

// Checks if the selected answer is correct
function checkAnswer(selectedAnswer, correctTerm) {
    if (selectedAnswer === correctTerm) {
        correctAnswers.add(correctTerm);
        document.getElementById("quiz-feedback").textContent = "Correct!";
        document.getElementById("quiz-feedback").style.color = "green";
    } else {
        incorrectTerms.push(terms[currentQuizIndex]);
        document.getElementById("quiz-feedback").textContent = `Incorrect! Correct answer: ${correctTerm}`;
        document.getElementById("quiz-feedback").style.color = "red";
    }
    setTimeout(nextQuestion, 2000);
}

updateCard();
