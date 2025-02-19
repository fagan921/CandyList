export interface Candidate {
    login: string; // GitHub username
    name: string; // Full name of the user
    location: string | null; // User's location (can be null)
    avatar_url: string; // URL to the profile picture
    email: string | null; // Email (can be null if not public)
    html_url: string; // Link to GitHub profile
    company: string | null; // Company (can be null)
  }
  