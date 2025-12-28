"use client"

import Link from "next/link"
import { UiPathNavigation } from "@/components/uipath-navigation"
import { useEffect } from "react"

export default function UiPathPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-zoom">
      <UiPathNavigation />


      <main className="min-h-screen bg-background pt-14">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Link href="/#portfolio" className="text-blue-600 hover:text-blue-800 text-sm mb-8 inline-block">
            ← 홈으로 돌아가기
          </Link>

          {/* SECTION 1: HERO / OVERVIEW */}
          <section id="service" className="scroll-mt-20">
          <div className="grid md:grid-cols-3 gap-6 mb-10 bg-white p-6 sm:p-8 rounded-lg">
            <div className="md:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">UiPath</h1>
              <p className="text-base sm:text-lg font-semibold mb-3 leading-relaxed">
                신고 내역 변경 여부를 확인하고, 변경 시에만 메일을 전송하는 토이 RPA
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                자동 모니터링이 아니라, 사용자가 실행 버튼을 눌러 신고 상태를 확인하는 방식입니다. 실행 시점의 상태를
                텍스트로 추출하고 이전 실행 기록(last_seen.txt)과 비교해 변경이 있을 때만 발송하도록 구성했습니다.
              </p>
            </div>

            <div className="border rounded-lg p-5 sm:p-6 bg-card shadow-sm h-fit">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">GitHub</p>
                  <a
                    href="https://github.com/dgsim126/UiPath-report-mail-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    github.com/dgsim126/UiPath-report-mail-automation
                  </a>
                </div>

                <div>
                  <p className="font-semibold mb-1">작업 기간</p>
                  <p className="text-muted-foreground">2025.12</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">작업 인원</p>
                  <p className="text-muted-foreground">1명</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">사용 기술</p>
                  <p className="text-muted-foreground">UiPath Studio, Outlook Mail, File / Text Activity</p>
                </div>
              </div>
            </div>
          </div>
          </section>

          {/* SECTION 2: PROJECT OVERVIEW */}
          <section id="overview" className="mb-10 bg-gray-50 p-6 sm:p-8 rounded-lg scroll-mt-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">프로젝트 개요</h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] mb-6">
              서비스 내 신고 발생 여부를 확인하고, 변경 사항이 있을 경우 담당자에게 이메일을 전송하는{" "}
              <span className="font-semibold text-foreground">RPA 기반 알림 자동화</span>를 구현했습니다.
              <br />
              핵심은 <span className="font-semibold text-foreground">“변경이 있을 때만 발송”</span>이며, 파일(last_seen.txt)
              로 이전 상태를 저장해 중복 알림을 막았습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border rounded-lg p-5 bg-white shadow-sm">
                <h3 className="font-bold mb-2">개발 배경</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 신고 내역을 반복적으로 확인해야 하는 번거로움</li>
                  <li>• 변경이 발생했을 때 담당자에게 전달이 누락/지연될 수 있음</li>
                </ul>
              </div>

              <div className="border rounded-lg p-5 bg-white shadow-sm">
                <h3 className="font-bold mb-2">구현 포인트</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 실행 시점의 상태를 텍스트로 추출</li>
                  <li>• last_seen.txt와 비교해 변경 여부 판별</li>
                  <li>• 변경이 있을 때만 Outlook 메일 발송</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="/images/uipath/report.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-md transition"
                title="클릭하면 크게 보기"
              >
                <div className="h-40 bg-white">
                  <img
                    src="/images/uipath/report.png"
                    alt="싸브리타임 신고 화면"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold">신고 화면</p>
                  <p className="text-[12px] text-muted-foreground mt-1">확인 대상</p>
                </div>
              </a>

              <a
                href="/images/uipath/outlook.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-md transition"
                title="클릭하면 크게 보기"
              >
                <div className="h-40 bg-white">
                  <img
                    src="/images/uipath/outlook.png"
                    alt="Outlook 메일 발송 화면"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold">Outlook 발송</p>
                  <p className="text-[12px] text-muted-foreground mt-1">변경 감지 시 발송</p>
                </div>
              </a>

              <a
                href="/images/uipath/koreamail.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-md transition"
                title="클릭하면 크게 보기"
              >
                <div className="h-40 bg-white">
                  <img
                    src="/images/uipath/koreamail.png"
                    alt="메일 수신 결과 화면"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold">수신 결과</p>
                  <p className="text-[12px] text-muted-foreground mt-1">메일 수신 확인</p>
                </div>
              </a>
            </div>
          </section>

          {/* SECTION 3: FLOW */}
          <section id="flow" className="mb-10 bg-white p-6 sm:p-8 rounded-lg scroll-mt-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">동작 흐름</h2>

            <div className="border rounded-lg p-5 bg-gray-50">
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                <li>서비스(웹/시스템)에서 신고 정보 확인</li>
                <li>현재 신고 상태를 텍스트로 추출</li>
                <li>이전 실행 기록(last_seen.txt) 로드</li>
                <li>
                  두 값 비교
                  <div className="mt-1 ml-2 text-[12px] leading-relaxed">
                    ├─ 같으면 → 종료
                    <br />
                    └─ 다르면 → 메일 발송
                  </div>
                </li>
                <li>최신 상태를 last_seen.txt에 저장</li>
              </ol>
            </div>

            {/* ✅ 전체 자동화 플로우: 항상 표시 + 폭을 현재의 약 2/3로 (max-w-2xl) */}
            <div className="mt-6">
              <h3 className="text-base sm:text-lg font-bold mb-3">전체 자동화 플로우</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                스크롤하여 확인 가능합니다.
              </p>

              {/* ✅ max-w-2xl로 줄여서(대략 max-w-3xl 대비 2/3 느낌) 중앙 정렬 */}
              <div className="mx-auto max-w-xl rounded-lg overflow-hidden border border-border bg-white shadow-sm">
                <div className="max-h-[70vh] overflow-auto">
                  <div className="flex flex-col">
                    <img src="/images/uipath/1.png" alt="UiPath Flow 1" className="w-full h-auto block" />
                    <img src="/images/uipath/2.png" alt="UiPath Flow 2" className="w-full h-auto block" />
                    <img src="/images/uipath/3.png" alt="UiPath Flow 3" className="w-full h-auto block" />
                    <img src="/images/uipath/4.png" alt="UiPath Flow 4" className="w-full h-auto block" />
                    <img src="/images/uipath/5.png" alt="UiPath Flow 5" className="w-full h-auto block" />
                    <img src="/images/uipath/6.png" alt="UiPath Flow 6" className="w-full h-auto block" />
                    <img src="/images/uipath/7.png" alt="UiPath Flow 7" className="w-full h-auto block" />
                    <img src="/images/uipath/8.png" alt="UiPath Flow 8" className="w-full h-auto block" />
                  </div>
                </div>
              </div>

              <p className="text-[12px] text-muted-foreground mt-2 text-center">
                스크롤로 전체 플로우를 확인할 수 있습니다.
              </p>
            </div>
          </section>

          {/* SECTION 4: TECH */}
          <section id="tech" className="mb-12 bg-gray-50 p-6 sm:p-8 rounded-lg scroll-mt-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">사용 기술</h2>

            <div className="border rounded-lg p-5 bg-white shadow-sm">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted rounded-full text-sm">UiPath Studio</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Outlook Mail</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Text / File Activity</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">If (조건 분기)</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">For Each</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">TXT 상태 저장</span>
              </div>

              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                메일 자동화/파일 기반 상태 관리/조건 분기 등을 묶어서 “작지만 끝까지 동작하는 RPA”를 목표로 구성했습니다.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
