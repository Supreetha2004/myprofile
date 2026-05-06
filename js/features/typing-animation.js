function initTypingAnimation() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Competitive Programmer",
    "Problem Solver"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingElement = document.getElementById("typing-text");

  if (!typingElement) return;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.slice(0, charIndex--);
    } else {
      typingElement.textContent = currentRole.slice(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1500;
      isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }

  type();
}