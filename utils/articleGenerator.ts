// utils/articleGenerator.ts

/**
 * ARTICLE GENERATION TEMPLATE
 * Use this structure for generating all 200 articles
 * This ensures consistency across all batches
 */

export interface ArticleTemplate {
  // METADATA
  id: number;
  postDate: string;
  
  // SEO
  seoTitle: string; // Max 60 chars
  metaDescription: string; // Max 155 chars
  primaryKeyword: string;
  lsiKeywords: string[]; // 3-5 related keywords
  
  // CONTENT STRUCTURE
  problemStatement: string;
  solution: string;
  tone: string;
  category: 'AI Jobs' | 'Remote Jobs' | 'Job Search Strategy';
  
  // CONTENT SECTIONS
  sections: {
    title: string; // H1
    headline: string; // Hook/Opening
    subheadings: Array<{
      title: string; // H2 or H3
      content: string;
      proTip?: string;
      realWorldExample?: string;
    }>;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
    checklist?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  };
  
  // CTA & CLOSING
  callToAction: string;
  additionalResources?: string[];
  authorBio: string;
  
  status: 'draft' | 'scheduled' | 'published';
}

/**
 * ARTICLE GENERATION STRUCTURE (1,500-2,000 words)
 * 
 * OPENING (150-200 words):
 * - Attention Hook
 * - Problem Statement
 * - Direct Answer/Promise
 * 
 * MAIN CONTENT (1,000-1,300 words):
 * - Section 1 (H2): Context/Background
 *   - Explanation with real examples
 *   - Pro-Tip with actionable advice
 *   - Real-World Example (person's story)
 * 
 * - Section 2 (H2): Deep Dive
 *   - Multiple H3 subsections
 *   - Each H3: Concept + Example + Pro-Tip
 *   - Include at least one Table or Checklist
 * 
 * - Section 3 (H2): Practical Application
 *   - Step-by-step guide
 *   - Real-World Example
 *   - Common Mistakes to Avoid
 * 
 * - Section 4 (H2): FAQ or Expert Insights
 *   - 4-6 questions
 *   - Short, direct answers
 * 
 * CLOSING (150-200 words):
 * - Key Takeaways
 * - Strong CTA to MilegaJob
 * - Author Bio
 */

// SAMPLE ARTICLE OUTLINE (for reference)
export const SAMPLE_ARTICLE_STRUCTURE = {
  opening: {
    hook: "Start with a surprising statistic or relatable problem",
    problemStatement: "Clearly state the fresher's pain point",
    directAnswer: "Give the answer in the first paragraph (for Featured Snippet)",
    exampleTeaser: "Mention a real person's success to build credibility"
  },
  
  mainContent: {
    section1: {
      h2Title: "Background/Context (Why This Matters)",
      subsections: [
        {
          h3Title: "Specific Aspect 1",
          content: "200-300 words explaining the concept",
          proTip: "Actionable tip (italicized)",
          example: "Real example of someone who did it right"
        }
      ]
    },
    
    section2: {
      h2Title: "Deep Dive (Main Content)",
      subsections: [
        {
          h3Title: "Type 1: Description",
          content: "Detailed explanation",
          proTip: "Practical tip",
          example: "Real case or person"
        },
        {
          h3Title: "Type 2: Description",
          content: "Different angle",
          proTip: "Different tip",
          example: "Different example"
        }
      ],
      table: {
        purpose: "Compare options or show data",
        headers: ["Option", "Pros", "Cons", "Best For"],
        sampleRows: [
          ["Option A", "Pro1", "Con1", "Scenario1"],
          ["Option B", "Pro2", "Con2", "Scenario2"]
        ]
      }
    },
    
    section3: {
      h2Title: "How to Get Started (Practical Steps)",
      subsections: [
        {
          h3Title: "Step 1: First Action",
          content: "What to do and why"
        },
        {
          h3Title: "Step 2: Second Action",
          content: "Building on first step"
        }
      ],
      checklist: ["Item 1", "Item 2", "Item 3"]
    },
    
    section4: {
      h2Title: "FAQ / Common Questions",
      faqs: [
        {
          question: "Q1?",
          answer: "Short, direct answer"
        }
      ]
    }
  },
  
  closing: {
    keyTakeaways: ["Point 1", "Point 2", "Point 3"],
    cta: "Sign up for MilegaJob to bookmark these resources and track your progress",
    authorBio: "3-4 sentence bio with expertise and achievements"
  }
};

/**
 * TONE GUIDELINES BY CATEGORY
 */

export const TONE_GUIDELINES = {
  aiJobs: {
    tone: "Technical yet Encouraging | Expert | Inspiring",
    approach: "Show that AI jobs are accessible, explode myths about needing PhDs",
    examples: "Use real names, specific salaries, actual companies",
    proTips: "Focus on skills-over-credentials",
    template: "Problem: 'I can't understand AI concepts' → Solution: 'AI fundamentals are learnable'"
  },
  
  remoteJobs: {
    tone: "Practical | Adventurous | Real",
    approach: "Admit challenges but show solutions, manage expectations honestly",
    examples: "Include lifestyle aspects, cost of living, actual income ranges",
    proTips: "Focus on setup, tools, work-life balance",
    template: "Problem: 'I want to work remotely but it seems unrealistic' → Solution: 'Here's how 1000s are doing it'"
  },
  
  jobSearch: {
    tone: "Mentoring | Strategic | Empowering",
    approach: "Address anxiety and imposter syndrome, provide specific formulas",
    examples: "Script conversations, show decision trees, provide templates",
    proTips: "Focus on psychology of hiring, confidence building",
    template: "Problem: 'I'm afraid to...' → Solution: 'Here's exactly how to...'"
  }
};

/**
 * KEYWORD RESEARCH FORMULA
 * Prevents cannibalization
 */

export const KEYWORD_SELECTION_RULES = {
  rule1: "Each article = 1 unique primary keyword (never repeat)",
  rule2: "LSI keywords should not appear in other articles' primary keywords",
  rule3: "Semantic separation: Don't write 'AI Jobs' and 'Machine Learning Jobs' in same batch",
  rule4: "Long-tail focus: More specific = less competition = easier to rank",
  rule5: "Voice search: Include conversational keywords ('How to', 'Best way to', etc.)",
  rule6: "Location-based when relevant: 'Remote jobs India', 'Digital nomad visa for Indians'",
  rule7: "Salary-based keywords perform well: Include salary expectations in keyword",
  example: "Instead of broad 'AI Jobs', use 'Prompt Engineering Jobs for Freshers in India 2025'"
};

/**
 * REAL-WORLD EXAMPLE CHECKLIST
 * Each article needs 2-3 realistic examples
 */

export const EXAMPLE_CHECKLIST = {
  requirement1: "Use REAL names (or realistic Indian names for authenticity)",
  requirement2: "Include realistic salary numbers (based on 2025 market)",
  requirement3: "Mention actual companies or platforms (LinkedIn, Upwork, etc.)",
  requirement4: "Show the person's journey: Before → Action → Result",
  requirement5: "Include a quote from the person (makes it more real)",
  requirement6: "Specify location: 'Priya from Bangalore' (builds relatability)",
  requirement7: "Realistic timeline: 'took 4 months' (not 2 weeks overnight)",
  
  samplePerson: {
    name: "Rohit",
    initial: "I can't find remote work as a fresher",
    actions: [
      "Built a portfolio on GitHub",
      "Posted on Twitter/LinkedIn",
      "Applied to 50 positions",
      "Got interviews after 3 months",
      "Landed a ₹18,000/month role"
    ],
    quote: "'I thought remote jobs were only for experienced people, but I proved myself wrong.'",
    location: "Hyderabad",
    finalSalary: "₹18,000/month"
  }
};

/**
 * FEATURED SNIPPET OPTIMIZATION
 * Answer the main keyword in the first 40 words
 */

export const FEATURED_SNIPPET_FORMULA = {
  step1: "Identify the question your keyword answers",
  step2: "Answer it directly in opening paragraph (40-60 words max)",
  step3: "Start with the core answer, then elaborate",
  step4: "Use numbered lists or bullets after the answer",
  step5: "Include a table if comparing options",
  
  example: {
    keyword: "How to land a remote job as a fresher",
    snippet: "To land a remote job as a fresher: (1) Build a portfolio of 3-5 projects, (2) Create a strong LinkedIn profile, (3) Apply to 10-20 remote-friendly companies weekly, (4) Network with remote workers online. Most freshers land their first remote role within 3-6 months with consistent effort.",
    type: "List + Definition Combo"
  }
};

/**
 * INTERNAL LINKING STRATEGY
 * How to connect all 200 articles
 */

export const INTERNAL_LINKING_STRATEGY = {
  principle: "Link related articles to boost SEO authority",
  
  linking_types: {
    topical: "Link articles about similar topics (e.g., 'Remote Jobs' articles link to each other)",
    supporting: "Link job search articles as support (e.g., LinkedIn article supports all job search articles)",
    progression: "Create progression (Beginner → Intermediate → Advanced)",
    alternative: "Link alternatives (e.g., Graphic Design article links to UI/UX article)"
  },
  
  example: {
    article: "Remote Graphic Design Jobs",
    links: [
      { text: "Related: Remote Tech Support Jobs", type: "Sibling" },
      { text: "Learn: LinkedIn Profile Optimization", type: "Supporting" },
      { text: "Also See: Portfolio Building Guide", type: "Progression" },
      { text: "Alternative: Remote UI/UX Designer", type: "Alternative" }
    ]
  },
  
  target: "Each article: 3-5 internal links (not more to avoid over-optimization)"
};

/**
 * ARTICLE QUALITY CHECKLIST
 * Use this before publishing
 */

export const QUALITY_CHECKLIST = [
  "[ ] SEO title is catchy + includes keyword (max 60 chars)",
  "[ ] Meta description compelling (max 155 chars, includes keyword)",
  "[ ] First paragraph answers the main question",
  "[ ] Includes at least one table or checklist",
  "[ ] Includes 2-3 real-world examples with specific names",
  "[ ] Includes at least 3 'Pro-Tips' (italicized)",
  "[ ] Includes at least 4 FAQ questions",
  "[ ] Word count: 1,500-2,000 words",
  "[ ] Salary expectations mentioned (if relevant)",
  "[ ] Realistic timeline provided",
  "[ ] LSI keywords naturally integrated (not forced)",
  "[ ] Strong call-to-action to MilegaJob at the end",
  "[ ] Author bio included (3-4 sentences)",
  "[ ] No keyword stuffing or over-optimization",
  "[ ] Unique content (not copied from other sites)",
  "[ ] Links to 3-5 related MilegaJob articles",
  "[ ] Professional tone matching category",
  "[ ] Conversational, not robotic"
];

/**
 * BATCH GENERATION CHECKLIST
 * Use this for each batch of 20 articles
 */

export const BATCH_GENERATION_CHECKLIST = {
  preGeneration: [
    "[ ] Keyword research completed (no cannibalization)",
    "[ ] Article outlines finalized",
    "[ ] Examples and data points collected",
    "[ ] LSI keywords approved",
    "[ ] Publishing dates scheduled"
  ],
  
  generation: [
    "[ ] Full articles written (1,500-2,000 words each)",
    "[ ] SEO titles + meta descriptions created",
    "[ ] Real-world examples added",
    "[ ] Tables/checklists included",
    "[ ] Pro-tips written",
    "[ ] FAQ sections completed"
  ],
  
  postGeneration: [
    "[ ] All articles spell-checked",
    "[ ] SEO optimized (keyword density 0.5-1.5%)",
    "[ ] Internal links mapped and added",
    "[ ] Author bios written",
    "[ ] Formatting checked (H1, H2, H3 hierarchy)",
    "[ ] Images/thumbnails designed",
    "[ ] Articles submitted to CMS",
    "[ ] Scheduled for publishing",
    "[ ] Social media promotion planned"
  ]
};

export default {
  SAMPLE_ARTICLE_STRUCTURE,
  TONE_GUIDELINES,
  KEYWORD_SELECTION_RULES,
  EXAMPLE_CHECKLIST,
  FEATURED_SNIPPET_FORMULA,
  INTERNAL_LINKING_STRATEGY,
  QUALITY_CHECKLIST,
  BATCH_GENERATION_CHECKLIST
};
