"use client"

import Link from "next/link"
import { PortfolioNavigation } from "@/components/portfolio-navigation"
import { useEffect } from "react"

export default function HonorsParkingPage() {
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
              <h1 className="text-4xl font-bold mb-4">HonorsParking</h1>
              <p className="text-lg font-semibold mb-4 leading-relaxed">
                (주)아너스코리아와 연계하여 차량 입·출차 정보와 주차 요금을 실시간으로 조회할 수 있는 모바일 통합 주차
                관리 시스템
              </p>
              <p className="text-muted-foreground leading-relaxed">
                HonorsParking은 실시간 차량 입·출차 정보를 기반으로 주차 요금을 계산하고, 사용자 앱으로 알림을 제공하는
                통합 주차 관리 시스템입니다. 주차장 이용자는 모바일 앱에서 실시간 요금과 주차 내역을 확인할 수 있으며,
                사업자는 관리자 페이지를 통해 주차장 운영과 정산을 관리할 수 있습니다.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-card shadow-sm h-fit">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">GitHub</p>
                  <a
                    href="https://github.com/Team-Devmon-IN-KU/HonorsParking-BE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    github.com/Team-Devmon-IN-KU/HonorsParking-BE
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">작업 기간</p>
                  <p className="text-muted-foreground">2025.01.10 ~ 2025.05.30</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">작업 인원</p>
                  <p className="text-muted-foreground">5명</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">사용 기술</p>
                  <p className="text-muted-foreground">
                    Spring Boot, Java, MySQL, Docker, AWS, Spring Security, OAuth2, Redis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: SERVICE OVERVIEW */}
          <section id="overview" className="mb-12 bg-gray-50 p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">서비스 설명</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              HonorsParking은 주차장 관제 시스템과 연동되어 차량 입·출차 이벤트를 실시간으로 처리하고, 요금 계산과
              알림을 사용자에게 제공하는 통합 주차 관리 서비스입니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-bold mb-3">User App (WebView 기반)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 실시간 요금 조회</li>
                  <li>• 주차 내역 확인</li>
                  <li>• 소셜 로그인 (Naver / Kakao / Google)</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-bold mb-3">Business Admin Web</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 차량 입·출차 관리</li>
                  <li>• 요금 정책 설정</li>
                  <li>• 정산 관리</li>
                  <li>• 통계 확인</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-bold mb-3">Backend Server</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 입·출차 이벤트 처리</li>
                  <li>• 실시간 요금 계산</li>
                  <li>• 세션 관리</li>
                  <li>• 소셜 로그인 처리</li>
                  <li>• 푸시 알림 전송</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                <img src="/images/honors1.png" alt="HonorsParking 웹 화면 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                <img src="/images/honors2.png" alt="HonorsParking 웹 화면 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* SECTION 3: ROLE & CONTRIBUTION */}
          <section id="role" className="mb-12 bg-white p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">역할 및 기여</h2>

            <div className="mb-8 border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-4">기획 및 소통 역할</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground mb-2">• 운영 환경 분석 및 정책 반영</p>
                  <p className="ml-4">
                    (주)아너스코리아 DB(MS-SQL)의 구조를 파악하고 연동 방식 협의. 입·출차 데이터 지연, 중복 이벤트 발생 등
                    실제 운영 중 발생하는 문제를 수집해 로직 개선
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">• 서비스 운영 커뮤니케이션</p>
                  <p className="ml-4">
                    서버 업데이트 및 배포 일정 조율. 사업자 피드백 수집 후 실제 운영에 반영. 앱(WebView)
                    환경 제약을 고려한 로그인 흐름 설계 논의
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-4">백엔드 개발 역할</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground mb-2">• 인증·인가 구조 개발</p>
                  <ul className="ml-4 space-y-1">
                    <li>- Spring Security + OAuth2(Google, Kakao, Naver) 로그인 구현</li>
                    <li>
                      - WebView 환경 특성상 기존 OAuth2 세션 공유가 불가능하여 세션 ID 기반 커스텀 로그인 로직을 직접
                      설계 및 구현
                    </li>
                    <li>- Redis를 세션 저장소로 활용해 인증 안정성 강화</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">• 푸시 알림 비동기 처리 구조 개선</p>
                  <ul className="ml-4 space-y-1">
                    <li>
                      - 기존 입·출차 시 Expo Push API를 직접 호출하던 구조를 Redis 큐 기반 비동기 처리 구조로 전환
                    </li>
                    <li>- NotificationQueueItem 구조 설계, RedisNotificationWorker 구현</li>
                    <li>- 대량 이벤트 처리 시 API 병목 현상 제거 및 안정성 확보</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">• 전체 서버 구조 개발</p>
                  <ul className="ml-4 space-y-1">
                    <li>- Spring Boot 기반 REST API 설계 및 구현</li>
                    <li>- 주차 요금 계산 알고리즘 구현 (기본요금, 시간요금, 일일 상한 요금 반영)</li>
                    <li>- 차량, 사용자, 주차 내역 도메인 모델링, JPA 기반 Repository 구성</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: TECH STACK */}
          <section id="tech" className="mb-12 bg-gray-50 p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">기술</h2>
            <div className="space-y-6 mb-8">
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Spring Boot</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Spring MVC</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Spring Security</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">OAuth2 Client</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Spring Data JPA</span>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Database</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">MS-SQL (외부 주차장 DB 연동)</span>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Infra</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">AWS EC2</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Docker Compose</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Nginx</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Redis</span>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-3">Architecture / Others</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Redis 기반 큐 처리</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">DTO / Entity 분리</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">JWT + 세션 혼합 인증</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">WebView 대응 로그인</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/images/honors_architecture.png" alt="HonorsParking CI/CD 아키텍처" className="w-full h-auto" />
              </div>
              <div className="aspect-[21/9] bg-muted rounded-lg flex items-center justify-center">
                <img
                  src="/images/honors_architecture2.jpg"
                  alt="HonorsParking 시스템 아키텍처"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* SECTION 5: CHALLENGES & SOLUTIONS */}
          <section id="challenges" className="mb-12 bg-white p-8 rounded-lg scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6">문제 및 해결</h2>

<div className="border-l-4 border-blue-600 pl-6 mb-12">
  <h3 className="text-xl font-semibold mb-4">WebView 환경에서 OAuth2 로그인 후 인증 유지 문제 (Google, Kakao, Naver)</h3>

  <div className="mb-6">
    <h4 className="text-lg font-bold mb-3 text-red-600">Problem</h4>
    <p className="text-muted-foreground mb-3 leading-relaxed">
      모바일 앱(WebView) 환경에서 OAuth2 소셜 로그인을 진행하면 OAuth 인증 자체는 완료되지만, OAuth 제공자의 보안 정책으로 인해
      WebView 환경에서는 인증 쿠키(세션)가 정상적으로 전달되지 않아 로그인 상태를 유지하기 어려운 문제가 발생했습니다.
    </p>
    <ul className="space-y-2 text-muted-foreground ml-4">
      <li>• 일부 OAuth 제공자는 보안 정책상 WebView(Embedded Browser) 기반 로그인을 제한하거나 권장하지 않음</li>
      <li>• OAuth 인증 완료 후에도 WebView로 인증 쿠키가 전달되지 않아, 이후 요청이 비인증 상태로 처리됨</li>
    </ul>
  </div>

  <div className="mb-6">
    <h4 className="text-lg font-bold mb-4 text-blue-600">Solution: 세션 ID 기반 커스텀 로그인 흐름 설계</h4>

    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">1. OAuth2 로그인 성공 후 생성된 sessionId를 암호화하여 클라이언트에 전달</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• OAuth2 성공 시점에 서버에서 세션이 생성되며, 해당 세션 ID를 암호화하여 응답으로 전달</li>
          <li>• 세션 데이터는 Redis(Session Storage)에 저장된 상태</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">2. 커스텀 로그인 API로 암호화된 sessionId를 다시 서버에 전달</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• WebView에서 쿠키 전달이 제한되는 점을 고려해, 별도의 로그인 API로 sessionId를 전달하도록 설계</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">3. Redis에서 기존 세션을 조회해 인증 정보(Authentication)를 확인</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 서버에서 sessionId를 복호화한 뒤 Redis 세션을 조회</li>
          <li>• 세션에 저장된 SecurityContext(Authentication)를 검증해 유효한 사용자임을 확인</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 bg-card">
        <p className="font-semibold mb-2">4. 기존 세션 무효화 후, 인증 정보를 새 세션에 재저장하여 쿠키 발급</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 기존 세션을 만료(삭제)하고, 검증된 인증 정보를 새 세션에 재설정</li>
          <li>• 새 세션이 생성되면서 응답에 세션 쿠키가 포함되어 WebView에서도 로그인 상태 유지</li>
        </ul>
      </div>
    </div>
  </div>

  <div>
    <h4 className="text-lg font-bold mb-3 text-green-600">Result</h4>
    <ul className="space-y-2 text-muted-foreground">
      <li>✓ WebView 환경에서도 소셜 로그인 이후 인증 상태를 안정적으로 유지</li>
      <li>✓ 웹/앱(WebView) 환경 차이로 인한 로그인 불안정 문제를 완화</li>
    </ul>
  </div>
</div>



            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold mb-4">Expo Push API 직접 호출 문제</h3>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-red-600">Problem</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  입·출차 이벤트 발생 시 트랜잭션 내부에서 Expo Push API를 즉시 호출하던 기존 구조에서 다음과 같은 문제가
                  발생했습니다:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• 외부 API 응답 지연으로 인해 요청 처리 시간이 길어지고 서버 부하가 증가</li>
                  <li>• 외부 API 호출 실패(예외) 시 커밋 이전에 트랜잭션이 롤백되어 DB 저장까지 영향 발생</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-4 text-blue-600">
                  Solution: Redis 기반 큐로 알림 요청을 분리하고 워커가 비동기 처리
                </h4>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">1. 트랜잭션과 외부 API 호출 분리</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• DB 저장 로직과 Expo Push API 호출을 동일 트랜잭션에서 분리</p>
                      <p>• DB 저장 후 알림 요청은 즉시 호출하지 않고 Redis 큐에 적재하도록 변경</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">2. Redis List 기반 메시지 큐 도입</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• NotificationQueueItem 형태로 필요한 정보만 큐에 저장</p>
                      <p>• 큐 적재(Producer)와 큐 소비(Consumer)를 분리해 동기 종속성 제거</p>
                      <p>• 외부 API 지연/실패가 발생해도 DB 저장은 안정적으로 완료되도록 개선</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">3. RedisNotificationWorker로 큐 소비 및 재시도 처리</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• @Scheduled 기반 워커 컴포넌트가 Redis 큐를 주기적으로 polling하여 알림 요청을 처리</p>
                      <p>• 큐에서 데이터를 꺼내 ExpoPushService를 호출해 푸시 알림 전송</p>
                      <p>• 실패 시 재시도 횟수를 관리하며 최대 3회까지 재처리</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3 text-green-600">Result</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 외부 API 지연/실패 상황에서도 DB 저장이 안정적으로 유지</li>
                  <li>✓ 대량 이벤트 상황에서 알림 처리 안정성 및 성공률 향상</li>
                  <li>✓ 요청 응답 지연 감소 및 서버 부하 완화</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
