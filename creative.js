// A rotating project gallery that preserves filters, dialogs and keyboard access.
const gallery=document.querySelector('.projects');
const stage=make('div',{className:'carousel-stage'});gallery.before(stage);stage.append(gallery);
gallery.classList.add('rotating-gallery');stage.setAttribute('role','region');stage.setAttribute('aria-roledescription','معرض دوّار');stage.setAttribute('aria-label','المشاريع');
const galleryControls=make('div',{className:'gallery-controls'});
const galleryPrev=make('button',{type:'button',textContent:'→',className:'gallery-arrow'});galleryPrev.setAttribute('aria-label','المشروع السابق');
const galleryNext=make('button',{type:'button',textContent:'←',className:'gallery-arrow'});galleryNext.setAttribute('aria-label','المشروع التالي');
const galleryStatus=make('span',{className:'gallery-status'});galleryStatus.setAttribute('aria-live','polite');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let galleryIndex=0,autoRotate=!reducedMotion.matches,hovering=false,focused=false;
const galleryToggle=make('button',{type:'button',className:'gallery-toggle'});
galleryControls.append(galleryPrev,galleryStatus,galleryNext,galleryToggle);stage.after(galleryControls);
function visibleProjects(){return projectCards.filter(card=>!card.hidden)}
function renderGallery(announce=true){const cards=visibleProjects();galleryIndex=(galleryIndex+cards.length)%cards.length;gallery.classList.toggle('single-project',cards.length===1);cards.forEach((card,i)=>{let offset=(i-galleryIndex+cards.length)%cards.length;if(offset>cards.length/2)offset-=cards.length;card.dataset.position=offset===0?'active':offset===1?'next':offset===-1?'previous':'back';card.style.setProperty('--slot',offset);card.inert=offset!==0;card.setAttribute('aria-hidden',String(offset!==0));card.classList.toggle('gallery-current',offset===0)});galleryStatus.setAttribute('aria-live',announce?'polite':'off');galleryStatus.textContent=`${galleryIndex+1} / ${cards.length}`;galleryPrev.disabled=galleryNext.disabled=cards.length<2;galleryToggle.disabled=cards.length<2;galleryToggle.textContent=autoRotate?'إيقاف الدوران Ⅱ':'تشغيل الدوران ↻';galleryToggle.setAttribute('aria-pressed',String(autoRotate));}
function moveGallery(direction,manual=false){galleryIndex+=direction;if(manual)autoRotate=false;renderGallery(manual)}
galleryPrev.addEventListener('click',()=>moveGallery(-1,true));galleryNext.addEventListener('click',()=>moveGallery(1,true));
galleryToggle.addEventListener('click',()=>{autoRotate=!autoRotate;renderGallery()});
filterBar.addEventListener('click',()=>{galleryIndex=0;renderGallery()});
stage.addEventListener('pointerenter',()=>hovering=true);stage.addEventListener('pointerleave',()=>hovering=false);
stage.addEventListener('focusin',()=>focused=true);stage.addEventListener('focusout',()=>{focused=stage.contains(document.activeElement)});
stage.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();autoRotate=false;moveGallery(event.key==='ArrowLeft'?1:-1,true);(event.key==='ArrowLeft'?galleryNext:galleryPrev).focus()}});
let touchStart=null;stage.addEventListener('touchstart',event=>{touchStart=event.touches[0].clientX},{passive:true});stage.addEventListener('touchend',event=>{if(touchStart!==null){const distance=event.changedTouches[0].clientX-touchStart;if(Math.abs(distance)>55)moveGallery(distance<0?1:-1,true);touchStart=null}},{passive:true});
setInterval(()=>{if(autoRotate&&!hovering&&!focused&&!dialog.open&&!document.hidden&&visibleProjects().length>1)moveGallery(1)},4500);
reducedMotion.addEventListener('change',event=>{if(event.matches){autoRotate=false;renderGallery()}});
renderGallery();
// Split headings into words so only the hovered word rises; keep their accessible name intact.
document.querySelectorAll('h1,h2,h3').forEach(heading=>{if(heading.closest('dialog'))return;const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{if(!node.textContent.trim())return;const fragment=document.createDocumentFragment();node.textContent.split(/(\s+)/).forEach(word=>{if(!word.trim()){fragment.append(document.createTextNode(word));return}fragment.append(make('span',{className:'hover-word',textContent:word}))});node.replaceWith(fragment)})});
