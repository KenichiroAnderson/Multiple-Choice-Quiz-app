const terms = [
    { term: "Sensation", definition: "Simple stimulation of a sense organ." },
    { term: "Perception", definition: "The organization, identification, and interpretation of a sensation to form a mental representation." },
    { term: "Transduction", definition: "When sense receptors convert physical signals from the environment into neural signals sent to the central nervous system." },
    { term: "Psychophysics", definition: "Methods that systematically relate the physical characteristics of a stimulus to an observer’s perception." },
    { term: "Absolute threshold", definition: "The minimal intensity needed to just barely detect a stimulus in 50% of the trials." },
    { term: "Sensitivity", definition: "How responsive we are to faint stimuli." },
    { term: "Acuity", definition: "How well we can distinguish two very similar stimuli." },
    { term: "Just Noticeable Difference (JND)", definition: "Minimal change in a stimulus that can just barely be detected." },
    { term: "Weber's Law", definition: "The just noticeable difference is a constant ratio of the standard stimulus, over a range of standard intensities." },
    { term: "Signal Detection Theory (SDT)", definition: "Analyzing psychophysics data to measure an individual’s perceptual sensitivity." },
    { term: "Visual acuity", definition: "The ability to see fine detail." },
    { term: "Retina", definition: "Layer of light-sensitive tissue lining the back of the eyeball." },
    { term: "Accommodation", definition: "Process by which the eye maintains a clear image on the retina." },
    { term: "Cones", definition: "Detect color and operate under normal daylight conditions." },
    { term: "Rods", definition: "Become active only under low light conditions for night vision." },
    { term: "Blind spot", definition: "A location in the visual field that produces no sensation on the retina." },
    { term: "Area V1", definition: "Part of the occipital lobe that contains the primary visual cortex." }, //#1
    { term: "Color-opponent system", definition: "Pairs of cone types (channels) work in opposition." },
    { term: "Visual receptive field", definition: "The region of the visual field to which each neuron responds." },
    { term: "Ventral stream", definition: "Represents an object's shape and identity." },
    { term: "Dorsal stream", definition: "Identifies where an object is and how it is moving." },
    { term: "Binding problem", definition: "How the brain links features together into unified objects in the visual world." },
    { term: "Parallel processing", definition: "Brain's capacity to perform many activities simultaneously." },
    { term: "Illusory conjunction", definition: "A perceptual mistake where features from multiple objects are incorrectly combined." },
    { term: "Feature-integration theory", definition: "Focused attention is required to bind individual features together." },
    { term: "Attention", definition: "Active and conscious processing of specific information." },
    { term: "Perceptual constancy", definition: "Perception remains constant despite changes in sensory signals." },
    { term: "Perceptual contrast", definition: "We perceive objects as different despite similar sensory information." },
    { term: "Perceptual organization", definition: "Grouping features into whole, meaningful objects." },
    { term: "Monocular depth cues", definition: "Depth cues available to each eye alone." },
    { term: "Binocular disparity", definition: "The difference in retinal images providing depth information." },
    { term: "Apparent motion", definition: "Perception of movement from alternating signals." },
    { term: "Spatial acuity", definition: "Ability to distinguish two closely spaced features." },
    { term: "Temporal acuity", definition: "Ability to distinguish features close together in time." },
    { term: "Multisensory", definition: "Stimulating multiple senses simultaneously." },
    { term: "Ventriloquist illusion", definition: "Reliance on visual information for spatial location." },
    { term: "Inattentional blindness", definition: "Failure to perceive objects outside the focus of attention." },
    { term: "Pitch", definition: "How high or low a sound is perceived." },
    { term: "Amplitude", definition: "Refers to intensity of sound waves." },
    { term: "Loudness", definition: "Perception of sound amplitude." },
    { term: "Timbre", definition: "Sound quality that distinguishes sources with the same pitch and loudness." },
    { term: "Cochlea", definition: "A fluid-filled tube that transduces sound vibrations into neural signals." },
    { term: "Basilar membrane", definition: "Moves with vibrations transmitted through the oval window." },
    { term: "Traveling wave", definition: "Wave pattern along the basilar membrane related to sound frequency." },
    { term: "Inner hair cells", definition: "Auditory receptor neurons embedded in the basilar membrane." },
    { term: "Area A1", definition: "Primary auditory cortex in the temporal lobe." },// figure out 2 defs #2
    { term: "Place code", definition: "Pitch is determined by location of hair cell activity on the basilar membrane." },
    { term: "Temporal code", definition: "Pitch is determined by timing of action potentials." },
    { term: "Conductive hearing loss", definition: "When the eardrum or ossicles cannot conduct sound waves." },
    { term: "Sensory memory", definition: "Holds sensory information for a few seconds or less." },
    { term: "Iconic memory", definition: "Fast-decaying store of visual information." },
    { term: "Echoic memory", definition: "Fast-decaying store of auditory information." },
    { term: "Short-term memory", definition: "Holds non-sensory information briefly (a few seconds to a minute)." },
    { term: "Rehearsal", definition: "Mentally repeating information to keep it in short-term memory." },
    { term: "Serial position effect", definition: "Tendency to recall first and last items in a series better." },
    { term: "Chunking", definition: "Combining small bits of info into larger, more manageable units." },
    { term: "Working memory", definition: "Active maintenance of information in short-term storage." },
    { term: "Long-term memory", definition: "Holds information for hours, days, weeks, or years." },
    { term: "Anterograde amnesia", definition: "Inability to transfer new info from short-term to long-term memory." },
    { term: "Retrograde amnesia", definition: "Inability to retrieve info acquired before a specific time." },
    { term: "Consolidation", definition: "Process by which memories become stable in the brain." },
    { term: "Reconsolidation", definition: "Previously stored memories become unstable when recalled and need to be stored again." },
    { term: "Long-term potentiation (LTP)", definition: "Synaptic strengthening through repeated activation." },
    { term: "Habituation", definition: "Decreased response to a repeated stimulus." },
    { term: "Sensitization", definition: "Increased response to a later stimulus after initial exposure." },
    { term: "Classical conditioning", definition: "Neutral stimulus elicits a response after being paired with a natural stimulus." },
    { term: "Unconditioned stimulus (US)", definition: "Stimulus that naturally and reliably triggers a response." },
    { term: "Unconditioned response (UR)", definition: "Natural reaction to an unconditioned stimulus." },
    { term: "Acquisition", definition: "Phase when the CS and US are presented together." },
    { term: "Conditioned stimulus (CS)", definition: "Previously neutral stimulus that now triggers a response." },
    { term: "Conditioned response (CR)", definition: "Learned reaction to a conditioned stimulus." },
    { term: "Second-order conditioning", definition: "CS is paired with a previously learned CS." },
    { term: "Extinction", definition: "CR is weakened when the CS is presented without the US." },
    { term: "Generalization", definition: "Similar stimuli produce the same CR." },
    { term: "Discrimination", definition: "Distinguishing between similar stimuli." },
    { term: "Biological preparedness", definition: "Tendency to form associations more easily with some stimuli." },
    { term: "Operant conditioning", definition: "Behavior is controlled by consequences." },
    { term: "Law of effect", definition: "Behaviors followed by positive outcomes are more likely to recur." },
    { term: "Operant behavior", definition: "Behavior that affects the environment and has consequences." },
    { term: "Reinforcer", definition: "Increases the likelihood of the behavior it follows." },
    { term: "Punisher", definition: "Decreases the likelihood of the behavior it follows." },
    { term: "Fixed interval (FI) schedule", definition: "Reinforcement after a set period of time." },
    { term: "Variable interval (VI) schedule", definition: "Reinforcement based on varying time intervals." },
    { term: "Fixed ratio (FR) schedule", definition: "Reinforcement after a set number of responses." },
    { term: "Variable ratio (VR) schedule", definition: "Reinforcement after a variable number of responses." },
    { term: "Intermittent reinforcement", definition: "Only some responses are reinforced." },
    { term: "Intermittent reinforcement effect", definition: "Behaviors under intermittent schedules resist extinction." },
    { term: "Shaping", definition: "Reinforcing successive steps toward a desired behavior." },
    { term: "Latent learning", definition: "Learning occurs without obvious behavioral signs until needed." },
    { term: "Cognitive map", definition: "Mental representation of spatial layout." },
    { term: "Diffusion chain", definition: "Behavior spreads through observation and modeling." },
    { term: "Implicit learning", definition: "Learning without conscious awareness of what is learned." }
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
