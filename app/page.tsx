"use client"

import { ProjectCard } from "@/components/project-card"
import { TechBadge } from "@/components/tech-badge"
import { Navigation } from "@/components/navigation"
import { LuMail, LuPhone, LuMapPin, LuGithub } from "react-icons/lu"

export default function HomePage() {
  return (
    // ✅ zoom은 style이 아니라 class로 통일
    <main className="min-h-screen page-zoom">
      <Navigation />

      <div className="pt-12 sm:pt-14">

        {/* Page 1: Hero */}
        <section
          id="hero"
          className="vh-section !items-center scroll-mt-12 sm:scroll-mt-14 justify-center px-6 sm:px-8 lg:px-12
 bg-background"
        >
          <div className="max-w-5xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-balance leading-tight">
              현장의 요구를 기술로 풀어내는
              <br />
              서버 개발자, <span className="text-blue-600 inline-block">심동근</span>
            </h1>
          </div>
        </section>


        {/* Page 2: 자기소개 */}
        <section
          id="about"
          className="vh-section scroll-mt-12 sm:scroll-mt-14 px-6 sm:px-8 lg:px-12 py-8 bg-secondary/30"
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10">
              {/* LEFT : 사진 */}
              <div className="space-y-4 w-52 mx-auto md:mx-0">
                <div className="w-52 h-[277px] mx-auto md:mx-0 rounded-lg overflow-hidden border-2 border-border shadow-md bg-muted">
                  <img
                    src="/images/my.png"
                    alt="심동근 증명사진"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* RIGHT : 텍스트 (줄바꿈 절대 수정 안 함) */}
              <div className="space-y-2">
                <div className="text-foreground leading-relaxed text-xs md:text-[13px]">
                  안녕하세요.{"  "}
                  <strong className="font-semibold">
                    현장의 문제를 기술로 해결하는 서버 개발자 심동근
                  </strong>
                  입니다.
                </div>

                <div className="text-foreground leading-relaxed text-xs md:text-[13px]">
                  <div>
                    주점 <span className="text-blue-700 font-semibold">술고래 세종점</span> 에서 운영되는 QR 테이블
                    주문 서비스를 개발 및 유지보수하며, 서비스 기획 단계부터
                  </div>
                  <div>
                    매장 사장님과 직접 만나{" "}
                    <strong className="font-semibold">
                      운영 문제를 함께 정의하고 요구사항을 도출해 기능과 구조에 반영하는 과정
                    </strong>
                    을 경험했습니다.
                  </div>
                </div>

                <div className="text-foreground leading-relaxed text-xs md:text-[13px]">
                  <div>
                    그 과정에서 서비스의 기능 자체보다도 매장 운영의 흐름을 방해하지 않는지, 업무가 번거로워지지
                    않는지
                  </div>
                  <div>파악하고 개선하는 것이 더 중요하다는 것을 깨닫게 되었습니다.</div>
                </div>

                <div className="mt-8" />
                <div className="mt-8" />

                <div className="text-foreground leading-relaxed text-xs md:text-[13px]">
                  <div>
                    또한, 주차관제회사{" "}
                    <span className="text-blue-700 font-semibold">(주)아너스코리아</span> 와 협업해{" "}
                    <strong className="font-semibold">기존 시스템의 제약 속에서 연동 구조를 설계하며</strong>,
                  </div>
                  <div>
                    실제 차량의 입·출차 정보와 요금 기록을 앱에서 안정적으로 확인할 수 있는 서버 구조를 구현한 경험이
                    있습니다.
                  </div>
                </div>

                <div className="text-foreground leading-relaxed text-xs md:text-[13px]">
                  <div>
                    이를 통해{" "}
                    <strong className="font-semibold">
                      기존 기업 업무의 주요 흐름에 대한 이해와, 여러 이해관계자와 소통하며 업무 기준을 맞추는 것
                    </strong>
                    이
                  </div>
                  <div>무엇보다 우선되어야 한다는 것을 깨닫게 되었습니다.</div>
                </div>

                <div className="text-foreground leading-relaxed text-xs md:text-[13px]">
                  <strong className="font-semibold">
                    기술은 결국 현장의 문제를 해결하기 위한 수단이라는 생각으로, 지속 가능한 구조와 명확한 소통 기반의
                    개발을 이어나가겠습니다.
                  </strong>
                </div>
              </div>

              {/* CONTACT : 두 칼럼 전체 폭 */}
              <div className="md:col-span-2 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div
                  className="group rounded-xl border border-border bg-background/70 p-4 text-center hover:bg-background transition overflow-hidden"
                  title="dgsim126@gmail.com"
                >
                  <LuMail className="mx-auto mb-2 h-4 w-4 text-muted-foreground" />
                  <p className="text-[11px] md:text-xs font-semibold">Email</p>
                  <p className="mt-1 text-[10px] md:text-[11px] text-muted-foreground truncate">dgsim126@gmail.com</p>
                </div>

                <div
                  className="group rounded-xl border border-border bg-background/70 p-4 text-center hover:bg-background transition overflow-hidden"
                  title="010-7758-9420"
                >
                  <LuPhone className="mx-auto mb-2 h-4 w-4 text-muted-foreground" />
                  <p className="text-[11px] md:text-xs font-semibold">Phone</p>
                  <p className="mt-1 text-[10px] md:text-[11px] text-muted-foreground">010-7758-9420</p>
                </div>

                <div
                  className="rounded-xl border border-border bg-background/70 p-4 text-center overflow-hidden"
                  title="경기도 용인시 기흥구 중부대로 375 기흥역롯데캐슬스카이"
                >
                  <LuMapPin className="mx-auto mb-2 h-4 w-4 text-muted-foreground" />
                  <p className="text-[11px] md:text-xs font-semibold">Address</p>
                  <p className="mt-1 text-[10px] md:text-[11px] text-muted-foreground truncate">
                    경기도 용인시 기흥구 중부대로 375
                  </p>
                </div>

                <div
                  className="group rounded-xl border border-border bg-background/70 p-4 text-center hover:bg-background transition overflow-hidden"
                  title="github.com/dgsim126"
                >
                  <LuGithub className="mx-auto mb-2 h-4 w-4 text-muted-foreground" />
                  <p className="text-[11px] md:text-xs font-semibold">GitHub</p>
                  <p className="mt-1 text-[10px] md:text-[11px] text-muted-foreground truncate">github.com/dgsim126</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 3: 역량 */}
        <section
          id="capabilities"
          className="vh-section scroll-mt-12 sm:scroll-mt-14 px-6 sm:px-8 lg:px-12 py-8 bg-background"
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid lg:grid-cols-[1fr_320px] gap-6 lg:gap-10">
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm md:text-[15px] font-bold mb-1 text-foreground">[실서비스 운영 경험]</h3>
                  <ul className="space-y-0.5 text-[11px] md:text-xs text-foreground/90 leading-relaxed">
                    <li>
                      - 실제 주점에서 운영되는 QR 테이블 주문 서비스 개발 및 유지보수 (누적 2,000건 이상 주문 처리, 현재
                      운영 중)
                    </li>
                    <li>- 실제 주차장 운영 환경을 기준으로 한 실서비스 연동형 시스템 개발</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm md:text-[15px] font-bold mb-1 text-foreground">[백앤드 아키텍처 및 인증]</h3>
                  <ul className="space-y-0.5 text-[11px] md:text-xs text-foreground/90 leading-relaxed">
                    <li>- Spring Security + OAuth2 + Redis 기반 인증 구조 개발</li>
                    <li>- WebView 환경의 로그인 이슈 해결을 위한 세션ID 기반 커스텀 인증 로직 개발</li>
                    <li>- 외부 시스템과 연동되는 환경에서 트랜잭션 처리 및 데이터 정합성 확보</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm md:text-[15px] font-bold mb-1 text-foreground">[실시간 처리 및 서버 성능 최적화]</h3>
                  <ul className="space-y-0.5 text-[11px] md:text-xs text-foreground/90 leading-relaxed">
                    <li>- Redis 큐를 활용한 비동기 알림 전송 구조 구현으로 서버 부하 감소</li>
                    <li>- 웹소켓을 활용한 실시간 데이터 수신·처리 구조 설계</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm md:text-[15px] font-bold mb-1 text-foreground">[API·도메인 설계 및 데이터 처리]</h3>
                  <ul className="space-y-0.5 text-[11px] md:text-xs text-foreground/90 leading-relaxed">
                    <li>- QR 테이블 오더, 주차 관리, 일정 관리 등 여러 서비스의 REST API 설계 및 구현</li>
                    <li>- @Entity 기반 JPA 도메인 모델링 및 연관관계 매핑</li>
                    <li>- 외부 DB(주차장 운영사)와의 연동 구조 설계 및 데이터 동기화 처리</li>
                    <li>- 외부 api 사용 경험</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm md:text-[15px] font-bold mb-1 text-foreground">[문서화 및 협업]</h3>
                  <ul className="space-y-0.5 text-[11px] md:text-xs text-foreground/90 leading-relaxed">
                    <li>- Notion 기반의 요구사항 정의서, API 명세서, 일정표 등 문서화 체계 주도 구축</li>
                    <li>- GitHub PR 기반의 코드리뷰·브랜치 전략 정립으로 협업 효율 향상</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xs md:text-sm font-bold mb-2 text-foreground">기술 스택</h3>
                <div className="flex flex-wrap gap-1.5">
                  <TechBadge>JAVA</TechBadge>
                  <TechBadge>Spring Boot</TechBadge>
                  <TechBadge>Spring Security</TechBadge>
                  <TechBadge>JSP</TechBadge>
                  <TechBadge>Servlet</TechBadge>
                  <TechBadge>Maven</TechBadge>
                  <TechBadge>Gradle</TechBadge>
                  <TechBadge>MyBatis</TechBadge>
                  <TechBadge>Spring Data JPA</TechBadge>

                  <div className="w-full" />
                  <TechBadge>amazon AWS</TechBadge>
                  <TechBadge>Docker</TechBadge>
                  <TechBadge>WebSocket</TechBadge>

                  <div className="w-full" />
                  <TechBadge>Git</TechBadge>
                  <TechBadge>Redis</TechBadge>
                  <TechBadge>OAuth2</TechBadge>

                  <div className="w-full" />
                  <TechBadge>MySQL</TechBadge>
                  <TechBadge>MariaDB</TechBadge>
                  <TechBadge>PostgreSQL</TechBadge>
                  <TechBadge>MongoDB</TechBadge>

                  <div className="w-full" />
                  <TechBadge>REST API</TechBadge>
                  <TechBadge>Node.js</TechBadge>
                  <TechBadge>Express.js</TechBadge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 4: 정보 */}
        <section
          id="info"
          className="scroll-mt-12 sm:scroll-mt-14 min-h-[calc(100svh-3.5rem)] flex items-center px-6 sm:px-8 lg:px-12 py-8 bg-secondary/30"
        >
          <div className="max-w-5xl mx-auto w-full">

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="border-2 border-border rounded-xl p-4 bg-background/80 shadow-sm">
                <h3 className="text-sm md:text-base font-bold mb-3 text-foreground">학력</h3>
                <div className="space-y-2 text-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold text-xs md:text-sm">고려대학교 세종</p>
                    <p className="text-[11px] md:text-xs text-muted-foreground mt-0.5">컴퓨터융합소프트웨어학과</p>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[11px] md:text-xs text-muted-foreground">2019.03 ~ 2025.08</p>
                    <p className="text-[11px] md:text-xs font-medium mt-0.5">학점 3.9 / 4.5</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-xl p-4 bg-background/80 shadow-sm">
                <h3 className="text-sm md:text-base font-bold mb-3 text-foreground">경험·교육·활동</h3>
                <div className="space-y-2 text-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold text-[11px] md:text-xs">삼성소프트웨어아카데미(SSAFY) (2025.07~)</p>
                    <p className="text-muted-foreground text-[10px] md:text-[11px] mt-0.5">
                      삼성소프트웨어아카데미 과정 수료 중
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[11px] md:text-xs">멋쟁이사자처럼(2024.03~2024.12) 동아리</p>
                    <p className="text-muted-foreground text-[10px] md:text-[11px] mt-0.5">
                      멋쟁이사자처럼 대학 12기 (백앤드)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[11px] md:text-xs">언더독레볼루션(2024.03~2024.12) 동아리</p>
                    <p className="text-muted-foreground text-[10px] md:text-[11px] mt-0.5">
                      교내 개발 및 창업 동아리 언더독레볼루션 운영진
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 자격·어학·수상 */}
            <div className="border-2 border-border rounded-xl p-4 bg-background/80 shadow-sm">
              <h3 className="text-sm md:text-base font-bold mb-3 text-foreground">자격·어학·수상</h3>

              <div className="space-y-1.5">
                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2025.12</span>
                  <span className="font-semibold">TOEIC 780점</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">한국TOEIC위원회</span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2025.11</span>
                  <span className="font-semibold">TOPCIT 650점</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">
                    정보통신기획평가원
                  </span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2025.11</span>
                  <span className="font-semibold">데이터분석준전문가(ADsP)</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">
                    한국데이터베이스진흥원
                  </span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2025.10</span>
                  <span className="font-semibold">한국사능력검정 2급</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">국사편찬위원회</span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2024.12</span>
                  <span className="font-semibold">[컴퓨터융합소프트웨어학과] 졸업 캡스톤 전체 3등</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">고려대학교 세종</span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2024.12</span>
                  <span className="font-semibold">[컴퓨터융합소프트웨어학과] 제 26회 학술제 2등</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">고려대학교 세종</span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2024.12</span>
                  <span className="font-semibold">정보처리기사</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">한국산업인력공단</span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2024.09</span>
                  <span className="font-semibold">SQL개발자(SQLD자격)</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">
                    한국데이터베이스진흥센터
                  </span>
                </div>

                <div className="border-t border-border/60 my-1" />

                <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr_auto] gap-2 md:gap-3 items-baseline text-[11px] md:text-xs py-1">
                  <span className="text-muted-foreground font-medium">2024.08</span>
                  <span className="font-semibold">[세종시] SW융합클러스터 2.0 디지털 콘텐츠 DX 해커톤 우수상</span>
                  <span className="text-muted-foreground text-[10px] md:text-[11px] hidden md:block">세종테크노파크</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 5: 포트폴리오 */}
        <section
          id="portfolio"
          className="scroll-mt-12 sm:scroll-mt-14 min-h-[calc(100svh-3.5rem)] py-10 md:py-12 px-6 sm:px-8 lg:px-12 bg-background flex items-center"
        >
          <div className="max-w-5xl mx-auto w-full">

            <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">프로젝트</h2>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <ProjectCard
                title="DineQ"
                summary="누적 2,000건 이상의 주문을 처리한 QR 기반 테이블 주문 시스템"
                href="/portfolio/dineq"
                large
                imageSrc="/images/dineq_main.png"
                imageAlt="DineQ 프로젝트 이미지"
              />
              <ProjectCard
                title="HonorsParking"
                summary="(주)아너스코리아 서버와 연동하여 차량 입·출차 정보 및 실시간 주차 요금을 조회·관리하는 시스템"
                href="/portfolio/honorsparking"
                large
                imageSrc="/images/honors_main.png"
                imageAlt="HonorsParking 프로젝트 이미지"
              />
            </div>

            <div className="space-y-5">
              <div className="border-2 border-border rounded-xl p-4 flex flex-col md:flex-row gap-4 bg-background shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold mb-1.5">모여봐요 | 일정 잡기 서비스</h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed text-[11px] md:text-xs">
                    다수 인원의 가능한 시간을 취합해 일정을 조율하는 웹 기반 일정 조율 서비스입니다. 사용자의 일정 입력을
                    자동으로 계산하여 최적의 모임 시간을 계산합니다.
                  </p>
                  <div className="text-[10px] md:text-[11px] space-y-1">
                    <p>
                      <span className="text-muted-foreground font-medium">기간:</span> 2024.10.01~2024.11.30 / 인원: 5명
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">스택:</span> spring boot, java, PostgreSQL, docker,
                      AWS, spring security, OAuth2
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">링크:</span>{" "}
                      <a
                        href="https://github.com/dgsim126/moyeobwayo-BE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all"
                      >
                        github.com/dgsim126/moyeobwayo-BE
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-36 h-36 rounded-lg overflow-hidden border border-border flex-shrink-0 bg-muted">
                  <img
                    src="/images/moyoebwayo_main.png"
                    alt="모여봐요 프로젝트 이미지"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="border-2 border-border rounded-xl p-4 flex flex-col md:flex-row gap-4 bg-background shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold mb-1.5">My Job Calendar | 취업 일정 관리 달력</h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed text-[11px] md:text-xs">
                    채용공고, 기업정보, 정부 및 공공기관의 학생 지원 프로그램 등을 달력 기반으로 한눈에 확인할 수 있는 취업
                    일정 관리 서비스입니다. 사용자의 관심 기업 및 채용 일정을 달력 형태로 관리하도록 설계했습니다.
                  </p>
                  <div className="text-[10px] md:text-[11px] space-y-1">
                    <p>
                      <span className="text-muted-foreground font-medium">기간:</span> 2024.07.06~2024.08.03 / 인원: 4명
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">스택:</span> node.js, express, AWS, mariadb
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">링크:</span>{" "}
                      <a
                        href="https://github.com/dgsim126/MY_JOB_Calendar-BE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all"
                      >
                        github.com/dgsim126/MY_JOB_Calendar-BE
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-36 h-36 rounded-lg overflow-hidden border border-border flex-shrink-0 bg-muted">
                  <img
                    src="/images/myjobcal_main.png"
                    alt="My Job Calendar 프로젝트 이미지"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="border-2 border-border rounded-xl p-4 flex flex-col md:flex-row gap-4 bg-background shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold mb-1.5">UniWeb | 교육용 웹 게임 서비스</h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed text-[11px] md:text-xs">
                    사용자가 원하는 문제와 정답을 입력하면 해당 내용을 바탕으로 게임이 생성됩니다. 이를 통해 교육용 웹 게임,
                    혹은 개성있는 문제를 가진 게임을 생성할 수 있습니다.
                  </p>
                  <div className="text-[10px] md:text-[11px] space-y-1">
                    <p>
                      <span className="text-muted-foreground font-medium">기간:</span> 2024.09.04~2024.10.13 / 인원: 3명
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">스택:</span> node.js, express.js, mariaDB, AWS EC2,
                      Unity, C#, React
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">링크:</span>{" "}
                      <a
                        href="https://github.com/dgsim126/UniWeb-BE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all"
                      >
                        github.com/dgsim126/UniWeb-BE
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-36 h-36 rounded-lg overflow-hidden border border-border flex-shrink-0 bg-muted">
                  <img
                    src="/images/uniweb_main.png"
                    alt="UniWeb 프로젝트 이미지"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
