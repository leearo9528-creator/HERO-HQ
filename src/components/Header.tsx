import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-hero-blue px-4 py-4 md:py-6 shadow-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* 로고 영역 */}
                <Link href="/" className="text-4xl font-black text-hero-blue tracking-tighter hover:opacity-90 transition-opacity">
                    HERO-HQ
                </Link>

                {/* 네비게이션 메뉴 */}
                <nav>
                    <ul className="flex flex-wrap justify-center gap-2 md:gap-6">
                        <li>
                            <Link href="#hub-menu" className="nav-link">바로가기 메뉴</Link>
                        </li>
                        <li>
                            <Link href="#schedule" className="nav-link">공연일정</Link>
                        </li>
                        <li>
                            <Link href="#streaming" className="nav-link">스트리밍 안내</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
