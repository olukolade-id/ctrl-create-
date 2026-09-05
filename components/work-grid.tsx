"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  getAllDisciplines,
  projects,
  type ProjectDiscipline,
} from "@/lib/projects";

const filters: Array<"All" | ProjectDiscipline> = [
  "All",
  ...getAllDisciplines(),
];

export function WorkGrid() {
  const [mediaBySlug, setMediaBySlug] = useState<Record<string, string>>({});
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectDiscipline>(
    "All",
  );

  useEffect(() => {
    fetch("/api/archive", { cache: "no-store" })
      .then((response) => response.json())
      .then((items: Array<{ image: string; slug: string }>) => {
        const thumbnails = items.reduce<Record<string, string>>((media, item) => {
          if (item.image.toLowerCase().includes("/thumbnail.")) media[item.slug] = item.image;
          return media;
        }, {});
        setMediaBySlug(thumbnails);
      })
      .catch(() => setMediaBySlug({}));
  }, []);
  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) =>
            project.disciplines.includes(activeFilter),
          ),
    [activeFilter],
  );

  return (
    <>
      <div
        className="work-filters"
        role="tablist"
        aria-label="Filter work by discipline"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "is-active" : ""}
            onClick={() => setActiveFilter(filter)}
            role="tab"
            aria-selected={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <a
            className={`project-card ${project.className}`}
            href={`/work/${project.slug}`}
            data-cursor="hover"
            key={project.id}
          >
            <div className="project-art">
              {mediaBySlug[project.slug] || project.media?.thumbnail ? (
                <Image
                  src={mediaBySlug[project.slug] || project.media?.thumbnail || ""}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 700px) 90vw, 45vw"
                />
              ) : (
                <div className={`visual-art ${project.className}`} role="img" aria-label={`${project.title} visual study`}>
                  <div className="art-object" />
                </div>
              )}
              <span className="art-label">0{index + 1}</span>
              <span className="art-arrow">↗</span>
            </div>
            <div className="project-meta">
              <strong>{project.title}</strong>
              <span>{project.disciplines.join(" + ")}</span>
              <span>{project.year}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  function enterFullscreen() {
    const video = videoRef.current;
    if (!video) return;
    void video.requestFullscreen?.();
  }

  return (
    <div className="showreel" data-cursor="hover">
      <video
        ref={videoRef}
        className="showreel-video"
        poster="/showreel-poster.jpg"
        playsInline
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlayback}
        aria-label="CTRL + CREATE showreel"
      >
        <source src="/showreel.mp4" type="video/mp4" />
      </video>
      <span className="showreel__title">CTRL / SHOWREEL</span>
      <button className="play-mark" type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause showreel" : "Play showreel"}>
        {isPlaying ? "Ⅱ" : "▶"}
      </button>
      <span className="showreel__note">Best viewed with sound</span>
      <div className="showreel__controls" aria-label="Showreel controls">
        <button type="button" onClick={toggleMute}>{isMuted ? "Sound off" : "Sound on"}</button>
        <button type="button" onClick={enterFullscreen}>Fullscreen ↗</button>
      </div>
      <span className="scanline" aria-hidden="true" />
    </div>
  );
}
