const certificates=[
['MU','Excel Skills for Business: Intermediate I','Macquarie University / Coursera','2026'],
['GC','Feature Engineering for Machine Learning','Google Cloud / Coursera','2026'],
['IBM','Introduction to Artificial Intelligence (AI)','IBM / Coursera · النتيجة: 100%','2026'],
['IBM','What is Data Science?','IBM / Coursera · النتيجة: 97.5%','2026'],
['AL','Diploma in Maritime Logistics','Alison · 33 ساعة · النتيجة: 90%','2026'],
['UM','Applied Machine Learning in Python','University of Michigan / Coursera','2026'],
['IBM','Data Science Methodology','IBM / Coursera','2026'],
['CC','Learn the Command Line','Codecademy','2026'],
['IBM','Data Analysis with Python','IBM CognitiveClass.ai','2025'],
['AWS','AWS Academy Cloud Foundations','Amazon Web Services','2025'],
['AL','Master Microsoft Power BI','Alison','2025']
];
const list=document.getElementById('cert-list');
certificates.forEach(([initial,title,issuer,year])=>{const row=document.createElement('article');row.className='cert-row';const icon=document.createElement('span');icon.className='cert-icon';icon.setAttribute('aria-hidden','true');icon.textContent=initial;const body=document.createElement('div');const heading=document.createElement('h3');heading.textContent=title;const meta=document.createElement('p');meta.textContent=issuer;body.append(heading,meta);const time=document.createElement('time');time.dateTime=year;time.textContent=year;row.append(icon,body,time);list.append(row)});
