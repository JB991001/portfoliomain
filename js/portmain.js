const typingContainer = document.getElementById('typing-container');

// 각 버튼에 맞는 타이핑 텍스트 설정
const typingTexts = {
    'tour': '카카오 공공 API를 활용한 팀 프로젝트로, 피그마와 유사한 디자인을 구현',
    'woodin': '반응형 디자인을 적용한 상업용 페이지로, 깔끔한 디자인을 구현',
    'ansan': '라인컴퓨터아트학원의 카피 페이지로, 주사위 게임과 계산기 기능이 포함',
    'portfolio': '깔끔한 디자인과 간단한 기능 구현, 타겟 효과로 원하는 탭으로 바로 이동할수 있게 구현',
    'dot': '캔버스 효과를 활용하여 떨어지는 점을 피하는 게임',
    'break': '캔버스 효과를 활용한 클래식한 벽돌 깨기 게임',
    'apple': 'Node.js와 구글 클라우드를 활용한 랭킹 시스템이 적용된 사과게임',
    'aboutMe': '나에 대한 소개 페이지',
    'Skills': '나의 기술들을 소개하는 페이지',
    'contact': '저에게 연락할 수 있는 페이지',
    'guestBook': 'Node.js와 구글 클라우드를 활용하여 방명록을 남길 수 있는 공간',
    'toDoList': 'Node.js와 구글 클라우드를 활용한 회원가입, 로그인 기능으로 본인만의 To-Do 리스트를 작성할 수 있는 페이지',
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
