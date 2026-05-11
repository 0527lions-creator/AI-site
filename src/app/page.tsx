'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Activity,
  ArrowUpRight,
  BatteryCharging,
  BookOpenText,
  Building2,
  Car,
  Gauge,
  GraduationCap,
  HomeIcon,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Presentation,
  Sparkles,
  Sun,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

type HomeProps = {
  params?: Promise<Record<string, never>>;
};

type IconType = typeof BatteryCharging;

const navigationItems = [
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#people', label: 'People' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
];

const researchAreas: Array<{
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    title: 'Power Electronics for Vehicle',
    description:
      'High-efficiency power conversion technology for electric vehicles and mobility platforms.',
    icon: Car,
  },
  {
    title: 'Power Electronics for Home Appliances',
    description:
      'Compact converter systems for reliable, quiet, and efficient consumer electronics.',
    icon: HomeIcon,
  },
  {
    title: 'Power Electronics for Renewable Energy',
    description:
      'Conversion and control systems for renewable generation, storage, and grid integration.',
    icon: Sun,
  },
  {
    title: 'Fault Diagnosis and Detection',
    description:
      'Intelligent monitoring methods that identify abnormal behavior in power conversion systems.',
    icon: Activity,
  },
  {
    title: 'High Power Density',
    description:
      'Thermal, magnetic, and circuit design strategies for smaller and higher-performance converters.',
    icon: Gauge,
  },
];

const projects = [
  {
    title: 'Vehicle Power Conversion',
    description:
      'Power converter research for automotive systems where efficiency, safety, and robustness are central.',
    imageUrl: 'https://picsum.photos/seed/aipel-vehicle-power/920/680',
    tags: ['Vehicle', 'Converter', 'Reliability'],
  },
  {
    title: 'Appliance Power Systems',
    description:
      'Compact and intelligent power electronics for home appliances and everyday energy use.',
    imageUrl: 'https://picsum.photos/seed/aipel-home-appliance/920/680',
    tags: ['Appliance', 'Control', 'Efficiency'],
  },
  {
    title: 'Renewable Energy Interface',
    description:
      'Power conversion systems that connect renewable sources with storage, loads, and the grid.',
    imageUrl: 'https://picsum.photos/seed/aipel-renewable-energy/920/680',
    tags: ['Renewable', 'Grid', 'Storage'],
  },
];

const people = [
  {
    name: 'Prof. H. P. Park',
    role: 'Principal Investigator',
    detail: 'Power electronics, intelligent power conversion, and high-density converter systems.',
  },
  {
    name: 'Graduate Researchers',
    role: 'M.S. / Ph.D. Students',
    detail: 'Researching power converters, control, fault diagnosis, renewable energy, and mobility systems.',
  },
  {
    name: 'Undergraduate Interns',
    role: 'Research Interns',
    detail: 'Participating in circuit experiments, simulation, hardware testing, and technical seminars.',
  },
];

const publications = [
  'Research output in automotive power converters, home appliance power electronics, and renewable energy conversion.',
  'Technical contributions in fault diagnosis, detection, control, and intelligent monitoring for converter systems.',
  'Hardware-oriented work targeting high power density, practical implementation, and measurable efficiency.',
];

const labStats = [
  { value: 'EV', label: 'Vehicle converters' },
  { value: 'HEA', label: 'Home appliances' },
  { value: 'RE', label: 'Renewable energy' },
  { value: 'HPD', label: 'High power density' },
];

export default function Home(_props: HomeProps) {
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f7f8f6]/92 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-700 text-sm font-bold text-white">
              AI
            </span>
            <span className="text-sm font-semibold tracking-normal text-slate-950">
              AI-PEL
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-teal-800"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden h-9 rounded-md bg-teal-700 px-4 hover:bg-teal-800 sm:inline-flex">
              <a href="#contact">
                Join Us
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 border-slate-300 bg-transparent lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 rounded-md bg-teal-50 px-3 py-1.5 text-teal-800 hover:bg-teal-50">
              Advanced & Intelligent Power Electronics Lab
            </Badge>
            <h1 className="text-4xl font-semibold leading-[1.04] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              Advancing intelligent power conversion for practical energy systems.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              AI-PEL is the power electronics laboratory at Korea Institute of
              Energy Technology. The lab researches power conversion for
              vehicles, home appliances, renewable energy, fault diagnosis, and
              high power density converter systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-teal-700 px-6 hover:bg-teal-800">
                <a href="#research">
                  Explore Research
                  <Microscope className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md border-slate-300 bg-white px-6"
              >
                <a href="#publications">View Publications</a>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
            <Image
              src="https://picsum.photos/seed/aipel-power-electronics/1000/1150"
              alt="Power electronics research workspace"
              width={1000}
              height={1150}
              priority
              className="aspect-[5/6] h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-20">
              <p className="text-sm font-medium text-teal-200">
                Intelligent power electronics for efficient energy conversion
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {labStats.map((item) => (
                  <div key={item.label} className="rounded-md border border-white/12 bg-white/8 p-3 backdrop-blur">
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            Research
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
            Power electronics research from converter design to system diagnosis
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {researchAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article key={area.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-amber-100 text-amber-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                Converter systems for mobility, appliances, and renewable energy
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              The lab covers a variety of power conversion applications, from
              automotive power converters and home appliances to renewable
              energy systems.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-lg border border-white/10 bg-white/6">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} research image`}
                  width={920}
                  height={680}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-teal-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="people" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            People
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
            Researchers building next-generation power electronics
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            AI-PEL welcomes students interested in power conversion, converter
            control, hardware experiments, renewable energy, and intelligent
            diagnosis.
          </p>
        </div>

        <div className="grid gap-4">
          {people.map((person) => (
            <article key={person.name} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-800">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal-700">{person.role}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{person.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Publications
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
              Publications and technical output in power electronics
            </h2>
          </div>

          <div className="space-y-3">
            {publications.map((publication, index) => (
              <div key={publication} className="flex gap-4 rounded-lg border border-slate-200 bg-[#f7f8f6] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-100 text-sm font-semibold text-amber-800">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-700">{publication}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eef4f2]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: GraduationCap, label: 'Graduate admission' },
            { icon: Presentation, label: 'Paper study and seminar' },
            { icon: BookOpenText, label: 'Converter design research' },
            { icon: Sparkles, label: 'Hardware prototype testing' },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-teal-800 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-slate-800">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Join AI-PEL and work on intelligent power conversion.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Enthusiastic students are always welcome. If you are interested in
              power conversion, contact the lab with research interests, CV,
              transcript, and a short introduction.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:hppark@kentech.ac.kr"
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/6 px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal-300" />
                hppark@kentech.ac.kr
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/6 px-5 py-4 text-sm leading-7 text-slate-300">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-teal-300" />
              <span>21 Kentech-gil, Naju-si, Jeollanam-do, 58330, Republic of Korea</span>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/6 px-5 py-4 text-sm leading-7 text-slate-300">
              <Building2 className="mt-1 h-4 w-4 shrink-0 text-teal-300" />
              <span>Korea Institute of Energy Technology | Tel. +82-61-320-9267</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
