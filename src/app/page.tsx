"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 카카오 SDK 초기화 (앱 키는 Vercel 배포 후 발급받아 교체 필요, 현재는 임시/테스트용 공란)
    // window.Kakao.init('YOUR_APP_KEY');
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.integrity = "sha384-TiCmbpGV1H09xOq05O6d2jZkVx/3rF7yW1n9O+B8XhF9a9n1+V6F6T9I1f/xP/N";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      // @ts-ignore
      if (window.Kakao && !window.Kakao.isInitialized()) {
        // @ts-ignore
        window.Kakao.init('ee7da4b7b2046f5de05c56c2c8fde93a'); // 공개용 테스트 앱 키 (추후 사용자 본인 키로 교체 권장)
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  const shareToKakao = () => {
    // @ts-ignore
    if (window.Kakao && window.Kakao.isInitialized()) {
      // @ts-ignore
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '영웅시대 덕질본부 💙',
          description: '우리 가수님을 위한 노래, 영상, 카페, 일정까지 한 번에 모아놓은 필수 앱이에요!',
          imageUrl: 'https://imhero-hq.vercel.app/logos/youtube.png', // 추후 Vercel 배포 후 대표 이미지 URL로 변경
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '구경하러 가기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      alert("카카오톡 공유하기 준비 중입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <>
      <div className="header">
        <h1>영웅시대 덕질본부</h1>
        <p>우리 가수님을 위한 모든 것, 여기서 한 번에!</p>
      </div>

      {/* 가수 사진을 넣을 공간 */}
      <div className="photo-space" style={{ width: '100%', height: '220px', backgroundColor: '#e6f7ff', borderRadius: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00AEEF', fontWeight: 'bold', border: '2px dashed #87CEEB' }}>
        여기에 영웅님 사진이 예쁘게 들어갈 자리입니다 💙
      </div>

      <div className="grid-container">
        <a href="https://www.melon.com/artist/timeline.htm?artistId=994944" className="nav-button" target="_blank" rel="noopener noreferrer">
          <img src="/logos/melon.png" alt="멜론 로고" width="40" height="40" className="icon-img" /> 멜론 스밍하기
        </a>
        <a href="https://www.genie.co.kr/detail/artistInfo?xxnm=80972154" className="nav-button" target="_blank" rel="noopener noreferrer">
          <img src="/logos/genie.png" alt="지니 로고" width="40" height="40" className="icon-img" /> 지니 스밍하기
        </a>
        <a href="https://www.youtube.com/@LimYoungWoong" className="nav-button" target="_blank" rel="noopener noreferrer">
          <img src="/logos/youtube.png" alt="유튜브 로고" width="40" height="40" className="icon-img" /> 유튜브 보러가기
        </a>
        <a href="https://cafe.daum.net/hero0616" className="nav-button" target="_blank" rel="noopener noreferrer">
          <img src="/logos/daum.png" alt="다음 로고" width="40" height="40" className="icon-img" /> 영웅시대 팬카페 가기
        </a>
        <a href="https://www.instagram.com/im_hero____/" className="nav-button" target="_blank" rel="noopener noreferrer">
          <img src="/logos/instagram.png" alt="인스타그램 로고" width="40" height="40" className="icon-img" /> 인스타그램 가기
        </a>
        <a href="https://search.naver.com/search.naver?query=임영웅+공연일정" className="nav-button" target="_blank" rel="noopener noreferrer">
          <img src="/logos/naver.png" alt="네이버 로고" width="40" height="40" className="icon-img" /> 공연 일정
        </a>
      </div>

      <div className="guide-section">
        <h3>📱 1초 만에 '앱'으로 만들기</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
          부모님 휴대폰 <span className="highlight">'홈 화면에 추가'</span>를 눌러주세요!<br />
          언제든 아이콘만 누르면 바로 덕질 시작! 💙
        </p>
        <div className="guide-container">
          <div className="guide-box">
            <p className="device-name">삼성/LG 폰 (갤럭시)</p>
            <ol>
              <li>오른쪽 위 <span className="badge">⋮</span> (점 3개) 누르기</li>
              <li><strong>'홈 화면에 추가'</strong> 누르기</li>
            </ol>
          </div>
          <div className="guide-box">
            <p className="device-name">아이폰 (iPhone)</p>
            <ol>
              <li>하단 중앙 <span className="badge">⎋</span> (공유 버튼) 누르기</li>
              <li>위로 올려 <strong>'홈 화면에 추가'</strong> 누르기</li>
            </ol>
          </div>
        </div>

        {/* 카카오톡 공유 버튼 */}
        <div className="share-section" style={{ marginTop: '30px', textAlign: 'center', borderTop: '1px dashed #bae7ff', paddingTop: '20px' }}>
          <h4 style={{ fontSize: '16px', color: '#333', marginBottom: '15px', fontWeight: 'bold' }}>영웅시대 친구분들에게 3초 만에 알려주세요!</h4>
          <button onClick={shareToKakao} style={{ background: '#FEE500', color: '#000000', border: 'none', borderRadius: '12px', padding: '15px 25px', fontSize: '16px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', width: '100%', maxWidth: '300px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <img src="/logos/kakao.png" alt="카카오톡" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
            카카오톡으로 공유하기
          </button>
        </div>
      </div>
    </>
  );
}
