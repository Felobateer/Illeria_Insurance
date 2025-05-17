'use client';
import styles from "../styles";
import { useRef, useEffect, useState } from "react";
import { scrollImgAni } from "../animations";
import { LanguageService } from "../admin/translator";

export default function About() {
    const imgRef = useRef(null);
    const picRef = useRef(null);
    const [aboutContent, setAboutContent] = useState(null);
    const [aboutmeContent, setAboutmeContent] = useState(null);
    
    useEffect(() => {
        async function fetchContent() {
            const langService = new LanguageService;
            const sourceText = await langService.getTranslatedContent();
            setAboutContent(sourceText.about);
            setAboutmeContent(sourceText.aboutme);
        }
        fetchContent();
    }, []);
  
    useEffect(() => {
        console.log(imgRef.current)
        if (imgRef.current) scrollImgAni(imgRef.current, "right");
        if (picRef.current) scrollImgAni(picRef.current, "left");
    }, []);

  if (!aboutContent || !aboutmeContent) {
    return <p>Loading...</p>; // or some fallback UI
  }

  return (
    <article id="about">
      <section className={styles.about.container}>
        <h2 className={styles.about.title}>{aboutContent.title}</h2>
        <div className={styles.about.subcontainer}>
          <img ref={imgRef} src='/about.png' alt="About Us Image" className={styles.about.img} />
          <p className={styles.about.description}>
            {aboutContent.description[0]}<br />
            {aboutContent.description[1]}<br />
            {aboutContent.description[2]}
          </p>
        </div>
      </section>

      <section className={styles.aboutme.container}>
        <h2 className={styles.about.title}>{aboutmeContent.title}</h2>
        <div className={styles.aboutme.subcontainer}>
          <p className={styles.about.description}>
            {aboutmeContent.description[0]} <span className={styles.aboutme.highlight}>{aboutmeContent.span}</span> {aboutmeContent.description[1]}
          </p>
          <img ref={picRef} src='/aboutme.png' alt="About Me Image" className={styles.about.img} />
        </div>
      </section>
    </article>
  );
}
