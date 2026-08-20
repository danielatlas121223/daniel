const translations = {
  ku: {
    // Navigation
    nav_home: "سەرەتا",
    nav_about: "دەربارە",
    nav_skills: "توانستەکان",
    nav_experience: "ئەزموون",
    nav_terminal: "کۆد بۆکس",
    nav_languages: "زمانەکان",
    nav_contact: "پەیوەندی",
    nav_cv_btn: "داگرتنی CV",
    theme_toggle_dark: "تاریک & مۆر",
    theme_toggle_light: "رووناک & مۆر",

    // Hero Section
    hero_greeting: "سڵاو لە هەمووان، من",
    hero_name: "دانیاڵ بەختیار",
    hero_title: "گەشەپێدەری وێب & پسپۆڕی ئایتی و تەکنەلۆژیا",
    hero_tagline: "پرۆگرامەرێکی خولیامەند کە خاوەنی ٢ ساڵ ئەزموونی مەیدانی و پراکتیکییە لە بواری چاککردنەوەی کۆمپیوتەر، سکریپتینگی Lua، چارەسەری کێشەکانی OS و بەڕێوەبردنی داتا.",
    btn_download_cv: "داگرتنی CV (PDF)",
    btn_contact_me: "پەیوەندیم پێوەبکە",
    btn_whatsapp: "نامەی راستەوخۆی واتسئەپ",
    stat_exp: "ساڵ ئەزموونی کاری",
    stat_lua: "شارەزایی سکریپتینگ",
    stat_support: "پشتیوانی بەردەوام",

    // Terminal / Code Box
    code_box_title: "interactive-terminal ~ daniel-dev",
    code_tab_lua: "daniel.lua",
    code_tab_js: "skills.js",
    code_tab_json: "profile.json",
    btn_run_code: "ئەنجامدانی کۆد",
    btn_copy_code: "کۆپیکردنی کۆد",
    code_output_title: "دەرەنجامی کۆنسۆڵ:",

    // Quick Info Card
    info_title: "زانیاری خێرا",
    info_location_label: "شوێن",
    info_location_val: "سلێمانی، سەرچنار",
    info_phone_label: "مۆبایل",
    info_phone_val: "0776 151 7942",
    info_email_label: "ئیمەیڵ",
    info_email_val: "snowdanial483@gmail.com",
    info_dob_label: "بەرواری لەدایکبوون / تەمەن",
    info_dob_val: "18 / 12 / 2008",
    info_status_label: "دۆخی کار",
    info_status_val: "ئامادەیە بۆ پڕۆژەی نوێ",

    // Section Titles & Subtitles
    skills_title: "توانست و تەکنەلۆژیاکان",
    skills_subtitle: "تێکەڵەیەکی بێوێنە لە کۆدکردنی وێب، سکریپتینگی سیستم و لێهاتوویی پراکتیکی ئایتی",
    prog_skills_heading: "پرۆگرامین & سکریپتینگ",
    tech_skills_heading: "شارەزایی تەکنیکی و کارگێڕی IT",

    // Programming Skills labels
    skill_lua_title: "Lua Scripting",
    skill_lua_desc: "شارەزایی تەواو / ئاستی پێشکەوتوو لە دروستکردنی لۆجیک و سیستەم",
    skill_htmlcss_title: "HTML5 & CSS3",
    skill_htmlcss_desc: "پێکهاتەی وێبی مۆدێرن، ڕێکوپێکی و دیزاینی Responsive",
    skill_js_title: "JavaScript",
    skill_js_desc: "کارلێکی دینامیکی، مانیپولەیشنی DOM و ئەپڵیکەیشنی وێب",
    skill_cs_cpp_title: "C# & C++",
    skill_cs_cpp_desc: "بنەماکانی لۆجیکی پرۆگرامین و بیرۆکەی سیستەمەکان",
    skill_react_title: "React.js",
    skill_react_desc: "ئاشنا بە بنەماکان و بەردەوام لە فێربوون و گەشەپێدان",

    // Technical Skills Badges
    badge_data_entry: "تۆمارکردنی داتا و تایپکردنی خێرا",
    badge_data_entry_desc: "تایپکردنی خێرا و تۆمارکردنی زانیاری و پسوولەی فرۆشتن بەوپەڕی وریاییەوە",
    badge_excel_word: "مایکرۆسۆفت ئێکسڵ و وۆرد",
    badge_excel_word_desc: "ڕێکخستنی خشتەکان، فۆرمولا بنەڕەتییەکان و ئامادەکردنی راپۆرتەکان",
    badge_hardware: "پشکنین و بەستنی پارچەکانی کۆمپیوتەر",
    badge_hardware_desc: "دیاریکردنی کێشەی هاردوێر، پاککردنەوە و کۆکردنەوەی کەیسی تایبەت",
    badge_windows: "دابەزاندنی ویندۆز و چارەسەری کێشەکان",
    badge_windows_desc: "فۆرماتکردنی کامل، دابەزاندنی درایڤەرەکان و چارەسەری هەڵەکانی OS",
    badge_customer: "خزمەتگوزاری بەشداربووان و پشتیوانی تەکنیکی",
    badge_customer_desc: "ڕێنماییکردنی کڕیاران بۆ هەڵبژاردنی باشترین پارچە و چارەسەری پێداویستییەکانیان",

    // Experience Section
    exp_title: "ئەزموونی کاری",
    exp_subtitle: "ئەزموونی مەیدانی لە فرۆشگای کۆمپیوتەر و ناوەندی خزمەتگوزاری تەکنیکی",
    exp_role: "تەکنیکاری IT و پسپۆڕی تۆمارکردنی داتا",
    exp_company: "فرۆشگای کۆمپیوتەر و تەکنەلۆژیا (Computer Shop)",
    exp_period: "٢ ساڵ ئەزموونی بەردەوام",
    exp_location: "سلێمانی، عێراق",
    exp_resp_1: "تۆمارکردنی خێرا و بێهەڵەی داتای فرۆشتن، کاڵاکان، مەخزەن و دەرکردنی پسوولە.",
    exp_resp_2: "فۆرماتکردنی تەواوەتی سیستەمی ویندۆز، دابەزاندنی پرۆگرامە پێویستەکان و چارەسەری کێشەی کڕیاران.",
    exp_resp_3: "بەرزکردنەوەی توانای ئامێرەکان (Upgrade)، پاککردنەوەی پیشەیی و پێشنیارکردنی باشترین پارچە بۆ کڕیاران.",

    // Languages Section
    lang_title: "زمانەکان",
    lang_subtitle: "ئاستی پەیوەندیکردن و بەکارهێنانی زمانە جیاوازەکان",
    lang_kurdish: "کوردی (سۆرانی)",
    lang_kurdish_level: "زمانی دایکی / زۆر پاراو (Native)",
    lang_english: "ئینگلیزی",
    lang_english_level: "شارەزا لە زاراوەی تەکنیکی و پرۆگرامینگ (Proficient)",
    lang_arabic: "عەرەبی",
    lang_arabic_level: "ئاستی سەرەتایی / گفتوگۆی بنەڕەتی (Conversational)",

    // Contact Section
    contact_title: "پەیوەندیم پێوەبکە",
    contact_subtitle: "ئامادەم بۆ پڕۆژەی نوێ، هەلی کاری ئایتی یان هەر پرسیارێکی تەکنیکی",
    form_name_label: "ناوی تەواو",
    form_name_ph: "ناوەکەت لێرە بنووسە...",
    form_email_label: "ئیمەیڵ",
    form_email_ph: "ئیمەیڵەکەت بنووسە...",
    form_subject_label: "بابەت",
    form_subject_ph: "بابەتی پەیامەکەت...",
    form_message_label: "پەیام",
    form_message_ph: "پەیامەکەت لێرە بنووسە...",
    btn_send_msg: "ناردنی پەیام",
    direct_chat_heading: "پەیوەندی خێرا و ڕاستەوخۆ",
    direct_chat_desc: "دەتوانیت لە ڕێگەی واتسئەپ یان پەیوەندی تەلەفۆنی ڕاستەوخۆ پەیوەندیم پێوە بکەیت:",
    direct_phone_label: "ژمارەی مۆبایل:",
    direct_email_label: "ئیمەیڵی فەرمی:",
    direct_loc_label: "ناونیشان:",

    // CV Modal / Print
    cv_modal_title: "پوختەی ژیاننامە (CV Preview)",
    cv_btn_print: "چاپکردن / پاشەکەوت وەک PDF",
    cv_btn_close: "داخستن",

    // Alerts / Feedback
    copied_text: "کۆپی کرا!",
    msg_sent_success: "سوپاس! پەیامەکەت ئامادەکرا بۆ ناردن.",

    // Footer
    footer_text: "هەموو مافەکان پارێزراون بۆ دانیاڵ بەختیار ©",
    footer_designed: "دیزاین کراوە بە نوێترین ستانداردەکانی مۆدێرن وێب"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_terminal: "Code Box",
    nav_languages: "Languages",
    nav_contact: "Contact",
    nav_cv_btn: "Download CV",
    theme_toggle_dark: "Dark Purple",
    theme_toggle_light: "White Purple",

    // Hero Section
    hero_greeting: "Hello everyone, I'm",
    hero_name: "Daniel Bakhtiar",
    hero_title: "Web Developer & Tech / IT Specialist",
    hero_tagline: "Passionate developer with 2 years of hands-on computer repair, advanced Lua scripting, IT troubleshooting, and data management expertise.",
    btn_download_cv: "Download CV (PDF)",
    btn_contact_me: "Contact Me",
    btn_whatsapp: "Direct WhatsApp Chat",
    stat_exp: "Years Experience",
    stat_lua: "Lua Scripting Mastery",
    stat_support: "Always Available",

    // Terminal / Code Box
    code_box_title: "interactive-terminal ~ daniel-dev",
    code_tab_lua: "daniel.lua",
    code_tab_js: "skills.js",
    code_tab_json: "profile.json",
    btn_run_code: "Run Code",
    btn_copy_code: "Copy Code",
    code_output_title: "Console Output:",

    // Quick Info Card
    info_title: "Quick Information",
    info_location_label: "Location",
    info_location_val: "Slemani, Sarchnar",
    info_phone_label: "Phone",
    info_phone_val: "0776 151 7942",
    info_email_label: "Email",
    info_email_val: "snowdanial483@gmail.com",
    info_dob_label: "Date of Birth / Age",
    info_dob_val: "18 / 12 / 2008",
    info_status_label: "Availability",
    info_status_val: "Open to Work & Projects",

    // Section Titles & Subtitles
    skills_title: "Skills & Tech Stack",
    skills_subtitle: "A strong blend of web coding, software scripting, and hands-on operational IT expertise",
    prog_skills_heading: "Programming & Scripting",
    tech_skills_heading: "Technical & Operational IT",

    // Programming Skills labels
    skill_lua_title: "Lua Scripting",
    skill_lua_desc: "Advanced / Fully skilled in creating system logic and scripts",
    skill_htmlcss_title: "HTML5 & CSS3",
    skill_htmlcss_desc: "Modern layouts, responsive design, and clean web architecture",
    skill_js_title: "JavaScript",
    skill_js_desc: "DOM manipulation, interactive web features, and dynamic apps",
    skill_cs_cpp_title: "C# & C++",
    skill_cs_cpp_desc: "Core logic, algorithms, and system programming fundamentals",
    skill_react_title: "React.js",
    skill_react_desc: "Familiar with core concepts and actively expanding expertise",

    // Technical Skills Badges
    badge_data_entry: "Data Entry & Speed Typing",
    badge_data_entry_desc: "Fast and highly accurate inventory tracking, data entry, and sales invoicing",
    badge_excel_word: "Microsoft Excel & Word",
    badge_excel_word_desc: "Spreadsheet management, formula application, and formatted documentation",
    badge_hardware: "PC Hardware Diagnostics & Assembly",
    badge_hardware_desc: "Component-level diagnostics, hardware maintenance, and custom PC builds",
    badge_windows: "Windows OS Installation & Troubleshooting",
    badge_windows_desc: "Complete system formatting, driver installation, and crash/error repairs",
    badge_customer: "Customer Service & Retail IT Support",
    badge_customer_desc: "Guiding clients on hardware upgrades and offering tailored tech solutions",

    // Experience Section
    exp_title: "Work Experience",
    exp_subtitle: "Practical on-site experience in computer maintenance and technical support",
    exp_role: "IT Technician & Data Entry Specialist",
    exp_company: "Computer Shop",
    exp_period: "2 Years Experience",
    exp_location: "Slemani, Iraq",
    exp_resp_1: "Fast and accurate sales/inventory data entry, ledger tracking, and customer invoicing.",
    exp_resp_2: "Complete OS formatting, driver & software setup, and solving system performance issues.",
    exp_resp_3: "Hardware upgrades, deep cleaning, component diagnostics, and custom PC recommendations.",

    // Languages Section
    lang_title: "Languages",
    lang_subtitle: "Communication skills across different languages",
    lang_kurdish: "Kurdish (Sorani)",
    lang_kurdish_level: "Native / Fully Fluent",
    lang_english: "English",
    lang_english_level: "Proficient in Technical & Coding Terminology",
    lang_arabic: "Arabic",
    lang_arabic_level: "Basic / Conversational",

    // Contact Section
    contact_title: "Get In Touch",
    contact_subtitle: "Looking for an IT technician or web developer? Feel free to reach out anytime.",
    form_name_label: "Your Full Name",
    form_name_ph: "Enter your name...",
    form_email_label: "Email Address",
    form_email_ph: "Enter your email address...",
    form_subject_label: "Subject",
    form_subject_ph: "Subject of your message...",
    form_message_label: "Message",
    form_message_ph: "Write your message here...",
    btn_send_msg: "Send Message",
    direct_chat_heading: "Direct Communication",
    direct_chat_desc: "Reach out directly via WhatsApp, phone call, or official email:",
    direct_phone_label: "Phone Number:",
    direct_email_label: "Email Address:",
    direct_loc_label: "Location:",

    // CV Modal / Print
    cv_modal_title: "Curriculum Vitae (CV Preview)",
    cv_btn_print: "Print / Save as PDF",
    cv_btn_close: "Close",

    // Alerts / Feedback
    copied_text: "Copied!",
    msg_sent_success: "Thank you! Your message client has been prepared.",

    // Footer
    footer_text: "All Rights Reserved. Daniel Bakhtiar ©",
    footer_designed: "Crafted with modern web technologies & ultra-clean aesthetics"
  }
};
