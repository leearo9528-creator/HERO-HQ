export default function ScheduleInfo() {
    return (
        <section id="schedule" className="mt-20 bg-white border-4 border-[#DFF3FF] rounded-3xl p-8 md:p-12 shadow-sm scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-5xl">📅</div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-black text-gray-800">영웅님의 공연 일정이 궁금하신가요?</h2>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                        전국 투어 콘서트부터 특별 공연까지, <br />
                        팬분들이 가장 정확하게 확인하실 수 있도록 안내해 드립니다.
                    </p>
                </div>
                <a
                    href="https://search.naver.com/search.naver?query=임영웅+공연일정"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00AEEF] text-white text-2xl font-bold px-8 py-5 rounded-xl hover:bg-[#0096ce] transition-colors whitespace-nowrap"
                >
                    네이버 공연정보 보기
                </a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F8FBFF] p-6 rounded-2xl border-2 border-[#E1EFF7]">
                    <h4 className="text-xl font-bold text-[#00AEEF] mb-2">💡 확인 팁 하나</h4>
                    <p className="text-lg text-gray-600">콘서트 예매는 '인터파크 티켓'에서 진행되는 경우가 많으니 미리 회원가입을 해두시면 좋아요!</p>
                </div>
                <div className="bg-[#F8FBFF] p-6 rounded-2xl border-2 border-[#E1EFF7]">
                    <h4 className="text-xl font-bold text-[#00AEEF] mb-2">💡 확인 팁 둘</h4>
                    <p className="text-lg text-gray-600">공식 일정이 발표되면 이 사이트에서도 가장 먼저 눈에 띄게 큰 글씨로 알려드릴게요.</p>
                </div>
            </div>
        </section>
    );
}
