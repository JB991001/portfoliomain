const typingContainer = document.getElementById('typing-container');

// 각 버튼에 맞는 타이핑 텍스트 설정
const typingTexts = {
    'tour': '//카카오 공공 API, 기획서(피그마), 캔버스, 그래프(R프로그래밍)',
    'woodin': '//jQuery, CSS(@Media), 스크롤 이벤트, 그리드',
    'ansan': '//계산기, 정규식, 슬라이드, 모달',
    'portfolio': '//iFrame, target',
    'dot': '//캔버스, 키 입력',
    'break': '//캔버스, 키 입력, 인터페이스',
    'apple': '//Node.js, GCP, SQL, 랭킹시스템, 애니메이션',
    'guestBook': '//Node.js, GCP, SQL',
    'toDoList': '//Node.js, GCP, SQL, token, bcrypt 로그인, 회원가입',
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
