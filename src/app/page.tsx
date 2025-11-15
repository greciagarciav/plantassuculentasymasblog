import Container from "@/app/_components/container";
import CookieConsentBanner from "@/app/_components/cookie-consent-banner";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Ebook } from "./_components/ebook";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  const ebookTitle = "Nunca coloques tu planta lengua de suegra en este lugar"
  const ebookImage = "/assets/blog/coverebook.png"
  const ebookExcerpt = `
  En este ebook descubrirás: los errores más comunes al ubicar tu sansevieria y cómo corregirlos,
  las zonas prohibidas según el feng shui y cómo afectan tu energía,  
  lugares estratégicos donde la sansevieria puede atraer abundancia y armonía.
  No dejes que una mala ubicación arruine los beneficios de esta increíble planta.`
  const ebookLink = "https://pay.hotmart.com/K98311745J"

  return (
    <main>
      <Container>
        <Intro />
        <Ebook title={ebookTitle} coverImage={ebookImage} excerpt={ebookExcerpt} link={ebookLink} />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}        
      </Container>
      <CookieConsentBanner />
    </main>
  );
}
