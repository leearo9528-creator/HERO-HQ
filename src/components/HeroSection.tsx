import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative w-full bg-[#F0F9FF] py-20 md:py-32 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-10">

                {/* 상단 뱃지 */}
                <div className="inline-block bg-[#DFF3FF] text-[#00AEEF] px-8 py-3 rounded-full font-bold text-2xl shadow-sm">
                    영웅본부 💙
                </div>

                {/* 감성 문구 영역 */}
                <div className="space-y-4">
                    <h2 className="text-[32px] md:text-[48px] font-bold text-gray-800 leading-tight break-keep">
                        별빛 같은 나의 영웅님,
                    </h2>
                    <h3 className="text-[32px] md:text-[48px] font-bold text-[#00AEEF] leading-tight break-keep">
                        오늘도 영웅시대와 함께해요 💙
                    </h3>
                    <p className="text-2xl md:text-3xl text-gray-600 font-medium pt-4 break-keep">
                        건강하고 행복하게(건행!), <br className="md:hidden" />
                        영웅님의 모든 소식을 한곳에서 확인하세요.
                    </p>
                </div>

                {/* 커다란 파란색 버튼 */}
                <div className="pt-8 w-full max-w-md">
                    <a href="#hub-menu" className="block w-full bg-[#00AEEF] hover:bg-[#0096ce] text-white text-3xl font-black py-8 rounded-2xl shadow-xl transition-all active:scale-95">
                        지금 바로 영웅님 만나러 가기
                    </a>
                </div>
            </div>
        </section>
    );
}
