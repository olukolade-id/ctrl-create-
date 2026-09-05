"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ArchiveItem = {
  image: string;
  title: string;
  type: string;
  slug: string;
};

export function ArchiveGallery() {
  const [items, setItems] = useState<ArchiveItem[]>([]);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<ArchiveItem | null>(null);
  const [heart, setHeart] = useState<string | null>(null);
  const interactionTimer = useRef<number | null>(null);

  function toggleLike(image: string) {
    const nextLikes = { ...liked, [image]: !liked[image] };
    setLiked(nextLikes);
    window.localStorage.setItem("ctrl-create-likes", JSON.stringify(nextLikes));
  }

  function handleImageInteraction(item: ArchiveItem) {
    if (interactionTimer.current) {
      window.clearTimeout(interactionTimer.current);
      interactionTimer.current = null;
      toggleLike(item.image);
      setHeart(item.image);
      window.setTimeout(() => setHeart(null), 700);
      return;
    }

    interactionTimer.current = window.setTimeout(() => {
      setSelected(item);
      interactionTimer.current = null;
    }, 450);
  }

  useEffect(() => {
    const savedLikes = window.localStorage.getItem("ctrl-create-likes");
    if (savedLikes) setLiked(JSON.parse(savedLikes));
  }, []);

  useEffect(() => {
    fetch("/api/archive", { cache: "no-store" })
      .then((response) => response.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <div className="archive-gallery-scroll">
      <div className="archive-gallery">
      {items.length > 0 ? (
        items.map((item) => (
          <article className="archive-item" key={item.image}>
            <button
              className="archive-item__image"
              type="button"
              aria-label={`View ${item.title} image larger`}
              onPointerUp={() => handleImageInteraction(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setSelected(item);
              }}
            >
              <Image src={item.image} alt={`${item.title} work`} width={900} height={1100} />
              {heart === item.image && <span className="archive-heart" aria-hidden="true">♥</span>}
            </button>
            <span>{item.title} / {item.type}</span>
            <div className="archive-item__actions">
              <a href={`/work/${item.slug}`}>View project ↗</a>
              <button
                type="button"
                aria-pressed={Boolean(liked[item.image])}
                onClick={() => toggleLike(item.image)}
              >
                {liked[item.image] ? "Liked" : "Like"}
              </button>
              <a href={item.image} download>Download</a>
            </div>
          </article>
        ))
      ) : (
        <div className="archive-empty">
          <span>YOUR VISUAL ARCHIVE</span>
          <p>Add JPG, PNG or WebP files to any folder in public/work. Refresh this page and they will appear here automatically.</p>
        </div>
        )}
      </div>
      {selected && (
        <div className="archive-lightbox" role="dialog" aria-modal="true" aria-label={`${selected.title} image viewer`} onClick={() => setSelected(null)}>
          <button className="archive-lightbox__close" type="button" onClick={() => setSelected(null)} aria-label="Close image viewer">Close ×</button>
          <Image src={selected.image} alt={`${selected.title} work enlarged`} width={1600} height={1800} onClick={(event) => event.stopPropagation()} />
          <span>{selected.title} / {selected.type}</span>
        </div>
      )}
    </div>
  );
}