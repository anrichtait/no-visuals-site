export const blogInfo = {
  name: "No Visuals Weekly",
  description: "Get weekly insights on web design that converts. Join other business owners who are turning their websites into lead-generating machines.",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

const blogPosts: BlogPost[] = [
  {
    title: "Why I Migrated Our Agency to SvelteKit & Rust",
    description: "As a web developer and agency owner, I made the difficult choice to switch our tech stack from Jekyll to SvelteKit with a touch of Rust—here’s why it was worth it.",
    link: "/blog/why_i_migrated_our_agency_to_svelte",
    date: "2025-11-11",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
