// Connect skills to the actual projects, without inventing project data.
const skillLinks=make('div',{className:'skill-project-links'});
skillLinks.setAttribute('role','group');skillLinks.setAttribute('aria-label','استكشف المشاريع حسب المهارة');
[['Power BI',1],['DAX',1],['Python',2],['Scikit-learn',2],['ARENA',3]].forEach(([label,index])=>{const button=make('button',{type:'button',textContent:label+' ↗'});button.addEventListener('click',()=>{filterBar.children[index].click();document.getElementById('projects').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});filterBar.children[index].focus({preventScroll:true})});skillLinks.append(button)});
document.querySelector('.skills').append(make('p',{className:'skills-hint',textContent:'اختر مهارة لاستكشاف المشاريع المرتبطة بها.'}),skillLinks);
let activeProject=0;
const projectNav=make('div',{className:'project-navigation'});const previous=make('button',{type:'button',textContent:'→ السابق'});const next=make('button',{type:'button',textContent:'التالي ←'});const position=make('span');position.setAttribute('aria-live','polite');projectNav.append(previous,position,next);dialog.append(projectNav);
const triggers=projectCards.map(card=>card.querySelector('.project-open'));
function updateProjectPosition(){position.textContent=`${activeProject+1} / ${triggers.length}`;previous.disabled=activeProject===0;next.disabled=activeProject===triggers.length-1}
triggers.forEach((trigger,index)=>trigger.addEventListener('click',()=>{activeProject=index;updateProjectPosition()}));
function navigateProject(offset){const index=activeProject+offset;if(index<0||index>=triggers.length)return;triggers[index].click();content.scrollIntoView({block:'nearest'});if(document.activeElement.disabled)(offset>0?previous:next).focus()}
previous.addEventListener('click',()=>navigateProject(-1));next.addEventListener('click',()=>navigateProject(1));
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();navigateProject(event.key==='ArrowLeft'?1:-1)}});
const reset=make('button',{className:'reset-search',type:'button',textContent:'إعادة ضبط البحث ↺'});reset.addEventListener('click',()=>{search.value='';year.value='all';filterCertificates();search.focus()});searchTools.append(reset);
const backTop=make('button',{type:'button',className:'back-top',textContent:'↑'});backTop.setAttribute('aria-label','العودة إلى بداية الصفحة');backTop.hidden=true;document.body.append(backTop);backTop.addEventListener('click',()=>{scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});document.querySelector('.brand').focus({preventScroll:true})});addEventListener('scroll',()=>{backTop.hidden=scrollY<600},{passive:true});
// Decorative motion is disabled on touch screens and for reduced motion.
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 document.querySelectorAll('.project,.skill-grid article').forEach(card=>{card.addEventListener('pointermove',event=>{const bounds=card.getBoundingClientRect();card.style.setProperty('--pointer-x',`${event.clientX-bounds.left}px`);card.style.setProperty('--pointer-y',`${event.clientY-bounds.top}px`);card.classList.add('pointer-active')});card.addEventListener('pointerleave',()=>card.classList.remove('pointer-active'))});
}
