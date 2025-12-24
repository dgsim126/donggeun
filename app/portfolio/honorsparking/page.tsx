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
              <h3 className="text-xl font-semibold mb-4">WebView 환경에서 OAuth2 세션 공유 문제</h3>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-red-600">Problem</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  모바일 앱(WebView) 환경에서 OAuth2 소셜 로그인을 진행하면 로그인 이후 다음과 같은 문제가 발생했습니다:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Google, Naver, Kako에서 WebView에서의 OAuth2 로그인 요청을 신뢰하지 않음 (공식 가이드 금지)</li>
                  <li>• OAuth2 로그인 이후 클라이언트에게 쿠키가 전달되지 않음 (session 전달 불가)</li>
                </ul>
                <p className="mt-4 font-semibold text-foreground">
                  "즉, OAuth2 로그인 성공 시점에 서버에 세션은 생기는데 WebView는 쿠키를 못 받는 문제가 발생"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-4 text-blue-600">Solution</h4>
                <div className="space-y-4">
                  <p className="mt-5 font-semibold text-foreground">
                  새로운 커스텀 로그인 API 추가 (세션 로그인)
                  </p>
                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">1. OAuth2 로그인 요청 시 서버에 생성된 sessionId를 암호화하여 클라이언트에게 전달</p>
                    <p className="text-sm text-muted-foreground">
                      <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• OAuth2 로그인 완료 후 사용자 principal 정보를 기반으로 서버가 세션 ID를 직접 생성하고 Redis에
                      저장</li>
                      <li>• 해당 세션 ID를 WebView 앱으로 응답 반환</li>
                    
                    </ul>

                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">2. [커스텀 로그인 API 호출] : 다시 서버에게 해당 sessionId를 전달</p>
                    <p className="text-sm text-muted-foreground">
                      <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 전달받은 암호화된 sessionId를 서버에 전달</li>
                    
                    </ul>
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">3. 전달받은 sessionId가 세션 스토리지에 존재하는지 확인</p>
                    <p className="text-sm text-muted-foreground">
                      <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 서버는 전달받은 sesssionId를 복호화</li>
                      <li>• Redis(세션 스토리지)에 해당 세션이 존재하는지 검증</li>
                    
                    </ul>
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">4. 기존 세션 회수 및 새 세션 재발급 </p>
                    <p className="text-sm text-muted-foreground">
                      <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 처음 OAuth2로 만들어졌던 기존 세션을 폐기</li>
                      <li>• 기존 세션의 인증정보를 복원하여 새 세션으로 옮김</li>
                    
                    </ul>
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">5. 클라이언트에게 쿠키(세션) 전달 </p>
                    <p className="text-sm text-muted-foreground">
                      <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 새 세션이 만들어졌기에 서블릿 컨테이너가 응답에 자동으로 쿠키를 내려줌</li>
                    
                    </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3 text-green-600">Result</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ WebView 환경에서도 안정적인 소셜 로그인 구현</li>
                  <li>✓ 웹 / 앱(WebView) 환경에 구애받지 않고 로그인 가능</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold mb-4">Expo Push API 직접 호출 문제</h3>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-red-600">Problem</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  입·출차 이벤트 발생 시 즉시 Expo Push API를 호출하던 기존 구조에서 다음과 같은 문제가 발생했습니다:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• DB에 값이 삽입되고 Expo 알림을 보내는 구조에서 Expo 서버의 응답 지연 문제 발생</li>
                  <li>• @Transactional에 의해 문제없이 삽입된 데이터가 rollback되는 문제 발생</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-4 text-blue-600">Solution</h4>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">1. 데이터 삽입과 Expo Push API 호출 분리</p>
                    <p className="text-sm text-muted-foreground">
                      {/* NotificationQueueItem 구조 정의. 회원 ID, 차량 번호, 알림 종류 등 핵심 정보만 큐에 저장  */}
                      <p>• Expo Push API 호출을 DB 데이터 삽입과 비동기적으로 처리하도록 설계 변경</p>
                      <p>• 데이터를 DB에 삽입한 후, Expo Push API 호출을 즉시 진행하지 않고, Redis 큐에 데이터를 추가하여 나중에 처리하도록 구조 변경</p>
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">2. Redis 기반 메시지 큐 설계</p>
                    <p className="text-sm text-muted-foreground">
                      <p>• 데이터 삽입 후 즉시 ExpoPushService를 호출하지 않고, 이를 Redis 큐에 저장</p>
                      <p>• Redis 큐에 저장된 알림 데이터를 백엔드 서버의 다른 프로세스가 처리하도록 설계</p>
                      <p>• 이를 통해 동기적인 종속성을 제거하고, Expo Push API 호출이 지연되거나 실패하더라도 DB는 정상적으로 동작.</p>
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-card">
                    <p className="font-semibold mb-2">3. RedisNotificationWorker 구현</p>
                    <p className="text-sm text-muted-foreground">
                      <p>• RedisNotificationWorker라는 별도의 워커 스레드를 구현하여 Redis 큐에서 데이터를 읽어 ExpoPushService를 호출하는 방식으로 처리</p>
                      <p>• 워커는 큐에 쌓인 알림 요청을 순차적으로 처리하고, Expo 서버로 푸시 알림을 전송</p>
                      <p>• API 호출 실패 시 큐에서 처리되지 않은 요청을 재시도할 수 있도록 추가적인 로직을 적용</p>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3 text-green-600">Result</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 대량 이벤트 상황(Expo server에서 많은 요청으로 인해 문제가 발생하는 상황)에서도 이와 상관없이 DB에 안정적으로 값 저장</li>
                  <li>✓ 알림 전달 성공률 및 안정성 대폭 향상</li>
                  <li>✓ 서버 전체 응답 속도 및 신뢰성 개선</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
