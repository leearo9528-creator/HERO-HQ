export default function StreamingGuide() {
    const steps = [
        {
            step: "1",
            title: "앱 설치하기",
            content: "휴대폰에서 '멜론' 또는 '지니' 앱을 설치해 주세요."
        },
        {
            step: "2",
            title: "로그인 하기",
            content: "카카오톡이나 본인 아이디로 로그인해 주세요."
        },
        {
            step: "3",
            title: "영웅님 검색",
            content: "돋보기 버튼을 누르고 '임영웅'을 검색해 주세요."
        },
        {
            step: "4",
            title: "전체 재생",
            content: "'전체 재생' 버튼을 눌러 영웅님의 목소리를 감상하세요!"
        }
    ];

    return (
        <section id="streaming" className="mt-20 scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-800 mb-4">🎵 스트리밍, 어렵지 않아요!</h2>
                <p className="text-2xl text-gray-600 font-medium">영웅님의 화력을 보태는 가장 쉬운 방법</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((item, index) => (
                    <div key={index} className="bg-white border-2 border-hero-blue/20 rounded-3xl p-8 shadow-sm hover:border-hero-blue transition-colors">
                        <div className="w-12 h-12 bg-hero-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                            {item.step}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h4>
                        <p className="text-xl text-gray-600 leading-relaxed">{item.content}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                <a
                    href="https://www.melon.com/artist/timeline.htm?artistId=994944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#00CD3C] text-white text-2xl font-black px-10 py-6 rounded-2xl shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                    <span className="text-3xl">🍈</span> 멜론 바로가기
                </a>
                <a
                    href="https://www.genie.co.kr/detail/artistInfo?xxnm=80482522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#0095FF] text-white text-2xl font-black px-10 py-6 rounded-2xl shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                    <span className="text-3xl">🧞</span> 지니 바로가기
                </a>
            </div>
        </section>
    );
}
