export function checkZodiacSign(zodiacSign, resultRef) {
    const zodiacCharacterMapping = {
      "aries": "Hello Kitty",
      "taurus": "My Melody",
      "gemini": "Keroppi",
      "cancer": "Pompompurin",
      "leo": "Badtz-Maru",
      "virgo": "Cinnamoroll",
      "libra": "Chococat",
      "scorpio": "Kuromi",
      "sagittarius": "Little Twin Stars",
      "capricorn": "Hangyodon",
      "aquarius": "Patty & Jimmy",
      "pisces": "Aggretsuko"
    };
  
    const zodiacSignValue = zodiacSign.toLowerCase();
    if (zodiacCharacterMapping.hasOwnProperty(zodiacSignValue)) {
      const result = `Based on your Zodiac Sign (${zodiacSignValue}), you would be ${zodiacCharacterMapping[zodiacSignValue]}!`;
      resultRef.current.textContent = result;
    } else {
      const result = "Sorry, we couldn't find a Sanrio character for the entered Zodiac Sign.";
      resultRef.current.textContent = result;
    }
  }
  
  export function validateForm(name, email, message, formMessageRef) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name.trim() === '') {
      formMessageRef.current.textContent = 'Please enter your name.';
      return false;
    }
  
    if (!emailPattern.test(email.trim())) {
      formMessageRef.current.textContent = 'Please enter a valid email address.';
      return false;
    }
  
    if (message.trim() === '') {
      formMessageRef.current.textContent = 'Please enter your message.';
      return false;
    }
  
    formMessageRef.current.textContent = 'Form submitted successfully!';
    return true;
  }
  