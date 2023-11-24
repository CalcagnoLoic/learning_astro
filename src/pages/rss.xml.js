import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'Mon voyage d\'apprentissage d\'Astro',
        site: 'https://CalcagnoLoic.github.io/learning_astro',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-en</language>`,
    });
}