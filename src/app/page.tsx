'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
} from 'lucide-react';
import Image from 'next/image';

type HomeProps = {
  params?: Promise<Record<string, never>>;
};

const navigationItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const skills = [
  'Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Design Systems',
  'Product Strategy',
];

const projects = [
  {
    title: 'Studio Analytics',
    description:
      'A clean dashboard for creative teams to track campaigns, conversion, and project health in one focused workspace.',
    imageUrl: 'https://picsum.photos/seed/portfolio-analytics/900/620',
    tags: ['Dashboard', 'React', 'Charts'],
  },
  {
    title: 'Commerce Flow',
    description:
      'A responsive storefront concept with fast browsing, polished product cards, and a frictionless checkout path.',
    imageUrl: 'https://picsum.photos/seed/portfolio-commerce/900/620',
    tags: ['E-commerce', 'Next.js', 'UX'],
  },
  {
    title: 'Launch Desk',
    description:
      'A project launch hub that helps founders organize milestones, content, and product experiments before release.',
    imageUrl: 'https://picsum.photos/seed/portfolio-launch/900/620',
    tags: ['SaaS', 'Planning', 'UI'],
  },
];

const contactLinks = [
  {
    href: 'mailto:hello@example.com',
    label: 'hello@example.com',
    icon: Mail,
  },
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: Linkedin,
  },
];

export default function Home(_props: HomeProps) {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-stone-50/90 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#hero" className="text-sm font-semibold tracking-wide">
            Min Portfolio
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-zinc-600 sm:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button asChild className="h-9 rounded-full px-4">
            <a href="#contact">
              Hire Me
              <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </nav>
      </header>

      <section
        id="hero"
        className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24 lg:px-8"
      >
        <div className="max-w-2xl">
          <Badge className="mb-6 rounded-full bg-emerald-100 px-4 py-1.5 text-emerald-800 hover:bg-emerald-100">
            Available for selected projects
          </Badge>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
            Building sharp digital products with calm execution.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
            I design and develop responsive web experiences for founders,
            product teams, and studios who care about detail, speed, and
            maintainable code.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#projects">
                View Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-zinc-300 bg-transparent px-6"
            >
              <a href="#contact">Start a Conversation</a>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
          <Image
            src="https://picsum.photos/seed/portfolio-hero/900/1100"
            alt="Minimal workspace with laptop and design materials"
            width={900}
            height={1100}
            priority
            className="aspect-[4/5] h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-md bg-white/88 p-4 shadow-sm backdrop-blur">
            <p className="text-sm font-medium text-zinc-950">
              Seoul based full-stack developer
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-zinc-600">
              <MapPin className="h-4 w-4 text-emerald-700" />
              Available for remote collaboration
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl">
              Practical design sense, production-ready engineering.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-8 text-zinc-600">
              I turn rough ideas into clean interfaces, reliable frontends, and
              scalable foundations. My work balances product clarity with
              thoughtful implementation so teams can ship quickly without
              accumulating avoidable complexity.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-stone-50 px-4 py-2 text-sm font-medium text-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl">
              Selected Work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-600">
            A few polished concepts showing the type of product thinking,
            interface design, and frontend execution I bring to teams.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-transform hover:-translate-y-1"
            >
              <Image
                src={project.imageUrl}
                alt={`${project.title} project preview`}
                width={900}
                height={620}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1fr_0.85fr] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Have a product idea or portfolio project in mind?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
              Send a short brief and I will reply with a practical path for
              design, development, scope, and next steps.
            </p>
          </div>

          <div className="space-y-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-emerald-300" />
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
