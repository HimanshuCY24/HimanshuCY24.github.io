document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("terminal-command");
    const output = document.getElementById("terminal-output");

    if (!input || !output) return;

    const commands = {

        help: `
Available Commands

about
skills
projects
education
experience
certifications
resume
contact
clear
`,

        about: `
Hi, I'm Himanshu Kumar Singh.

Cybersecurity student passionate about
Blue Team operations,
Network Security,
Python Automation,
Linux,
and Threat Detection.
`,

        skills: `
Programming:
Python
Java
C++
Bash

Security:
Nmap
Wireshark
Burp Suite
OpenVAS
Wazuh
Splunk
Linux
`,

        projects: `
• Wireless Protocol Fuzzing

• USB Malware Detection

• Security Log Analyzer

• Vulnerability Assessment Lab
`,

        education: `
B.Tech Computer Science (Cyber Security)

Oriental College of Technology

Expected Graduation:
2027
`,

        experience: `
Hackveda Internship

SkillCraft Internship

Cyber Security Labs
`,

        certifications: `
Oracle Cloud

Blue Team Junior Analyst

Ethical Hacker

NPTEL

IBM SkillsBuild
`,

        resume: `
Resume Download

assets/resume.pdf
`,

        contact: `
Email

himanshukumarsingh259@gmail.com

GitHub

github.com/HimanshuCY24

LinkedIn

linkedin.com/in/himanshu-kumar-singh-b7b6a228a
`

    };

    input.addEventListener("keydown", function(e){

        if(e.key !== "Enter") return;

        const cmd = input.value.trim().toLowerCase();

        output.innerHTML += `<p><span class="command">visitor@portfolio:~$</span> ${cmd}</p>`;

        if(cmd === "clear"){

            output.innerHTML = "";

        }

        else if(commands[cmd]){

            output.innerHTML += `<pre>${commands[cmd]}</pre>`;

        }

        else{

            output.innerHTML += `<p>Command not found. Type 'help'.</p>`;

        }

        output.scrollTop = output.scrollHeight;

        input.value = "";

    });

});