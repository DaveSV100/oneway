// Prompt packs from the Infini Start AI YouTube videos, one JSON file per video in ./prompts/.
// The video pipeline (infinistart-video-kit) writes these files; each one gets a page at /prompts/:slug.
// Fields: slug, date (YYYY-MM-DD), title, summary, youtubeId (null until uploaded), prompts: [{ title, text, note? }].
const files = import.meta.glob('./prompts/*.json', { eager: true, import: 'default' });

const packs = Object.values(files).sort((a, b) => b.date.localeCompare(a.date));

export const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UCaDzTaaNHr18D7tbc38zZTA';

export const getPack = (slug) => packs.find((pack) => pack.slug === slug);

export default packs;
