'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  Award,
  BatteryCharging,
  Building2,
  CircuitBoard,
  Cpu,
  Gauge,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  SunMedium,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type HomeProps = {
  params?: Promise<Record<string, never>>;
};

type IconType = typeof BatteryCharging;

type SectionId =
  | 'home'
  | 'profile'
  | 'performance'
  | 'research'
  | 'papers'
  | 'members'
  | 'contact';

const navigationItems: Array<{ id: SectionId; label: string }> = [
  { id: 'home', label: 'Lab Intro' },
  { id: 'profile', label: 'Professor' },
  { id: 'performance', label: 'Performance' },
  { id: 'research', label: 'Research' },
  { id: 'papers', label: 'Papers' },
  { id: 'members', label: 'Members' },
  { id: 'contact', label: 'Contact' },
];

const impactMetrics = [
  { value: '1,101', label: 'Total Citations', detail: 'Google Scholar' },
  { value: '18', label: 'h-index', detail: 'i10-index 31' },
  { value: '46', label: 'International Journals', detail: 'SCI / SCIE, IEEE 37 papers' },
  { value: '96', label: 'Total Publications', detail: 'Journal 52 + Conference 44' },
  { value: '67%', label: 'Q1 Journal Ratio', detail: '31 of 46 journals' },
];

const professorCareer = [
  {
    title: 'Assistant Professor',
    period: '2025 - Present',
    organization: 'KENTECH, Grid Modernization',
  },
  {
    title: 'Assistant Professor',
    period: '2022 - 2025',
    organization: 'Kumoh National Institute of Technology, School of Electronics Engineering',
  },
  {
    title: 'Senior Researcher',
    period: '2019 - 2022',
    organization: 'Korea Institute of Energy Research, Energy ICT Convergence Research Department',
  },
  {
    title: 'Ph.D.',
    period: 'Aug. 2019',
    organization: 'UNIST, Division of Electrical Engineering, Power Electronics',
  },
];

const researchPrograms: Array<{
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  icon: IconType;
}> = [
  {
    title: 'LVDC Distribution System Commercialization',
    category: 'LVDC Power System',
    description:
      'LVDC 배전 시스템 상용화를 위한 전력밀도, 전력품질, 전력선 통신 보안 최적화 기술 개발.',
    outcomes: ['Power density optimization', 'Power quality improvement', 'PLC security'],
    icon: Network,
  },
  {
    title: 'AI-based PV Forecasting and ESS Optimization',
    category: 'Microgrid AI Platform',
    description:
      '동수농공산단 MG-EMS 실증 데이터를 기반으로 PV 발전량, 공장 부하, ESS 충방전 스케줄을 예측 및 최적화.',
    outcomes: ['24h day-ahead forecast', 'PV/load ensemble models', 'ESS SOC scheduling'],
    icon: SunMedium,
  },
  {
    title: '1 MVA LiB-based High-power UPS Standard Model',
    category: 'Safety-enhanced UPS',
    description:
      '다지점 전류센서 기반 UPS 상태 진단, 누설전류 분석, 실시간 고장 검출 및 위치 추정 기술 개발.',
    outcomes: ['Leakage current analysis', 'EV/RMS/FFT diagnosis', 'Fault location estimation'],
    icon: BatteryCharging,
  },
  {
    title: 'On-Device AI Power Conversion System',
    category: 'Smart Converter Diagnosis',
    description:
      '능동·수동 소자의 전기적 특성 변화를 이용한 전력변환장치 실시간 상태 진단 및 제어 기술 연구.',
    outcomes: ['FPGA-based On-Device AI', 'Device data acquisition', 'Real-time diagnosis'],
    icon: Cpu,
  },
  {
    title: 'AI-based Arc Fault Detection Algorithm',
    category: 'Fault Detection',
    description:
      '전력변환시스템 내 아크고장 데이터 수집과 AI 기반 실시간 진단 알고리즘 개발.',
    outcomes: ['Arc data processing', 'AI model selection', 'Real-time fault detection'],
    icon: ShieldCheck,
  },
  {
    title: 'Solid State Transformer Model and Hardware Test',
    category: 'SST and LVDC',
    description:
      '22.9 kV 계통 대응 7.65 kV 입력에서 800 V LVDC 변환을 위한 SST 시뮬레이션 모델과 Power-HIL 실증 시험.',
    outcomes: ['500 kVA target model', '20 kHz SiC switching', '1200 V to 800 V DAB'],
    icon: Zap,
  },
  {
    title: '30 kW Water Electrolyzer Converter',
    category: 'Hydrogen Power Conversion',
    description:
      '수전해장치용 VIENNA Rectifier 및 LLC 공진형 컨버터 개발을 통한 고효율 전력변환 플랫폼 연구.',
    outcomes: ['VIENNA rectifier', 'LLC resonant converter', '30 kW class system'],
    icon: Gauge,
  },
  {
    title: 'Switching Device Aging Sensing Circuit',
    category: 'Reliability Sensing',
    description:
      '스위칭 소자 노화 측정을 위한 센싱 회로와 전력반도체 상태 기반 신뢰성 평가 기술 개발.',
    outcomes: ['Aging signal sensing', 'Device condition monitoring', 'Reliability evaluation'],
    icon: CircuitBoard,
  },
];

const selectedPapers = [
  'G.-H. Yoon, H.-P. Park, IEEE Transactions on Power Electronics, IF 6.5',
  'W. Kim, H.-P. Park, IEEE Journal of Emerging and Selected Topics in Power Electronics, IF 4.9',
  'J.-A. Hong, H.-P. Park, IEEE Journal of Emerging and Selected Topics in Power Electronics, IF 4.9',
  'B. Kim, W. Kim, M. Jeon, S.-G. Song and H.-P. Park, IEEE Transactions on Power Electronics, IF 6.5',
  'B. Kim, M. Kim, W. Kim and H.-P. Park, IEEE Transactions on Energy Conversion, IF 5.4',
  'S.-J. Chang, D.-S. Cha, J.-G. Choi, J.-H. Ahn, S.-G. Song, W. Kim, H.-P. Park, IEEE JESTPE, IF 4.9',
];

const members = [
  {
    group: 'M.S. Students',
    description:
      '전력변환 회로, 제어, AI 진단, 실증 데이터 분석을 중심으로 연구를 수행합니다.',
  },
  {
    group: 'Undergraduate Students',
    description:
      'Senior, Junior, Sophomore 학부연구생이 세미나, 실험, 모델링, 측정 업무에 참여합니다.',
  },
];

const sectionDescriptions: Record<SectionId, string> = {
  home: 'Advanced & Intelligent Power Electronics Lab',
  profile: 'Principal investigator and career background',
  performance: 'Citation, journal, and publication metrics',
  research: 'Current AI and power electronics research programs',
  papers: 'Selected journal papers with lab students',
  members: 'Graduate and undergraduate research members',
  contact: 'Contact information and location',
};

function navButtonClass(isActive: boolean) {
  const base =
    'whitespace-nowrap border px-3 py-2 text-sm font-medium transition-colors';
  const active =
    'border-[#d7a650] bg-[#d7a650] text-[#101318]';
  const inactive =
    'border-white/10 bg-white/4 text-[#aeb8c6] hover:border-[#6ee7d2]/40 hover:text-[#9ef2df]';

  return [base, isActive ? active : inactive].join(' ');
}

export default function Home(_props: HomeProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const selectSection = (section: SectionId) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#06080d] text-[#f4f7fb]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06080d]/92 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-16 w-full max-w-7xl flex-col gap-3 px-5 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <button
            type="button"
            onClick={() => selectSection('home')}
            className="flex items-center gap-3 text-left"
            aria-label="AI-PEL home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#6ee7d2]/35 bg-[#0c2423] text-xs font-semibold text-[#9ef2df]">
              AP
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-normal text-white">
                AI-PEL
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-[#8f9aa8] sm:block">
                Advanced & Intelligent Power Electronics Lab
              </span>
            </span>
          </button>

          <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectSection(item.id)}
                className={navButtonClass(activeSection === item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section className="border-b border-white/10 bg-[#0a0f17]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a650]">
            {navigationItems.find((item) => item.id === activeSection)?.label}
          </p>
          <p className="text-sm text-[#aeb8c6]">{sectionDescriptions[activeSection]}</p>
        </div>
      </section>

      {activeSection === 'home' && <IntroSection onSelect={selectSection} />}
      {activeSection === 'profile' && <ProfileSection />}
      {activeSection === 'performance' && <PerformanceSection />}
      {activeSection === 'research' && <ResearchSection />}
      {activeSection === 'papers' && <PapersSection />}
      {activeSection === 'members' && <MembersSection />}
      {activeSection === 'contact' && <ContactSection />}
    </main>
  );
}

function IntroSection({ onSelect }: { onSelect: (section: SectionId) => void }) {
  return (
    <section className="relative min-h-[calc(100vh-8.5rem)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/aipel-power-electronics-hero.png"
          alt="Power electronics converter hardware and measurement equipment"
          width={1800}
          height={1100}
          priority
          className="h-full w-full object-cover opacity-34"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06080d_0%,rgba(6,8,13,0.94)_46%,rgba(6,8,13,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,13,0.05)_0%,#06080d_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.08fr_0.92fr] md:items-end lg:px-8">
        <div className="max-w-4xl pb-4">
          <Badge className="mb-6 rounded-sm border border-[#6ee7d2]/30 bg-[#0c2423]/85 px-3 py-1.5 text-[#9ef2df] hover:bg-[#0c2423]/85">
            KENTECH Grid Modernization
          </Badge>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl">
            Advanced power electronics lab for AI-driven grid and converter systems.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#c7d0dd] sm:text-lg">
            AI-PEL은 LVDC, PV·ESS, UPS, Solid State Transformer, On-Device AI,
            아크고장 검출, 수전해 전력변환을 연구하는 KENTECH 전력전자 연구실입니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              size="lg"
              className="rounded-sm bg-[#d7a650] px-6 text-[#101318] hover:bg-[#efbd68]"
              onClick={() => onSelect('research')}
            >
              Research Programs
              <Zap className="ml-2 h-4 w-4" />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="rounded-sm border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
              onClick={() => onSelect('performance')}
            >
              Research Performance
              <Award className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-3 pb-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
          {impactMetrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="border border-white/12 bg-[#0b111a]/85 p-4 backdrop-blur">
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d7a650]">
                {metric.label}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#aeb8c6]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[0.78fr_1.22fr] lg:px-8">
      <div>
        <div className="mb-6 overflow-hidden border border-white/10 bg-[#0b111a]">
          <Image
            src="/prof-hwa-pyeong-park.jpg"
            alt="Prof. Hwa Pyeong Park"
            width={900}
            height={1200}
            className="aspect-[4/5] w-full object-cover object-top opacity-95"
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7a650]">
          Professor
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
          Prof. Hwa Pyeong Park
        </h2>
        <p className="mt-5 text-sm leading-7 text-[#aeb8c6]">
          전력전자 기반 하드웨어, AI 진단, LVDC 및 그리드 현대화 연구를 수행합니다.
          UNIST 전기전자공학부 전력전자 분야에서 박사학위를 취득했습니다.
        </p>
      </div>

      <div className="grid gap-3">
        {professorCareer.map((item) => (
          <article key={`${item.title}-${item.period}`} className="grid gap-3 border border-white/10 bg-[#0b111a] p-5 sm:grid-cols-[150px_1fr]">
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs font-medium text-[#d7a650]">{item.period}</p>
            </div>
            <p className="text-sm leading-7 text-[#c7d0dd]">{item.organization}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PerformanceSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-6 md:grid-cols-[0.86fr_1.14fr] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7a650]">
            Research Performance
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Citation, publication, and journal impact.
          </h2>
        </div>
        <p className="text-sm leading-7 text-[#aeb8c6]">
          소개자료 기준 Google Scholar 및 SCI/SCIE 중심 연구성과를 전면에 배치해,
          연구실의 정량적 신뢰도를 빠르게 확인할 수 있도록 구성했습니다.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {impactMetrics.map((metric) => (
          <article key={metric.label} className="border border-white/10 bg-[#101722] p-5">
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-3 text-sm font-semibold text-[#d7a650]">{metric.label}</p>
            <p className="mt-3 text-xs leading-5 text-[#aeb8c6]">{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-6 md:grid-cols-[0.86fr_1.14fr] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7a650]">
            Research Programs
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            AI, power conversion, and grid modernization programs.
          </h2>
        </div>
        <p className="text-sm leading-7 text-[#aeb8c6]">
          PDF 소개자료의 연구과제명을 반영해 실증 데이터, 하드웨어 검증,
          AI 기반 상태진단, LVDC 계통 연계 중심으로 구조를 재편했습니다.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {researchPrograms.map((program) => {
          const Icon = program.icon;

          return (
            <article key={program.title} className="border border-white/10 bg-[#0b111a] p-5 transition-colors hover:border-[#6ee7d2]/35">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d7a650]">
                    {program.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-white">{program.title}</h3>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#0c2423] text-[#9ef2df]">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#c7d0dd]">{program.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {program.outcomes.map((outcome) => (
                  <span key={outcome} className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#aeb8c6]">
                    {outcome}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PapersSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-6 md:grid-cols-[0.86fr_1.14fr] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7a650]">
            Papers
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Selected journal papers with lab students.
          </h2>
        </div>
        <p className="text-sm leading-7 text-[#aeb8c6]">
          IEEE Transactions on Power Electronics, IEEE JESTPE, IEEE Transactions on Energy Conversion 등
          전력전자 핵심 저널 중심의 연구성과를 정리했습니다.
        </p>
      </div>

      <div className="grid gap-3">
        {selectedPapers.map((paper, index) => (
          <article key={paper} className="grid gap-4 border border-white/10 bg-[#0b111a] p-5 sm:grid-cols-[52px_1fr]">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0c2423] text-sm font-semibold text-[#9ef2df]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-sm leading-7 text-[#c7d0dd]">{paper}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MembersSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7a650]">
          Members
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
          Graduate and undergraduate researchers.
        </h2>
      </div>

      <div className="grid gap-4">
        {members.map((member) => (
          <article key={member.group} className="border border-white/10 bg-[#0b111a] p-5">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#0c2423] text-[#9ef2df]">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{member.group}</h3>
                <p className="mt-3 text-sm leading-7 text-[#aeb8c6]">{member.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1fr_1fr] md:items-start lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7a650]">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
          Prospective students and collaborators are welcome.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aeb8c6]">
          전력전자, 전력변환시스템, AI 기반 상태진단, LVDC 및 ESS 최적운용에 관심 있는
          학생과 공동연구 파트너의 연락을 환영합니다.
        </p>
      </div>

      <div className="border border-white/10 bg-[#0b111a]">
        <a
          href="mailto:hppark@kentech.ac.kr"
          className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          <span className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-[#9ef2df]" />
            hppark@kentech.ac.kr
          </span>
          <ArrowUpRight className="h-4 w-4 text-[#aeb8c6]" />
        </a>
        <a
          href="mailto:a103203@kentech.ac.kr"
          className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          <span className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-[#9ef2df]" />
            a103203@kentech.ac.kr
          </span>
          <span className="text-xs font-medium text-[#aeb8c6]">Lab Manager</span>
        </a>
        <div className="flex items-start gap-3 border-b border-white/10 px-5 py-4 text-sm leading-7 text-[#aeb8c6]">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#9ef2df]" />
          <span>21 Kentech-gil, Naju-si, Jeollanam-do, 58330, Republic of Korea</span>
        </div>
        <div className="flex items-start gap-3 px-5 py-4 text-sm leading-7 text-[#aeb8c6]">
          <Building2 className="mt-1 h-4 w-4 shrink-0 text-[#9ef2df]" />
          <span>Korea Institute of Energy Technology | Tel. +82-61-320-9267</span>
        </div>
      </div>
    </section>
  );
}
