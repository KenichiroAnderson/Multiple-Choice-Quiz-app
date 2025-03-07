const terms = [
    { term: "Neurons", definition: "Cells in the nervous system that communicate with one another to perform information-processing tasks." },
    { term: "Cell body", definition: "Largest part of a typical neuron; contains the nucleus and much of the cytoplasm." },
    { term: "Dendrites", definition: "Branchlike parts of a neuron that are specialized to receive information." },
    { term: "Axon", definition: "Carries information to other neurons, muscles, or glands." },
    { term: "Myelin sheath", definition: "A fatty tissue layer segmentally encasing the axons of some neurons; enables vastly greater transmission speed as neural impulses hop from one node to the next." },
    { term: "Glial cells", definition: "Cells in the nervous system that support, nourish, and protect neurons." },
    { term: "Synapse", definition: "The junction between the axon tip of the sending neuron and the dendrite or cell body of the receiving neuron." },
    { term: "Sensory Neurons", definition: "Neurons that carry incoming information from the sensory receptors to the brain and spinal cord." },
    { term: "Motor Neurons", definition: "Neurons that carry signals from the spinal cord to the muscles to produce movement." },
    { term: "Interneurons", definition: "Central nervous system neurons that internally communicate and intervene between the sensory inputs and motor outputs." },
    { term: "Resting potential", definition: "The difference in electric charge between the inside and outside of a neuron's cell membrane." },
    { term: "Action potential", definition: "A neural impulse; a brief electrical charge that travels down an axon." },
    { term: "Refractory period", definition: "The time following an action potential during which a new action potential cannot be initiated." },
    { term: "Terminal buttons", definition: "Knoblike structures that branch out from an axon." },
    { term: "Neurotransmitters", definition: "Chemicals that transmit information from one neuron to another." },
    { term: "Receptor", definition: "Parts of the cell membrane that receive neurotransmitters and either initiate or prevent a new electric signal." },
    { term: "Acetylcholine (ACH)", definition: "A neurotransmitter involved in learning, memory, and muscle movement." },
    { term: "Dopamine", definition: "A neurotransmitter that regulates motor behavior, motivation, pleasure, and emotional arousal." },
    { term: "Glutamate", definition: "A major excitatory neurotransmitter; involved in memory." },
    { term: "GABA (Gamma-aminobutyric acid)", definition: "The primary inhibitory neurotransmitter in the brain." },
    { term: "Norepinephrine", definition: "A neurotransmitter involved in arousal, as well as in learning and mood regulation." },
    { term: "Serotonin", definition: "Affects sleep, wakefulness, eating, and aggressive behavior." },
    { term: "Endorphins", definition: "Are chemicals that act within the pain pathways and emotion centers of the brain." },
    { term: "Agonists", definition: "Drugs that increase the action of a neurotransmitter." },
    { term: "Antagonists", definition: "Drugs that block the function of a neurotransmitter." },
    { term: "Nervous system", definition: "An interacting network of neurons that conveys electrochemical information throughout the body." },
    { term: "Central nervous system (CNS)", definition: "Consists of the brain and spinal cord." },
    { term: "Peripheral Nervous system (PNS)", definition: "Connects the central nervous system to the body's organs and muscles." },
    { term: "Somatic nervous system", definition: "A set of nerves that conveys information between voluntary muscles and the central nervous system." },
    { term: "Autonomic nervous system (ANS)", definition: "A set of nerves that carries involuntary and automatic commands that control blood vessels, body organs, and glands." },
    { term: "Sympathetic nervous system", definition: "A set of nerves that prepares the body for action in challenging or threatening situations." },
    { term: "Parasympathetic nervous system", definition: "A set of nerves that helps the body return to a normal resting state." },
    { term: "Spinal reflexes", definition: "Simple pathways in the nervous system that rapidly generate muscle contractions." },
    { term: "Reflex arc", definition: "A neural pathway that controls reflex actions." },
    { term: "Hindbrain", definition: "An area of the brain that coordinates information coming into and out of the spinal cord." },
    { term: "Medulla", definition: "An extension of the spinal cord into the skull that coordinates heart rate, circulation, and respiration." },
    { term: "Reticular formation", definition: "Regulates sleep, wakefulness, and levels of arousal." },
    { term: "Cerebellum", definition: "A large structure of the hindbrain that controls fine motor skills." },
    { term: "Pons", definition: "A brain structure that relays information from the cerebellum to the rest of the brain." },
    { term: "Tectum", definition: "Orients an organism in the environment." },
    { term: "Tegmentum", definition: "Involved in movement and arousal; also helps orient an organism toward sensory stimuli." },
    { term: "Cerebral cortex", definition: "Outermost layer of the brain, visible to the naked eye and divided into two hemispheres." },
    { term: "Subcortical structures", definition: "Areas of the forebrain housed under the cerebral cortex near the very center of the brain." },
    { term: "Thalamus", definition: "Relays messages between lower brain centers and the cerebral cortex." },
    { term: "Hypothalamus", definition: "Located below the thalamus, regulates body temperature, hunger, thirst, and sexual behavior." },
    { term: "Hippocampus", definition: "Critical for creating new memories and integrating them into a network of knowledge so that they can be stored indefinitely in other parts of the cerebral cortex." },
    { term: "Amygdala", definition: "Located at the tip of each horn in the hippocampus; plays a central role in many emotional processes, particularly the formation of emotional memories." },
    { term: "Basal ganglia", definition: "A set of subcortical structures that direct intentional movements." },
    { term: "Endocrine system", definition: "A network of glands that produce and secrete into the bloodstream chemical messages known as hormones, which influence a wide variety of basic functions including metabolism, growth, and sexual development." },
    { term: "Corpus callosum", definition: "Connects large areas of the cerebral cortex on each side of the brain and supports communication of information across the hemispheres." },
    { term: "Pituitary gland", definition: "The master gland of the body's hormone-producing system, which releases hormones that direct the functions of many other glands in the body." },
    { term: "Occipital lobe", definition: "Located at the back of the cerebral cortex, processes visual information." },
    { term: "Parietal lobe", definition: "Located at the front of the occipital lobe, carries out functions that include processing information about touch." },
    { term: "Temporal lobe", definition: "Located on the lower side of each hemisphere; responsible for hearing and language." },
    { term: "Frontal lobe", definition: "Sits behind the forehead, has specialized areas for movement, abstract thinking, planning, memory, and judgment." },
    { term: "Association areas", definition: "Composed of neurons that help provide sense and meaning to information registered in the cortex." },
    { term: "Mirror neurons", definition: "Frontal lobe neurons that fire when performing certain actions or when observing another doing so." },
    { term: "Gene", definition: "The major unit of hereditary transmission." },
    { term: "Chromosomes", definition: "Strands of DNA wound around each other in a double helix configuration." },
    { term: "Epigenetics", definition: "The study of environmental influences on gene expression that occur without a DNA change." },
    { term: "Epigenetic marks", definition: "chemical modifications to DNA that can turn genes on or off." },
    { term: "DNA methylation", definition: "adding a methyl group to DNA"},
    { term: "Histone modification", definition: "adding chemical modifications to proteins called histones that are involved in packaging DNA"},
    { term: "Heritability", definition: "The proportion of variation among individuals that we can attribute to genes. The heritability of a trait may vary, depending on the range of populations and environments studied."},

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
