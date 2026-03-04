export default function HubGrid() {
    const menuItems = [
        {
            title: "노래 듣기",
            icon: "🎵",
            href: "melonapp://play?artistId=994944",
            description: "멜론에서 바로 재생",
            color: "#f0f8ff"
        },
        {
            title: "영상 보기",
            icon: "📺",
            href: "https://www.youtube.com/@LimYoungWoong",
            description: "공식 유튜브 채널",
            color: "#fff0f0"
        },
        {
            title: "팬카페 가기",
            icon: "☕",
            href: "https://cafe.daum.net/hero0616",
            description: "영웅시대 다음 카페",
            color: "#f0fff4"
        },
        {
            title: "투표하기",
            icon: "🗳️",
            href: "https://idolchamp.page.link/open",
            description: "아이돌챔프 투표",
            color: "#faf0ff"
        },
        {
            title: "사진 구경",
            icon: "📸",
            href: "https://www.instagram.com/im_hero____/",
            description: "공식 인스타그램",
            color: "#fff9f0"
        },
        {
            title: "공연 일정",
            icon: "📅",
            href: "https://search.naver.com/search.naver?query=임영웅+공연일정",
            description: "네이버 검색 결과",
            color: "#f0fbff"
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {menuItems.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-button-custom flex flex-col items-center justify-center p-6 md:p-10 bg-white border-2 border-hero-blue rounded-3xl shadow-sm transition-all hover:scale-105 active:scale-95 hover:shadow-md"
                >
                    <span className="text-5xl mb-4">{item.icon}</span>
                    <span className="text-2xl font-bold text-gray-800">{item.title}</span>
                    <span className="hidden md:block text-gray-500 mt-2 text-lg">{item.description}</span>
                </a>
            ))}
        </div>
    );
}
