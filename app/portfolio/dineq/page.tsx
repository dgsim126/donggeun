"use client"

import Link from "next/link"
import { PortfolioNavigation } from "@/components/portfolio-navigation"
import { useEffect } from "react"

export default function DineQPage() {
  const tableId = "exampleTableId" // Declare the variable here

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-zoom">
      <PortfolioNavigation />
      <main className="min-h-screen bg-background pt-14">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Link href="/#portfolio" className="text-blue-600 hover:text-blue-800 text-sm mb-8 inline-block">
            ← 홈으로 돌아가기
          </Link>

          {/* SECTION 1: HERO / OVERVIEW */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 bg-white p-8 rounded-lg">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">DineQ</h1>
              <p className="text-lg font-semibold mb-4 leading-relaxed">
                실제 주점에서 운영 중이며 누적 2,000건 이상의 주문을 처리한 QR 기반 테이블 주문 서비스
              </p>
              <p className="text-muted-foreground leading-relaxed">
                DineQ는 오프라인 식당에서 QR 테이블 주문을 지원하는 웹 기반 주문·정산 시스템입니다. 고객은 테이블 QR을
                통해 메뉴를 주문하고, 점주는 관리 화면에서 실시간 주문 현황을 확인하며 매장 운영 및 정산을 관리할 수
                있습니다.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-card shadow-sm h-fit">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">GitHub</p>
                  <a
                    href="https://github.com/dgsim126/DineQ-BE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    github.com/dgsim126/DineQ-BE
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">작업 기간</p>
                  <p className="text-muted-foreground">2025.03.04 ~ 2025.05.12</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">작업 인원</p>
                  <p className="text-muted-foreground">3명</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">사용 기술</p>
                  <p className="text-muted-foreground">Spring Boot, Java, MariaDB, Spring Security, Docker, AWS</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: SERVICE OVERVIEW */}
          <section id="overview" className="mb-12 bg-gray-50 p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">서비스 설명</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              DineQ는 오프라인 식당 환경에 최적화된 QR 테이블 주문 시스템입니다.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-bold mb-3">User-facing web app</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 메뉴 조회</li>
                  <li>• 주문 생성</li>
                  <li>• 주문 현황 확인</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-bold mb-3">Store-owner web app</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 메뉴 관리</li>
                  <li>• 테이블 관리</li>
                  <li>• 매출 및 정산 관리</li>
                </ul>
              </div>
            </div>

            {/* IMAGE PLACEHOLDER LAYOUT (left: 2 phones, right: 2 monitors stacked) */}
            <div className="grid grid-cols-1 md:grid-cols-[0.9fr_0.9fr_1.2fr] gap-4">
              {/* Left: Smartphone images */}
              <div className="aspect-[9/18] rounded-lg overflow-hidden shadow-md bg-white border border-border flex items-center justify-center">
                <img src="/images/dineq1.jpg" alt="DineQ 테이블 정산 화면" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[9/18] rounded-lg overflow-hidden shadow-md bg-white border border-border flex items-center justify-center">
                <img src="/images/dineq2.jpg" alt="DineQ 장바구니 화면" className="w-full h-full object-cover" />
              </div>

              {/* Right: Monitor images */}
              <div className="h-full grid grid-rows-2 gap-3">
                <div className="rounded-lg overflow-hidden shadow-md bg-white border border-border flex items-center justify-center">
                  <img src="/images/dineq3.png" alt="DineQ 관리자 대시보드" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md bg-white border border-border flex items-center justify-center">
                  <img src="/images/dineq4.png" alt="DineQ 메뉴 주문 화면" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: ROLE & CONTRIBUTION */}
          <section id="role" className="mb-12 bg-white p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">역할 및 기여</h2>

            <div className="mb-8 border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-4">1. 기획 및 소통 역할</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground mb-2">• 점주 인터뷰 및 요구사항 분석</p>
                  <p className="ml-4">
                    주문 화면과 관리 화면에서 실제로 필요한 기능과 사용자 동선을 파악하고, 메뉴명, 옵션 구조, 테이블 수
                    등 실제 운영 데이터를 설계에 반영
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">• 현장 기반 운영 환경 분석</p>
                  <p className="ml-4">
                    매장의 테이블 배치, QR 설치 방식, 인터넷 환경, 직원 사용 방식 등 실제 제약 조건을 고려하여 기능
                    우선순위 조정
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">• 설치 및 배포 커뮤니케이션</p>
                  <p className="ml-4">
                    Nginx + Docker 기반 서버 배포 일정 조율, 매장에서 사용할 QR 코드 생성 및 설치 안내, 운영 중 발생한
                    불편 사항을 수집하고 개선 사항으로 반영
                  </p>
                </div>
              </div>
              <p className="mt-4 font-semibold text-foreground">
                "단순 개발을 넘어 실제 사용자(점주/손님)의 요구를 분석하고 이를 기술에 반영하는 역할을 수행"
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-4">2. 백엔드 개발 역할</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground mb-2">• Spring Boot 기반 백엔드 전반 구현</p>
                  <ul className="ml-4 space-y-1">
                    <li>- 주문 / 결제 / 메뉴 도메인 설계</li>
                    <li>- REST API 개발</li>
                    <li>- QR코드 로직 설계</li>
                    <li>- JPA 기반 데이터 모델링 및 서비스 레이어 설계</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">• 실서비스 배포 경험</p>
                  <ul className="ml-4 space-y-1">
                    <li>- Nginx + Docker 기반 운영 환경 구축</li>
                    <li>- 도메인 및 SSL 설정</li>
                    <li>- 운영 안정성을 고려한 구조 설계</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: TECH STACK */}
          <section id="tech" className="mb-12 bg-gray-50 p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">기술</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Spring Boot</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Spring MVC</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Spring Data JPA</span>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Database</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">MySQL</span>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Infra / DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Docker Compose</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Nginx</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Ubuntu Server</span>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Architecture / Others</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">REST API 설계</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">계층형 아키텍처</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">DTO / Entity 분리</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">공통 예외 처리</span>
                </div>
              </div>
            </div>

            <div className="aspect-[21/9] bg-muted rounded-lg flex items-center justify-center">
              <img src="/images/dineq_archi.jpg" alt="DineQ 아키텍처" className="w-full h-auto" />
            </div>
          </section>

          {/* SECTION 5: CHALLENGES & SOLUTIONS */}
          <section id="challenges" className="mb-12 bg-white p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">문제 및 해결</h2>

            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">테이블 오더 환경에서 발생한 보안 문제</h3>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-red-600">Problem</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  초기 설계에서는 QR 스캔 시 다음과 같은 URL 구조를 사용했습니다 :
                </p>
                <div className="bg-muted p-4 rounded-lg mb-3">
                  <code>/api/v1/table/{tableId}</code>
                </div>
                <p className="text-muted-foreground mb-2">이는 다음과 같은 문제를 발생시켰습니다 :</p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• URL만 알면 외부에서도 누구나 접근 가능</li>
                  <li>• 주문 후 집으로 돌아가도 브라우저가 열려 있으면 집에서도 주문 가능</li>
                  <li>• tableId만으로 고객을 구분할 수 없어 테이블 오용 및 중복 주문 위험 발생 (주문 주체 구분 불가)</li>
                </ul>
                <p className="mt-4 font-semibold text-foreground">
                  "tableId 기반 접근 방식은 실서비스 환경에서 보안적으로 치명적"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-4 text-blue-600">Solution: 랜덤 토큰 기반 테이블 인증 구조 도입</h4>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">1. QR 접근 구조 변경</p>
                    <div className="bg-muted p-3 rounded mb-2">
                      <code>/api/v1/register/{tableId}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      QR코드를 스캔할 경우, 주문페이지로 이동하는 것이 아니라 토큰 발급 API로 요청을 보내도록 변경
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">2. 랜덤 토큰 생성 및 저장</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• UUID 기반 랜덤 토큰 생성</li>
                      <li>• (id, tokenValue, tableId, createdAt) 구조로 DB 저장</li>
                      <li>• 토큰이 고객의 임시 세션 역할 수행</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">3. 토큰 포함 URL 전달</p>
                    <div className="bg-muted p-3 rounded mb-2">
                      <code>https://프론트/table/5?token=abc123xyz456</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      프론트엔드에서 토큰 저장 후 모든 API 요청에 헤더로 전달
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">4. 이후 모든 고객용 API에서 토큰 검증</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 요청 헤더에서 토큰 추출</li>
                      <li>• DB 유효성 검사</li>
                      <li>• 유효하지 않거나 만료된 토큰은 즉시 차단</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">5. 토큰 자동 만료 처리</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 스케줄러를 통해 일정 시간(30분) 경과 시 자동 삭제</li>
                      <li>• 매장 외부 접근 가능성 원천 차단</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3 text-green-600">Result</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 테이블 기반 접근을 세션 기반 접근 구조로 전환</li>
                  <li>✓ 외부에서 tableId로 임의 접근하는 문제 완전 해결</li>
                  <li>✓ 매장 외 주문 오류 완전 제거</li>
                  <li>✓ 실서비스 안정성과 신뢰성 향상</li>
                  <li>✓ 백엔드 인증 구조에 대한 설계 역량 강화</li>
                </ul>
              </div>
            </div>

<div className="border-l-4 border-green-600 pl-6 mb-8">
  <h3 className="text-xl font-semibold mb-4">
    주문 처리 구조에서 발생한 실시간성 및 서버 부하 문제
  </h3>

  {/* Problem */}
  <div className="mb-6">
    <h4 className="text-lg font-bold mb-3 text-red-600">Problem</h4>
    <p className="text-muted-foreground mb-3 leading-relaxed">
      초기 주문 시스템에서는 주방 주문 화면에서 새로운 주문 여부를 확인하기 위해
      다음과 같은 방식으로 동작했습니다 :
    </p>

    <div className="bg-muted p-4 rounded-lg mb-3">
      <code>GET /api/v1/orders (5초 주기 폴링)</code>
    </div>

    <p className="text-muted-foreground mb-2">
      이 방식은 다음과 같은 문제를 야기했습니다 :
    </p>
    <ul className="space-y-2 text-muted-foreground ml-4">
      <li>• 새로운 주문이 없어도 5초마다 반복적인 API 요청 발생</li>
      <li>• 주문량 증가 시 불필요한 트래픽으로 서버 부하 증가 가능성</li>
      <li>• 주문 생성 직후에도 최대 5초의 지연 발생</li>
      <li>• 실시간 처리가 중요한 주방 환경에서 즉각적인 반응성 부족</li>
    </ul>

    <p className="mt-4 font-semibold text-foreground">
      "Polling 기반 구조는 실서비스 환경에서 실시간성과 효율성 모두에 한계가 존재"
    </p>
  </div>

  {/* Solution */}
  <div className="mb-6">
    <h4 className="text-lg font-bold mb-4 text-blue-600">
      Solution: WebSocket 기반 실시간 주문 알림 구조 도입
    </h4>

    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">1. Polling 방식 제거</p>
        <p className="text-sm text-muted-foreground">
          주방 화면에서 주기적으로 주문 목록을 조회하던 GET 요청을 제거하고,
          서버가 이벤트 발생 시 즉시 알림을 전달하는 구조로 전환
        </p>
      </div>

      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">
          2. WebSocket 연결 수립 (STOMP 기반 실시간 메시징 구성)
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Spring WebSocket + STOMP 기반으로 연결 구성</li>
          <li>• /ws 엔드포인트로 연결하고 /topic 구독 구조로 이벤트 수신</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">
          3. 주문 이벤트 발생 시 서버에서 즉시 알림 전송
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          주문 생성, 주문 상태 변경 등 DB 트랜잭션이 발생하는 서비스 메서드에서
          WebSocket 알림을 직접 전송하도록 설계
        </p>
        <div className="bg-muted p-3 rounded">
          <code>invalidSender.sendAlert()</code>
        </div>
      </div>

      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">4. 클라이언트 즉시 반영</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 주방 화면에서 WebSocket 메시지 수신</li>
          <li>• 신규 주문 또는 상태 변경 즉시 UI 갱신</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Result */}
  <div>
    <h4 className="text-lg font-bold mb-3 text-green-600">Result</h4>
    <ul className="space-y-2 text-muted-foreground">
      <li>✓ 불필요한 주기적 API 호출 제거로 서버 부하 감소</li>
      <li>✓ 주문 생성/변경 즉시 주방 화면에 반영되는 실시간 처리 구현</li>
      <li>✓ 주문 지연 체감 제거로 주방 운영 효율 개선</li>
      <li>✓ 이벤트 기반 아키텍처 설계 경험 확보</li>
      <li>✓ 실서비스 환경에서 WebSocket 적용 및 운영 경험 축적</li>
    </ul>
  </div>
</div>

            
          </section>
        </div>
      </main>
    </div>
  )
}
