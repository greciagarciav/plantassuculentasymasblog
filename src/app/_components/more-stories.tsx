"use client"

import { useEffect, useMemo, useState } from "react";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import coverStyles from "./cover-styles.module.css";

type Props = {
  posts: Post[];
};

const PAGE_SIZE = 12;

// Normaliza texto: sin acentos y en minúsculas para búsquedas más amigables
function norm(s: string) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function MoreStories({ posts }: Props) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce para no filtrar en cada tecla
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 250);
    return () => clearTimeout(t);
  }, [query]);

  // Filtrado por título (y excerpt si lo tuvieras)
  const filteredPosts = useMemo(() => {
    const q = norm(debouncedQuery);
    if (!q) return posts;
    return posts.filter((p) => {
      const inTitle = norm(p.title).includes(q);
      // Si tu interfaz tiene excerpt, descomenta:
      // const inExcerpt = p.excerpt ? norm(p.excerpt).includes(q) : false;
      // return inTitle || inExcerpt;
      return inTitle;
    });
  }, [posts, debouncedQuery]);

  // Reset de la paginación al cambiar la búsqueda
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [debouncedQuery]);

  const visiblePosts = useMemo(() => filteredPosts.slice(0, visible), [filteredPosts, visible]);
  const canLoadMore = visible < filteredPosts.length;

  const handleLoadMore = () => {
    // Aumenta de 12 en 12; asegura no pasarse del total filtrado
    setVisible((prev) => Math.min(prev + PAGE_SIZE, filteredPosts.length));
  };

  const handleClear = () => setQuery("");

  if (!posts || posts.length === 0) {
    return (
      <section>
        <h2 className={`${coverStyles.centeredText} mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight`}>
          Consejos para cuidar todo tipo de plantas.
        </h2>
        <p className="text-center text-gray-500">No hay consejos disponibles aún.</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className={`${coverStyles.centeredText} mb-6 text-5xl md:text-7xl font-bold tracking-tighter leading-tight`}>
        Consejos para cuidar todo tipo de plantas.
      </h2>

      {/* Buscador */}
      <div className="mb-6 mx-auto">
        <label htmlFor="post-search" className="sr-only">
          Buscar publicaciones
        </label>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            id="post-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título (ej. riego, suculentas, luz)..."
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            autoComplete="off"
            aria-describedby="search-help"
          />
          {query ? (
            <button
              type="button"
              onClick={handleClear}
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-5 px-12 lg:px-8 duration-200 transition-colors rounded-2xl"
            >
              LIMPIAR
            </button>
          ) : null}
        </div>
        <p id="search-help" className="mt-2 text-sm text-gray-500 text-center">
          {debouncedQuery
            ? `Resultados: ${filteredPosts.length}`
            : `Mostrando las más recientes (${Math.min(PAGE_SIZE, posts.length)} de ${posts.length})`}
        </p>
      </div>

      {/* Región aria-live para anunciar cuántos se muestran */}
      <p className="sr-only" aria-live="polite">
        Mostrando {visiblePosts.length} de {filteredPosts.length} publicaciones
      </p>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500 mb-24">
          No encontramos resultados para “{debouncedQuery}”.
        </p>
      ) : (
        <>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-y-16 md:gap-x-16 lg:gap-x-16 mb-12"
            role="list"
          >
            {visiblePosts.map((post) => (
              <div role="listitem" key={post.slug}>
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  slug={post.slug}
                />
              </div>
            ))}
          </div>

          {/* Botón Cargar más (mismo estilo que usabas) */}
          <div className="flex justify-center mb-32">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={!canLoadMore}
              className={`bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-5 mt-5 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 ${
                canLoadMore ? "hover:-translate-y-0.5" : "opacity-50 cursor-not-allowed"
              }`}
            >
              {canLoadMore ? "MOSTRAR MÁS..." : "NO HAY MÁS PARA MOSTRAR"}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
