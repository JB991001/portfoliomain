const typingContainer = document.getElementById('typing-container');

// 각 버튼에 맞는 타이핑 텍스트 설정
const typingTexts = {
    'tour': '//Kakao Public API, Planning (Figma), Canvas, Graph (R Programming)',
    'woodin': '//jQuery, CSS (@Media), Scroll Events, Grid',
    'ansan': '//Calculator, Regular Expressions, Slideshow, Modal',
    'portfolio': '//iFrame, target',
    'dot': '//Canvas, Key Input',
    'break': '//Canvas, Key Input, Interface',
    'apple': '//Node.js, GCP, SQL, Ranking System, Animation',
    'guestBook': '//Node.js, GCP, SQL',
    'toDoList': '//Node.js, GCP, SQL, Token, Bcrypt, Login, Signup'
};

// 각 버튼에 이벤트 추가
document.querySelectorAll('.tour, .woodin, .ansan, .portfolio, .dot, .break, .apple, .aboutMe, .Skills, .contact, .guestBook, .toDoList').forEach(button => {
    button.addEventListener('mouseenter', (event) => {
        const buttonClass = event.target.closest('div').classList[0]; 
        const typingText = typingTexts[buttonClass];

        // 타이핑 텍스트 초기화
        typingContainer.innerText = '';
        typingContainer.style.display = 'block'; 

        // 타이핑 애니메이션 실행
        clearTimeout(typingTimeout); 
        typeText(typingText);
    });
});

let typingTimeout;

// 타이핑 효과 함수
function typeText(text, index = 0) {
    if (index < text.length) {
        typingContainer.innerText += text.charAt(index);
        typingTimeout = setTimeout(() => typeText(text, index + 1), 100); 
    }
}
