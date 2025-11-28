export type BlogImage = {
  id: string;
  blogId: string;
  imageUrl: string;
  createdAt: string;
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  images: BlogImage[]; 
  published: boolean;
  createdAt: string;
};
