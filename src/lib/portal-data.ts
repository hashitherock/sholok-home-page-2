import { Coffee, PenLine, ShoppingBag, Newspaper, Store, MapPin, CircleHelp, BookOpen, Library, Play, Music2, Languages, BookA, ChartNoAxesCombined, Trophy, CloudSun, House } from 'lucide-react';
import tea from '@/assets/sylhet-tea.jpg';
import headphones from '@/assets/headphones.jpg';
import cafe from '@/assets/cafe.jpg';
export const services = [
  {slug:'cafe',name:'Cafe',icon:Coffee,description:'Find your people. Share your passions.',domain:'cafe.sholok.com'},
  {slug:'blog',name:'Blog',icon:PenLine,description:'Stories, ideas, and a little inspiration.',domain:'blog.sholok.com'},
  {slug:'shopping',name:'Shopping',icon:ShoppingBag,description:'Discover something you’ll love.',domain:'shopping.sholok.com'},
  {slug:'news',name:'News',icon:Newspaper,description:'A fresh perspective on your world.',domain:'news.sholok.com'},
  {slug:'smartstore',name:'Smart Store',icon:Store,description:'Independent stores. Extraordinary finds.',domain:'smartstore.sholok.com'},
  {slug:'map',name:'Map',icon:MapPin,description:'Your next favorite place is closer than you think.',domain:'map.sholok.com'},
  {slug:'knowledge',name:'Knowledge',icon:CircleHelp,description:'Good questions deserve great answers.',domain:'knowledge.sholok.com'},
  {slug:'webtoon',name:'Webtoon',icon:BookOpen,description:'A whole new world in every panel.',domain:'webtoon.sholok.com'},
  {slug:'series',name:'Series',icon:Library,description:'Find your next page-turner.',domain:'series.sholok.com'},
  {slug:'tv',name:'TV & Videos',icon:Play,description:'A little discovery. A lot to watch.',domain:'tv.sholok.com'},
  {slug:'music',name:'Music',icon:Music2,description:'Find the soundtrack to your day.',domain:'music.sholok.com'},
  {slug:'translate',name:'Translator',icon:Languages,description:'A world without language barriers.',domain:'translate.sholok.com'},
  {slug:'dictionary',name:'Dictionary',icon:BookA,description:'Every word opens a new door.',domain:'dictionary.sholok.com'},
  {slug:'finance',name:'Finance',icon:ChartNoAxesCombined,description:'A clearer view of your finances.',domain:'finance.sholok.com'},
  {slug:'sports',name:'Sports',icon:Trophy,description:'Every match. Every moment.',domain:'sports.sholok.com'},
  {slug:'weather',name:'Weather',icon:CloudSun,description:'Make the most of your day.',domain:'weather.sholok.com'},
  {slug:'realestate',name:'Real Estate',icon:House,description:'Find a place to call your own.',domain:'realestate.sholok.com'},
];
export const stories = [
 {title:'A little escape to the green heart of Bangladesh',category:'Travel',image:tea,source:'SHOLOK Travel',text:'From the winding paths of Sylhet’s tea gardens to the quiet hills of Srimangal, there is a slower side of Bangladesh waiting to be discovered. Take a morning walk, enjoy a freshly brewed cup of tea, and leave room for the unexpected.'},
 {title:'Small rituals, better mornings: the café edit',category:'Lifestyle',image:cafe,source:'The Daily Edit',text:'A quiet corner, a favorite drink, and a moment to yourself. Our café edit celebrates the small everyday rituals that bring people together. Explore new flavors and share your own favorite neighborhood spot.'},
 {title:'Meet your new everyday listening companion',category:'Technology',image:headphones,source:'SHOLOK Tech',text:'Comfort, thoughtful design, and a little peace and quiet. Discover how a good pair of headphones can transform your daily listening routine. This editorial is sample content, not a product endorsement.'},
];
export const headlines = ['The next chapter of Bangladesh’s creative economy','Young innovators are shaping a more sustainable future','City spaces are finding a new life through art','Weekend reads: five stories worth your time'];
export function searchPortal(query:string) { const q=query.trim().toLowerCase(); return {services:services.filter(s=>`${s.name} ${s.description}`.toLowerCase().includes(q)),stories:stories.filter(s=>`${s.title} ${s.category} ${s.text}`.toLowerCase().includes(q))}; }
export const dictionary:Record<string,{meaning:string,bangla:string}> = {hello:{meaning:'Used as a greeting or to begin a conversation.',bangla:'হ্যালো / নমস্কার'},world:{meaning:'The earth and all its people and places.',bangla:'পৃথিবী'},love:{meaning:'A deep feeling of affection and care.',bangla:'ভালোবাসা'},beautiful:{meaning:'Pleasing to the senses or mind.',bangla:'সুন্দর'},thank:{meaning:'To express gratitude to someone.',bangla:'ধন্যবাদ'},water:{meaning:'The clear liquid essential for life.',bangla:'পানি'}};
