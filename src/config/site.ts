import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Lifestyle Lab - Modern Living Simplified",
  description:
    "Contemporary lifestyle trends, home design, and life improvement tips.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "SEO Analysis & Optimization",
    slug: "seo-optimization",
    tools: [
      {
        title: "Website Security Check",
        desc: "Scan your website for vulnerabilities to enhance security.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "Meta Tag Optimization",
        desc: "Analyze and optimize meta tags for better SEO results.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Index Status Checker",
        desc: "Check if your site is indexed by Google.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Google Cache Inspector",
        desc: "View cached versions of your site as stored by Google.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Redirect Path Checker",
        desc: "Verify the redirection path to ensure SEO integrity.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Backlink Builder",
        desc: "Generate backlinks to improve your site’s search ranking.",
        href: "https://tools360s.com/backlink-maker",
      },
    ],
  },
  {
    title: "General Utility Tools",
    slug: "general-utilities",
    tools: [
      {
        title: "Public IP Finder",
        desc: "Get your public IP address for network troubleshooting.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Code Formatter",
        desc: "Format code for HTML, CSS, JavaScript, and JSON.",
        href: "https://tools360s.com/code-formatter",
      },
      {
        title: "Browser Update Validator",
        desc: "Ensure your browser is up-to-date for security and performance.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Password Generator",
        desc: "Create strong, secure passwords for online accounts.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Invoice Creator",
        desc: "Generate professional invoices for business transactions.",
        href: "https://tools360s.com/invoice-generator",
      },
    ],
  },
  {
    title: "Image Tools",
    slug: "image-utilities",
    tools: [
      {
        title: "Image Compression Tool",
        desc: "Compress images for faster load times.",
        href: "https://review360.info",
      },
      {
        title: "Image Format Converter",
        desc: "Convert image formats to suit your needs.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Watermark Adder",
        desc: "Add watermarks to images for brand protection.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Image Crop Tool",
        desc: "Crop images to your preferred dimensions.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Cloud Image Uploader",
        desc: "Upload images to the cloud for easy access.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Image Resizer",
        desc: "Resize images to fit your specific requirements.",
        href: "https://review360.info/image-resizer",
      },
    ],
  },
  {
    title: "Text Processing Tools",
    slug: "text-processing",
    tools: [
      {
        title: "Text Comparison",
        desc: "Compare texts to spot differences for analysis.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Counter",
        desc: "Count words and characters in any text document.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "URL Tools",
    slug: "url-tools",
    tools: [
      {
        title: "Link Shortener",
        desc: "Turn long URLs into short, shareable links.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "QR Code Generator",
        desc: "Create QR codes for easy URL sharing.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "URL Analytics",
        desc: "Analyze and track link performance.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
];
