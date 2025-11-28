import axios from "axios";
// Import the type from your types folder as BlogType
import type { Blog as BlogType } from "../types";


const BASE_URL = "https://technacallcanadabackend-production.up.railway.app/api";

export const fetchBlogs = async (): Promise<BlogType[]> => { // ✅ return type Blog[]
  try {
    const res = await axios.get(`${BASE_URL}/blogs?page=1&limit=50&publishedOnly=false`);
    const data = res?.data?.data?.blogs ?? [];
    return data;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return []; 
  }
};

