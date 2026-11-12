import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, DEVELOPING_CAPABILITIES, ACTIVITIES_DATA } from '../data/portfolioData';

export const downloadFile = (filename: string, content: string, mimeType: string = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const generateResumeMarkdown = (): string => {
  return `# ${PERSONAL_INFO.name}
**Aspiring AI Engineer | Python Developer | Web Development Enthusiast**

- **Email:** ${PERSONAL_INFO.email}
- **LinkedIn:** ${PERSONAL_INFO.linkedin}
- **GitHub:** ${PERSONAL_INFO.github}
- **Institution:** ${PERSONAL_INFO.institution}, Tamil Nadu, India

---

## Professional Summary
${PERSONAL_INFO.bio}

---

## Education
**${EDUCATION_DATA.institution}**  
*${EDUCATION_DATA.degree} in ${EDUCATION_DATA.field}*  
- **Timeline:** ${EDUCATION_DATA.timeline}  
- **Current Standing:** ${EDUCATION_DATA.currentSemester}  
- **Campus:** ${PERSONAL_INFO.institution} (Fransis Block)

### Core Coursework:
${EDUCATION_DATA.coursework.map(c => `- **${c.code} - ${c.title}:** ${c.description}`).join('\n')}

---

## Technical Skills & Competencies
${SKILL_CATEGORIES.map(cat => `### ${cat.title}\n${cat.skills.map(s => `- **${s.name}** (${s.level}): ${s.description}`).join('\n')}`).join('\n\n')}

---

## Developing Practical Capabilities
${DEVELOPING_CAPABILITIES.map(cap => `### ${cap.number}. ${cap.title}\n${cap.description}\n- **Focus Areas:** ${cap.focusAreas.join(', ')}\n- **Tools:** ${cap.toolsUsed.join(', ')}`).join('\n\n')}

---

## Practical Activities & Exploration
${ACTIVITIES_DATA.map(act => `### ${act.title} (${act.period})\n*${act.type}*\n${act.description}\n${act.highlights.map(h => `- ${h}`).join('\n')}`).join('\n\n')}

---
*Generated from official portfolio of ${PERSONAL_INFO.name}*
`;
};

export const generateResumeHTML = (): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${PERSONAL_INFO.name} - Resume</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 820px; margin: 40px auto; padding: 0 20px; }
    h1 { color: #0f172a; margin-bottom: 4px; font-size: 28px; }
    .subtitle { color: #2563eb; font-weight: 600; font-size: 16px; margin-bottom: 12px; }
    .contact-bar { display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px; color: #64748b; border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px; }
    .contact-bar a { color: #2563eb; text-decoration: none; }
    h2 { color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 24px; font-size: 18px; text-transform: uppercase; letter-spacing: 0.5px; }
    h3 { font-size: 15px; margin: 12px 0 4px; color: #0f172a; }
    p { margin: 6px 0; font-size: 14px; }
    ul { margin: 6px 0 16px 20px; padding: 0; font-size: 13.5px; }
    li { margin-bottom: 4px; }
    .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
    @media print { body { margin: 20px auto; } }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.name}</h1>
  <div class="subtitle">Aspiring AI Engineer · Python Developer · Web Development Enthusiast</div>
  <div class="contact-bar">
    <span>Email: <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a></span>
    <span>GitHub: <a href="${PERSONAL_INFO.github}">github.com/prathapsingh27</a></span>
    <span>LinkedIn: <a href="${PERSONAL_INFO.linkedin}">linkedin.com/in/prathap-singh</a></span>
    <span>Campus: Joy University (Fransis Block)</span>
  </div>

  <h2>About & Objective</h2>
  <p>${PERSONAL_INFO.bio}</p>

  <h2>Education</h2>
  <h3>${EDUCATION_DATA.institution} — ${EDUCATION_DATA.degree}</h3>
  <p><strong>Department:</strong> ${EDUCATION_DATA.field} | <span class="badge">${EDUCATION_DATA.currentSemester}</span> | Timeline: ${EDUCATION_DATA.timeline}</p>
  <p>${EDUCATION_DATA.overview}</p>
  <ul>
    ${EDUCATION_DATA.coursework.map(c => `<li><strong>${c.code} (${c.title}):</strong> ${c.description}</li>`).join('')}
  </ul>

  <h2>Technical Skills</h2>
  <ul>
    ${SKILL_CATEGORIES.map(cat => `<li><strong>${cat.title}:</strong> ${cat.skills.map(s => `${s.name} (${s.level})`).join(', ')}</li>`).join('')}
  </ul>

  <h2>Activities & Exploration</h2>
  ${ACTIVITIES_DATA.map(act => `
    <h3>${act.title} <span style="font-weight:normal; font-size:12px; color:#64748b;">· ${act.period}</span></h3>
    <p>${act.description}</p>
    <ul>
      ${act.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>
  `).join('')}
</body>
</html>`;
};

export const generateProfileJSON = (): string => {
  return JSON.stringify(
    {
      personalInfo: PERSONAL_INFO,
      education: EDUCATION_DATA,
      skills: SKILL_CATEGORIES,
      developingCapabilities: DEVELOPING_CAPABILITIES,
      activities: ACTIVITIES_DATA,
      exportedAt: new Date().toISOString(),
    },
    null,
    2
  );
};
