document.addEventListener('DOMContentLoaded', function () {
    // Function to speak the text in Arabic
    function speakText(text) {
        const speech = new SpeechSynthesisUtterance();

        // Set the text to be spoken
        speech.text = text;

        // Set the language to Arabic
        speech.lang = 'ar-SA'; // You can change this to 'ar-EG' if you want Egyptian Arabic

        // Optionally, adjust the voice, pitch, and rate if desired
        speech.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'ar-SA'); // Adjust voice for Arabic
        speech.pitch = 1; // You can modify this to make it higher or lower
        speech.rate = 1; // Adjust the speaking rate

        // Speak the text
        speechSynthesis.speak(speech);
    }

    // Example script for presenting the Collectivity.tn portal in Arabic
    function presentPortal() {
        const introText = "مرحبًا بكم في بوابة الجماعات المحلية. أنا بلدي، المساعد الشخصي الخاص بكم.";
        speakText(introText);

        const sections = [
            "من خلال هذه البوابة، يمكنكم الوصول إلى العديد من الأقسام المهمة من الخدمات والمعلومات المتعلقة بالجماعات المحلية:",
            "1. قسم الجماعات المحلية: هنا تجدون كل ما يتعلق بالجماعات المحلية في مختلف المناطق، بما في ذلك تقارير الأداء والمبادرات المختلفة.",
            "2. قسم اللامركزية: يشرح هذا القسم مفهوم اللامركزية المحلية ويعرض القوانين والسياسات المتعلقة بها.",
            "3. قسم المستجدات: ابقوا على اطلاع على آخر الأخبار المتعلقة بالجماعات المحلية.",
            "4. قسم المراجع والمنشورات: يحتوي على وثائق مثل القوانين، المراسيم، والتقارير الخاصة بالجماعات المحلية.",
            "5. فضاء الإدارة: يوفر أدوات وموارد مخصصة للإداريين لدعم عملهم اليومي وتطويره.",
            "6. فضاء المواطن: قسم مخصص للمواطنين، يحتوي على أدوات مثل منصة البيانات المفتوحة وبوابة الشكايات لتقديم الاقتراحات والملاحظات.",
            "للمزيد من المعلومات، يمكنكم استكشاف القائمة الرئيسية أو استخدام الأزرار المتاحة للتنقل بسهولة بين الأقسام."
        ];

        // Loop through the sections array and speak each one after a delay
        sections.forEach((section, index) => {
            setTimeout(() => speakText(section), index * 5000); // Adjust the delay between each sentence if needed
        });
    }

    // Function to show and hide the popup when the button is clicked
    document.getElementById("startGuideButton").addEventListener("click", () => {
        // Show the guide popup
        document.getElementById("guidePopup").style.display = "block";

        // Start speaking the portal presentation
        presentPortal();

        // Optionally, hide the popup after 3 seconds
        setTimeout(() => {
            document.getElementById("guidePopup").style.display = "none";
        }, 3000); // Hide popup after 3 seconds
    });

    // Close guide popup when the skip button is clicked
    document.getElementById("skipButton").addEventListener("click", () => {
        document.getElementById("guidePopup").style.display = "none";
    });
});
// Select elements
const guidePopup = document.getElementById('guidePopup');
const skipButton = document.getElementById('skipButton');
const guideText = document.getElementById('guideText');
const yesButton = document.getElementById('yesButton'); // Yes button
const noButton = document.getElementById('noButton'); // No button

const script = [
    "من خلال هذه البوابة، يمكنكم الوصول إلى العديد من الأقسام المهمة من الخدمات والمعلومات المتعلقة بالجماعات المحلية:",
    "1. قسم الجماعات المحلية: هنا تجدون كل ما يتعلق بالجماعات المحلية في مختلف المناطق، بما في ذلك تقارير الأداء والمبادرات المختلفة.",
    "2. قسم اللامركزية: يشرح هذا القسم مفهوم اللامركزية المحلية ويعرض القوانين والسياسات المتعلقة بها.",
    "3. قسم المستجدات: ابقوا على اطلاع على آخر الأخبار المتعلقة بالجماعات المحلية.",
    "4. قسم المراجع والمنشورات: يحتوي على وثائق مثل القوانين، المراسيم، والتقارير الخاصة بالجماعات المحلية.",
    "5. فضاء الإدارة: يوفر أدوات وموارد مخصصة للإداريين لدعم عملهم اليومي وتطويره.",
    "6. فضاء المواطن: قسم مخصص للمواطنين، يحتوي على أدوات مثل منصة البيانات المفتوحة وبوابة الشكايات لتقديم الاقتراحات والملاحظات.",
    "للمزيد من المعلومات، يمكنكم استكشاف القائمة الرئيسية أو استخدام الأزرار المتاحة للتنقل بسهولة بين الأقسام."
];

// Function to handle speech
function speakText(text, callback) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'ar-TN'; // Set language to Tunisian Arabic
    speech.volume = 1; // Max volume
    speech.rate = 1; // Normal rate

    speech.onend = function () {
        if (callback) callback(); // Continue with the next action after speech ends
    };

    // Speak only once
    if (!speechSynthesis.speaking) {
        speechSynthesis.speak(speech);
    }
}

// Function to show the guide popup and speak intro text
function showGuidePopup() {
    guidePopup.classList.remove('hidden'); // Make popup visible when page loads

    // Speak the intro text
    guideText.innerHTML = "مرحبًا بكم في بوابة الجماعات المحلية. أنا بلدي، المساعد الشخصي."; // Intro phrase
    speakText(guideText.innerHTML, function () {
        // After speaking the intro, call nextStep function
        nextStep();
    });

    // Make the popup larger and centered
    guidePopup.style.width = '500px'; // Increase the width of the popup
    guidePopup.style.height = 'auto'; // Automatic height adjustment
    guidePopup.style.borderRadius = '10px'; // Make edges rounded
    guidePopup.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // Add shadow for better visibility

    // Ensure popup is centered in the viewport
    guidePopup.style.display = 'flex';
    guidePopup.style.alignItems = 'center';
    guidePopup.style.justifyContent = 'center';
}

// Function to ask the user if they want help and proceed accordingly
function nextStep() {
    guideText.innerHTML = "هل ترغب في المساعدة في استخدام هذه البوابة؟"; // Ask if they need help
    speakText(guideText.innerHTML, function () {
        // After speaking, show Yes and No buttons
        yesButton.style.display = 'inline-block';
        noButton.style.display = 'inline-block';
    });
}

// Function to start reading the rest of the script
function startScript() {
    yesButton.style.display = 'none'; // Hide the "Yes" button
    noButton.style.display = 'none'; // Hide the "No" button

    let currentIndex = 0; // Start with the first item in the script array
    function speakNext() {
        if (currentIndex < script.length) {
            guideText.innerHTML = script[currentIndex]; // Update the text to speak
            speakText(script[currentIndex], function () {
                currentIndex++;
                speakNext(); // Continue to the next part of the script
            });
        } else {
            guidePopup.classList.add('hidden'); // Hide the popup when finished
        }
    }

    speakNext(); // Start reading the script
}

// Function to close the popup if user clicks "No"
function closePopup() {
    guidePopup.classList.add('hidden'); // Hide the popup
}

// Call showGuidePopup on page load
window.onload = function () {
    showGuidePopup(); // Show popup immediately on load
};

// Skip the guide if clicked
skipButton.addEventListener('click', function () {
    guidePopup.classList.add('hidden');
});

// Start reading the script when "Yes" button is clicked
yesButton.addEventListener('click', function () {
    startScript(); // Start reading the script if user clicks "Yes"
});

// Close the popup when "No" button is clicked
noButton.addEventListener('click', function () {
    closePopup(); // Close the popup if user clicks "No"
});
