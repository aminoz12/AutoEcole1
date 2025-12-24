// Shared types for the application

// Base Article interface with common properties
export interface BaseArticle {
  id?: string; // Optional for new articles
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  is_published: boolean;
  is_featured: boolean;
  featured_image: string | null;
  published_at?: string; // Optional for new articles
  created_at?: string; // Optional for new articles
}

// Complete Article interface with all properties (for editor)
export interface Article extends BaseArticle {
  content: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
  author_name: string;
}

// Article for management view (with optional properties)
export interface ArticleForManagement extends BaseArticle {
  views_count: number;
}

// Partial Article for flexible conversion
export interface PartialArticle extends Partial<BaseArticle> {
  content?: string;
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  author_name?: string;
}

// Union type for flexibility
export type AnyArticle = Article | ArticleForManagement;