const certSection=document.getElementById('certifications');
certSection.classList.add('marquee-certificates');
const certHeading=certSection.querySelector('.section-head');
certHeading.querySelector('h2').replaceChildren(make('span',{textContent:'الشهادات'}),make('br'),document.createTextNode('والدورات'));
certHeading.querySelector('.eyebrow').hidden=true;
certHeading.querySelector('p').textContent='11 شهادة ودورة مكتملة خلال 2025 و2026. مرّر المؤشر فوق الشريط لإيقافه.';
list.classList.add('cert-data-source');list.setAttribute('aria-hidden','true');
const marquee=make('div',{className:'certificate-marquee'});marquee.setAttribute('aria-label','الشهادات والدورات المكتملة');list.before(marquee);
const marqueeButton=make('button',{type:'button',className:'marquee-toggle'});let certPaused=reducedMotion.matches;
function updateMarqueePause(){marquee.classList.toggle('paused',certPaused);marqueeButton.textContent=certPaused?'تشغيل حركة البطاقات ↻':'إيقاف حركة البطاقات Ⅱ';marqueeButton.setAttribute('aria-pressed',String(certPaused))}
marqueeButton.addEventListener('click',()=>{certPaused=!certPaused;updateMarqueePause()});marquee.after(marqueeButton);
function createCertCard(source){const card=make('article',{className:'certificate-card'});const yearText=source.querySelector('time').textContent;const title=source.querySelector('h3').textContent;const issuer=source.querySelector('p').textContent;const top=make('div',{className:'certificate-card-top'});top.append(make('time',{textContent:yearText,dateTime:yearText}));const result=issuer.match(/النتيجة:\s*([\d.]+%)/);if(result)top.append(make('span',{className:'certificate-score',textContent:'النتيجة '+result[1]}));card.append(top,make('h3',{textContent:title}),make('p',{textContent:issuer.replace(/\s*·\s*النتيجة:.*$/,'')}));return card}
function renderCertMarquee(){marquee.replaceChildren();const visible=[...list.children].filter(row=>!row.hidden);if(!visible.length)return;const mid=Math.ceil(visible.length/2);[visible.slice(0,mid),visible.slice(mid)].filter(group=>group.length).forEach((items,index)=>{const lane=make('div',{className:'certificate-lane'});lane.tabIndex=0;lane.setAttribute('aria-label',`صف الشهادات ${index+1} — يتوقف عند التركيز`);const track=make('div',{className:'certificate-track'});const group=make('div',{className:'certificate-group'});items.forEach(source=>group.append(createCertCard(source)));track.append(group);if(items.length>2){const copy=group.cloneNode(true);copy.setAttribute('aria-hidden','true');copy.inert=true;track.append(copy);lane.classList.add('is-moving')}else{lane.classList.add('is-static')}lane.append(track);marquee.append(lane)});updateMarqueePause()}
search.addEventListener('input',renderCertMarquee);year.addEventListener('change',renderCertMarquee);reset.addEventListener('click',renderCertMarquee);
reducedMotion.addEventListener('change',event=>{if(event.matches){certPaused=true;updateMarqueePause()}});
// Keep the existing search available below the visual gallery.
searchTools.remove();certStatus.remove();renderCertMarquee();
