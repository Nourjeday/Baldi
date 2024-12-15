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
        "1. قسم الجماعات المحلية: هنا تجدون كل ما يتعلق بالجماعات المحلية في مختلف المناطق...",
        "2. قسم اللامركزية: يشرح هذا القسم مفهوم اللامركزية المحلية...",
        "3. قسم المستجدات: ابقوا على اطلاع على آخر الأخبار المتعلقة بالجماعات المحلية",
        "4. قسم المراجع والمنشورات: يحتوي على وثائق مثل القوانين...",
        "5. فضاء الإدارة: يوفر أدوات وموارد مخصصة للإداريين...",
        "6. فضاء المواطن: قسم مخصص للمواطنين..."
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
