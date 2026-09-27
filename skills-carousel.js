const skillsGrid=document.querySelector('.skill-grid');
const skillCards=[...skillsGrid.children];
const skillsStage=make('div',{className:'skills-carousel-stage'});
skillsStage.setAttribute('role','region');skillsStage.setAttribute('aria-label','أدواتي في العمل');skillsStage.setAttribute('aria-roledescription','معرض دوّار');
skillsGrid.before(skillsStage);skillsStage.append(skillsGrid);skillsGrid.classList.add('skills-carousel');
const skillsControls=make('div',{className:'gallery-controls skills-controls'});
const skillsPrev=make('button',{type:'button',className:'gallery-arrow',textContent:'→'});skillsPrev.setAttribute('aria-label','مجموعة الأدوات السابقة');
const skillsNext=make('button',{type:'button',className:'gallery-arrow',textContent:'←'});skillsNext.setAttribute('aria-label','مجموعة الأدوات التالية');
const skillsCounter=make('span',{className:'gallery-status'});
const skillsToggle=make('button',{type:'button',className:'gallery-toggle'});
skillsControls.append(skillsPrev,skillsCounter,skillsNext,skillsToggle);skillsStage.after(skillsControls);
let skillIndex=0,skillsAuto=!reducedMotion.matches,skillsHover=false,skillsFocus=false,skillsInView=false;
function renderSkills(manual=false){skillIndex=(skillIndex+skillCards.length)%skillCards.length;skillCards.forEach((card,index)=>{const offset=(index-skillIndex+skillCards.length)%skillCards.length;card.dataset.skillPosition=offset===0?'active':offset===1?'next':'previous';card.inert=offset!==0;card.setAttribute('aria-hidden',String(offset!==0))});skillsCounter.setAttribute('aria-live',manual?'polite':'off');skillsCounter.textContent=`${skillIndex+1} / ${skillCards.length}`;skillsToggle.textContent=skillsAuto?'إيقاف الدوران Ⅱ':'تشغيل الدوران ↻';skillsToggle.setAttribute('aria-pressed',String(skillsAuto))}
function moveSkills(direction,manual=false){if(manual)skillsAuto=false;skillIndex+=direction;renderSkills(manual)}
skillsPrev.addEventListener('click',()=>moveSkills(-1,true));skillsNext.addEventListener('click',()=>moveSkills(1,true));skillsToggle.addEventListener('click',()=>{skillsAuto=!skillsAuto;renderSkills(true)});
const skillCarouselRegion=skillsStage.parentElement;
skillCarouselRegion.addEventListener('pointerenter',()=>skillsHover=true);skillCarouselRegion.addEventListener('pointerleave',()=>skillsHover=false);
skillCarouselRegion.addEventListener('focusin',()=>skillsFocus=true);skillCarouselRegion.addEventListener('focusout',event=>{skillsFocus=skillCarouselRegion.contains(event.relatedTarget)});
skillsControls.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveSkills(event.key==='ArrowLeft'?1:-1,true)}});
let skillsTouch=null;skillsStage.addEventListener('touchstart',event=>{skillsTouch=event.touches[0].clientX},{passive:true});skillsStage.addEventListener('touchend',event=>{if(skillsTouch!==null){const delta=event.changedTouches[0].clientX-skillsTouch;if(Math.abs(delta)>55)moveSkills(delta<0?1:-1,true);skillsTouch=null}},{passive:true});
new IntersectionObserver(entries=>{skillsInView=entries[0].isIntersecting},{threshold:.15}).observe(skillsStage);
setInterval(()=>{if(skillsAuto&&skillsInView&&!skillsHover&&!skillsFocus&&!document.hidden&&!dialog.open)moveSkills(1)},4000);
reducedMotion.addEventListener('change',event=>{if(event.matches){skillsAuto=false;renderSkills()}});
skillCards.forEach(card=>{card.classList.remove('reveal');card.classList.add('revealed')});renderSkills();
